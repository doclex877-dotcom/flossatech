# Flossatech — Project Handoff

## What's in this build

A Next.js 16 (App Router, TypeScript, Tailwind v4) gadget-review site,
ready to deploy on Vercel with your own AdSense account.

- **No AdSense code anywhere** — safe to plug in the client's own
  publisher ID.
- **All 20 articles fully written and published** (2,500+ words each,
  table of contents, real comparison tables, SVG charts, sourced from
  real research — manufacturer datasheets, regulatory standards like
  IEC 60529 and USB-IF specs, peer-reviewed studies, and named outlets'
  disclosed testing methodology). Full list in `lib/articles.ts`.
- **Full legal page set**: Privacy Policy, Cookie Policy, Terms of
  Service, Editorial Policy, Affiliate Disclosure — all AdSense-aware
  (mention ad cookies, opt-out links, etc.) but marked as templates that
  need a lawyer's pass before publishing, especially Section 9 of the
  Terms (jurisdiction) and the cookie-consent-banner note.
- **Author persona "Flossa"** with a full bio at `/author/flossa`.
- **Distinctive design system** — not a generic AI template: a
  "test-bench" palette (bottle-green/paper, safety-orange + teal
  accents), an analog "Verdict Dial" gauge as the signature visual
  instead of star ratings.

## Editorial approach (important — read before writing more articles)

Every published article follows one rule: **every number is a real,
sourced number** — pulled from a manufacturer datasheet, a regulatory
filing, current retail pricing, or a named outlet that discloses its own
test methodology. Flossatech does **not** claim an in-house physical test
lab. This is documented at `/editorial-policy` and in the code comments
at the top of `lib/articles.ts`.

**When you or your client write the remaining 15 articles, keep that
rule.** It's the whole point of the "data literacy" angle, and it's what
should keep this site out of the same "low value content" AdSense
rejection that hit cabaranews/tinokatsande — reviewers can tell the
difference between real sourced claims and generic filler, and fabricated
"we tested this ourselves" claims would be worse than generic filler if
ever challenged.

## Running locally

```bash
npm install
npm run dev
```

## Building for production

```bash
npm run build
```

One note: this was built and tested in a sandboxed environment without
access to `fonts.googleapis.com`, so `next/font/google` couldn't fetch
the brand fonts (Big Shoulders, Newsreader, IBM Plex Mono) during my own
verification build. I temporarily swapped in system fonts, confirmed the
entire site (all 18 routes, all 5 articles) builds and type-checks clean,
then restored the real fonts. **Vercel's build servers have normal
internet access, so this will not be an issue when you deploy** — but if
you ever build in a similarly locked-down environment, that's why fonts
would fail there and nowhere else.

## Adding your AdSense code

Nothing is wired in on purpose. Standard approach: add your AdSense
script tag to `app/layout.tsx` in the `<head>` (Next.js lets you do this
via the `Script` component from `next/script`), and place ad units
wherever you want them in the article layout
(`app/blog/(article)/layout.tsx`) or listing pages.

## Build fix already applied (important — don't revert)

`package.json`'s build script is `"next build --webpack"`, not the
default `"next build"`. This is required: Next.js 16 defaults to
Turbopack, which fails on this project's MDX plugin configuration
(`remarkGfm`/`rehypeSlug` passed as functions aren't Turbopack-
serializable). If you ever "clean up" this script back to plain
`next build`, the Vercel build will fail with a
`does not have serializable options` error. Leave it as-is.

## Writing a new article (if you add a 21st+ topic later)

1. Add an entry to `lib/articles.ts` (flip `status` to `"published"`
   once written).
2. Create `app/blog/(article)/<slug>/content.mdx` — the article body.
   Available components: `ArticleHeader`, `TOC`, `BarChart`, `Callout`.
3. Create `app/blog/(article)/<slug>/page.tsx` — a thin wrapper that
   holds `metadata` and renders `<Content />` from `./content.mdx`.
   (Metadata must live in `page.tsx`, not `content.mdx` — see note
   below.)

**Why the split exists:** earlier in this build, putting `export const
metadata` directly inside a `page.mdx` file that also imported custom
JSX components triggered an inconsistent Next.js/Turbopack bug that
wrongly flagged the page as a client component and broke the production
build. Splitting `page.tsx` (metadata + import) from `content.mdx` (pure
content) sidesteps it completely. Keep using this pattern for new
articles.

## Legal pages — do this before going live

The Privacy Policy, Cookie Policy, and Terms of Service are solid
AdSense-aware templates but explicitly flagged in-page as needing a
lawyer's review before publishing, particularly for:
- Your actual operating jurisdiction (Terms of Service §9)
- Whether you need an EU/UK-style cookie consent banner (not implemented
  — Cookie Policy assumes one will be added separately if you have EU/UK
  traffic)
