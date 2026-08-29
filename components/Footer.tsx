import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t-2 border-[var(--color-ink)] bg-[var(--color-bench)] text-[var(--color-paper)]">
      <div className="max-w-6xl mx-auto px-5 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-[var(--font-display)] text-2xl uppercase tracking-tight mb-3">
            Flossatech
          </div>
          <p className="text-sm text-[#b9c2bc] max-w-sm leading-relaxed">
            Gadget coverage built on real specs, real prices, and real
            sourcing — not spun-up marketing copy. Every number in every
            article is checked against a manufacturer datasheet, a
            regulatory filing, or a named, linkable source.
          </p>
        </div>
        <div>
          <div className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-verify)] mb-3">
            Site
          </div>
          <ul className="space-y-2 text-sm text-[#dedbcf]">
            <li><Link href="/blog" className="hover:text-white">All Reviews</Link></li>
            <li><Link href="/author/flossa" className="hover:text-white">About Flossa</Link></li>
            <li><Link href="/about" className="hover:text-white">About Flossatech</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-verify)] mb-3">
            Policies
          </div>
          <ul className="space-y-2 text-sm text-[#dedbcf]">
            <li><Link href="/editorial-policy" className="hover:text-white">Editorial Policy</Link></li>
            <li><Link href="/affiliate-disclosure" className="hover:text-white">Affiliate Disclosure</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#3a4540] py-5 text-center text-xs text-[#8b948e] font-[var(--font-mono)]">
        © {new Date().getFullYear()} Flossatech. All rights reserved.
      </div>
    </footer>
  );
}
