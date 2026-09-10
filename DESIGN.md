---
name: Luana Amaral — Biomédica Esteta
description: Credential-forward aesthetic-medicine site where clinical registration is the hero content, carried by a single soft-rose accent and an authored organic petal frame.
colors:
  rose-50: "#FDF3F6"
  rose-100: "#FBE7ED"
  rose-200: "#F5CFDB"
  rose-300: "#EBADC0"
  rose-400: "#DC839D"
  rose-500: "#C85D7E"
  rose-600: "#A8425F"
  rose-700: "#82304A"
  ink-900: "#241A20"
  ink-700: "#4A3740"
  ink-500: "#83707A"
  surface-bg: "#FFFFFF"
  surface-bg-tint: "#FDF4F7"
  line: "#F1DDE4"
typography:
  display:
    fontFamily: "Fraunces, ui-serif, Georgia, serif"
    fontSize: "clamp(2.5rem, 5.5vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Fraunces, ui-serif, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.03em"
rounded:
  sm: "10px"
  md: "18px"
  lg: "32px"
  pill: "999px"
spacing:
  sm: "0.5rem"
  md: "1.25rem"
  lg: "2.5rem"
  section-block: "clamp(3.5rem, 8vw, 6.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.rose-600}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.rose-700}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.6rem"
  button-ghost-hover:
    backgroundColor: "{colors.rose-50}"
  card-elevated:
    backgroundColor: "{colors.surface-bg}"
    rounded: "{rounded.lg}"
    padding: "clamp(1.75rem, 4vw, 2.5rem)"
  input-field:
    backgroundColor: "{colors.surface-bg-tint}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1rem"
---

# Design System: Luana Amaral — Biomédica Esteta

## Overview

**Creative North Star: "The Credential-First Clinic"**

This is a single-accent, white-ground world built to put professional trust signals — CRBM registration, a decade of practice, a natural-result claim — ahead of decorative aesthetic-clinic imagery. The palette stays almost entirely white/near-white with one soft-rose accent carrying buttons, the headline's italic emphasis word, and the frame around the hero visual; nothing else competes with it for attention. Fraunces (serif, italicized for emphasis) supplies warmth and editorial credibility at display size, while Manrope carries every working sentence in a plain, legible sans. The system is calm and restrained rather than clinical-cold or spa-glossy: soft radii, rose-tinted diffuse shadows (never hard offset shadows, never gray), and a strict no-card-inside-card rule keep surfaces from stacking into visual noise.

The signature device is the petal-frame: an authored SVG `clipPath` built from hand-written cubic-bezier curves, not a circle, polygon, or radial-gradient standing in for organic shape. It is reserved for the hero's professional-photo slot; it is not a general-purpose container. The world explicitly rejects the generic "spa/influencer" hero built around glamour photography — the first viewport's real content is a credential stat bar (years of experience, active CRBM number, natural-result claim), not a beauty shot alone.

**Key Characteristics:**
- One accent (soft rose) on a white/near-white base; ink is always warm-tinted, never pure gray.
- Fraunces italic carries emphasis inline within sans-serif body copy — not a separate display block.
- Pill-shaped buttons, soft-to-large radii (10–32px), rose-tinted diffuse shadows only.
- One authored organic motif (the petal clip-path); everything else is geometric/circular icon chrome.
- No eyebrow/kicker labels above any section heading, anywhere.

## Colors

A near-white ground with a single soft-rose accent family and warm-tinted (never gray) ink; the accent is used sparingly and consistently for the same jobs everywhere it appears.

### Primary
- **Soft Rose** (`#A8425F`, rose-600): primary button fill, active nav underline, CRBM/brand-title label color, section eyebrow-style group titles (Procedimentos), form focus border.
- **Rose Deep** (`#82304A`, rose-700): primary button hover, emphasized inline word (`em`), error-state text/border.
- **Rose Pale** (`#FBE7ED` / `#FDF3F6`, rose-100/50): icon-chip backgrounds, ghost-button hover fill, petal-frame media fill before/behind the illustration.
- **Rose Mid** (`#DC839D`, rose-400): petal-frame outline stroke, scrollbar thumb hover.

### Neutral
- **Ink 900** (`#241A20`): headings (h1–h3), primary text on dark surfaces, footer background.
- **Ink 700** (`#4A3740`): default body copy color.
- **Ink 500** (`#83707A`): secondary/meta text (stat labels, procedure descriptions).
- **Surface White** (`#FFFFFF`): page background, cards, form background on focus.
- **Surface Tint** (`#FDF4F7`): alternating section background, resting form-field background.
- **Line** (`#F1DDE4`): all hairline dividers and borders.

### Named Rules
**The One Accent Rule.** Rose is the only chromatic color in the system. It never gains a second competing hue (no blue links, no green success unrelated to it) — the one exception is the form's success-status text, which uses a muted green (`#3f7d52`) purely as a semantic status signal, never as a decorative color.

