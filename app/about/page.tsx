import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Flossatech",
  description: "What Flossatech covers, how it's written, and how it makes money.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-14 article-prose prose">
      <h1 className="font-[var(--font-display)] uppercase text-4xl not-prose mb-6">About Flossatech</h1>

      <p>
        Flossatech is a consumer gadget publication covering smartphones,
        laptops, audio gear, smart home devices, and accessories. The site
        was founded to fill a gap: most budget-gadget coverage online is
        either a rewritten press release or an affiliate list with no real
        analysis behind the rankings.
      </p>

      <h2>What we cover</h2>
      <p>
        Flossatech focuses on the price brackets that get the least honest
        coverage elsewhere — budget and mid-range gadgets, where the
        difference between a good purchase and a bad one usually comes down
        to which spec actually matters and which one is just marketing.
      </p>

      <h2>How articles are put together</h2>
      <p>
        Every figure — battery capacity, charging wattage, screen
        resolution, pricing, benchmark scores — is sourced from a
        manufacturer's published datasheet, a regulatory filing, or a named
        outlet that publishes its own testing methodology. We link to
        primary sources wherever they're publicly available. Full detail is
        in our <a href="/editorial-policy">Editorial Policy</a>.
      </p>

      <h2>How the site makes money</h2>
      <p>
        Flossatech is supported by display advertising and, on some pages,
        affiliate commissions from retail partners. Neither arrangement
        affects which products we cover or how we rank them. See our{" "}
        <a href="/affiliate-disclosure">Affiliate Disclosure</a> for detail.
      </p>

      <h2>Corrections</h2>
      <p>
        If you spot an error — a wrong price, an outdated spec, a
        misattributed source — email{" "}
        <a href="mailto:corrections@flossatech.com">corrections@flossatech.com</a>{" "}
        and we'll investigate and update the article, with a visible
        correction note if the error affected the article's conclusions.
      </p>
    </div>
  );
}
