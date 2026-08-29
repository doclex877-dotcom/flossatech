import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How Flossatech discloses affiliate relationships and advertising.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-14 article-prose prose">
      <h1 className="font-[var(--font-display)] uppercase text-4xl not-prose mb-6">Affiliate Disclosure</h1>

      <p>
        Flossatech is reader-supported. Some links on this Site are
        affiliate links, meaning that if you click through and make a
        purchase, we may earn a commission at no additional cost to you.
        This is one of the ways we fund the research time behind our
        guides.
      </p>

      <h2>What this does and doesn't change</h2>
      <p>
        Affiliate relationships never determine which products we cover,
        how we rank them, or what conclusions an article reaches. Our{" "}
        <a href="/editorial-policy">Editorial Policy</a> governs sourcing
        and independence; affiliate commissions play no role in it.
      </p>

      <h2>Advertising</h2>
      <p>
        In addition to affiliate links, Flossatech displays third-party
        display advertising, including through Google AdSense. See our{" "}
        <a href="/privacy-policy">Privacy Policy</a> for detail on how
        advertising cookies work and how to opt out of personalized ads.
      </p>

      <h2>Questions</h2>
      <p>
        If you'd like to know whether a specific link on the Site is an
        affiliate link, email{" "}
        <a href="mailto:hello@flossatech.com">hello@flossatech.com</a>.
      </p>
    </div>
  );
}
