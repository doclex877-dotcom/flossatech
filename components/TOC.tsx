type Item = { id: string; text: string };

export default function TOC({ items }: { items: Item[] }) {
  return (
    <nav
      aria-label="Table of contents"
      className="my-8 border-2 border-[var(--color-ink)] bg-[var(--color-paper-2)] p-5 md:p-6 not-prose"
    >
      <div className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-signal-dim)] mb-3">
        On this page
      </div>
      <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
        {items.map((item, i) => (
          <li key={item.id} className="text-sm">
            <a
              href={`#${item.id}`}
              className="flex gap-2 hover:text-[var(--color-signal)] underline decoration-[var(--color-line)] underline-offset-4"
            >
              <span className="font-[var(--font-mono)] text-[var(--color-muted)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
