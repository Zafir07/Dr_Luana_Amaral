---
name: Luana Amaral — Biomédica Esteta
description: Premium aesthetic-medicine site where an active clinical registration is the hero content, carried by a warm off-white ground, a single teal/jade accent, and WhatsApp as the one conversion path.
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
typography:
  display:
    fontFamily: "Spectral, Georgia, \"Times New Roman\", serif"
    fontSize: "clamp(2.45rem, 5vw, 4.1rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Spectral, Georgia, \"Times New Roman\", serif"
    fontSize: "clamp(1.7rem, 3vw, 2.3rem)"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "-0.015em"
  group-title:
    fontFamily: "Spectral, Georgia, \"Times New Roman\", serif"
    fontSize: "clamp(1.5rem, 2.4vw, 1.9rem)"
    fontWeight: 400
    lineHeight: 1.2
  title:
    fontFamily: "Spectral, Georgia, \"Times New Roman\", serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.3
  subhead:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0"
  body:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.3
rounded:
  xs: "8px"
  sm: "10px"
  md: "16px"
  lg: "20px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
  section-block: "clamp(3.5rem, 8vw, 6rem)"
  split-gap: "clamp(1.5rem, 5vw, 5rem)"
  anchor-offset: "4.5rem"
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
  button-lg:
    padding: "1rem 1.6rem"
    height: "52px"
  text-link:
    textColor: "{colors.teal-700}"
  icon-chip:
    backgroundColor: "{colors.teal-100}"
    textColor: "{colors.teal-700}"
    rounded: "{rounded.xs}"
    size: "30px"
  portrait-badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.md}"
    padding: "0.9rem 1.25rem"
  map-card:
    backgroundColor: "{colors.teal-50}"
    rounded: "{rounded.lg}"
    height: "420px"
  booking-bar:
    backgroundColor: "{colors.paper}"
    padding: "0.75rem clamp(1.25rem, 4vw, 2.5rem)"
---

# Design System: Luana Amaral — Biomédica Esteta

## Overview

**Creative North Star: "The Quiet Premium Clinic"**

This is a single-accent, warm off-white world built to put professional trust signals — an active CRBM registration, a decade of practice, a natural-result claim — ahead of decorative aesthetic-clinic imagery. It plays the premium med-spa category standard (the Sculpt / Lasch finish class) straight, chosen deliberately by the client: firm grid, sane typography, one discreet accent, and a real portrait plus credentials carrying the confidence. The page ground is never pure white (`#FAF8F5`); the credential badge is the only pure-white surface; every neutral is warm-tinted charcoal, never pure gray. A single teal/jade family carries buttons, links, the credential check chips, focus rings, and background washes — nothing else competes for chromatic attention.

The page reads as an editorial column system rather than a stack of centred blocks: section titles sit in a narrow left column and content runs in a wider right column, and repeating content (differentiators, procedures, FAQ, contact details) is set as hairline-ruled rows, not cards. Spectral (a calm serif) sets the hero headline, every section title, the procedure group titles and procedure names; Hanken Grotesk carries everything a visitor actually reads or acts on, including differentiator and FAQ headings, which are deliberately sans rather than serif. Corners are moderate (8–20px) and never a pill — a deliberate break from the superseded rose-boutique world. Depth is neutral warm shadows with real offset and blur on a small set of lifted elements; there are no colored halos and no hard offset shadows.

WhatsApp is the only conversion path. Every primary button on the page opens the same prefilled `wa.me` conversation — header, mobile menu, hero, contact section, and the mobile booking bar. There is no e-mail form.

The system explicitly rejects: the previous rose/serif "petal-frame" world (soft-rose accent, Fraunces, pill buttons, authored SVG petal clip-path); the "influencer aesthetic" hero built on glamour photography alone; and the three-giant-numbers stat template — replaced by a check-icon credential list. This world is not to be reintroduced toward the rose direction without a fresh client request.

**Key Characteristics:**
- Warm off-white ground (`#FAF8F5`), pure white reserved for the raised credential badge, ink always warm-tinted charcoal.
- One accent: a teal/jade family on buttons, links, check chips, washes, and focus.
- Spectral serif for titles, group titles and procedure names; Hanken Grotesk for everything else.
- Split editorial layout: title left (0.8fr), content right (1.2fr); repeated items are hairline rows, never cards.
- Moderate radii (8–20px), never a pill; neutral warm shadows with real offset, never a halo.
- One conversion path (WhatsApp) and one authored motion moment (the hero portrait wipe); everything below the fold is still.

