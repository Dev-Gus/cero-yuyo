import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'public/og-cero-yuyo.jpg');
const width = 1200;
const height = 630;
const maxBytes = 300_000;
const originals = ['trabajo1-antes.jpg', 'trabajo1-despues.jpg'];

assert.equal(process.argv.length, 2, 'Usage: node scripts/generate-social-image.mjs');

// The reviewed originals remain private and unchanged. Only this social image is cropped.
const halves = await Promise.all(originals.map((name) => sharp(path.join(root, 'photos-originals', name))
  .rotate()
  .resize(width / 2, height, { fit: 'cover', position: 'centre' })
  .toColourspace('srgb')
  .raw()
  .toBuffer({ resolveWithObject: true })));

const composite = sharp({ create: { width, height, channels: 3, background: '#ffffff' } })
  .composite(halves.map(({ data, info }, index) => ({
    input: data,
    raw: { width: info.width, height: info.height, channels: info.channels },
    left: index * width / 2,
    top: 0,
  })));

let image;
let quality;
for (quality = 88; quality >= 60; quality -= 2) {
  // Baseline JPEG, 4:2:0, sRGB pixels. Sharp strips source metadata by default.
  image = await composite.clone().jpeg({ quality, progressive: false, chromaSubsampling: '4:2:0', mozjpeg: true }).toBuffer();
  if (image.length < maxBytes) break;
}
assert.ok(image.length < maxBytes, 'Social image exceeds 300 KB; no file was written.');
const metadata = await sharp(image).metadata();
assert.equal(metadata.format, 'jpeg');
assert.equal(metadata.width, width);
assert.equal(metadata.height, height);
assert.ok(!metadata.exif && !metadata.xmp && !metadata.icc && !metadata.iptc && !metadata.orientation,
  'Unexpected metadata; no file was written.');
// Reject JPEG comments and APP metadata segments (including EXIF/GPS, ICC, XMP and IPTC).
for (let offset = 2; offset < image.length;) {
  assert.equal(image[offset++], 0xff, 'Invalid JPEG marker.');
  while (image[offset] === 0xff) offset++;
  const marker = image[offset++];
  if (marker === 0xda || marker === 0xd9) break;
  assert.ok(!(marker >= 0xe1 && marker <= 0xef) && marker !== 0xfe, 'Unexpected JPEG metadata segment.');
  offset += image.readUInt16BE(offset);
}

await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, image);
assert.ok(image.equals(await readFile(output)));
console.log(JSON.stringify({
  file: path.relative(root, output).replaceAll('\\', '/'),
  originals, width, height, bytes: image.length, quality,
  layout: 'equal halves, before left, after right; centered cover crops; no text',
  metadata: 'EXIF/GPS/ICC/XMP/IPTC/comments absent',
}, null, 2));
