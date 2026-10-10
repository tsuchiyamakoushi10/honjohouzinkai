// og.jpg（SNSシェア用 1200x630）を public/images/hero.webp から生成するスクリプト。
// メイン画像を差し替えたら再実行する。
// 実行：node scripts/make-images.mjs（文字には Shippori Mincho B1 がPCに入っている必要あり）
import sharp from "sharp";

// OGP画像（1200x630）
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<rect width="1200" height="630" fill="#1f3352"/>
<rect x="40" y="40" width="1120" height="550" fill="none" stroke="#b08d57" stroke-width="3"/>
<text x="600" y="250" font-family="Shippori Mincho B1, serif" font-size="44" fill="#f6f1e7" text-anchor="middle">公益社団法人</text>
<text x="600" y="345" font-family="Shippori Mincho B1, serif" font-size="96" font-weight="700" fill="#f6f1e7" text-anchor="middle">本庄法人会</text>
<rect x="520" y="390" width="160" height="4" fill="#c2452d"/>
<text x="600" y="460" font-family="Shippori Mincho B1, serif" font-size="34" fill="#e8dfcc" text-anchor="middle">税を学び、経営を磨き、地域とつながる。</text>
</svg>`;
const bg = await sharp("public/images/hero.webp").resize(1200, 630, { fit: "cover", position: "centre" }).modulate({ brightness: 0.7 }).toBuffer();
await sharp(bg)
  .composite([{ input: Buffer.from(og.replace('<rect width="1200" height="630" fill="#1f3352"/>', '<rect width="1200" height="630" fill="#1f3352" opacity=".72"/>')) }])
  .jpeg({ quality: 85 })
  .toFile("public/images/og.jpg");
console.log("done");