## Colors

A warm off-white ground with a single teal/jade accent family and warm-tinted (never gray) ink; the accent does the same jobs everywhere it appears — fill, stroke, icon, wash, focus, link.

### Primary
- **Teal Deep** (`#115E59`, teal-700): primary-button hover fill, procedure group titles ("Facial" / "Corporal"), brand role line, check-chip and badge glyphs, the hero location pin and map-fallback pin, `.text-link` text, FAQ question hover.
- **Teal** (`#0F766E`, teal-600): primary-button rest fill, nav hover underline, FAQ chevron, focus-visible outline.
- **Teal Mid** (`#14B8A6`, teal-500): scrollbar-thumb hover only.
- **Teal Muted** (`#38B2A3`, teal-400): ghost-button hover border, `.text-link` underline at rest, scrollbar thumb, footer role-line text and footer link hover on the dark ground.
- **Teal Wash** (`#D2F0EC`, teal-100): check-chip and badge-icon backgrounds, the offset portrait wash behind the hero photo, `::selection` background.
- **Teal Tint** (`#ECF8F6`, teal-50): ghost-button hover fill, portrait media placeholder fill, the map card's ground behind its fallback panel.

### Neutral
- **Ink 900** (`#26231F`): headings (h1–h3), procedure names, contact detail values, the ink rule that opens the procedures block, and the footer ground — the system's one dark surface. Also the shadow-tint source.
- **Ink 700** (`#413B35`): default body copy and leads.
- **Ink 500** (`#6B6259`): secondary and meta text (credential sub-lines, procedure descriptions, the procedures section note, `dt` labels in the contact details, the hero location line).
- **Paper** (`#FAF8F5`): the page ground; also the translucent base of the header and the mobile booking bar.
- **Paper Deep** (`#F2EEE7`): alternating tinted sections (`.section--tint`: Diferenciais, Dúvidas), scrollbar track.
- **Surface** (`#FFFFFF`): the portrait credential badge.
- **Line** (`#E6E0D6`): default 1px hairlines — row dividers inside procedure lists and contact details, header and booking-bar borders, badge and map-card borders.
- **Line Strong** (`#D8D0C2`): the structural hairlines — Diferenciais and FAQ row rules, procedure group separators, the top rule of the contact details, ghost-button border.

The footer uses two warm hard-coded neutrals on the ink-900 ground (`#CFC9C0` body, `#ABA396` legal line) with white links; they are footer-local, not system tokens.

### Named Rules
**The One Accent Rule.** Teal/eucalyptus is the only chromatic family in the system. It never gains a second competing hue. There are no status colors: with the form gone, nothing on the page signals success or error.

**The Warm-Neutral Rule.** Every ink and neutral is warm-tinted (toward brown/olive). A pure `#000` / `#666` / `#ccc` gray anywhere in this system is a bug, not a variant.

**The White-Is-A-Surface Rule.** Pure white (`#FFFFFF`) is only ever a raised element — today, the credential badge. The page and its tinted sections are always warm off-white.

## Typography

**Display Font:** Spectral (self-hosted; weights 400/500/600 + 500 italic; fallback Georgia, "Times New Roman", serif)
**Body Font:** Hanken Grotesk (self-hosted; weights 400/500/600/700; fallback -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)

**Character:** A calm, contemporary serif for structural titles and the procedure catalogue, paired with a clean high-legibility grotesque for every working sentence, label, and control. The pairing reads as "registered premium clinic," not "med-spa flyer" and not "corporate healthcare." Headings are weight 500 with a slight negative tracking (`-0.015em`); the serif is never bolded past 600.

