// hero.webp（宿場町のイラスト）と og.jpg を生成するスクリプト。
// 実写の写真が手に入ったら public/images/hero.webp を差し替えるだけでOK。
// 実行：node scripts/make-images.mjs（OG画像の文字には Shippori Mincho B1 がPCに入っている必要あり）
import sharp from "sharp";

const W = 1920, H = 1080;
const ground = 840;

// 町家を1軒描く
function machiya(x, w, h, i) {
  const roofH = 46 + (i % 3) * 6;
  const top = ground - h;
  const wall = i % 4 === 0 ? "#2a2622" : i % 4 === 1 ? "#3a332c" : i % 4 === 2 ? "#4a3f33" : "#332d27";
  const plaster = "#e8dfcc";
  let s = "";
  // 2階（白壁＋虫籠窓）
  s += `<rect x="${x}" y="${top}" width="${w}" height="${h}" fill="${wall}"/>`;
  s += `<rect x="${x + 10}" y="${top + 24}" width="${w - 20}" height="${h * 0.32}" fill="${plaster}" opacity=".9"/>`;
  const mx = x + w * 0.2, mw = w * 0.6, my = top + 36, mh = h * 0.18;
  s += `<rect x="${mx}" y="${my}" width="${mw}" height="${mh}" fill="#1b1814"/>`;
  for (let k = 1; k < 8; k++) s += `<rect x="${mx + (mw / 8) * k - 2}" y="${my}" width="4" height="${mh}" fill="${plaster}"/>`;
  // 大屋根（瓦）
  const ry = top + h * 0.42;
  s += `<path d="M${x - 18} ${ry + roofH} L${x + 8} ${ry} L${x + w - 8} ${ry} L${x + w + 18} ${ry + roofH} Z" fill="#23262d"/>`;
  for (let k = 0; k < w + 36; k += 9) s += `<rect x="${x - 18 + k}" y="${ry + 6}" width="2" height="${roofH - 8}" fill="#3a3f49" opacity=".7"/>`;
  s += `<rect x="${x - 20}" y="${ry + roofH - 6}" width="${w + 40}" height="7" fill="#15171c"/>`;
  // 1階（格子・暖簾・行灯）
  const fy = ry + roofH;
  const fh = ground - fy;
  s += `<rect x="${x + 6}" y="${fy}" width="${w - 12}" height="${fh}" fill="#1a1612"/>`;
  const lx = x + 14, lw = w * 0.45, ly = fy + 12, lh = fh - 24;
  s += `<rect x="${lx}" y="${ly}" width="${lw}" height="${lh}" fill="#f2b45a" opacity=".55"/>`;
  for (let k = 0; k < lw; k += 7) s += `<rect x="${lx + k}" y="${ly}" width="3.5" height="${lh}" fill="#3b2a1a"/>`;
  // 暖簾
  const nx = x + w * 0.55, nw = w * 0.38;
  const nc = i % 3 === 0 ? "#1f3352" : i % 3 === 1 ? "#c2452d" : "#24405f";
  s += `<rect x="${nx}" y="${fy + 8}" width="${nw}" height="${fh * 0.5}" fill="${nc}"/>`;
  s += `<rect x="${nx + nw / 3 - 1.5}" y="${fy + 22}" width="3" height="${fh * 0.5 - 14}" fill="#0e1622" opacity=".6"/>`;
  s += `<rect x="${nx + (2 * nw) / 3 - 1.5}" y="${fy + 22}" width="3" height="${fh * 0.5 - 14}" fill="#0e1622" opacity=".6"/>`;
  s += `<circle cx="${nx + nw / 2}" cy="${fy + 30}" r="9" fill="none" stroke="#f6f1e7" stroke-width="2.5" opacity=".85"/>`;
  s += `<rect x="${nx}" y="${fy + fh * 0.5 + 8}" width="${nw}" height="${fh * 0.5 - 8}" fill="#f6c46e" opacity=".35"/>`;
  // 提灯
  const px = x + w - 10, py = fy + 20;
  s += `<line x1="${px}" y1="${fy}" x2="${px}" y2="${py}" stroke="#111" stroke-width="2"/>`;
  s += `<ellipse cx="${px}" cy="${py + 20}" rx="13" ry="20" fill="#e8552f"/>`;
  s += `<ellipse cx="${px}" cy="${py + 20}" rx="38" ry="38" fill="url(#glow)"/>`;
  return s;
}

