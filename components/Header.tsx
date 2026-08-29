import Link from "next/link";
import Image from "next/image";

const categories = [
  "Smartphones",
  "Laptops",
  "Audio",
  "Smart Home",
  "Accessories",
];

export default function Header() {
  return (
    <header className="border-b-2 border-[var(--color-ink)] bg-[var(--color-paper)] sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-baseline gap-2 group">
            <Image
              src="/images/brand/logo-lockup.png"
              alt="Flossatech"
              width={744}
              height={459}
              priority
              className="h-9 md:h-11 w-auto"
            />
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)] font-[var(--font-mono)] border border-[var(--color-line)] px-1.5 py-0.5 rounded">
              Read the specs
            </span>
          </Link>
          <Link
            href="/newsletter"
            className="hidden md:inline-block text-sm font-[var(--font-mono)] uppercase tracking-wide bg-[var(--color-signal)] text-white px-4 py-2 rounded-sm hover:bg-[var(--color-signal-dim)] transition-colors"
          >
            Get the Monday brief
          </Link>
        </div>
        <nav className="flex items-center gap-5 overflow-x-auto pb-3 text-sm font-[var(--font-mono)] uppercase tracking-wide">
          <Link href="/blog" className="whitespace-nowrap hover:text-[var(--color-signal)]">
            All Reviews
          </Link>
          {categories.map((c) => (
            <Link
              key={c}
              href={`/blog?category=${encodeURIComponent(c)}`}
              className="whitespace-nowrap text-[var(--color-muted)] hover:text-[var(--color-signal)]"
            >
              {c}
            </Link>
          ))}
          <Link href="/author/flossa" className="whitespace-nowrap text-[var(--color-muted)] hover:text-[var(--color-signal)]">
            About Flossa
          </Link>
        </nav>
      </div>
    </header>
  );
}