### Hierarchy
- **Display** (Spectral 500, `clamp(2.45rem, 5vw, 4.1rem)`, line-height 1.05, `-0.025em`): the hero `h1` only — the page's one bold element. Capped at `max-width: 15ch` with `text-wrap: balance`.
- **Headline** (Spectral 500, `clamp(1.7rem, 3vw, 2.3rem)`, line-height 1.18): every section `h2` (`.section__title`), capped at `max-width: 24ch` with `text-wrap: balance`.
- **Group title** (Spectral 400, `clamp(1.5rem, 2.4vw, 1.9rem)`, line-height 1.2, teal-700): the procedure group `h3`s ("Facial", "Corporal") in the left column of each group — sentence case, the one place the serif carries accent color.
- **Title** (Spectral 400, 1.25rem, line-height 1.3, ink-900): procedure names in the name | description rows.
- **Subhead** (Hanken 600, 1.05rem, letter-spacing 0, ink-900): Diferenciais `h3`s and FAQ questions. Deliberately sans, not serif, and explicitly de-tracked.
- **Body** (Hanken 400, 16px, line-height 1.6): running copy. Leads run larger — 1.125rem in the hero, 1.0625rem in sections — at `max-width` 46–60ch; row descriptions step down to 0.925–0.975rem.
- **Label** (Hanken 500–600, 0.8–0.9rem, sentence case, no tracking): the brand role line under the logo (0.8rem 500 teal-700), contact-detail `dt`s (0.875rem 600 ink-500), the hero location line (0.9rem ink-500). No all-caps labels anywhere.

### Named Rules
**The Plain Headline Rule.** Headlines carry no inline accent: no italic or teal-colored word inside a heading. The hero `h1` does its work through size (up to ~4.1rem, line-height 1.05, `-0.025em`) and a concrete claim, not through a highlighted phrase.

**The Sans-Heading Rule.** Repeating sub-heads (Diferenciais items, FAQ questions) are Hanken 600, not Spectral. The serif is reserved for the page's structural titles, procedure group titles and names, and the brand wordmark. Do not "upgrade" a component heading to serif.

**The Standalone-Title Rule.** Every section `h2` stands alone. No decorative kicker or eyebrow label sits above a section heading anywhere in this build, and there are no uppercase tracked labels at all — the brand role line and group titles are sentence case.

## Layout

A centered `max-width: 1140px` wrapper (`.wrap`) with fluid inline padding (`clamp(1.25rem, 4vw, 2.5rem)`) holds every section. Sections carry a shared vertical rhythm of `clamp(3.5rem, 8vw, 6rem)` top/bottom, a `scroll-margin-top: 4.5rem` so in-page anchors land clear of the sticky header, and alternate between `--paper` and `--paper-deep` (`.section--tint`) for separation without borders or cards.

The page's structural device is the **split**: `.split` is a two-column grid, `minmax(0, 0.8fr) minmax(0, 1.2fr)`, gap `clamp(1.5rem, 5vw, 5rem)`, title left and content right. Sobre, Diferenciais and Dúvidas use it; in Diferenciais and Dúvidas the title is `.split__sticky` (`position: sticky; top: 7rem`) so it holds while the list scrolls past on desktop. Procedimentos uses the same column proportions in two places: `.section__head` (title left, section note right, bottom-aligned) and each `.procedures__group` (group title left, rows right). The hero is `1.08fr / 0.92fr` and the contact section `0.85fr / 1.15fr` (info left, map right, stretched to equal height).

Breakpoints are 960px (nav → hamburger, header CTA hidden, every grid stacks to one column, sticky titles go static, hero visual reorders above the copy, map drops to 320px, the booking bar switches on) and 560px (tighter hero padding, full-width stacked hero buttons and contact CTA, row grids inside Diferenciais / procedures / contact details stack, portrait wash and badge inset pulled in). The CSS is authored desktop-first with `max-width` queries, though the audience skews mobile. Internal spacing is local rem and `clamp()` values; the durable spatial tokens are the wrapper width, the gutter, the section rhythm, the split gap, and the anchor offset.

## Elevation & Depth

The system is flat by default. Depth is conveyed by neutral, warm (ink-900-tinted) shadows with real offset **and** blur — never a colored halo, never a hard offset shadow — applied to a small set of lifted elements only. Everywhere else, 1px hairline borders (`--line` / `--line-strong`, and one ink-900 rule over the procedures block) do the separating. There are exactly three shadow steps. The sticky header and the mobile booking bar are glass (translucent paper + `backdrop-filter: blur(10px)`) rather than shadowed.

