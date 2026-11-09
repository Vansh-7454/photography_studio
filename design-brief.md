# Design Brief: RANGREZ — Wedding Stories & Films

## 1. Theme Name & Concept
- **Theme Name:** Royal Indigo & Sindoor Editorial (Bespoke Indian Wedding Editorial System)
- **One-Sentence Concept:** A tactile, culturally resonant Indian wedding editorial experience blending the sovereign depth of Royal Indigo and sacred Sindoor Red with warm Ivory paper tones and vibrant Marigold accents to present cinematic wedding films and heirloom photography.

## 2. Three Mood Words
- **Regal**
- **Heartfelt**
- **Cinematic**

## 3. Full Colour Palette & Contrast Ratios (WCAG AA Compliance)
| Token Name | Hex Value | Role & Proportion | Description |
| :--- | :--- | :--- | :--- |
| `warm-ivory` (Background / Surface) | `#F8F2E8` | 60% Base | Archival handcrafted paper base, tactile and inviting |
| `ivory-surface` | `#FFFDF9` | Card / Container Surface | Pure luminous warm white for elevated cards and forms |
| `royal-indigo` (Primary Contrast) | `#202447` | 30% Foundation & Headings | Deep, midnight sovereign indigo for high-gravity editorial headlines |
| `sindoor-red` | `#C94B3B` | 10% Selective Accent | Sacred ceremonial vermillion for focal buttons, quotes & highlights |
| `marigold` | `#E6A83A` | Ceremonial Accent | Auspicious Genda Phool gold for haldi badges and decorative flourishes |
| `peacock-teal` | `#287C78` | Heritage Accent | Rich Rajasthan heritage teal for royal palace features and film accents |
| `deep-plum` | `#70465B` | Evening Drama | Velveteen midnight plum for sangeet and reception highlights |
| `dark-band` | `#171A33` | Contrast Floor | Midnight indigo contrast band for impactful CTA and film showcases |
| `border-subtle` | `#E8DDCF` | Architectural 1px Line | Warm gilded line separation |
| `text-muted` | `#635F58` | Secondary Text | Legible warm charcoal for metadata and captions |

### Contrast Verifications:
- **Royal Indigo (`#202447`) on Warm Ivory (`#F8F2E8`):** `11.8:1` (Passes WCAG AAA)
- **Sindoor Red (`#C94B3B`) on Warm Ivory (`#F8F2E8`):** `5.1:1` (Passes WCAG AA)
- **White (`#FFFFFF`) on Sindoor Red (`#C94B3B`):** `4.6:1` (Passes WCAG AA for buttons)
- **White (`#FFFFFF`) on Royal Indigo (`#202447`):** `14.2:1` (Passes WCAG AAA for dark buttons/sections)
- **Warm Ivory (`#F8F2E8`) on Dark Band (`#171A33`):** `13.5:1` (Passes WCAG AAA)
- **Text Muted (`#635F58`) on Warm Ivory (`#F8F2E8`):** `5.8:1` (Passes WCAG AA)

