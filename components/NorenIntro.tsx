/**
 * トップのオープニング：メイン画像の町家に掛かる暖簾をモチーフにした4枚の暖簾。
 * 1枚ごとに中央の切れ目から左右に割れて揺れ、上へ巻き上がる。
 * prefers-reduced-motion の人には表示しない（globals.css）。
 */

const AI = "#1f3352";
const SHU = "#c2452d";
const KINARI = "#f6f1e7";

// 青海波（viewBox 300 幅に敷き詰める）
function Seigaiha({ y, rows, color, bg }: { y: number; rows: number; color: string; bg: string }) {
  const r = 30;
  const arcs = [];
  for (let row = 0; row < rows; row++) {
    const cy = y + row * (r * 0.5);
    const off = row % 2 ? r : 0;
    for (let cx = -r + off; cx <= 300 + r; cx += r * 2) {
      arcs.push(
        <g key={`${row}-${cx}`}>
          <circle cx={cx} cy={cy + r} r={r} fill={bg} stroke={color} strokeWidth="3" />
          <circle cx={cx} cy={cy + r} r={r * 0.68} fill="none" stroke={color} strokeWidth="3" />
          <circle cx={cx} cy={cy + r} r={r * 0.36} fill="none" stroke={color} strokeWidth="3" />
        </g>,
      );
    }
  }
  return <g>{arcs}</g>;
}

function Sakura({ cx, cy, r, color }: { cx: number; cy: number; r: number; color: string }) {
  const petals = [0, 72, 144, 216, 288].map((deg) => (
    <path
      key={deg}
      transform={`rotate(${deg} ${cx} ${cy})`}
      d={`M${cx} ${cy} C ${cx - r * 0.55} ${cy - r * 0.35}, ${cx - r * 0.5} ${cy - r * 0.95}, ${cx - r * 0.12} ${cy - r} L ${cx} ${cy - r * 0.82} L ${cx + r * 0.12} ${cy - r} C ${cx + r * 0.5} ${cy - r * 0.95}, ${cx + r * 0.55} ${cy - r * 0.35}, ${cx} ${cy} Z`}
      fill={color}
    />
  ));
  return (
    <g>
      {petals}
      <circle cx={cx} cy={cy} r={r * 0.14} fill={SHU} />
    </g>
  );
}

// 4枚の柄（viewBox 0 0 300 900）
const designs = [
  // 藍・白丸・青海波
  (
    <>
      <rect width="300" height="900" fill={AI} />
      <circle cx="150" cy="300" r="62" fill={KINARI} />
      <Seigaiha y={600} rows={12} color={KINARI} bg={AI} />
    </>
  ),
  // 朱・桜
  (
    <>
      <rect width="300" height="900" fill={SHU} />
      <Sakura cx={150} cy={300} r={78} color={KINARI} />
      <Sakura cx={226} cy={420} r={30} color={KINARI} />
    </>
  ),
  // 生成り・藍の青海波
  (
    <>
      <rect width="300" height="900" fill={KINARI} />
      <circle cx="150" cy="300" r="58" fill="none" stroke={AI} strokeWidth="10" />
      <text x="150" y="322" textAnchor="middle" fontSize="64" fontWeight="700" fill={AI} fontFamily="'Shippori Mincho B1', serif">
        法
      </text>
      <Seigaiha y={560} rows={14} color={AI} bg={KINARI} />
    </>
  ),
  // 藍・菱・市松
  (
    <>
      <rect width="300" height="900" fill={AI} />
      <g transform="translate(150 300) rotate(45)">
        <rect x="-50" y="-50" width="100" height="100" fill="none" stroke={KINARI} strokeWidth="10" />
        <rect x="-26" y="-26" width="22" height="22" fill={KINARI} />
        <rect x="4" y="-26" width="22" height="22" fill={KINARI} />
        <rect x="-26" y="4" width="22" height="22" fill={KINARI} />
        <rect x="4" y="4" width="22" height="22" fill={KINARI} />
      </g>
      {Array.from({ length: 8 }, (_, row) =>
        Array.from({ length: 6 }, (_, col) =>
          (row + col) % 2 ? null : <rect key={`${row}-${col}`} x={col * 50} y={620 + row * 50} width="50" height="50" fill={KINARI} />,
        ),
      )}
    </>
  ),
];

function Half({ design, side }: { design: React.ReactNode; side: "l" | "r" }) {
  return (
    <span className={`noren-half noren-${side}`}>
      <svg viewBox={side === "l" ? "0 0 150 900" : "150 0 150 900"} preserveAspectRatio={side === "l" ? "xMaxYMin slice" : "xMinYMin slice"} aria-hidden="true">
        {design}
      </svg>
    </span>
  );
}

export default function NorenIntro() {
  return (
    <div className="noren-intro" aria-hidden="true">
      <span className="noren-rod" />
      {designs.map((d, i) => (
        <span className="noren" key={i} style={{ "--i": i } as React.CSSProperties}>
          <Half design={d} side="l" />
          <Half design={d} side="r" />
        </span>
      ))}
    </div>
  );
}