### Shadow Vocabulary
- **`--shadow-sm`** (`0 1px 2px rgba(38,35,31,0.06), 0 3px 8px rgba(38,35,31,0.05)`): primary buttons at rest; the sticky header once `.is-scrolled`.
- **`--shadow-md`** (`0 2px 4px rgba(38,35,31,0.05), 0 18px 36px -14px rgba(38,35,31,0.16)`): the portrait media frame; the contact map card; primary button on hover.
- **`--shadow-lg`** (`0 4px 10px rgba(38,35,31,0.07), 0 34px 64px -26px rgba(38,35,31,0.20)`): the white CRBM credential badge overlapping the portrait — the single most-lifted element.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. A shadow appears as elevation (portrait, map card, badge) or as a response to state (button hover, header scrolled) — never as ambient decoration.

**The No Card-in-Card Rule.** A bordered or shadowed container never nests another. The Diferenciais list, procedure groups, FAQ, and contact details are flat hairline rows. At most one card per section — in Contato that card is the map.

**The Warm-Shadow Rule.** Every shadow is tinted `rgba(38,35,31,...)` (ink-900). No pure-black shadow, no teal-tinted glow, no hard/neobrutalist offset.

## Shapes

Radii scale with surface size and never reach a pill: `8px` (`--r-xs`, check chips, badge icon, skip-link), `10px` (`--r-sm`, buttons), `16px` (`--r-md`, the portrait credential badge), `20px` (`--r-lg`, portrait media and its wash, the contact map card). The focus-visible outline uses its own `3px` radius. Dividers are always 1px (`--line`, `--line-strong`, or the single ink-900 rule opening the procedures block), never heavier. Chips are rounded squares (8px), not circles. The one recurring silhouette is the hero portrait: a 20px rounded rectangle sitting over an offset teal wash (`.portrait::before`, `inset: 1.6rem -1.6rem -1.6rem 1.6rem`, same 20px radius), with a white badge card overlapping the lower-left corner. There is no organic or clipped shape anywhere — the previous world's petal clip-path is gone.

### Named Rules
**The No-Pill Rule.** No `border-radius` at or near `999px` anywhere. Buttons are 10px. This is a deliberate, permanent break from the superseded world.

## Components

### Buttons
- **Shape:** gently rounded (10px, `--r-sm`); `inline-flex`, centered, 0.5rem gap for a leading icon (the WhatsApp speech-bubble SVG on every booking button).
- **Primary:** teal-600 fill, white text, weight 600, `0.85rem 1.5rem` padding, `--shadow-sm` at rest. Every primary button opens WhatsApp.
- **Hover / Focus:** primary darkens to teal-700, lifts 1px (`translateY(-1px)`), shadow deepens to `--shadow-md`. All controls share the global `:focus-visible` — a 2px teal-600 outline at 2px offset.
- **Ghost:** transparent fill, ink-900 text, 1px `--line-strong` border; hover shifts the border to teal-400 and fills teal-50. Used for the hero's secondary "Ver procedimentos" anchor.
- **Size / width variants:** `.btn--sm` (compact header CTA, `min-height: 44px`), `.btn--lg` (`1rem 1.6rem`, 1rem text, `min-height: 52px`; the hero pair and the contact CTA), `.btn--block` (full width; mobile menu CTA and booking bar).

### Text Link
`.text-link`: Hanken 600, 0.925rem, teal-700 text with a 1px teal-400 underline at `0.25em` offset; hover darkens the underline to teal-700. Used for secondary outbound actions that should not compete with the WhatsApp button ("Abrir rota no Google Maps").

### Chips (check chips)
- **Style:** rounded square (8px), teal-100 background, teal-700 inline SVG glyph, no border. 30px in the hero credential row; 38px as the badge's shield icon.
- **Scope:** chips live only in the hero (credential row and badge). Lists below the fold carry no chips.

### Hairline Lists (Diferenciais)
`.feature-list`: a `--line-strong` top rule, then rows each closed by a `--line-strong` bottom rule, `1.6rem` block padding. Each row is a `0.9fr / 1.1fr` grid — subhead `h3` (Hanken 600) left, description (0.975rem ink-700) right; stacks under 560px. No icons, no card chrome.

