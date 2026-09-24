---
name: Luana Amaral — Biomédica Esteta
description: Premium aesthetic-medicine site where an active clinical registration is the hero content, carried by a warm off-white ground and a single teal/jade accent.
colors:
  paper: "#FAF8F5"
  paper-deep: "#F2EEE7"
  surface: "#FFFFFF"
  line: "#E6E0D6"
  line-strong: "#D8D0C2"
  ink-900: "#26231F"
  ink-700: "#413B35"
  ink-500: "#6B6259"
  teal-700: "#115E59"
  teal-600: "#0F766E"
  teal-500: "#14B8A6"
  teal-400: "#38B2A3"
  teal-100: "#D2F0EC"
  teal-50: "#ECF8F6"
  ok: "#2F6B44"
  err: "#9C4221"
typography:
  display:
    fontFamily: "Spectral, Georgia, \"Times New Roman\", serif"
    fontSize: "clamp(2.3rem, 4vw, 3.15rem)"
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Spectral, Georgia, \"Times New Roman\", serif"
    fontSize: "clamp(1.7rem, 3vw, 2.3rem)"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Spectral, Georgia, \"Times New Roman\", serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.14em"
  emphasis:
    fontFamily: "Spectral, Georgia, \"Times New Roman\", serif"
    fontSize: "1em"
    fontWeight: 500
    letterSpacing: "-0.015em"
rounded:
  xs: "8px"
  sm: "10px"
  md: "16px"
  lg: "20px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
  section-block: "clamp(3.5rem, 8vw, 6rem)"
  wrap: "1140px"
components:
  button-primary:
    backgroundColor: "{colors.teal-600}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.teal-700}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.5rem"
  button-ghost-hover:
    backgroundColor: "{colors.teal-50}"
  button-sm:
    padding: "0.6rem 1.25rem"
    height: "44px"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 0.95rem"
  input-field-focus:
    textColor: "{colors.ink-900}"
  card-contact-form:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "clamp(1.75rem, 4vw, 2.5rem)"
  icon-chip:
    backgroundColor: "{colors.teal-100}"
    textColor: "{colors.teal-700}"
    rounded: "{rounded.xs}"
    size: "44px"
  portrait-badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.md}"
    padding: "0.9rem 1.25rem"
---

# Design System: Luana Amaral — Biomédica Esteta

## Overview

**Creative North Star: "The Quiet Premium Clinic"**

This is a single-accent, warm off-white world built to put professional trust signals — an active CRBM registration, a decade of practice, a natural-result claim — ahead of decorative aesthetic-clinic imagery. It plays the premium med-spa category standard (the Sculpt / Lasch finish class) straight, chosen deliberately by the client: firm grid, sane typography, one discreet accent, and a real portrait plus credentials carrying the confidence. The page ground is never pure white (`#FAF8F5`); cards and inputs are the only pure-white surfaces; every neutral is warm-tinted charcoal, never pure gray. A single teal/jade family carries buttons, links, icon chips, focus rings, and background washes — nothing else competes for chromatic attention.

Spectral (a calm serif) sets the hero headline, every section title, the procedure names, and exactly one inline emphasis word; Hanken Grotesk carries everything a visitor actually reads or acts on, including feature-card and FAQ headings, which are deliberately sans rather than serif. Corners are moderate (8–20px) and never a pill — a deliberate break from the superseded rose-boutique world. Depth is neutral warm shadows with real offset and blur on a small set of lifted elements; there are no colored halos and no hard offset shadows. Surfaces are flat by default and 1px hairline borders do most of the separating.

The system explicitly rejects: the previous rose/serif "petal-frame" world (soft-rose accent, Fraunces, pill buttons, authored SVG petal clip-path); the "influencer aesthetic" hero built on glamour photography alone; and the three-giant-numbers stat template — replaced by a check-icon credential list. This world is not to be reintroduced toward the rose direction without a fresh client request.

**Key Characteristics:**
- Warm off-white ground (`#FAF8F5`), pure white reserved for cards/inputs, ink always warm-tinted charcoal.
- One accent: a teal/jade family on buttons, links, icons, washes, and focus.
- Spectral serif for titles and one emphasis word; Hanken Grotesk for everything else.
- Moderate radii (8–20px), never a pill; neutral warm shadows with real offset, never a halo.
- At most one bordered/shadowed card inside a section; repeated items use hairline dividers.
- One authored motion moment (the hero portrait wipe); everything below the fold is still.

