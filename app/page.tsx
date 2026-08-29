import Link from "next/link";
import Image from "next/image";
import { publishedArticles } from "@/lib/articles";
import VerdictDial from "@/components/VerdictDial";
import { getCategoryImage } from "@/lib/categoryImages";

export default function Home() {
  const [lead, ...rest] = publishedArticles.slice().reverse();
  const leadImage = lead ? getCategoryImage(lead.category) : null;

  return (
    <div>
      <section className="relative border-b-2 border-[var(--color-ink)] bg-[var(--color-bench)] text-[var(--color-paper)] overflow-hidden">
        <Image
          src="/images/hero-workbench.jpg"
          alt="A cluttered, well-used electronics workbench with tools and an opened gadget"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="relative max-w-6xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-[1.3fr_0.7fr] gap-10 items-end">
          <div>
            <div className="font-[var(--font-mono)] text-xs uppercase tracking-[0.3em] text-[var(--color-verify)] mb-4">
              A gadget site that shows its work
            </div>
            <h1 className="font-[var(--font-display)] uppercase text-5xl md:text-7xl leading-[0.9] tracking-tight mb-6">
              Read the spec sheet<br />like Flossa does.
            </h1>
            <p className="max-w-xl text-[#c7cec8] text-lg leading-relaxed">
              No in-house lab, no pretending otherwise. Every Flossatech
              guide traces its numbers back to a manufacturer datasheet, a
              regulatory filing, or a named source you can click through and
              check yourself.
            </p>
          </div>
          <div className="flex md:justify-end">
            <div className="bg-[var(--color-paper)] text-[var(--color-ink)] p-5 border-2 border-[var(--color-verify)]">
              <VerdictDial score={92} label="Sourcing Standard" size={140} />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-14">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-[var(--font-display)] uppercase text-2xl tracking-tight">
            Latest
          </h2>
          <Link href="/blog" className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-signal)]">
            All reviews →
          </Link>
        </div>

        {lead && leadImage && (
          <Link href={`/blog/${lead.slug}`} className="group grid md:grid-cols-[1fr_1.1fr] gap-0 items-stretch border-2 border-[var(--color-ink)] mb-10 bg-white hover:bg-[var(--color-paper-2)] transition-colors overflow-hidden">
            <div className="relative min-h-[220px] md:min-h-0">
              <Image
                src={leadImage.src}
                alt={leadImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-signal)] mb-2">
                {lead.category}
              </div>
              <h3 className="font-[var(--font-display)] uppercase text-3xl md:text-4xl leading-tight mb-3 group-hover:text-[var(--color-signal-dim)]">
                {lead.title}
              </h3>
              <p className="text-[var(--color-muted)] max-w-xl mb-4">{lead.dek}</p>
              {typeof lead.verdictScore === "number" && (
                <VerdictDial score={lead.verdictScore} label="Value Score" size={90} />
              )}
            </div>
          </Link>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((a) => {
            const img = getCategoryImage(a.category);
            return (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group border-2 border-[var(--color-ink)] bg-white hover:bg-[var(--color-paper-2)] transition-colors flex flex-col overflow-hidden"
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-signal)] mb-2">
                    {a.category}
                  </div>
                  <h3 className="font-[var(--font-display)] uppercase text-2xl leading-tight mb-2 group-hover:text-[var(--color-signal-dim)]">
                    {a.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] mb-4">{a.dek}</p>
                  <div className="mt-auto font-[var(--font-mono)] text-xs text-[var(--color-muted)]">
                    {a.readMins} min read
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-16">
        <div className="border-2 border-[var(--color-ink)] p-8 md:p-10 grid md:grid-cols-[auto_1fr] gap-6 items-center bg-[var(--color-paper-2)]">
          <div className="w-16 h-16 rounded-full bg-[var(--color-bench)] text-white flex items-center justify-center font-[var(--font-display)] text-3xl shrink-0">
            F
          </div>
          <div>
            <h2 className="font-[var(--font-display)] uppercase text-xl mb-2">Who writes this</h2>
            <p className="text-[var(--color-ink)] max-w-2xl mb-3">
              Flossa spent three years in electronics retail before moving
              into tech writing, which is where the site's whole approach
              comes from: customers don't get burned by bad products, they
              get burned by marketing copy nobody checked.
            </p>
            <Link href="/author/flossa" className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-signal-dim)]">
              Read the full bio →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
