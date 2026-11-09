# RANGREZ — Wedding Stories & Films

> **Har Pal Mein Ek Kahaani.**  
> Indian Wedding Photography & Cinematic Films | Civil Lines, Meerut, India

A high-performance, fully static production-ready website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Crafted with a bespoke Indian editorial design system utilizing Royal Indigo, Sindoor Red, Auspicious Marigold, Peacock Teal, and Warm Ivory paper surfaces.

---

## 1. Quick Start (Development & Production)

### Requirements
- Node.js `18.18+` or `20+` / `22+`
- npm or pnpm

### Commands
```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Create static production build
npm run build

# Start production server
npm start

# Run code linter
npm run lint
```

---

## 2. How to Edit Text & Content
Every single piece of copy, contact detail, navigation link, package deliverable, and FAQ lives in one central source of truth:
📂 `content/site.ts`

- **Change Brand & Taglines:** Update `siteContent.brand` (`name`, `legalName`, `tagline`, `city`, `metaDescription`).
- **Update Contact Information:** Edit `siteContent.contact` (`phoneDisplay`, `phoneRaw`, `email`, `address`, `hours`, `mapUrl`).
- **Edit Service Packages:** Add, edit, or adjust package deliverables inside `siteContent.servicePackages`.
- **Add or Edit FAQs:** Update `siteContent.faqs` by adding new questions, answers, and categories.

TypeScript strictly type-checks all fields—a missing required field will immediately prevent build errors.

---

## 3. How to Change Colours & Theme Tokens
Theme tokens are declared in two coordinated locations:
1. `content/site.ts` -> `siteContent.themeTokens`
2. `tailwind.config.ts` -> `theme.extend.colors`

Key Palette:
- **Warm Ivory (`#F8F2E8`):** Archival paper base (60%)
- **Royal Indigo (`#202447`):** Sovereign contrast foundation & headings (30%)
- **Sindoor Red (`#C94B3B`):** Sacred ceremonial accent for primary actions (10%)
- **Marigold Gold (`#E6A83A`):** Ceremonial haldi badges & highlights
- **Peacock Teal (`#287C78`):** Heritage accent

---

## 4. How to Swap the Logo
The logo is defined as a scalable vector SVG with zero external dependencies:
- **Vector Files:** `/public/logo.svg` and `/public/logo-mark.svg`
- **React Component:** `components/ui/Logo.tsx`
- **Favicon:** `app/icon.svg`

To swap with your own custom logo, replace `/public/logo.svg` and update the vector paths in `components/ui/Logo.tsx`.

---

## 5. How to Swap Images
All images are rendered via `components/ui/SmartImage.tsx`, which enforces fixed aspect ratios (4:5, 16:9, 4:3), focal-point positioning, and graceful offline fallback graphics.

1. Review `photos-needed.md` for exact shot descriptions, aspect ratios, and recommended pixel dimensions.
2. Place your high-resolution WebP or JPEG files in `/public/images/`.
3. Update the `src` path in `content/site.ts`.

---

## 6. Page Architecture (Strict 7 Canonical Routes)
1. **Home (`/`)**: Hero with Layout A split grid, sacred rituals trust strip, brand ethos, curated monographs, film spotlight, services overview, and FAQ preview.
2. **Our Story (`/our-story`)**: Meerut heritage, documentary philosophy, 4 craft pillars, and creative collective.
3. **Portfolio (`/portfolio`)**: Interactive category filtering across Bridal Portraits, Sacred Pheras, Haldi & Mehndi, Royal Palaces, and Emotional Candids.
4. **Wedding Films (`/wedding-films`)**: 16:9 cinematic film previews, live acoustic music notes, duration badges, and director's synopsis modals.
5. **Services & Packages (`/services-packages`)**: Detailed breakdown of The Shahi Heirloom, The Parampara Classic, and The Utsav Intimate collections.
6. **Journal (`/journal`)**: Magazine-style editorial essays and advice for couples with expandable inline reading modals.
7. **Contact / Book Us (`/contact`)**: Studio address, phone, WhatsApp direct link, Google Maps action, and an availability form with strict client-side validation.
- **Custom 404 (`/not-found.tsx`)**: Themed navigation fallback.

---

## 7. Deployment Instructions (Vercel)

This website is fully optimized for zero-configuration deployment to **Vercel**:

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the `photography_studio` repository.
4. Framework Preset: **Next.js** (Automatically detected).
5. Build Command: `npm run build`
6. Output Directory: `.next`
7. Click **Deploy**.

### Domain & DNS Records
Once deployed on Vercel:
1. Go to **Settings > Domains** in your Vercel Dashboard.
2. Add your custom domain (e.g. `rangrezweddings.com` and `www.rangrezweddings.com`).
3. Set your DNS records at your domain registrar:
   - **A Record**: `@` points to `76.76.21.21`
   - **CNAME Record**: `www` points to `cname.vercel-dns.com`

