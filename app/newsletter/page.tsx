import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Monday Brief",
  description: "A weekly email from Flossatech: one real spec explained, and what actually changed in gadget pricing that week.",
};

// NOTE FOR DEV: This is a zero-infrastructure placeholder. It opens a
// pre-filled mailto instead of posting to an email service, so it works
// with no backend and no signup ever gets silently lost. Swap the <a>
// below for a real embed (Mailchimp, ConvertKit, Beehiiv, etc.) once an
// ESP account exists — at that point this becomes a real subscriber list
// instead of individual emails landing in the inbox.
export default function NewsletterPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-16 text-center">
      <div className="font-[var(--font-mono)] text-xs uppercase tracking-[0.3em] text-[var(--color-signal)] mb-4">
        Weekly · Free
      </div>
      <h1 className="font-[var(--font-display)] uppercase text-5xl mb-6">
        The Monday Brief
      </h1>
      <p className="text-lg text-[var(--color-muted)] mb-10 max-w-lg mx-auto">
        One real spec explained properly, plus what actually changed in
        gadget pricing that week — no affiliate spam, no "10 hot deals"
        filler. Straight from Flossa, every Monday morning.
      </p>

      <a
        href="mailto:hello@flossatech.com?subject=Subscribe%20me%20to%20the%20Monday%20Brief&body=Add%20me%20to%20the%20list%20%E2%80%94%20my%20email%20is%20attached%20above."
        className="inline-block font-[var(--font-mono)] text-sm uppercase tracking-wide bg-[var(--color-signal)] text-white px-8 py-4 rounded-sm hover:bg-[var(--color-signal-dim)] transition-colors"
      >
        Get the Monday Brief →
      </a>

      <p className="mt-6 text-xs text-[var(--color-muted)] font-[var(--font-mono)]">
        Opens your email app, pre-addressed. We're a small operation —
        signups are added by hand for now.
      </p>
    </div>
  );
}
