# Flossatech — Image Guide

The site now expects 14 real photos. None are included in this repo —
download them yourself (Unsplash is free, no attribution legally
required, though crediting the photographer is a nice practice) and
drop each one at the exact path below. The code is already wired to
these paths; nothing else needs to change once the files exist.

**Format:** JPG, landscape orientation, at least 1600px wide.
**Aspect ratio to look for:** roughly 16:9 — the code crops to fit, but
starting close to that ratio avoids awkward crops on faces/text.

## 1. Homepage hero

**File:** `public/images/hero-workbench.jpg`
**Unsplash search:** `electronics repair workbench` or `soldering desk tools`
**What to look for:** an overhead or angled shot of a lived-in
workbench — screwdriver set, an opened-up gadget, maybe a soldering
iron, warm desk-lamp light. Avoid sterile "product photography on white
background" shots; this one wants texture and a sense of hands-on work,
since it appears behind text with a dark overlay (30% opacity), so
avoid anything with important detail dead-center where the headline
text sits.

## 2. Category thumbnails (used on homepage, /blog listing, and article headers)

Each of these needs to be a clean, well-lit photo of the category
subject — think "this is what the article is about," not abstract tech
mood shots.

| File | Unsplash search | What to look for |
|---|---|---|
| `public/images/categories/smartphones.jpg` | `smartphones flat lay` | A few phones arranged on a flat surface, screens visible |
| `public/images/categories/accessories.jpg` | `phone charger cables desk` | Charging cables/power bank, tidy desk arrangement |
| `public/images/categories/smart-home.jpg` | `robot vacuum living room` | A robot vacuum on a rug or hard floor |
| `public/images/categories/audio.jpg` | `wireless headphones desk` | Over-ear or earbuds resting on a surface, not worn |
| `public/images/categories/laptops.jpg` | `laptop desk workspace` | Open laptop, natural desk setting |
| `public/images/categories/wearables.jpg` | `smartwatch wrist closeup` | Close-up of a smartwatch on a wrist |
| `public/images/categories/networking.jpg` | `wifi router home office` | A router on a shelf or desk |
| `public/images/categories/gadgets.jpg` | `e-reader kindle book` | An e-reader next to or on a physical book |
| `public/images/categories/cameras.jpg` | `action camera outdoor gear` | An action camera, ideally mounted on gear (helmet, bike, bag) |
| `public/images/categories/displays.jpg` | `gaming monitor setup desk` | A monitor lit up on a desk, ideally with visible bezel/stand |
| `public/images/categories/tablets.jpg` | `tablet stylus flat lay` | A tablet with a stylus resting on or next to it |
| `public/images/categories/automotive-tech.jpg` | `dash cam windshield car` | A dash cam mounted on a car windshield |
| `public/images/categories/storage.jpg` | `external ssd drive laptop` | A small portable SSD, ideally next to a laptop for scale |

Every article's category maps to one of the 13 files above via
`lib/categoryImages.ts` — articles sharing a category share the same
image, which is intentional (13 photos cover all 20 articles cleanly).

## On the author photo — a flag, not a fix I made for you

I did **not** add a real human photo for Flossa's author bio, and I'd
actually recommend against it. Flossa is a persona I invented at your
request, not a real journalist — putting a real stranger's stock photo
next to that name and bio would mean claiming a specific real person
wrote these articles when they didn't. That's a step beyond an invented
byline (which is common and fine) into something closer to
impersonation, and it cuts against the whole "we show our sourcing
honestly" positioning the site is built on.

The monogram circle ("F") currently used in the header/bio is the
safer choice and I'd leave it as-is. If you want something more
visual than a letter, a commissioned illustrated avatar (not a photo
of a real person) is the honest alternative — happy to help wire that
in if you go that route later.

## After you add the files

```bash
git add public/images
git commit -m "Add category and hero images"
git push
```

No code changes needed — the paths are already live in the codebase.
