import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { articles } from "@/lib/articles";
import VerdictDial from "@/components/VerdictDial";
import { getCategoryImage } from "@/lib/categoryImages";

export const metadata: Metadata = {
  title: "All Reviews & Guides",
  description: "Every Flossatech gadget review and buying guide, sourced from real specs and pricing.",
};

export default async function BlogIndex({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const published = articles.filter((a) => a.status === "published" && (!category || a.category === category));
  const upcoming = articles.filter((a) => a.status === "coming-soon" && (!category || a.category === category));

  return (
    <div className="max-w-6xl mx-auto px-5 py-12 md:py-16">
      <h1 className="font-[var(--font-display)] uppercase text-4xl md:text-5xl mb-2">
        {category ? category : "All Reviews"}
      </h1>
      <p className="text-[var(--color-muted)] mb-10 max-w-2xl">
        Buying guides and category breakdowns, each one sourced from real
        manufacturer datasheets, retailer pricing, and named third-party
        benchmarks.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {published.map((a) => {
          const img = getCategoryImage(a.category);
          return (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="group border-2 border-[var(--color-ink)] bg-white hover:bg-[var(--color-paper-2)] transition-colors overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
              <div className="p-6 flex gap-4">
                <div className="flex-1">
                  <div className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-signal)] mb-2">
                    {a.category}
                  </div>
                  <h2 className="font-[var(--font-display)] uppercase text-2xl leading-tight mb-2 group-hover:text-[var(--color-signal-dim)]">
                    {a.title}
                  </h2>
                  <p className="text-sm text-[var(--color-muted)]">{a.dek}</p>
                </div>
                {typeof a.verdictScore === "number" && (
                  <VerdictDial score={a.verdictScore} label="Value" size={80} />
                )}
              </div>
            </Link>
          );
        })}
        {published.length === 0 && (
          <p className="text-[var(--color-muted)]">No published articles in this category yet.</p>
        )}
      </div>

      {upcoming.length > 0 && (
        <div>
          <h2 className="font-[var(--font-display)] uppercase text-xl mb-4 border-b-2 border-[var(--color-ink)] pb-2">
            Coming up next
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {upcoming.map((a) => (
              <li key={a.slug} className="text-sm text-[var(--color-muted)] flex justify-between gap-3 border-b border-dashed border-[var(--color-line)] py-2">
                <span>{a.title}</span>
                <span className="font-[var(--font-mono)] text-xs whitespace-nowrap">
                  {new Date(a.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
