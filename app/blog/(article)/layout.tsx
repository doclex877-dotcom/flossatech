import Link from "next/link";

export default function ArticleRouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10 md:py-14">
      <Link
        href="/blog"
        className="not-prose inline-block mb-6 font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-signal)]"
      >
        ← All reviews
      </Link>
      <article className="article-prose prose">{children}</article>
    </div>
  );
}