## Colors

A warm off-white ground with a single teal/jade accent family and warm-tinted (never gray) ink; the accent does the same jobs everywhere it appears — fill, stroke, icon, wash, focus.

### Primary
- **Teal Deep** (`#115E59`, teal-700): primary-button hover fill, inline emphasis word (`em`), icon-chip glyph color, uppercase group/label text, input focus border.
- **Teal** (`#0F766E`, teal-600): primary-button rest fill, nav hover underline, FAQ chevron, focus-visible outline, input caret.
- **Teal Mid** (`#14B8A6`, teal-500): scrollbar-thumb hover only.
- **Teal Muted** (`#38B2A3`, teal-400): the empty-state dashed border, ghost-button hover border, scrollbar thumb, footer section-title text on the dark ground.
- **Teal Wash** (`#D2F0EC`, teal-100): icon-chip backgrounds, the offset portrait wash behind the hero photo, `::selection` background.
- **Teal Tint** (`#ECF8F6`, teal-50): ghost-button hover fill, portrait media placeholder fill.

### Neutral
- **Ink 900** (`#26231F`): headings (h1–h3), strong body lines, and the footer ground — the system's one dark surface. Also the shadow-tint source.
- **Ink 700** (`#413B35`): default body copy.
- **Ink 500** (`#6B6259`): secondary and meta text (credential sub-lines, procedure descriptions, placeholders).
- **Paper** (`#FAF8F5`): the page ground; also the header's translucent base.
- **Paper Deep** (`#F2EEE7`): alternating tinted sections (`.section--tint`), scrollbar track.
- **Surface** (`#FFFFFF`): cards, the contact form, inputs, the portrait credential badge.
- **Line** (`#E6E0D6`): default 1px hairline dividers and borders.
- **Line Strong** (`#D8D0C2`): ghost-button border, input border at rest — a hairline that needs to read against white.

### Tertiary (status only)
- **OK Green** (`#2F6B44`, ok): form success-status text only.
- **Error Rust** (`#9C4221`, err): form error text and error-state field borders only.

### Named Rules
**The One Accent Rule.** Teal/eucalyptus is the only chromatic family in the system. It never gains a second competing hue. `--ok` and `--err` are semantic status signals on the contact form only — never decoration, never applied outside form feedback.

**The Warm-Neutral Rule.** Every ink and neutral is warm-tinted (toward brown/olive). A pure `#000` / `#666` / `#ccc` gray anywhere in this system is a bug, not a variant.

**The White-Is-A-Surface Rule.** Pure white (`#FFFFFF`) is only ever a raised element — a card, an input, the form, the badge. The page and its tinted sections are always warm off-white.

## Typography

**Display Font:** Spectral (self-hosted; weights 400/500/600 + 500 italic; fallback Georgia, "Times New Roman", serif)
**Body Font:** Hanken Grotesk (self-hosted; weights 400/500/600/700; fallback -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)

**Character:** A calm, contemporary serif for titles and a single emphasized word, paired with a clean high-legibility grotesque for every working sentence, label, and control. The pairing reads as "registered premium clinic," not "med-spa flyer" and not "corporate healthcare." Headings are weight 500 with a slight negative tracking (`-0.015em`); the serif is never bolded past 600.

### Hierarchy
- **Display** (Spectral 500, `clamp(2.45rem, 5vw, 4.1rem)`, line-height 1.05, `-0.025em`): the hero `h1` only — the page's one bold element. Capped at `max-width: 15ch` with `text-wrap: balance`.
- **Headline** (Spectral 500, `clamp(1.7rem, 3vw, 2.3rem)`, line-height 1.18): every section `h2` (`.section__title`), capped at `max-width: 24ch`.
- **Title** (Spectral 400, 1.15rem, line-height ~1.3): procedure names in the two-column list. The only place Spectral appears at body scale.
- **Body** (Hanken 400, 16px, line-height 1.6): running copy. Leads run larger — 1.125rem in the hero, 1.0625rem in sections — at `max-width` 46–66ch.
- **Sans headings** (Hanken 600, ~1.05rem, letter-spacing 0): feature-list `h3` and the FAQ question. Deliberately sans, not serif, and explicitly de-tracked.
- **Label** (Hanken 500–600, 0.8–0.95rem, sentence case, no tracking): the brand role line under the logo and the procedure group titles ("Facial" / "Corporal"). Teal-700 text. No all-caps labels anywhere.

