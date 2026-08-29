type Props = {
  score: number; // 0-100
  label?: string;
  size?: number;
};

// Analog multimeter-style gauge — the site's signature element.
// Sweeps 220° (from -110° to +110° around top) proportional to score/100.
export default function VerdictDial({ score, label = "Verdict", size = 120 }: Props) {
  const clamped = Math.max(0, Math.min(100, score));
  const startAngle = -110;
  const sweep = 220;
  const angle = startAngle + (sweep * clamped) / 100;
  const rad = (angle * Math.PI) / 180;
  const cx = 60;
  const cy = 66;
  const r = 46;
  const needleX = cx + r * 0.82 * Math.sin(rad);
  const needleY = cy - r * 0.82 * Math.cos(rad);

  const ticks = Array.from({ length: 12 }, (_, i) => {
    const tA = startAngle + (sweep * i) / 11;
    const tRad = (tA * Math.PI) / 180;
    const x1 = cx + (r + 2) * Math.sin(tRad);
    const y1 = cy - (r + 2) * Math.cos(tRad);
    const x2 = cx + (r - 6) * Math.sin(tRad);
    const y2 = cy - (r - 6) * Math.cos(tRad);
    return { x1, y1, x2, y2 };
  });

  const color =
    clamped >= 75 ? "var(--color-verify)" : clamped >= 50 ? "#d4a017" : "var(--color-signal)";

  return (
    <div className="inline-flex flex-col items-center" style={{ width: size }}>
      <svg viewBox="0 0 120 90" width={size} height={size * 0.75}>
        <path
          d={describeArc(cx, cy, r, startAngle, startAngle + sweep)}
          fill="none"
          stroke="var(--color-line-dark)"
          strokeWidth={3}
        />
        {ticks.map((t, i) => (
          <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="var(--color-line-dark)" strokeWidth={1.5} />
        ))}
        <line x1={cx} y1={cy} x2={needleX} y2={needleY} stroke={color} strokeWidth={3} strokeLinecap="round" />
        <circle cx={cx} cy={cy} r={4} fill={color} />
        <text x={cx} y={cy + 22} textAnchor="middle" fontSize="20" fontFamily="var(--font-display)" fontWeight={700} fill="var(--color-ink)">
          {clamped}
        </text>
      </svg>
      <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest text-[var(--color-muted)] -mt-1">
        {label}
      </div>
    </div>
  );
}

function describeArc(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
  const start = polar(cx, cy, r, endDeg);
  const end = polar(cx, cy, r, startDeg);
  const largeArc = endDeg - startDeg <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
}

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) };
}
