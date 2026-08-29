import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How Flossatech sources data, handles corrections, and stays independent from advertisers.",
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-14 article-prose prose">
      <h1 className="font-[var(--font-display)] uppercase text-4xl not-prose mb-6">Editorial Policy</h1>

      <h2>What Flossatech is (and isn't)</h2>
      <p>
        Flossatech is a data-driven gadget publication. We do not operate an
        in-house physical testing lab, and we don't claim to. Where an
        article states a specific figure — battery capacity, charging
        wattage, screen resolution, benchmark score, weight, price — it is
        sourced from one of the following:
      </p>
      <ul>
        <li>The manufacturer's own published datasheet, spec page, or user manual</li>
        <li>A public regulatory filing (e.g. FCC ID filings, Bluetooth SIG or USB-IF certification listings)</li>
        <li>Current retailer pricing, checked at the time of writing</li>
        <li>
          A named third-party outlet that publishes and discloses its own
          bench-testing methodology, cited and linked
        </li>
      </ul>
      <p>
        Where sources disagree, we say so in the article rather than
        picking whichever number is most flattering to a product.
      </p>

      <h2>How we choose what to cover</h2>
      <p>
        We prioritize product categories and price brackets where buyers
        are most likely to be misled by marketing claims — budget and
        mid-range gadgets in particular, where a single misunderstood spec
        (mAh, Pa, IP rating, "up to" speeds) can lead to a bad purchase.
      </p>

      <h2>Independence from advertisers</h2>
      <p>
        Flossatech runs display advertising and, on some pages, affiliate
        links (see our <a href="/affiliate-disclosure">Affiliate
        Disclosure</a>). Advertisers and affiliate partners have no input
        into which products we cover, how we rank them, or what an article
        concludes. We do not accept payment in exchange for a specific
        rating or a guaranteed positive review.
      </p>

      <h2>Review units and loaner hardware</h2>
      <p>
        If an article is based in part on a unit loaned by a manufacturer
        or retailer, that will be disclosed at the top of the article. A
        loaned unit does not guarantee coverage or a favorable conclusion.
      </p>

      <h2>Updates and corrections</h2>
      <p>
        Gadget pricing and availability change quickly. Articles are
        revisited periodically, and a visible "Updated" date is added when
        we make a material change. If you spot an error, email{" "}
        <a href="mailto:corrections@flossatech.com">corrections@flossatech.com</a>{" "}
        with the article link and the specific issue — we investigate every
        report.
      </p>

      <h2>Use of AI tools</h2>
      <p>
        Flossatech may use AI-assisted tools during drafting and research
        organization. Every factual claim published is checked against a
        primary or clearly named source before publication, per the
        sourcing standard above; AI assistance does not substitute for that
        verification step.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about how a specific article was sourced can be sent to{" "}
        <a href="mailto:hello@flossatech.com">hello@flossatech.com</a>.
      </p>
    </div>
  );
}
