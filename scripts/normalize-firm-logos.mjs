import sharp from "sharp";
import fs from "fs";
import path from "path";

const NAVY = { r: 14, g: 41, b: 66 }; // #0e2942
const dir = path.join(process.cwd(), "public", "firms");

async function toNavyPng(input, { targetHeight = 64, maxWidth = 280 } = {}) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({
    resolveWithObject: true,
  });

  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = info.channels === 4 ? data[i + 3] : 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    if (a < 20 || lum > 245 || (lum < 18 && max - min < 12)) {
      data[i] = 0;
      data[i + 1] = 0;
      data[i + 2] = 0;
      if (info.channels === 4) data[i + 3] = 0;
      continue;
    }

    const ink =
      lum > 128 ? Math.min(255, (255 - lum) * 1.4) : Math.min(255, 255 - lum);
    data[i] = NAVY.r;
    data[i + 1] = NAVY.g;
    data[i + 2] = NAVY.b;
    if (info.channels === 4) data[i + 3] = Math.max(a, Math.round(ink));
  }

  const trimmed = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: info.channels },
  })
    .trim({ threshold: 10 })
    .png()
    .toBuffer();

  const meta = await sharp(trimmed).metadata();
  const scale = Math.min(
    targetHeight / (meta.height || 1),
    maxWidth / (meta.width || 1),
  );
  const w = Math.max(1, Math.round((meta.width || 1) * scale));
  const h = Math.max(1, Math.round((meta.height || 1) * scale));

  await sharp(trimmed).resize(w, h, { fit: "fill" }).png().toFile(input);
  console.log("OK", path.basename(input), `${w}x${h}`);
}

for (const f of ["blackstone.png", "kkr.png", "barclays.png"]) {
  const p = path.join(dir, f);
  if (fs.existsSync(p)) await toNavyPng(p);
}
