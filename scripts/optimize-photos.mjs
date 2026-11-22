import assert from 'node:assert/strict';
import { mkdir, readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../', import.meta.url));
const originals = path.join(root, 'photos-originals');
const output = path.join(root, 'src/assets/photos');
const quality = 78;

// Only add originals here after reviewing both images of a pair for privacy.
const hero = { original: 'hero.jpg', name: 'hero.webp', maxWidth: 1600 };
const pairs = [
  ['trabajo1-antes.jpg', 'trabajo1-despues.jpg'],
  ['trabajo3-antes.jpg', 'trabajo3-despues.jpg'],
  ['trabajo6-antes.webp', 'trabajo6-despues.webp'],
  ['trabajo8-antes.webp', 'trabajo8-despues.webp'],
];

async function verifyImage(file) {
  const bytes = await readFile(file);
  const metadata = await sharp(bytes).metadata();
  assert.ok(!metadata.exif && !metadata.xmp && !metadata.icc && !metadata.iptc && !metadata.orientation,
    `Unexpected metadata: ${path.relative(root, file)}`);
  if (metadata.format === 'webp') {
    for (let offset = 12; offset + 8 <= bytes.length;) {
      const chunk = bytes.toString('ascii', offset, offset + 4);
      assert.ok(!['EXIF', 'XMP ', 'ICCP'].includes(chunk), `Unexpected ${chunk} chunk: ${file}`);
      const length = bytes.readUInt32LE(offset + 4);
      offset += 8 + length + length % 2;
    }
  }
  if (metadata.format === 'svg') {
    assert.ok(!/<metadata\b|exif:|gps:|rdf:/i.test(bytes.toString()), `SVG metadata: ${file}`);
  }
  return {
    file: path.relative(root, file).replaceAll('\\', '/'),
    width: metadata.width,
    height: metadata.height,
    bytes: bytes.length,
    EXIF: 'absent', GPS: 'absent (no EXIF/XMP)',
    ICC: 'absent', XMP: 'absent', IPTC: 'absent',
  };
}

async function orientedSize(name) {
  const metadata = await sharp(path.join(originals, name)).metadata();
  const swap = [5, 6, 7, 8].includes(metadata.orientation);
  return { width: swap ? metadata.height : metadata.width, height: swap ? metadata.width : metadata.height };
}

async function optimize(original, name, width, height) {
  const target = path.join(output, name);
  // rotate() applies EXIF orientation. Sharp drops metadata unless keep/withMetadata is requested.
  await sharp(path.join(originals, original))
    .rotate()
    .resize({ width, height, fit: 'inside', withoutEnlargement: true })
    .webp({ quality, effort: 6, smartSubsample: true })
    .toFile(target);
  return { original, ...await verifyImage(target) };
}

async function verifyDirectory(directory) {
  const images = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) images.push(...await verifyDirectory(file));
    else if (/\.(?:webp|avif|jpe?g|png|gif|svg)$/i.test(entry.name)) images.push(await verifyImage(file));
  }
  return images;
}

if (process.argv.includes('--verify-dist')) {
  const images = await verifyDirectory(path.join(root, 'dist'));
  assert.ok(images.length > 0, 'No built images found; run npm run build first.');
  console.log(JSON.stringify({ mode: 'verify-dist', images, verifiedImages: images.length, metadata: 'EXIF/GPS/ICC/XMP/IPTC absent' }, null, 2));
} else {
  assert.equal(process.argv.length, 2, 'Usage: node scripts/optimize-photos.mjs [--verify-dist]');
  // Validate the entire selection before overwriting any processed copy. Never crop or stretch a pair.
  const dimensions = [];
  await stat(path.join(originals, hero.original));
  for (const [before, after] of pairs) {
    const a = await orientedSize(before);
    const b = await orientedSize(after);
    assert.equal(a.width * b.height, b.width * a.height, `Aspect ratios differ: ${before}, ${after}`);
    const width = Math.min(1200, a.width, b.width);
    dimensions.push({ width, height: Math.round(width * a.height / a.width) });
  }
  await mkdir(output, { recursive: true });
  const images = [await optimize(hero.original, hero.name, hero.maxWidth)];
  for (const [index, [before, after]] of pairs.entries()) {
    const { width, height } = dimensions[index];
    const a = await optimize(before, `job${index + 1}-before.webp`, width, height);
    const b = await optimize(after, `job${index + 1}-after.webp`, width, height);
    assert.equal(a.width, b.width, `Widths differ for job${index + 1}`);
    assert.equal(a.height, b.height, `Heights differ for job${index + 1}`);
    images.push(a, b);
  }
  console.log(JSON.stringify({ mode: 'optimize', quality, images, totalBytes: images.reduce((sum, image) => sum + image.bytes, 0) }, null, 2));
}
