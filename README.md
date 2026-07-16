# Unipal — Landing Page

A statically-exported [Next.js](https://nextjs.org) landing page, built to be hosted
on **GitHub Pages**. Sections are based on [brijr/craft](https://github.com/brijr/craft)
and [brijr/components](https://github.com/brijr/components), but rewritten so **all copy
lives in props at the call site** instead of being hardcoded inside the components.

## Two things you'll edit

| You want to change…            | Edit this file                                  |
| ------------------------------ | ----------------------------------------------- |
| **Copy / content** (words, links, prices) | [`src/app/page.tsx`](src/app/page.tsx)   |
| **Design tokens** (colors, radius) | [`src/app/globals.css`](src/app/globals.css) |
| **Fonts**                      | [`src/app/layout.tsx`](src/app/layout.tsx)      |

Everything else — the section components — you shouldn't need to touch.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

## Editing content (for copywriters)

Open [`src/app/page.tsx`](src/app/page.tsx). Each section is a component whose
props _are_ the content. No layout or CSS in here — just fill in the strings:

```tsx
<Hero
  title="Your whole university life, in one friendly app."
  subtitle="Unipal helps you find your people…"
  primaryCta={{ label: "Get started free", href: "#download" }}
/>
```

To reorder the page, move the blocks around. To drop a section, delete its block.
TypeScript will tell you if a required field is missing.

### Available sections

The full [brijr/components](https://github.com/brijr/components) catalog is
ported here — every variant, refactored so its content comes from props. Import
any of them from `@/components/sections`:

| Group    | Variants                                                                 |
| -------- | ------------------------------------------------------------------------ |
| Heros    | `HeroOne`–`HeroSix`                                                       |
| Headers  | `HeaderOne`, `HeaderTwo`                                                  |
| Features | `FeatureOne`–`FeatureNine`                                                |
| CTAs     | `CtaOne`–`CtaFour`                                                        |
| FAQs     | `FaqsOne`, `FaqsTwo`                                                      |
| Pricing  | `PricingOne`–`PricingFour`                                               |
| Footers  | `FooterOne`–`FooterFive`                                                  |
| Nav      | `SiteNav` (lightweight sticky nav)                                        |

Variants within a group share the same content props, so swapping `PricingOne`
for `PricingThree` (or `HeroOne` for `HeroFive`) is usually a one-word change.
The example [`page.tsx`](src/app/page.tsx) showcases a representative selection.

**Lightweight by design:** the interactive originals were ported without heavy
dependencies — FAQs use native `<details>`, the feature carousel uses CSS
scroll-snap, email CTAs use a native `<form action=…>`, and the slider/tab
pricing variants are static. No `react-hook-form`, `zod`, `embla`, or
`react-wrap-balancer`.

## Editing the theme (design tokens)

All tokens live at the top of [`src/app/globals.css`](src/app/globals.css) as plain
values. Change one and it updates everywhere:

```css
:root {
  --background: #fffcee;         /* page background (warm cream) */
  --primary: #005427;            /* primary button surface */
  --primary-foreground: #ddffa9; /* primary button text */
  --soft: #ddffa9;               /* "soft" button surface */
  --soft-foreground: #005427;    /* "soft" button text */
  --btn-radius: 0.625rem;        /* button corner radius */
  --card-radius: 1rem;           /* card corner radius */
}
```

These map to Tailwind utilities (`bg-primary`, `bg-soft`, `rounded-button`,
`rounded-card`, …) that the components already use.

### Fonts

Three roles, three fonts, wired via `next/font` in
[`src/app/layout.tsx`](src/app/layout.tsx):

- **Display** (`h1`, `h2`) → Fraunces
- **Headings** (`h3`–`h6`) → Inter Tight
- **Body** → Inter

Swap a font by changing the import in `layout.tsx`; the CSS variable names in
`globals.css` stay the same.

## Adding a new section

1. Create `src/components/sections/my-section.tsx`. Define a `Props` type where
   every piece of text/link is a field, then lay it out with the `Section` /
   `Container` primitives from `@/components/craft/craft`.
2. Export it from [`src/components/sections/index.ts`](src/components/sections/index.ts).
3. Use it in `page.tsx`.

## Deploying to GitHub Pages

This repo ships a workflow at
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) that builds the
static export and publishes it.

1. Push to `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Every push to `main` redeploys automatically.

### Custom domain

This project is configured to be served from the **root** of a domain (no
`basePath`). To attach your domain:

- **Settings → Pages → Custom domain** → enter your domain. GitHub creates and
  manages the `CNAME` file for you.

> If you instead host at `https://<user>.github.io/<repo>/`, set `basePath` and
> `assetPrefix` in [`next.config.ts`](next.config.ts) (there's a commented
> example) so assets resolve under the sub-path.

## Project structure

```
src/
├─ app/
│  ├─ globals.css        # ← design tokens (colors, radius, fonts)
│  ├─ layout.tsx         # ← fonts + <html> shell
│  └─ page.tsx           # ← the landing page content (call site)
├─ components/
│  ├─ craft/craft.tsx    # layout primitives (Section, Container, Nav, Main)
│  ├─ ui/               # Button, Badge, Card, Input (token-driven)
│  ├─ icons/brand.tsx    # social SVGs (lucide dropped its brand icons)
│  └─ sections/          # the ported brijr catalog, grouped by type
│     ├─ heros/  headers/  features/  ctas/  faqs/  pricing/  footers/
│     ├─ types.ts        # shared content shapes (CTA, PricingPlan, …)
│     └─ index.ts        # barrel — import everything from here
└─ lib/utils.ts          # cn() class merge helper
```
