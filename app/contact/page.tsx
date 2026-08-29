import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Flossatech team.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-14">
      <h1 className="font-[var(--font-display)] uppercase text-4xl mb-6">Contact</h1>
      <div className="article-prose prose">
        <p>We read everything that comes in. Response times vary, but here's where to send what:</p>
        <ul>
          <li>
            <strong>General questions & feedback:</strong>{" "}
            <a href="mailto:hello@flossatech.com">hello@flossatech.com</a>
          </li>
          <li>
            <strong>Corrections:</strong>{" "}
            <a href="mailto:corrections@flossatech.com">corrections@flossatech.com</a>
          </li>
          <li>
            <strong>Press & partnerships:</strong>{" "}
            <a href="mailto:partners@flossatech.com">partners@flossatech.com</a>
          </li>
          <li>
            <strong>Privacy requests:</strong>{" "}
            <a href="mailto:privacy@flossatech.com">privacy@flossatech.com</a> — see our{" "}
            <a href="/privacy-policy">Privacy Policy</a> for what this covers.
          </li>
        </ul>
        <p>
          Pitching a product for review? We don't guarantee coverage, and we
          don't accept payment in exchange for a review or a specific
          rating. Loaner units are disclosed where used — see our{" "}
          <a href="/editorial-policy">Editorial Policy</a>.
        </p>
      </div>
    </div>
  );
}