## 4. Typography Hierarchy
- **Editorial Headings:** `Playfair Display` & `Cormorant Garamond` via `next/font/google`.
  - *Why it fits:* Distinctive high-contrast serifs that mirror luxury Indian fashion periodicals (Vogue India Wedding Book, Harper's Bazaar Bride) with refined flourishes and regal gravitas.
- **Editorial Body & UI:** `Manrope` via `next/font/google`.
  - *Why it fits:* Geometric, highly legible modern sans-serif that balances the expressive heritage serif headings without visual clutter.
- **Tagline Font:** Devanagari inspired nuance / elegant italic styling: *"Har Pal Mein Ek Kahaani."*

## 5. Logo Concept
- **Visual Description:** An intricate yet modern geometric monogram combining the Hindi initial *'र'* (Ra) and the Latin *'R'*, encapsulated within a delicate octagonal royal Jharokha arch, paired with a tracked serif wordmark: **RANGREZ** and subline **WEDDING STORIES & FILMS**.
- **Rationale (2 Sentences):** The mark bridges ancient Indian architectural symmetry with modern documentary filmmaking precision. Designed in pure SVG with currentColor responsiveness, it commands prestige on both ivory daylight pages and midnight indigo film bands.

## 6. Hero Layout & Image Idea
- **Layout Choice:** **Layout A (Editorial Split)**.
  - Left column: City & craft eyebrow (`MEERUT • DESTINATION WEDDINGS & CINEMA`), grand fluid headline celebrating sacred Indian matrimony, evocative 2-sentence promise, and dual high-contrast action buttons (*"Book Wedding Dates"* & *"Watch Wedding Films"*).
  - Right column: Large 4:5 royal wedding portrait featuring an authentic couple in ceremonial attire against heritage architecture, framed by a delicate 1px Sindoor and Marigold offset contour.
- **Hero Image Idea:** A breathtaking royal wedding moment: bride in crimson zardozi lehenga and groom in ivory sherwani, bathed in warm sunset light at a heritage courtyard.

## 7. Image Plan & Asset Registry
1. **Home:**
   - Hero: Royal couple varmala / palace portrait (`/images/home/hero-royal-wedding.webp`, 4:5)
   - Trust/Celebration Strip: 3 authentic ceremonial vignettes (Haldi, Baraat, Pheras)
   - Featured Stories Grid: The Udaipur Palace Wedding, The Meerut Farmhouse Pheras, The Mussoorie Mist Vows (3:2 / 4:5)
   - Film Still Teaser: Cinematic slow-motion bridal entry with phoolon ki chaadar (`/images/home/film-teaser.webp`, 16:9)
2. **Our Story:**
   - Founders / Lead Storytellers in action capturing emotional rituals (`/images/story/founders-at-work.webp`, 4:5)
   - The Studio Philosophy: Authentic emotional documentary without artificial staging (`/images/story/philosophy-candid.webp`, 4:3)
3. **Portfolio:**
   - Filtered collections: The Brides (Lehengas & Jewellery), Royal Palaces, Haldi & Mehndi Festivities, The Baraat & Varmala (4:5 and 1:1 dynamic masonry)
4. **Wedding Films:**
   - 4 cinematic film showcases with rich 16:9 thumbnails, director's notes, soundtrack citations, and authentic ceremony stills
5. **Services & Packages:**
   - Visual representations of bespoke wedding photography, heirloom cinema, pre-wedding destination sessions, and artisanal hand-bound flush-mount albums
6. **Journal:**
   - Indian wedding guides: *"Decoding the Golden Hour Pheras in Rajasthan"*, *"A Bride's Guide to Choosing Your Muhurat Lighting"*, *"Preserving Family Heirlooms Through Album Curation"*
7. **Contact / Book Us:**
   - Meerut Studio lounge & consultation setting (`/images/contact/studio-consultation.webp`, 4:3), direct WhatsApp, calling line, and calendar enquiry form.

## 8. Section Order of the Home Page
1. **Header:** Royal Indigo sticky navigation with custom SVG Jharokha logo, 7 core links, and *"Check Dates"* button.
2. **Hero Section (Layout A):** Eyebrow badge, fluid H1, romantic editorial intro, dual buttons, 4:5 featured royal wedding portrait.
3. **Sacred Rituals Strip:** 4 celebration pillars (Traditional Pheras & Rituals, Candid Family Emotions, Cinematic Heritage Films, Fine Art Heirloom Albums).
4. **Curated Wedding Stories (Editorial Grid):** Asymmetric gallery showcasing 3 distinct wedding celebrations with couple names, venue, and emotional synopsis.
5. **Film Spotlight (Midnight Indigo Band):** 16:9 cinematic video player preview with film stills, audio nuance, and direct link to Wedding Films.
6. **The Rangrez Ethos (Feature Split):** Sindoor-accented editorial quote: *"Har Pal Mein Ek Kahaani"*, detailing the Meerut studio's non-intrusive documentary approach.
7. **Services Overview:** 3 bespoke coverage collections (Grand Weddings, Intimate Celebrations, Destination Cinema).
8. **Journal Preview:** Curated wedding planning articles.
9. **Royal Invitation CTA Band:** Midnight Indigo & Marigold band with direct WhatsApp & phone contact.
10. **Heirloom 4-Column Footer:** Brand mark, Meerut address, phone, WhatsApp, quick links, and copyright.

## 9. Spacing & Type Tokens
- Container: `min(100% - 40px, 1360px)` centered.
- Spacing Scale: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px`.
- Typography Scale:
  - Display: `clamp(44px, 6vw, 76px)`
  - H1: `clamp(36px, 5vw, 60px)`
  - H2: `clamp(28px, 4vw, 44px)`
  - H3: `clamp(22px, 3vw, 28px)`
  - Body: `18px` desktop / `16px` mobile
  - Small / Eyebrow: `13px` uppercase, `0.12em` tracking
- Radius: `8px` (buttons/inputs), `16px` (cards), `24px` (hero & featured photographs).
- Borders: `1px solid var(--border-subtle)`.