### Procedure Groups
`.procedures` opens with a 1px **ink-900** top rule — the one dark rule on the page, marking the catalogue. Each `.procedures__group` is a split-proportion grid: a Spectral teal-700 group title left, a `.procedures__list` right; groups are separated by `--line-strong`. Rows are `1fr / 1.25fr` grids, baseline-aligned — procedure name (Spectral 1.25rem ink-900) | description (0.925rem ink-500) — divided by `--line`, with the last row unruled. `.section__head` above sets the section title left and a muted 0.95rem note right.

### FAQ Accordion
Hairline rows (`--line-strong` top rule on the list, `--line-strong` bottom rule per item), no card, set in the right column of a split with a sticky title. The question is a full-width `button` with `aria-expanded` and `aria-controls` pointing at its answer; Hanken 600, 1.05rem, ink-900, hover teal-700, with a teal-600 chevron that rotates 180° when open. The answer opens via `grid-template-rows: 0fr → 1fr` (0.3s `--ease-out`); closed answers are `visibility: hidden` (with the visibility change delayed until the collapse finishes) so they leave the accessibility tree and tab order. JS keeps one item open at a time.

### Contact Section
`.contact__grid` (`0.85fr / 1.15fr`): left, the section title, a lead stating that booking happens on WhatsApp, a `.btn--lg` primary WhatsApp button, then `dl.contact__details` — a `--line-strong` top rule and `7.5rem | 1fr` rows (`dt` label 0.875rem 600 ink-500, `dd` value ink-900; the phone link is weight 600 and goes teal-700 on hover) divided by `--line`; the address row carries the `.text-link` route link. Right, `.contact__map`: the section's only card — 20px radius, 1px `--line` border, `--shadow-md`, teal-50 ground, `min-height: 420px` (320px ≤960px) — holding a lazy Google Maps iframe desaturated with `filter: saturate(0.75) sepia(0.06)` so the map sits inside the warm palette. Under the iframe lies an `aria-hidden` fallback panel (teal-700 pin + address) that shows only while the map loads or if it is blocked.

### Navigation
- **Header:** `position: sticky`, glass at rest (`rgba(250,248,245,0.82)` + `backdrop-filter: blur(10px)`, transparent bottom border). On `.is-scrolled` (JS toggles at `scrollY > 8`) it gains a `--line` hairline border and `--shadow-sm`, and the background firms to `rgba(250,248,245,0.96)`.
- **Links:** Hanken 500, ink-700; hover goes ink-900 and draws a 2px teal-600 underline that `scaleX`-wipes in from the left.
- **Brand:** Spectral wordmark (1.3rem, ink-900) over a sentence-case teal-700 role line (`Biomédica Esteta`, 0.8rem 500).
- **Mobile (≤960px):** nav and header CTA hide; a `.menu-toggle` hamburger (≥44px target, bars animate into an X) opens a full-width `.mobile-nav` panel with stacked links (1px `--line` dividers) and a `.btn--block` WhatsApp CTA. Esc closes it and returns focus to the toggle.

### Mobile Booking Bar
`.booking-bar` exists only ≤960px: fixed to the bottom edge, glass (`rgba(250,248,245,0.92)` + `blur(10px)`), a `--line` top border, safe-area-aware bottom padding, holding one `.btn--block` primary WhatsApp button. It is off-screen (`translateY(110%)`, `visibility: hidden`, link `tabindex=-1`, `aria-hidden`) until the hero's own buttons have scrolled **above** the viewport, and steps aside again while the contact section (which has its own button) is on screen. It slides with a 0.35s `--ease-out` transform — a state transition, not an authored moment. The footer gains `5rem` bottom padding on mobile so the bar never covers it.

### Portrait with Credential Badge (signature component)
The hero visual: `.portrait__media` is a 20px rounded rectangle (`aspect-ratio: 5 / 6`, `--shadow-md`) holding the professional photo, set over `.portrait::before` — a teal-100 wash offset down-right (`inset: 1.6rem -1.6rem -1.6rem 1.6rem`, 20px radius). A white `.portrait__badge` card (16px radius, 1px `--line`, `--shadow-lg`, `max-width: 280px`) overlaps the lower-left corner with a 38px teal-100 shield-check chip and two lines: `Biomédica Esteta` / `CRBM 10922-5, registro ativo`. On mobile the badge spans full width (`left: 0.5rem; right: 0.5rem`) and the wash inset tightens.

