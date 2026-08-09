import sharp from "sharp";
import path from "path";

const dir = path.join(process.cwd(), "public", "firms");

const marks = [
  { id: "blackstone", text: "Blackstone", w: 320, size: 42 },
  { id: "kkr", text: "KKR", w: 140, size: 44 },
  { id: "barclays", text: "Barclays", w: 240, size: 42 },
];

for (const { id, text, w, size } of marks) {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="80" viewBox="0 0 ${w} 80">
  <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle"
    font-family="Georgia, 'Times New Roman', Times, serif"
    font-size="${size}" font-weight="600" fill="#0e2942"
    letter-spacing="${id === "kkr" ? "0.12em" : "0.02em"}">${text}</text>
</svg>`;

  await sharp(Buffer.from(svg))
    .trim({ threshold: 5 })
    .resize({ height: 72, fit: "inside", withoutEnlargement: false })
    .png()
    .toFile(path.join(dir, `${id}.png`));

  console.log("WORDMARK PNG", id);
}