let houses = "";
let x = -30, i = 0;
const widths = [210, 250, 190, 270, 230, 200, 260, 220, 240];
while (x < W + 40) {
  const w = widths[i % widths.length];
  const h = 300 + ((i * 37) % 80);
  houses += machiya(x, w, h, i);
  x += w + 6;
  i++;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#141f33"/><stop offset=".45" stop-color="#2c3c5c"/>
    <stop offset=".75" stop-color="#8a6a62"/><stop offset="1" stop-color="#e3a46a"/>
  </linearGradient>
  <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5a4a3a"/><stop offset="1" stop-color="#2a221b"/>
  </linearGradient>
  <radialGradient id="glow"><stop offset="0" stop-color="#ffb35c" stop-opacity=".55"/><stop offset="1" stop-color="#ffb35c" stop-opacity="0"/></radialGradient>
  <radialGradient id="moon"><stop offset="0" stop-color="#fff6df"/><stop offset=".6" stop-color="#fff2d0" stop-opacity=".9"/><stop offset="1" stop-color="#fff2d0" stop-opacity="0"/></radialGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#sky)"/>
<circle cx="1480" cy="210" r="120" fill="url(#moon)" opacity=".55"/>
<circle cx="1480" cy="210" r="46" fill="#fbf1d8" opacity=".9"/>
<path d="M0 560 L180 470 L330 520 L520 420 L700 500 L860 440 L1040 520 L1250 430 L1420 500 L1600 450 L1800 520 L1920 480 L1920 700 L0 700 Z" fill="#3a3f5a" opacity=".55"/>
<path d="M0 620 L240 560 L460 610 L720 540 L980 600 L1240 550 L1500 610 L1760 560 L1920 590 L1920 720 L0 720 Z" fill="#2a2f45" opacity=".7"/>
${houses}
<rect y="${ground}" width="${W}" height="${H - ground}" fill="url(#road)"/>
${Array.from({ length: 14 }, (_, k) => `<rect x="${k * 150 - 20}" y="${ground + 60 + (k % 2) * 40}" width="110" height="6" rx="3" fill="#6d5a45" opacity=".5"/>`).join("")}
<rect y="${ground}" width="${W}" height="18" fill="#000" opacity=".25"/>
</svg>`;

await sharp(Buffer.from(svg)).webp({ quality: 82 }).toFile("public/images/hero.webp");

// OGP画像（1200x630）
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<rect width="1200" height="630" fill="#1f3352"/>
<rect x="40" y="40" width="1120" height="550" fill="none" stroke="#b08d57" stroke-width="3"/>
<text x="600" y="250" font-family="Shippori Mincho B1, serif" font-size="44" fill="#f6f1e7" text-anchor="middle">公益社団法人</text>
<text x="600" y="345" font-family="Shippori Mincho B1, serif" font-size="96" font-weight="700" fill="#f6f1e7" text-anchor="middle">本庄法人会</text>
<rect x="520" y="390" width="160" height="4" fill="#c2452d"/>
<text x="600" y="460" font-family="Shippori Mincho B1, serif" font-size="34" fill="#e8dfcc" text-anchor="middle">税を学び、経営を磨き、地域とつながる。</text>
</svg>`;
const bg = await sharp("public/images/hero.webp").resize(1200, 630, { fit: "cover", position: "bottom" }).modulate({ brightness: 0.5 }).toBuffer();
await sharp(bg)
  .composite([{ input: Buffer.from(og.replace('<rect width="1200" height="630" fill="#1f3352"/>', '<rect width="1200" height="630" fill="#1f3352" opacity=".72"/>')) }])
  .jpeg({ quality: 85 })
  .toFile("public/images/og.jpg");
console.log("done");