**The Warm-Neutral Rule.** Ink and neutral tones are always warm-tinted (mixed toward rose/brown), never pure gray. A pure `#000`/`#666`/`#ccc` gray anywhere in this system is a bug, not a variant.

## Typography

**Display Font:** Fraunces (with ui-serif, Georgia, serif fallback)
**Body Font:** Manrope (with -apple-system, BlinkMacSystemFont, sans-serif fallback)

**Character:** A warm editorial serif for headings and one emphasized inline word, paired with a clean, high-legibility grotesque for everything a visitor actually has to read and act on — the pairing reads as "boutique clinic," not "med-spa flyer" or "corporate healthcare."

### Hierarchy
- **Display** (500, `clamp(2.5rem, 5.5vw, 4rem)`, line-height 1.08): hero headline only, max-width 14ch to keep it two lines.
- **Headline** (500, `clamp(1.75rem, 3.5vw, 2.5rem)`, line-height 1.15): every section `h2`, max-width 20ch.
- **Body/Lead** (400, 1.0625rem, line-height 1.6, max-width 62ch): section intro paragraphs.
- **Body** (400, 16px, line-height 1.6): running copy, FAQ answers, form labels' adjacent text.
- **Label** (600–700, 0.7–0.8rem, letter-spacing 0.03–0.08em, uppercase): brand title under the logo, procedure group titles, stat captions. Never used as a kicker above a section heading (see Do's and Don'ts).

### Named Rules
**The Single Emphasis Word Rule.** Fraunces italic (`em`, rose-700) marks exactly one emphasized word or short phrase inline within a sans-serif sentence — it is a punctuation device, not a second heading style. It never wraps a full sentence or heading.

## Layout

A centered `max-width: 1200px` wrapper (`.wrap`) with fluid inline padding (`clamp(1.25rem, 4vw, 2.5rem)`) holds every section. Sections use a shared vertical rhythm of `clamp(3.5rem, 8vw, 6.5rem)` top/bottom padding, and alternate between plain white and the tint background (`--bg-tint`) section-by-section for separation without borders or cards. The hero and Procedimentos/Diferenciais/Contato sections use two-column grids (content + visual, or two content groups) that collapse to a single stacked column at 960px; the hero's visual column reorders above the content column on mobile. Below 560px, spacing compresses further and hero actions stack full-width. The system is mobile-first in practice (matching PRODUCT.md's stated audience skew) even though the CSS is written desktop-first with max-width breakpoints.

## Elevation & Depth

The system is flat by default; depth is conveyed by soft, diffuse, rose- or ink-tinted shadows used sparingly on a small set of "lifted" elements (primary buttons, the floating credential badge, the contact form card, contact icon chips) — never as an ambient effect applied everywhere, and never as a hard-offset/neobrutalist shadow.

### Shadow Vocabulary
- **Button lift** (`box-shadow: 0 14px 28px -14px rgba(168, 66, 95, 0.55)`, deepening to `rgba(130, 48, 74, 0.6)` on hover): primary buttons only, paired with a 2px hover translateY.
- **Card lift** (`box-shadow: 0 30px 60px -30px rgba(74, 55, 64, 0.3)`): the contact form card — the system's one large elevated surface.
- **Badge lift** (`box-shadow: 0 24px 40px -18px rgba(74, 55, 64, 0.35)`): the floating CRBM credential badge over the hero visual.
- **Header shadow** (`box-shadow: 0 12px 30px -20px rgba(74, 55, 64, 0.35)`): appears only once `.is-scrolled` is toggled by JS (`scrollY > 8`) — the header is shadow-less and semi-transparent at rest.

### Named Rules
**The No Card-in-Card Rule.** A shadowed/bordered container never nests another shadowed/bordered container. The feature list, procedure lists, and FAQ items intentionally use flat top/bottom hairline dividers (`--line`) instead of card chrome for this reason.

## Shapes

Radii scale from small to large by surface size, never sharp-cornered: `10px` (inputs, skip-link) for small controls, `18px` (floating badge) for mid-size chrome, `32px` (contact form card, empty-state panel) for large surfaces, and a full `999px` pill for every button. Icon chips and the CRBM badge icon are perfect circles (`border-radius: 50%`). Dividers are always 1px hairlines in `--line`, never a heavier rule. The one non-rectangular, non-circular shape in the system is the petal frame: an authored organic silhouette via SVG `clipPath` with hand-tuned bezier curves, used exactly once (the hero visual) — it is a signature device, not a reusable container shape.

## Components

