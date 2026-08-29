import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "What cookies Flossatech uses and how to control them.",
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-14 article-prose prose">
      <h1 className="font-[var(--font-display)] uppercase text-4xl not-prose mb-2">Cookie Policy</h1>
      <p className="not-prose font-[var(--font-mono)] text-xs text-[var(--color-muted)] mb-8">
        Last updated: August 29, 2026
      </p>

      <p>
        This Cookie Policy explains how Flossatech uses cookies and similar
        technologies on flossatech.com, and how you can control them. It
        should be read alongside our <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>1. What Are Cookies</h2>
      <p>
        Cookies are small text files placed on your device when you visit a
        website. They're widely used to make sites work, work more
        efficiently, and provide information to site owners.
      </p>

      <h2>2. Categories of Cookies We Use</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Purpose</th>
            <th>Can be disabled?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Strictly necessary</td>
            <td>Core site functionality (navigation, security)</td>
            <td>No — required for the Site to function</td>
          </tr>
          <tr>
            <td>Analytics/performance</td>
            <td>Understand how visitors use the Site so we can improve it</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Advertising</td>
            <td>Serve and measure ads, including via Google AdSense</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Preferences</td>
            <td>Remember settings like display preferences</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Third-Party Cookies</h2>
      <p>
        Advertising and analytics partners (including Google) may set
        cookies through the Site. We do not control these cookies directly;
        each provider's own policy governs how they use the data collected.
      </p>

      <h2>4. Managing Cookies</h2>
      <p>You can control or delete cookies through your browser settings. Useful starting points:</p>
      <ul>
        <li>
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a> — manage personalized advertising from Google
        </li>
        <li>
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
            aboutads.info/choices
          </a> — opt out of participating third-party ad networks
        </li>
        <li>
          <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">
            youronlinechoices.eu
          </a> — for EU visitors
        </li>
      </ul>
      <p>
        Disabling non-essential cookies may affect how some parts of the
        Site function, but will not prevent you from browsing articles.
      </p>

      <h2>5. Changes to This Policy</h2>
      <p>
        We may update this policy periodically. Continued use of the Site
        after changes means you accept the updated policy.
      </p>

      <h2>6. Contact</h2>
      <p>
        Questions? Email{" "}
        <a href="mailto:privacy@flossatech.com">privacy@flossatech.com</a>.
      </p>

      <p className="not-prose mt-10 text-xs text-[var(--color-muted)] font-[var(--font-mono)] border-t border-[var(--color-line)] pt-4">
        General-purpose template — have it reviewed by a lawyer before
        publishing, particularly if you need an EU/UK-style cookie consent
        banner (this template assumes one will be implemented separately).
      </p>
    </div>
  );
}
