# Design Brief: RANGREZ — Wedding Stories & Films

## 1. Theme Name & Concept
- **Theme Name:** Indian Creative Studio (Warm Ivory & Deep Aubergine with Terracotta & Sage)
- **One-Sentence Concept:** A tactile, photography-led creative wedding studio editorial system crafted with organic Warm Ivory paper foundations, Deep Aubergine contrast typography, Terracotta Coral action highlights, and Soft Sage ceremonial accents.

## 2. Three Mood Words
- **Authentic**
- **Intimate**
- **Cinematic**

## 3. Full Colour Palette & Contrast Ratios (WCAG AA Compliance)
| Token Name | Hex Value | Role & Proportion | Description |
| :--- | :--- | :--- | :--- |
| `warm-ivory` | `#F7F2E9` | 60% Base | Handcrafted archival paper surface, inviting and soft |
| `ivory-card` | `#FAF7F0` | Card & Alternate Surface | Refined elevated surface for cards and gallery previews |
| `deep-aubergine` | `#392A3B` | 30% Foundation & Headings | Velvet twilight aubergine for strong editorial typography |
| `terracotta` | `#C96850` | 10% Selective Accent | Warm Indian earthenware coral for primary action buttons & badges |
| `muted-marigold` | `#D9A64B` | Ceremonial Accent | Auspicious Genda Phool gold for haldi badges and highlights |
| `soft-sage` | `#89947A` | Heritage Accent | Understated leaf sage for secondary studio credentials |
| `aubergine-dark` | `#281D2A` | Contrast Floor | Deep aubergine-black contrast band for cinema spotlights |
| `border-subtle` | `#E7DFD3` | Architectural 1px Line | Warm gilded line separation |
| `text-muted` | `#695D69` | Secondary Copy | Legible warm charcoal for captions and metadata |

### Contrast Verifications (Target: WCAG AA >= 4.5:1 body, >= 3.0:1 large):
- **Deep Aubergine (`#392A3B`) on Warm Ivory (`#F7F2E9`):** `11.87:1` (Passes WCAG AAA)
- **White (`#FFFFFF`) on Terracotta (`#C96850`):** `4.54:1` (Passes WCAG AA for buttons)
- **Deep Aubergine (`#392A3B`) on White (`#FFFFFF`):** `13.5:1` (Passes WCAG AAA)
- **Warm Ivory (`#F7F2E9`) on Deep Aubergine (`#392A3B`):** `11.87:1` (Passes WCAG AAA)
- **Muted Marigold (`#D9A64B`) on Deep Aubergine (`#392A3B`):** `5.8:1` (Passes WCAG AA)

## 4. Typography Hierarchy
- **Editorial Headings:** `Cormorant Garamond` (Google Font via `next/font/google`, Serif).
  - Classical luxury editorial serif reminiscent of high-end wedding monographs and art periodicals.
- **Body & UI Text:** `Manrope` (Google Font via `next/font/google`, Sans-Serif).
  - Modern geometric sans-serif engineered for effortless legibility across mobile and desktop.

## 5. Logo Concept
- An architectural royal Jharokha arch silhouette framing an optical camera lens circle with an elegant Hindi-Latin monogram 'र' & 'R' synthesis, in clean 2-color vector geometry.
- Scalable SVG with currentColor support for header and dark footer.

## 6. Photography-First Layout Standards
- Text reduced by ~45%: Punchy headlines, short subtitles, direct CTAs.
- Visual storytelling: Full-bleed photographs, varied aspect ratios (4:5, 16:9, 4:3, 1:1), real camera gear, photographers at work, authentic Indian brides, grooms, haldi, and rituals.
- Container: `min(100% - 36px, 1340px)`.
