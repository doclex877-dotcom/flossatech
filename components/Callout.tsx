import { ReactNode } from "react";

export default function Callout({
  kind = "note",
  title,
  children,
}: {
  kind?: "note" | "caveat" | "verified";
  title?: string;
  children: ReactNode;
}) {
  const styles = {
    note: { border: "var(--color-line-dark)", label: "Note", labelColor: "var(--color-muted)" },
    caveat: { border: "var(--color-signal)", label: "Worth knowing", labelColor: "var(--color-signal-dim)" },
    verified: { border: "var(--color-verify)", label: "Verified", labelColor: "var(--color-verify-dim)" },
  }[kind];

  return (
    <div
      className="my-7 not-prose border-l-4 pl-5 py-3 bg-[var(--color-paper-2)]"
      style={{ borderColor: styles.border }}
    >
      <div
        className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] mb-1"
        style={{ color: styles.labelColor }}
      >
        {title ?? styles.label}
      </div>
      <div className="text-[15px] leading-relaxed">{children}</div>
    </div>
  );
}
