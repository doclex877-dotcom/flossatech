type Bar = { label: string; value: number; highlight?: boolean };

type Props = {
  data: Bar[];
  unit?: string;
  title?: string;
  sourceNote?: string;
  maxValue?: number;
};

export default function BarChart({ data, unit = "", title, sourceNote, maxValue }: Props) {
  const max = maxValue ?? Math.max(...data.map((d) => d.value)) * 1.1;
  const chartH = 40 + data.length * 34;

  return (
    <figure className="my-8 not-prose border-2 border-[var(--color-ink)] bg-white p-5 md:p-6">
      {title && (
        <figcaption className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-signal-dim)] mb-4">
          {title}
        </figcaption>
      )}
      <svg viewBox={`0 0 480 ${chartH}`} width="100%" height={chartH}>
        {data.map((d, i) => {
          const y = 10 + i * 34;
          const barW = (d.value / max) * 330;
          return (
            <g key={d.label}>
              <text x={0} y={y + 15} fontSize="12" fontFamily="var(--font-body)" fill="var(--color-ink)">
                {d.label}
              </text>
              <rect
                x={140}
                y={y}
                width={330}
                height={20}
                fill="var(--color-paper-2)"
              />
              <rect
                x={140}
                y={y}
                width={Math.max(barW, 2)}
                height={20}
                fill={d.highlight ? "var(--color-signal)" : "var(--color-verify)"}
              />
              <text
                x={144 + Math.max(barW, 2)}
                y={y + 15}
                fontSize="12"
                fontFamily="var(--font-mono)"
                fill="var(--color-ink)"
              >
                {d.value.toLocaleString()}
                {unit}
              </text>
            </g>
          );
        })}
      </svg>
      {sourceNote && (
        <figcaption className="mt-3 text-xs text-[var(--color-muted)] font-[var(--font-mono)]">
          Source: {sourceNote}
        </figcaption>
      )}
    </figure>
  );
}