### Credential Row and Location Line (signature component)
Under the hero buttons, `.hero__place` sets the practice's location in one quiet line — a teal-700 pin SVG and "Consultório no Centro de Montenegro, RS" at 0.9rem ink-500. Below it, `.trust-row` is the hero's proof strip: a check-chip list above a `--line` top border, each item a 30px teal-100 chip plus a strong line (ink-900, 600) over a muted line (ink-500, 0.8rem) — `CRBM 10922-5` / `+10 anos` / `100% naturais`, laid out as a three-column grid (one column under 560px). It is explicitly **not** a big-number stat bar; that template was refused.

### Footer
Ink-900 ground: the Spectral wordmark in white with a teal-400 role line (`Biomédica Esteta, CRBM 10922-5`), an `address` block (street, city, WhatsApp link in white, teal-400 on hover), the footer nav, and a centred legal line above a `rgba(255,255,255,0.12)` hairline.

## Do's and Don'ts

### Do:
- **Do** keep the page and tinted sections on warm off-white (`--paper` / `--paper-deep`) and reserve pure white for raised elements (the credential badge).
- **Do** carry all accent work with the one teal/jade family — fill (teal-600), hover/label/icon/link (teal-700), washes (teal-100), hover fills and map ground (teal-50).
- **Do** route every booking action to the same prefilled WhatsApp conversation; WhatsApp is the only conversion path.
- **Do** lay new content sections out on the split (title 0.8fr left, content 1.2fr right) and make the title sticky when the right column is a long list.
- **Do** separate repeating items (differentiators, procedures, FAQ, contact details) with 1px hairline rows, not card chrome — at most one bordered/shadowed card per section.
- **Do** use 10px button radius and 8–20px elsewhere; scale the radius up with the surface.
- **Do** tint every shadow with `rgba(38,35,31,...)` and keep real offset + blur (`--shadow-sm/md/lg`).
- **Do** treat CRBM registration, "+10 anos," the natural-result claim and the location as first-viewport content.
- **Do** label unconfirmed content plainly — the procedures list carries a visible note that it is an example pending confirmation — rather than presenting it as final.
- **Do** confine authored motion to the hero portrait wipe (`clip-path: inset(0 0 100% 0)` → `inset(0 0 0 0)`, 0.9s `--ease-out`), with the teal wash sliding in from lower-left and the badge settling at +0.5s. Keep its state visible-by-default in CSS; JS arms the pending state via IntersectionObserver, with a 2500ms safety net and a try/catch force-reveal. `prefers-reduced-motion` neutralizes all of it.
- **Do** hide collapsed disclosure content with `visibility: hidden` and wire `aria-controls` / `aria-expanded`, as the FAQ does.

### Don't:
- **Don't** use a pill or near-pill radius (`≈999px`) on anything. Buttons are 10px. This is a permanent break from the superseded rose-boutique world.
- **Don't** reintroduce that world's language: soft-rose accent, Fraunces, or an authored organic petal / clip-path silhouette. No client request, no reintroduction.
- **Don't** introduce a second accent hue, a pure-gray neutral, or a colored/halo/hard-offset shadow.
- **Don't** stack a bordered or shadowed container inside another (the No Card-in-Card rule).
- **Don't** add icon chips to lists below the hero; Diferenciais, procedures and contact details are text rows.
- **Don't** add a second conversion path (a contact form, an e-mail CTA) beside WhatsApp without a client request.
- **Don't** set a Diferenciais or FAQ heading in Spectral — repeating sub-heads are Hanken 600. Reserve the serif for section titles, procedure group titles and names, and the wordmark.
- **Don't** add a kicker or eyebrow label above a section heading; every `h2` stands alone.
- **Don't** rebuild the hero credential row as a three-giant-numbers stat bar — it is a check-icon proof list.
- **Don't** spend a second authored motion moment anywhere else, and don't add scroll fade-ups to sections.
- **Don't** use all-caps tracked labels, middle-dot meta strings (`A · B`), or a `→` glyph appended to button text.
