import { Metadata } from "next";
import { publishedArticles } from "@/lib/articles";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Flossa",
  description: "Flossa is the founding writer at Flossatech, covering consumer gadgets through real specs, pricing, and sourced data.",
};

export default function FlossaPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-14">
      <div className="flex items-center gap-5 mb-8">
        <div className="w-20 h-20 rounded-full bg-[var(--color-bench)] text-white flex items-center justify-center font-[var(--font-display)] text-4xl shrink-0">
          F
        </div>
        <div>
          <h1 className="font-[var(--font-display)] uppercase text-4xl">Flossa</h1>
          <p className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-signal)]">
            Founding Writer, Flossatech
          </p>
        </div>
      </div>

      <div className="article-prose prose">
        <p>
          Flossa started out on the sales floor of an electronics retailer,
          not in a newsroom. For three years, her job was standing between a
          customer and a wall of boxes that all claimed to be the best
          option in the store. That's a strange place to learn tech
          journalism, but it's where Flossatech's whole approach comes from:
          she watched a lot of people get talked into the wrong purchase by
          a spec they didn't understand, and a lot of good products get
          overlooked because they didn't have a flashy number on the box.
        </p>
        <p>
          She moved into writing in 2021, first contributing buying guides
          and explainer pieces to independent tech blogs, then taking on
          editing work for a small consumer-electronics newsletter. Flossa
          founded Flossatech to do the kind of gadget coverage she wished
          existed when she was still working retail: guides that start from
          the actual datasheet, the actual regulatory filing, or the actual
          price history, instead of a press release.
        </p>
        <p>
          Flossatech does not operate an in-house testing lab, and doesn't
          claim to. Where an article cites a performance figure, it is
          sourced from the manufacturer's own published specifications, a
          named third-party outlet that does bench-test hardware, or a
          public regulatory filing (FCC, Bluetooth SIG, USB-IF, and similar
          bodies all publish searchable records). The <Link href="/editorial-policy">editorial policy</Link>{" "}
          explains exactly how that sourcing works and how corrections are
          handled.
        </p>
        <p>
          When she's not reading spec sheets, Flossa is usually taking
          something apart to see how it was built, which is a habit that
          gets less popular with every gadget that ships without a
          screwdriver-friendly case.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="font-[var(--font-display)] uppercase text-xl mb-4 border-b-2 border-[var(--color-ink)] pb-2">
          Recent work
        </h2>
        <ul className="space-y-3">
          {publishedArticles.map((a) => (
            <li key={a.slug}>
              <Link href={`/blog/${a.slug}`} className="hover:text-[var(--color-signal)] underline underline-offset-4 decoration-[var(--color-line)]">
                {a.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