### Named Rules
**The Plain Headline Rule.** Headlines carry no inline accent: no italic or teal-colored word inside a heading. The hero `h1` does its work through size (up to ~4.1rem, line-height 1.05, `-0.025em`) and a concrete claim, not through a highlighted phrase.

**The Sans-Heading Rule.** Repeating sub-heads (feature cards, FAQ questions) are Hanken 600, not Spectral. The serif is reserved for the page's structural titles, procedure names, and the brand wordmark. Do not "upgrade" a component heading to serif.

**The Standalone-Title Rule.** Every section `h2` stands alone. No decorative kicker or eyebrow label sits above a section heading anywhere in this build. Uppercase labels exist only as the logo role line and as inline group titles within the procedures list.

## Layout

A centered `max-width: 1140px` wrapper (`.wrap`) with fluid inline padding (`clamp(1.25rem, 4vw, 2.5rem)`) holds every section. Sections carry a shared vertical rhythm of `clamp(3.5rem, 8vw, 6rem)` top/bottom and alternate between `--paper` and `--paper-deep` (`.section--tint`) for separation without borders or cards. The hero and contact sections are two-column grids — `1.08fr / 0.92fr` for the hero, `0.9fr / 1.1fr` for contact — that collapse to a single column at 960px; the hero's visual column reorders above the content column on mobile (`order: -1`). Feature list and procedures are two-column grids that also collapse to one column at 960px. Breakpoints are 960px (nav → hamburger, grids stack) and 560px (tighter hero padding, full-width stacked buttons, portrait wash and badge inset pulled in). The site is mobile-first in intent (matching PRODUCT.md's audience skew) though the CSS is authored desktop-first with `max-width` queries. Internal spacing is expressed with local rem values and `clamp()` rather than a global spacing scale; the durable spatial tokens are the wrapper width, the section rhythm, and the gutter.

## Elevation & Depth

The system is flat by default. Depth is conveyed by neutral, warm (ink-900-tinted) shadows with real offset **and** blur — never a colored halo, never a hard offset shadow — applied to a small set of lifted elements only. Everywhere else, 1px hairline borders (`--line` / `--line-strong`) do the separating. There are exactly three shadow steps.

### Shadow Vocabulary
- **`--shadow-sm`** (`0 1px 2px rgba(38,35,31,0.06), 0 3px 8px rgba(38,35,31,0.05)`): primary buttons at rest; the sticky header once `.is-scrolled`.
- **`--shadow-md`** (`0 2px 4px rgba(38,35,31,0.05), 0 18px 36px -14px rgba(38,35,31,0.16)`): the portrait media frame; the contact form card; primary button on hover.
- **`--shadow-lg`** (`0 4px 10px rgba(38,35,31,0.07), 0 34px 64px -26px rgba(38,35,31,0.20)`): the white CRBM credential badge overlapping the portrait — the single most-lifted element.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. A shadow appears as elevation (portrait, form card, badge) or as a response to state (button hover, header scrolled) — never as ambient decoration on every card.

**The No Card-in-Card Rule.** A bordered or shadowed container never nests another. The feature list, procedure lists, and FAQ use flat hairline dividers instead of card chrome. At most one such card per section.

**The Warm-Shadow Rule.** Every shadow is tinted `rgba(38,35,31,...)` (ink-900). No pure-black shadow, no teal-tinted glow, no hard/neobrutalist offset.

## Shapes