### Buttons
- **Shape:** full pill (`border-radius: 999px`).
- **Primary:** rose-600 fill, white text, 600 weight, `0.9rem 1.6rem` padding; carries the button-lift shadow.
- **Hover/Focus:** primary darkens to rose-700 and lifts 2px (`translateY(-2px)`) with a deeper shadow; all interactive elements share a visible 2px rose-600 focus ring with 3px offset (`:focus-visible`).
- **Ghost:** transparent fill, ink-900 text, 1.5px `--line` border; hover fills rose-50 and border shifts to rose-400.
- **Size variant:** `.btn--sm` (compact, header CTA) and `.btn--block` (full-width, mobile menu and form submit).

### Cards / Containers
- **Corner Style:** large radius (32px) for the two elevated surfaces in the system — the contact form and the Depoimentos empty-state panel.
- **Background:** white on a tint section background (contact form), or white with a dashed rose-300 border (empty-state, signaling "not yet populated" rather than a normal card).
- **Shadow Strategy:** see Elevation & Depth — diffuse ink-tinted shadow, no border, on the form; a dashed border with no shadow on the empty-state (deliberately less "finished" to read as a placeholder).
- **Internal Padding:** `clamp(1.75rem, 4vw, 2.5rem)`.

### Inputs / Fields
- **Style:** tint background (`--bg-tint`), 1.5px `--line` border, small radius (10px).
- **Focus:** border shifts to rose-500 and background lifts to white — no glow/ring, a color-and-surface shift instead.
- **Error:** border and helper text switch to rose-500/rose-700; error text has a reserved min-height so the layout doesn't jump.

### Navigation
- **Style:** header is `position: sticky`, glass at rest (`rgba(255,255,255,0.72)` + `blur(14px) saturate(160%)`, transparent bottom border), and gains an opaque-ish background (`rgba(255,255,255,0.92)`), a visible `--line` border, and the header shadow only once scrolled past 8px — an authored, state-driven transition, not a static glass panel.
- **Typography/states:** nav links are Manrope 500, ink-700; hover draws a rose-500 underline that animates in from the left (`scaleX` transform).
- **Mobile treatment:** nav collapses under 960px to a hamburger (`.menu-toggle`) that toggles a full-width `.mobile-nav` panel with stacked links and a block CTA; toggle animates into an X.

### Petal Frame (signature component)
The hero's organic photo/illustration frame: an SVG `clipPath` (`objectBoundingBox`, hand-authored cubic-bezier path) clips a media layer, with a matching outline path drawn on top and a soft radial rose glow behind it. On load, the outline draws itself in via a JS-measured `stroke-dashoffset` animation (`getTotalLength()`, animated over `1.2s` with the system's standard ease), then the floating CRBM credential badge (white pill, 18px radius, badge-lift shadow) settles into place ~550ms later. This is the one authored entrance moment in the system — everything else below the fold uses the calmer generic reveal or the stepped cascade (see Do's and Don'ts). Both the outline and the badge are visible-by-default in CSS; the animation is progressive enhancement only, wrapped in try/catch, with `prefers-reduced-motion` disabling it entirely. Currently frames an abstract line-art placeholder illustration (not a real photo), marked with an HTML TODO for the client's professional photo.

## Do's and Don'ts

### Do:
- **Do** reserve the petal `clipPath` motif for the hero visual only; it is a signature, not a reusable card shape.
- **Do** use the stepped per-item cascade (80–90ms `nth-child` transition-delay steps) for sections that repeat structurally identical items (feature lists, procedure lists, FAQ accordion items); use the single calm fade-up for plain-prose sections (Sobre, Depoimentos, Contato).
- **Do** keep every reveal/animation state visible-by-default in CSS, with JavaScript only arming the hidden state immediately before it commits to animating (try/catch-wrapped, with a forced-reveal safety net) — a scripting failure must never permanently hide real content.
- **Do** treat CRBM registration, years of experience, and the natural-result stat as first-viewport content, not footer-of-page trust badges.
- **Do** reuse ink-900 as the footer background — this is the system's one deliberate departure from the white/near-white base, an intentional closing-anchor convention, not an invented color.
- **Do** mark unconfirmed content (procedures list, WhatsApp number, consultation address, social links) with visible in-context placeholder language, and let an unconfirmed section (Depoimentos) render as an honest empty state rather than fabricated content.

### Don't:
- **Don't** stack a shadowed or bordered container inside another shadowed or bordered container (the No Card-in-Card rule) — use hairline dividers between repeated items instead.
- **Don't** add an eyebrow/kicker label above a section heading. Every heading in this build stands alone; this was applied even where the client's own reference layout showed one, and it is not open for a future surface to reintroduce.
- **Don't** substitute a circle, polygon, or CSS radial-gradient for the petal frame's organic contour — the shape must stay an authored bezier path.
- **Don't** introduce a second accent hue, a pure-gray neutral, or a hard-offset/neobrutalist shadow; the shadow vocabulary is exclusively soft and rose/ink-tinted.
- **Don't** apply the hero's authored draw-in/settle motion moment to any other element — it is reserved for the hero visual; other sections use the generic reveal or cascade.
