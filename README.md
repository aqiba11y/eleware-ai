# Eleware AI — Landing Page

Production-ready landing page for **Eleware AI**, a done-for-you LinkedIn appointment setting agency. Single conversion goal: get visitors to book a free 30-minute discovery call via Calendly.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 14 (App Router) | Framework |
| TypeScript | 5 (strict) | Type safety |
| Tailwind CSS | 3 | Styling |
| Framer Motion | 12 | Animations |
| Lucide React | latest | Icons |
| CVA | 0.7 | Button variants |
| clsx + tailwind-merge | latest | Class utilities |
| Prettier + ESLint | 3 / 8 | Code quality |

---

## Setup

```bash
# Requires Node.js 20+

cd eleware-ai
npm install
npm run dev
# → http://localhost:3000

# Production build
npm run build && npm start
```

No environment variables required.

---

## How to Update Copy

**All copy lives in one file:** `lib/constants.ts`

Zero strings are hardcoded in components. To change any text on the site, edit the relevant constant:

```ts
export const HERO = {
  headlineWhite: "Your calendar.",
  headlinePurple: "Full of qualified calls.",
};

export const FAQS = [
  { q: "How fast will I see results?", a: "..." },
];
```

---

## How to Update the Calendly Link

In `lib/constants.ts`:

```ts
export const SITE = {
  calendly: "https://calendly.com/your-new-link-here",
};
```

Every "Book a Call" button on the site pulls from this single value.

---

## How to Add the Founder Photo

1. Add the photo to `public/images/` as `abdullah.jpg`
2. Recommended: square crop, minimum 840×840px, WebP or JPEG
3. No code change needed — the path is already wired in `lib/constants.ts`

Until the photo is present, a styled "AH" initials placeholder renders automatically.

---

## Folder Structure

```
/app
  layout.tsx        Root layout — fonts, metadata, Calendly CSS
  page.tsx          Page composition — all sections in order
  globals.css       Tailwind base + CSS custom properties
  sitemap.ts        Auto-generated sitemap
  robots.ts         robots.txt

/components
  /sections         One file per page section (Navigation → Footer)
  /ui               Reusable primitives (Button, Eyebrow, StatBlock, etc.)

/lib
  constants.ts      ALL copy and links — single source of truth
  utils.ts          cn() helper
  animations.ts     Framer Motion variants

/public
  /images           Add abdullah.jpg here for founder photo
  og-image.svg      Open Graph preview image
```

---

## Deploy to Vercel

1. Push the repo to GitHub
2. Import at vercel.com/new
3. No environment variables needed — click Deploy
4. Set `eleware.ai` as custom domain in Vercel project settings

---

## Brand System

Design matches the Eleware AI PDF brand document exactly:

- **Vertical purple bar** — 3px × 20px, left of every eyebrow label and logo
- **Stat cards** — `#1A1A2E` background, 3px `#7C5CFF` left border
- **Corner orbs** — stroke-only circles, no fill, low-opacity purple
- **Horizontal dividers** — 1px `rgba(255,255,255,0.06)` separating content blocks
- **Color tokens** — defined in `tailwind.config.ts` and `app/globals.css`