Radii scale with surface size and never reach a pill: `8px` (`--r-xs`, icon chips, skip-link), `10px` (`--r-sm`, buttons, inputs), `16px` (`--r-md`, the portrait credential badge), `20px` (`--r-lg`, portrait media, contact form card, empty-state panel). The focus-visible outline uses its own `3px` radius. Dividers are always 1px hairlines (`--line` or `--line-strong`), never a heavier rule. Icon chips are rounded squares (8px), not circles. The one recurring silhouette is the hero portrait: a 20px rounded rectangle sitting over an offset teal wash (`.portrait::before`, `inset: 1.6rem -1.6rem -1.6rem 1.6rem`, same 20px radius), with a white badge card overlapping the lower-left corner. There is no organic or clipped shape anywhere — the previous world's petal clip-path is gone.

### Named Rules
**The No-Pill Rule.** No `border-radius` at or near `999px` anywhere. Buttons are 10px. This is a deliberate, permanent break from the superseded world.

## Components

### Buttons
- **Shape:** gently rounded (10px, `--r-sm`); `inline-flex`, centered, 0.5rem gap for an optional leading/trailing icon.
- **Primary:** teal-600 fill, white text, weight 600, `0.85rem 1.5rem` padding, `--shadow-sm` at rest.
- **Hover / Focus:** primary darkens to teal-700, lifts 1px (`translateY(-1px)`), shadow deepens to `--shadow-md`. All controls share the global `:focus-visible` — a 2px teal-600 outline at 2px offset.
- **Ghost:** transparent fill, ink-900 text, 1px `--line-strong` border; hover shifts the border to teal-400 and fills teal-50.
- **Size / width variants:** `.btn--sm` (compact header CTA, `min-height: 44px`), `.btn--block` (full-width; mobile menu CTA and form submit).

### Chips (icon chips)
- **Style:** rounded square (8px), teal-100 background, teal-700 inline SVG glyph, no border. Sizes vary by context: 30px (hero credential row), 38px (badge), 44px (feature list), 52px (empty state).
- **Contact-list variant:** white background with a 1px `--line` border and teal-700 glyph — the one chip that inverts (used against a tinted section).
- **State:** decorative/static; chips never carry selected or filter states in this build.

### Cards / Containers
- **Corner Style:** large radius (20px, `--r-lg`) for the contact form and the empty-state panel; 16px for the portrait credential badge.
- **Background:** `--surface` white on a tinted section.
- **Shadow Strategy:** see Elevation — `--shadow-md` on the contact form; **no shadow** on the empty-state, which instead uses a 1px **dashed** `--teal-400` border to read honestly as "not yet populated."
- **Border:** 1px `--line` on the form and badge; 1px dashed `--teal-400` on the empty-state.
- **Internal Padding:** `clamp(1.75rem, 4vw, 2.5rem)` for the form; `clamp(2rem, 5vw, 3rem)` for the empty-state.

### Inputs / Fields
- **Style:** white background, 1px `--line-strong` border, 10px radius (`--r-sm`), `caret-color: var(--teal-600)`, ink-900 text, ink-500 placeholder. `select` and `textarea` share the treatment; `textarea` is `resize: vertical`, `min-height: 110px`.
- **Focus:** border shifts to teal-700 plus a `0 0 0 3px rgba(15,118,110,0.30)` ring (teal-600 at 30%); `outline: none` — the ring replaces it.
- **Error:** field border switches to `--err`; `.form-error` helper text is `--err` at 0.8rem with a reserved `min-height` so the layout never jumps.
- **Form status line:** centered, `min-height` reserved; `.is-success` → `--ok`, `.is-error` → `--err`.

### Navigation
- **Header:** `position: sticky`, glass at rest (`rgba(250,248,245,0.82)` + `backdrop-filter: blur(10px)`, transparent bottom border). On `.is-scrolled` (JS toggles at `scrollY > 8`) it gains a `--line` hairline border and `--shadow-sm`, and the background firms to `rgba(250,248,245,0.96)`.
- **Links:** Hanken 500, ink-700; hover goes ink-900 and draws a 2px teal-600 underline that `scaleX`-wipes in from the left.
- **Brand:** Spectral wordmark (1.3rem, ink-900) over an uppercase teal-700 role line (`Biomédica Esteta`).
- **Mobile (≤960px):** nav and header CTA hide; a `.menu-toggle` hamburger (≥44px target, bars animate into an X) opens a full-width `.mobile-nav` panel with stacked links (1px `--line` dividers) and a `.btn--block` CTA. Esc closes it.

