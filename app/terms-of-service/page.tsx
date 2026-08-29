import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of flossatech.com.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-14 article-prose prose">
      <h1 className="font-[var(--font-display)] uppercase text-4xl not-prose mb-2">Terms of Service</h1>
      <p className="not-prose font-[var(--font-mono)] text-xs text-[var(--color-muted)] mb-8">
        Last updated: August 29, 2026
      </p>

      <p>
        These Terms of Service ("Terms") govern your use of flossatech.com
        (the "Site"), operated by Flossatech. By accessing or using the
        Site, you agree to these Terms. If you don't agree, please don't use
        the Site.
      </p>

      <h2>1. Use of the Site</h2>
      <p>
        You may use the Site for lawful, personal, non-commercial purposes.
        You agree not to: scrape or bulk-download content in violation of
        our robots.txt or rate limits; attempt to disrupt or compromise the
        Site's security; misrepresent your identity; or use the Site to
        distribute malware, spam, or unlawful content.
      </p>

      <h2>2. Content and Intellectual Property</h2>
      <p>
        Unless otherwise noted, all text, graphics, logos, and original
        images on the Site are owned by Flossatech or its licensors and are
        protected by copyright and other intellectual property laws.
        Product images, trademarks, and logos referenced in reviews remain
        the property of their respective owners and are used for
        identification and commentary purposes.
      </p>
      <p>
        You may share links to our articles and quote brief excerpts with
        proper attribution and a link back to the original article.
        Reproducing full articles without permission is not permitted.
      </p>

      <h2>3. No Professional Advice</h2>
      <p>
        Content on Flossatech is provided for general informational
        purposes only. It does not constitute professional, legal, or
        financial advice, and product recommendations reflect our editorial
        judgment based on publicly available data at the time of
        publication. Specifications, pricing, and availability change
        frequently — always verify current details with the retailer or
        manufacturer before purchasing.
      </p>

      <h2>4. Accuracy of Information</h2>
      <p>
        We work to keep articles accurate and up to date, and we source
        figures from manufacturer data and named third parties (see our{" "}
        <a href="/editorial-policy">Editorial Policy</a>). However, we make
        no warranty that content is complete, current, or error-free.
        Prices and specifications are subject to change by manufacturers
        and retailers without notice.
      </p>

      <h2>5. Third-Party Links and Affiliate Relationships</h2>
      <p>
        The Site contains links to third-party websites, including retail
        and affiliate links (see our{" "}
        <a href="/affiliate-disclosure">Affiliate Disclosure</a>). We are
        not responsible for the content, accuracy, or practices of
        third-party sites.
      </p>

      <h2>6. Advertising</h2>
      <p>
        The Site displays third-party advertising, including through Google
        AdSense. Advertisers are solely responsible for their ad content;
        Flossatech does not endorse advertised products or services.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Flossatech and its
        contributors are not liable for any indirect, incidental, or
        consequential damages arising from your use of the Site or reliance
        on its content, including purchasing decisions made based on
        published reviews or comparisons.
      </p>

      <h2>8. Changes to the Site or These Terms</h2>
      <p>
        We may modify, suspend, or discontinue any part of the Site, and
        may update these Terms, at any time. Continued use of the Site
        after changes constitutes acceptance of the revised Terms.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the jurisdiction in which
        Flossatech operates, without regard to conflict-of-law principles.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href="mailto:hello@flossatech.com">hello@flossatech.com</a>.
      </p>

      <p className="not-prose mt-10 text-xs text-[var(--color-muted)] font-[var(--font-mono)] border-t border-[var(--color-line)] pt-4">
        General-purpose template — have it reviewed by a lawyer before
        publishing, and fill in your specific operating jurisdiction in
        Section 9.
      </p>
    </div>
  );
}
