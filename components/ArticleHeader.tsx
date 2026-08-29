import Link from "next/link";
import Image from "next/image";
import VerdictDial from "./VerdictDial";
import { getCategoryImage } from "@/lib/categoryImages";

export default function ArticleHeader({
  title,
  dek,
  category,
  date,
  updated,
  readMins,
  verdictScore,
}: {
  title: string;
  dek: string;
  category: string;
  date: string;
  updated?: string;
  readMins: number;
  verdictScore?: number;
}) {
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const image = getCategoryImage(category);

  return (
    <header className="not-prose mb-8">
      <div className="relative w-full aspect-[16/7] mb-6 border-2 border-[var(--color-ink)] bg-[var(--color-paper-2)] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>
      <Link
        href={`/blog?category=${encodeURIComponent(category)}`}
        className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-signal)]"
      >
        {category}
      </Link>
      <h1 className="font-[var(--font-display)] uppercase text-4xl md:text-5xl leading-[0.95] mt-2 mb-4 max-w-3xl">
        {title}
      </h1>
      <p className="text-lg text-[var(--color-muted)] max-w-2xl mb-5" style={{ fontFamily: "var(--font-body)" }}>
        {dek}
      </p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4 border-y border-[var(--color-line)] py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--color-bench)] text-white flex items-center justify-center font-[var(--font-display)] text-lg">
            F
          </div>
          <div className="text-sm">
            <Link href="/author/flossa" className="font-semibold hover:text-[var(--color-signal)]">
              Flossa
            </Link>
            <div className="text-[var(--color-muted)] font-[var(--font-mono)] text-xs">
              Published {fmt(date)}
              {updated ? ` · Updated ${fmt(updated)}` : ""} · {readMins} min read
            </div>
          </div>
        </div>
        {typeof verdictScore === "number" && (
          <div className="ml-auto">
            <VerdictDial score={verdictScore} label="Value Score" size={100} />
          </div>
        )}
      </div>
    </header>
  );
}