### Portrait with Credential Badge (signature component)
The hero visual: `.portrait__media` is a 20px rounded rectangle (`aspect-ratio: 5 / 6`, `--shadow-md`) holding the professional photo, set over `.portrait::before` — a teal-100 wash offset down-right (`inset: 1.6rem -1.6rem -1.6rem 1.6rem`, 20px radius). A white `.portrait__badge` card (16px radius, 1px `--line`, `--shadow-lg`, `max-width: 240px`) overlaps the lower-left corner with a teal-100 shield-check icon chip and two lines: `Biomédica Esteta` / `CRBM 10922-5, registro ativo`. On mobile the badge spans full width (`left: 0.5rem; right: 0.5rem`) and the wash inset tightens.

### Credential Row (signature component)
`.trust-row` is the hero's proof strip: a check-icon list above a `--line` top border, each item a 30px teal-100 icon chip plus a strong line (ink-900, 600) over a muted line (ink-500, 0.8rem) — `CRBM 10922-5` / `+10 anos` / `100% naturais`, laid out as a three-column grid (one column under 560px). It is explicitly **not** a big-number stat bar; that template was refused.

### FAQ Accordion
Hairline-divided items (`--line` bottom border), no card. Question is a full-width `button`, Hanken 600, 1.05rem, ink-900, with a teal-600 chevron that rotates 180° when open. The answer animates open via `grid-template-rows: 0fr → 1fr` (0.3s). JS keeps one item open at a time.

## Do's and Don'ts

### Do:
- **Do** keep the page and tinted sections on warm off-white (`--paper` / `--paper-deep`) and reserve pure white for raised elements (cards, inputs, form, badge).
- **Do** carry all accent work with the one teal/jade family — fill (teal-600), hover/label/icon (teal-700), washes (teal-100), hover fills (teal-50).
- **Do** use 10px button radius and 8–20px elsewhere; scale the radius up with the surface.
- **Do** separate repeating items (features, procedures, FAQ) with 1px hairline dividers, not card chrome — at most one bordered/shadowed card per section.
- **Do** tint every shadow with `rgba(38,35,31,...)` and keep real offset + blur (`--shadow-sm/md/lg`).
- **Do** treat CRBM registration, "+10 anos," and the natural-result claim as first-viewport content in a check-icon list.
- **Do** render unconfirmed content (procedures, testimonials, contact details) as clearly-signalled placeholders; let the testimonials section stand as an honest dashed-border empty state rather than fabricate quotes.
- **Do** keep every `[data-reveal]` state visible-by-default in CSS; JS only arms the pending state via IntersectionObserver, with a 2500ms safety net and a try/catch force-reveal.
- **Do** confine authored motion to the hero portrait wipe (`clip-path: inset(0 0 100% 0)` → `inset(0 0 0 0)`, 0.9s `--ease-out`), with the teal wash sliding in from lower-left and the badge settling at +0.5s. Everything below the fold is static — no scroll fade-ups. `prefers-reduced-motion` neutralizes all of it.

### Don't:
- **Don't** use a pill or near-pill radius (`≈999px`) on anything. Buttons are 10px. This is a permanent break from the superseded rose-boutique world.
- **Don't** reintroduce that world's language: soft-rose accent, Fraunces, or an authored organic petal / clip-path silhouette. No client request, no reintroduction.
- **Don't** introduce a second accent hue, a pure-gray neutral, or a colored/halo/hard-offset shadow.
- **Don't** stack a bordered or shadowed container inside another (the No Card-in-Card rule).
- **Don't** set a feature-card or FAQ heading in Spectral — repeating sub-heads are Hanken 600. Reserve the serif for section titles, procedure names, and the wordmark.
- **Don't** add a kicker or eyebrow label above a section heading; every `h2` stands alone.
- **Don't** rebuild the hero credential row as a three-giant-numbers stat bar — it is a check-icon proof list.
- **Don't** spend a second authored motion moment anywhere else, and don't add scroll fade-ups to sections.
- **Don't** use all-caps tracked labels, middle-dot meta strings (`A · B`), or a `→` glyph appended to button text.
