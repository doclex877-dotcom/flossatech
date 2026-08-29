import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Flossatech collects, uses, and protects visitor data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-14 article-prose prose">
      <h1 className="font-[var(--font-display)] uppercase text-4xl not-prose mb-2">Privacy Policy</h1>
      <p className="not-prose font-[var(--font-mono)] text-xs text-[var(--color-muted)] mb-8">
        Last updated: August 29, 2026
      </p>

      <p>
        This Privacy Policy explains what information Flossatech
        ("Flossatech," "we," "us," or "our") collects when you visit
        flossatech.com (the "Site"), how we use it, and the choices you have.
        By using the Site, you agree to the practices described here.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>1.1 Information you provide directly</h3>
      <p>
        If you contact us by email, subscribe to a newsletter, or leave a
        comment, we collect the information you submit — typically your
        name, email address, and message content.
      </p>
      <h3>1.2 Information collected automatically</h3>
      <p>
        Like most websites, we and our third-party partners automatically
        collect certain data when you visit, including your IP address,
        browser type, device type, operating system, referring URL, pages
        viewed, and time spent on the Site. This is collected through
        cookies, web beacons, and similar tracking technologies.
      </p>

      <h2>2. Cookies and Similar Technologies</h2>
      <p>
        Cookies are small text files stored on your device. We use them to
        remember preferences, understand how visitors use the Site, and
        support advertising. See our{" "}
        <a href="/cookie-policy">Cookie Policy</a> for a full breakdown of
        the categories of cookies used and how to manage them.
      </p>

      <h2>3. Advertising and Google AdSense</h2>
      <p>
        Flossatech displays advertisements served by Google AdSense and may
        work with other third-party advertising networks. These vendors may
        use cookies, device identifiers, and similar technologies to serve
        ads based on your prior visits to this and other websites.
      </p>
      <ul>
        <li>
          Google's use of advertising cookies enables it and its partners
          to serve ads based on your visits to this site and/or other sites
          on the Internet.
        </li>
        <li>
          You may opt out of personalized advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>
          .
        </li>
        <li>
          You can also opt out of some third-party vendors' use of cookies
          for personalized advertising by visiting{" "}
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
            www.aboutads.info/choices
          </a>
          .
        </li>
      </ul>
      <p>
        Third-party vendors, including Google, use cookies to serve ads
        based on a user's prior visits to this website or other websites.
        Google's use of advertising cookies enables it and its partners to
        serve ads to users based on their visit to our Site and/or other
        sites on the Internet.
      </p>

      <h2>4. Analytics</h2>
      <p>
        We may use third-party analytics services (such as Google
        Analytics) to understand how visitors use the Site. These services
        may use cookies and similar technologies to collect and analyze
        information about Site use. The information generated is
        transmitted to and stored by the analytics provider, subject to
        that provider's own privacy policy.
      </p>

      <h2>5. How We Use Information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Operate, maintain, and improve the Site</li>
        <li>Respond to inquiries and correction requests</li>
        <li>Monitor and analyze usage trends</li>
        <li>Detect, prevent, and address technical or security issues</li>
        <li>Serve relevant advertising, where permitted</li>
      </ul>

      <h2>6. Third-Party Links</h2>
      <p>
        The Site may include links to third-party retailers, including
        affiliate links (see our{" "}
        <a href="/affiliate-disclosure">Affiliate Disclosure</a>). We are
        not responsible for the privacy practices of third-party sites; we
        encourage you to review their policies before providing personal
        information.
      </p>

      <h2>7. Children's Privacy</h2>
      <p>
        Flossatech is not directed to children under 13, and we do not
        knowingly collect personal information from children under 13. If
        you believe a child has provided us with personal information,
        contact us at{" "}
        <a href="mailto:privacy@flossatech.com">privacy@flossatech.com</a>{" "}
        so we can delete it.
      </p>

      <h2>8. Your Rights and Choices</h2>
      <p>
        Depending on where you live, you may have rights to access, correct,
        delete, or restrict the use of your personal information, and to
        opt out of certain data sales or sharing (for example, under the
        EU/UK GDPR or the California Consumer Privacy Act). To exercise
        these rights, email{" "}
        <a href="mailto:privacy@flossatech.com">privacy@flossatech.com</a>.
        We will respond within the timeframe required by applicable law.
      </p>

      <h2>9. Data Retention</h2>
      <p>
        We retain information only as long as needed for the purposes
        described in this policy, or as required by law.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material
        changes will be reflected by updating the "Last updated" date
        above.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href="mailto:privacy@flossatech.com">privacy@flossatech.com</a>.
      </p>

      <p className="not-prose mt-10 text-xs text-[var(--color-muted)] font-[var(--font-mono)] border-t border-[var(--color-line)] pt-4">
        This page is a general-purpose template and is not a substitute for
        legal advice. Before publishing, have it reviewed by a lawyer
        familiar with the privacy laws applicable to your operating
        jurisdiction and audience (e.g. GDPR, CCPA/CPRA, POPIA).
      </p>
    </div>
  );
}
