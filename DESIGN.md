---
name: Luana Amaral — Biomédica Esteta
description: Warm off-white aesthetic-medicine site in the organic, card-and-band structure of the Nádia Fadel site, carried by Luana's own deep-teal/jade palette and Spectral + Hanken Grotesk, with WhatsApp as the one conversion path.
colors:
  paper: "#FAF8F5"
  paper-deep: "#F2EEE7"
  white: "#FFFFFF"
  sand: "#E8DCC8"
  sand-deep: "#C9B79A"
  ink: "#0E3B38"
  ink-soft: "#1F4F4B"
  text: "#4F5E5B"
  line: "rgba(14, 59, 56, 0.1)"
  teal-700: "#115E59"
  teal-600: "#0F766E"
  teal-500: "#14B8A6"
  teal-100: "#D2F0EC"
  teal-50: "#ECF8F6"
  deep: "#0E3B38"
  footer: "#0B2E2B"
  on-deep: "#FAF8F5"
  on-deep-soft: "#9FD8CF"
  whatsapp: "#25D366"
typography:
  display:
    fontFamily: "Spectral, Georgia, \"Times New Roman\", serif"
    fontSize: "clamp(2.1rem, 4vw, 3.15rem)"
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Spectral, Georgia, \"Times New Roman\", serif"
    fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  numeral:
    fontFamily: "Spectral, Georgia, \"Times New Roman\", serif"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: 1.2
  title:
    fontFamily: "Spectral, Georgia, \"Times New Roman\", serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  quote:
    fontFamily: "Spectral, Georgia, \"Times New Roman\", serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.5
  subhead:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "16.5px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.01em"
  lead:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "12.5px"
    fontWeight: 600
    lineHeight: 1.4
  button:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "14.5px"
    fontWeight: 600
    lineHeight: 1.2
rounded:
  icon: "14px"
  field: "16px"
  float: "18px"
  card: "24px"
  panel: "26px"
  pill: "999px"
  circle: "50%"
spacing:
  container: "1180px"
  gutter: "48px"
  gutter-mobile: "24px"
  section: "130px"
  section-mobile: "84px"
  section-sm: "90px"
  section-sm-mobile: "64px"
  section-head-gap: "64px"
  card-gap: "24px"
  anchor-offset: "84px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 30px"
  button-primary-hover:
    backgroundColor: "{colors.teal-700}"
  button-accent:
    backgroundColor: "{colors.teal-600}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "16px 36px"
  button-accent-on-deep:
    backgroundColor: "{colors.teal-100}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "13px 28px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-lg:
    padding: "17px 38px"
  button-nav:
    padding: "11px 24px"
  tag:
    backgroundColor: "{colors.teal-100}"
    textColor: "{colors.teal-700}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  icon-tile:
    backgroundColor: "{colors.teal-100}"
    textColor: "{colors.teal-700}"
    rounded: "{rounded.field}"
    size: "58px"
  icon-tile-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.teal-100}"
  approach-card:
    backgroundColor: "{colors.white}"
    rounded: "22px"
    padding: "36px 28px"
  service-card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "40px"
  contact-card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.panel}"
    padding: "46px 42px"
  float-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.float}"
    padding: "16px 20px"
  experience-badge:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.on-deep}"
    rounded: "20px"
    padding: "22px 26px"
  faq-item:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "22px 28px"
  whatsapp-float:
    backgroundColor: "{colors.whatsapp}"
    rounded: "{rounded.circle}"
    size: "58px"
---

# Design System: Luana Amaral — Biomédica Esteta

## Overview

**Creative North Star: "The Jade Consulting Room"**

Lineage, recorded as the user's decision on **2026-09-24**: the structure mirrors the Nádia Fadel site (github.com/Zafir07/Psicologa_Nadia_Fadel): organic blob shapes behind the hero and in the dark bands, a blob-masked portrait with floating credential cards, pill buttons, centered section heads, white card grids that lift on hover, deep bands, scroll fade-ups and a floating WhatsApp button. The palette and fonts are Luana's own: a warm off-white ground, a deep-teal ink that replaces black, one teal/jade accent family, Spectral for titles and Hanken Grotesk for everything else. This replaces the earlier "Quiet Premium Clinic" editorial-split world. A second pass the same day (also the user's request) made subtle changes so the two sites read as siblings, not copies: an arch-shaped portrait instead of the blob mask, frosted float cards with square teal chips, a rotated-square jade marker on the section labels, divided hero figures, a rounded-square logo mark, an offset teal outline behind the Sobre photo, a single-arc wave, a left-aligned commitment quote with a large quote glyph, a split final CTA, and a labelled WhatsApp pill. Its no-pill, no-card, no-stat-bar, no-italic-accent and no-scroll-reveal rules are withdrawn on purpose.

The page is soft and generous. It alternates warm grounds (paper, white, paper-deep) down the page, uses two deep-teal bands (the professional-commitment quote and the final call to action) and ends on an even darker footer. Organic shapes are the signature: an irregular border-radius on the portrait, a translucent teal blob behind it, a large teal-100/sand blob bleeding off the hero's right edge, a white wave cresting into the differentiators band, and faint teal blobs inside the dark bands. Depth comes from long, soft, ink-tinted drop shadows on lifted cards. Motion is gentle and continuous: hero entrance, slow float on the credential cards, fade-up on scroll, and lift on hover.

WhatsApp is the only conversion path. Every button that books, from the nav, mobile menu, hero, Sobre, each procedure card, contact card and final call to action through to the floating button, opens a prefilled `wa.me` conversation. There is no form. Content with no confirmed source is labeled as a placeholder rather than presented as fact, and there is no testimonials section until real, authorized testimonials exist.

**Key Characteristics:**
- Warm off-white grounds (paper / paper-deep) alternating with white sections; deep teal (`--ink`) in place of black for text and dark bands.
- One accent family, teal/jade, from teal-50 washes to teal-700 fills; sand is a warm neutral used only in decoration.
- Spectral 500 for headings, numerals and quotes, with an italic teal phrase allowed in the hero h1 and the Sobre h2; Hanken Grotesk for body, labels and controls.
- Pill buttons and tags; cards run from 16px to 28px corners; the portrait is an arch (full-round top, 32px bottom corners).
- Soft, long, ink-tinted drop shadows that deepen on hover lift.
- Continuous gentle motion (entrance, float, fade-up, hover lift), all switched off under `prefers-reduced-motion`.

## Colors

A warm off-white world with a single teal/jade accent family. Deep teal replaces black as ink, and the same deep teal becomes the dark bands.

### Primary
- **Jade Deep** (teal-700): hover fill of the primary button, icon-tile and contact-icon glyphs, tag text, the second stop of the accent-button and card-rule gradients, the commitment band's blob, the map-fallback pin.
- **Jade** (teal-600): accent-button fill (gradient into teal-700), italic accent phrase in headings, section-label text, checklist ticks, contact links, focus-visible outline, scrollbar thumb.
- **Bright Jade** (teal-500): the thin accent strokes, meaning the nav hover underline, the Sobre quote rule, the open FAQ item's border and the start of the card top-rule gradient. It also fills the hero portrait blob (22% opacity), the final-CTA blob and the logo-mark gradient.
- **Jade Wash** (teal-100): icon-tile, tag, float-card icon and FAQ-arrow grounds, the hero background blob, `::selection`, and the accent button on dark bands (gradient into white).
- **Jade Mist** (teal-50): media placeholder grounds (portrait wrap, map frame).

### Neutral
- **Paper** (#FAF8F5): the page ground, service cards, the mobile menu, the scrolled nav glass (at 92%), text on ink buttons.
- **Paper Deep** (#F2EEE7): alternate section ground (Diferenciais, FAQ, Contato), scrollbar track.
- **White** (#FFFFFF): a surface in two roles. It is the ground of the Sobre and Procedimentos sections, and it fills the lifted elements (approach cards, FAQ items, float cards, contact card).
- **Sand** / **Sand Deep**: warm decoration only. Sand fills the secondary hero blob (55% opacity) and Sand Deep draws the short rule before section labels. Never text, never fills.
- **Ink** (#0E3B38): headings, the primary-button fill, strong text, the hamburger bars, the tint behind every shadow.
- **Ink Soft** (#1F4F4B): nav links at rest.
- **Text** (#4F5E5B): body copy, leads, card descriptions, meta.
- **Line** (ink at 10%): hairlines for service-card and FAQ-item borders, checklist dividers, the hero-stats top rule and the scrolled-nav bottom edge.

### Dark bands
- **Deep** (same value as Ink) is the commitment band and the experience badge. The final CTA runs a 150° gradient from Deep to teal-700. **Footer** (#0B2E2B) is the darkest ground. **On-Deep** (paper) and **On-Deep Soft** (#9FD8CF) set text on the dark grounds, and the footer adds paper at 60–78% alpha for secondary text.

### Named Rules
**The One Accent Rule.** Teal/jade is the only chromatic family. Sand is a neutral, not a second accent. The one tolerated outside hue is **WhatsApp green** (#25D366), which appears only where the WhatsApp brand itself shows: the floating button and the small icon in the hero note.

**The Teal-Ink Rule.** There is no black in this system. Text, dark fills, dark bands and shadow tints are all deep teal (`#0E3B38` / `#0B2E2B`). A `#000` or neutral gray is a bug.

**The Warm-Ground Rule.** The page ground is always paper or paper-deep. White appears only as a full section ground or as a lifted card on a tinted ground.

## Typography

**Display Font:** Spectral (self-hosted; fallback Georgia, "Times New Roman", serif)
**Body Font:** Hanken Grotesk (self-hosted; fallback -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)

**Character:** A calm book serif at weight 500 with slight negative tracking, set against a clean grotesque. The serif also carries the numerals and the quotes, and in italic it carries the one accent phrase.

### Hierarchy
- **Display** (Spectral 500, `clamp(2.1rem, 4vw, 3.15rem)`, lh 1.14, −0.015em; 30px under 600px): hero h1 only, `text-wrap: balance`.
- **Headline** (Spectral 500, `clamp(1.8rem, 3.2vw, 2.4rem)`, lh 1.2): every section h2. The final CTA h2 steps up to `clamp(1.9rem, 3.6vw, 2.6rem)`, max 22ch.
- **Numeral** (Spectral 500, 32px, lh 1.2; 28px on mobile): hero stat values. The experience badge sets its number at 40px, lh 1.
- **Title** (Spectral 500, 24px): service-card h3. The contact-card h3 is 26px. The wordmark is Spectral 21px.
- **Quote** (Spectral italic, 22px, lh 1.5): the Sobre pull line, behind a 2px teal-500 left rule. The commitment band's blockquote uses `clamp(1.4rem, 2.6vw, 1.9rem)`, max 780px.
- **Subhead** (Hanken 600, 16.5px, +0.01em): approach-card h3. FAQ questions are Hanken 600 16px, and footer h4 is Hanken 600 14.5px in on-deep-soft.
- **Lead** (Hanken 400, 18px, lh 1.65, max 480px; 16px on mobile): the hero lead.
- **Body** (Hanken 400, 16.5px, lh 1.65 for section heads, 1.8 in Sobre at max 58ch). Card copy steps down to 14.5–15px. The global base is 16px / 1.6.
- **Label** (Hanken 600, 12–13px): tags (12px, +0.04em), float-card titles (13px), stat captions (12.5px), the WhatsApp pill label (14.5px). The section label that sits above h2s is described under Components.
- **Button** (Hanken 600, 14.5px; 15px accent, 15.5px large, 13.5px nav).

### Named Rules
**The Italic Accent Rule.** A heading may carry one italic, teal-600, weight-500 phrase set with `<em>`. This is used today in the hero h1 ("resultado natural"). Keep it to one phrase per heading, and never use it for bold or underlined emphasis.

**The Serif-Is-Structure Rule.** Spectral is for h1–h3 titles, numerals, quotes and the wordmark. Repeating card subheads, FAQ questions and footer headings are Hanken 600.

## Layout

A centered container (`max-width: 1180px`, 48px inline padding, 24px at 900px and below) holds every section. Sections use 130px vertical padding (84px mobile). The two short dark bands use 90px (64px mobile). Anchors land under the fixed nav via `scroll-padding-top: 84px`.

Section heads are a centered column (max 620px, 64px below; 44px on mobile) holding label, h2 and a short lead. The contact head is the one left-aligned head. The hero is a two-column grid (`1.05fr / 0.95fr`, gap 64px, min-height 100vh, 130px top padding for the fixed nav). Sobre is `0.85fr / 1.15fr` (gap 80px) with the photo left, and Contato is `0.9fr / 1.1fr` (gap 56px, stretched) with the card left and the map right. Differentiators are a four-column card grid (gap 24px) → two columns at 1080px → one at 600px. Procedures are a two-column grid (gap 26px) → one at 900px. The FAQ is a centered 780px column. The footer is `1.4fr / 1fr / 1fr`.

Section grounds run paper (hero) → white (Sobre) → paper-deep with a white wave crest (Diferenciais) → white (Procedimentos) → paper-deep (FAQ) → deep band (Compromisso) → paper-deep (Contato) → deep gradient band (final CTA) → footer.

Breakpoints are 1080px (card grid to two columns), 900px (hamburger and full-screen menu, every split stacks, hero copy stacks above a 320px portrait, blob moves low-right, map to 300px, WhatsApp button inset to 18px) and 600px (h1 30px, full-width hero and contact buttons, card grid to one column, tighter card padding). The CSS is authored desktop-first.

## Elevation & Depth

This is a lifted system. Cards and media sit on long, soft drop shadows with a large negative spread, always tinted with ink (`rgba(14, 59, 56, …)`). Hover raises cards further and deepens the shadow. Background blobs and the wave add depth behind the content without shadows. The scrolled nav is glass (paper at 92% + `backdrop-filter: blur(14px)`) with a hairline edge.

### Shadow Vocabulary
- **Soft** (`--shadow-soft`, `0 20px 40px -16px rgba(14,59,56,0.22)`): floating credential cards.
- **Card** (`--shadow-card`, `0 36px 60px -28px rgba(14,59,56,0.28)`): approach cards on hover.
- **Photo** (`--shadow-photo`, `0 40px 70px -25px rgba(14,59,56,0.35)`): the blob-masked hero portrait.
- **Panel** (`0 40px 70px -35px rgba(14,59,56,0.25)`): contact card and map frame at rest. The Sobre photo frame is a deeper variant (`0 50px 90px -35px …0.4`).
- **Button glow** (`0 8px 24px -10px rgba(14,59,56,0.45)` on ink; `0 10px 28px -8px rgba(15,118,110,0.55)` on accent): pill buttons at rest, growing on hover. The WhatsApp button carries its own green glow (`rgba(37,211,102,0.45)`).

### Named Rules
**The Ink-Tint Rule.** Every shadow is tinted with deep-teal ink, or with teal-600 or WhatsApp green under the button of that color. None is pure black and none is a hard offset. Every shadow has blur and a negative spread.

**The Lift-On-Hover Rule.** Interactive cards rise on hover (approach −6px, service −8px, buttons −2 to −3px, WhatsApp scale 1.1) using `--ease` over 0.35–0.5s, and their shadow grows with them.

## Shapes

The form language is soft and organic. Buttons, tags and the WhatsApp button are pills (999px). Float-card chips (10px), FAQ arrows (9px) and the logo mark (12px) are rounded squares; the WhatsApp button is a pill on desktop and a circle on mobile. Tiles and cards scale with their size: contact icons 14px, icon tiles and FAQ items 16px, float cards 16px (14px on mobile), the experience badge 20px, approach cards 22px, service cards 24px, contact card and map 26px, the Sobre frame 28px.

The signature silhouette is organic. The hero portrait wrap is an arch (`border-radius: 999px 999px 32px 32px`, aspect 4/5) over a larger translucent teal-500 blob. The Sobre photo (28px) sits in front of a 1.5px teal-500 outline offset down-right. Freeform SVG blobs (teal-100 + sand in the hero, teal-700 at 50% in the commitment band, teal-500 at 25% in the final CTA) bleed off section edges. A white single-arc SVG crest tops Diferenciais. Borders are 1px `--line` (1.4px ink on the outline button). The only accent stroke is the 2px teal-500 quote rule. Cards carry no colored edge stripes.

## Components

### Buttons
- **Shape:** full pill (999px), `inline-flex`, Hanken 600, no-wrap.
- **Primary:** ink fill, paper text, `14px 30px`, ink glow. Hover goes teal-700, lifts 3px, and the glow grows.
- **Accent:** 135° gradient from teal-600 to teal-700, white text, `16px 36px`, 15px, teal glow. Hover lifts 3px and scales 1.02. This is the lead booking action in the hero, mobile menu and final CTA. On the deep band it inverts to a teal-100 → white gradient with ink text.
- **Outline:** transparent, 1.4px ink border, ink text, `13px 28px`. Hover fills ink with paper text and lifts 2px. It is the secondary action ("Ver procedimentos", "Como chegar").
- **Sizes:** `--lg` (`17px 38px`, 15.5px), `--nav` (`11px 24px`, 13.5px; hidden at 900px and below), `--block` (full width, used for the procedure-card CTAs).
- **Focus:** global `:focus-visible`, a 2px teal-600 outline at 3px offset.

### Section Label
A short Hanken 600 line above section h2s (12.5px, +0.2em tracking, uppercase, teal-600) preceded by a 7px teal-500 square rotated 45° (a small jade diamond). It is centered in centered heads, and on the deep band it is shown in on-deep-soft with an on-deep-soft diamond. Every section except the final CTA carries one today. It shipped as part of the user's 2026-09-24 decision to mirror the reference site, and it is recorded as incumbent build content. It is not a requirement for new sections, and a new section h2 may stand alone.

### Hero Stats
A `dl` below the hero call to action, under a `--line` top rule (32px padding-top, 56px margin-top, 44px gap). Each item is a Spectral numeral (`10+`, `100%`, `CRBM`) over a 12.5px text caption. Only figures confirmed in PRODUCT.md may appear here; do not invent new numbers.

### Portrait with Floating Cards (signature)
The hero visual is a portrait of at most 420px (320px mobile) inside the arch, over a translucent teal blob inset −30px. Two frosted float cards (white at 82% + `backdrop-filter: blur(12px)`, 1px white border, 16px radius, `14px 18px`, `--shadow-soft`) overhang its edges, top-left and bottom-right. Each holds a 36px teal-600 square chip (10px radius) with a white line icon and a two-line label (13px 600 ink over 11.5px text): "Harmonização / Facial e corporal" and "CRBM 10922-5 / Registro ativo". They bob 9px on a 6.5s ease-in-out loop, and the second is offset by 1.4s.

### Experience Badge
A deep-teal card (20px radius, `22px 26px`, ink shadow) overlapping the bottom-left of the Sobre photo by −28px. It holds a Spectral 40px numeral over a 12.5px on-deep-soft caption.

### Cards
- **Approach card** (Diferenciais): white, 22px, `36px 28px`, a near-flat 2px shadow at rest. A 58px teal-100 icon tile sits above a Hanken subhead and 14.5px copy. On hover the card lifts 6px to `--shadow-card` and the icon tile flips to ink with a teal-100 glyph, rotated −6° and scaled 1.05.
- **Service card** (Procedimentos): paper on a white section, 24px, 40px padding, 1px `--line` border. The top row puts an icon tile on the left and a pill tag on the right. Below it come a Spectral 24px title, a description, a checklist between two `--line` rules (18px teal-600 check SVGs, strong ink name over a text description), and a full-width primary WhatsApp button prefilled with that group's interest. Hover lifts it 8px. The list is labeled in the section lead as an example pending confirmation.
- **Contact card:** white, 26px, `46px 42px`, panel shadow. Rows pair a 46px teal-100 icon tile (14px radius) with a 15px 600 title and a 14.5px value, and contact links are teal-600 bold. It ends with a primary WhatsApp button and an outline directions button.

### Tag
A pill (`6px 14px`) in teal-100 with teal-700 text, 12px 600, +0.04em. It marks a service card's group ("Facial", "Corporal").

### FAQ Accordion
A centered 780px stack of white items (16px radius, 1px `--line`, 10px apart). The question is a full-width button (Hanken 600 16px, `22px 28px`) with `aria-expanded` / `aria-controls` and a 26px teal-100 circle arrow. When open, the item border goes teal-500, the arrow flips to ink/paper and rotates 180°, and the answer expands through `grid-template-rows: 0fr → 1fr` over 0.45s. Closed answers are `visibility: hidden`. One item is open at a time.

### Dark Bands
- **Commitment band:** deep ground, a teal-700 blob at 50% off the right edge, a centered section label, a Spectral italic blockquote in on-deep, and an on-deep-soft attribution line. It is a professional statement, not a testimonial.
- **Final CTA:** a 150° gradient from Deep to teal-700 with a teal-500 blob at 25% off the left edge. A centered on-deep h2 and an on-deep-soft lead sit above the inverted accent button.

### Navigation
- **Header:** fixed and transparent at rest (24px block padding). Past 40px of scroll it becomes paper glass with blur(14px) and a hairline, and tightens to 14px.
- **Brand:** a 38px rounded-square logo mark (12px radius) (teal-500 → ink gradient; teal-100 → teal-500 on dark) next to a Spectral 21px name over a 12px teal-600 role line.
- **Links:** Hanken 500 14.5px in ink-soft. Hover goes ink and a 1.5px teal-500 underline grows from the left.
- **Mobile (900px and below):** a 44px hamburger whose bars morph into an X opens a full-screen paper overlay. It has Spectral 28px links and an accent WhatsApp button, locks body scroll, and closes on Esc (returning focus) or on link tap.

### Map Frame
26px radius, teal-50 ground, panel shadow, min-height 480px (300px mobile). It holds a lazy Google Maps iframe filtered `saturate(0.85) sepia(0.06)` to sit in the warm palette, over an `aria-hidden` pin-and-address fallback.

### Floating WhatsApp Button
A fixed 56px-tall WhatsApp-green pill with a white glyph and the label "Agendar pelo WhatsApp", 28px from the bottom-right corner, z-index 150, green glow; hover lifts it 3px. At 900px and below it becomes a 56px circle (18px inset) and the label stays only for screen readers. The footer reserves 112px of bottom padding so the pill never covers its last row.

### Footer
Footer-teal ground, 80px top and 112px bottom padding. It has the light logo, a 14px brand blurb at 66% paper, a row of 44px rounded-square social buttons (Instagram @dra.luanaamarall and WhatsApp; paper at 8% with a 14% border, teal-500 fill on hover), and two link columns (Hanken 600 on-deep-soft headings, 78% paper links, on-deep-soft on hover). A bottom row sits above a 12% paper hairline.

### Motion
One easing, `--ease` = `cubic-bezier(0.16, 1, 0.3, 1)`. The hero copy fades up 22px over 0.9s, and the hero visual fades and scales in from 0.95 over 1s at +0.25s. Float cards loop as described above. Elements marked `.reveal` fade up 20px over 0.8s as they enter the viewport, and approach cards stagger by 80ms. Content is visible by default: JS adds `reveal-pending` only after the IntersectionObserver is wired, a 2.5s timer forces anything still hidden to show, and a catch reveals everything if the script fails. `prefers-reduced-motion` disables all animation, transitions and smooth scroll.

## Do's and Don'ts

### Do:
- **Do** keep grounds warm: paper / paper-deep for the page, white for alternating sections and lifted cards, deep teal for bands.
- **Do** carry every accent with the teal/jade family: teal-600/700 fills and text, teal-500 thin strokes, teal-100 icon and tag grounds, teal-50 media placeholders.
- **Do** use deep-teal ink (`#0E3B38`) wherever black would go, including shadow tints.
- **Do** make every button a pill (999px): primary ink, accent teal gradient, outline ink.
- **Do** route every booking action to the same prefilled WhatsApp conversation. Per-procedure buttons may prefill the procedure interest.
- **Do** set section and card titles in Spectral 500 and repeating subheads and controls in Hanken 600. Limit the italic teal accent to one phrase per heading.
- **Do** give interactive cards a hover lift with a growing ink-tinted shadow, using `--ease`.
- **Do** keep organic shapes (blob mask, SVG blobs, the wave) as `aria-hidden`, non-interactive decoration behind `z-index: 2` content.
- **Do** keep `.reveal` content visible by default and let JS arm the hidden state, with the safety timer and the reduced-motion override.
- **Do** mark unconfirmed content visibly as an example or placeholder, as the procedures lead and HTML comment do.

### Don't:
- **Don't** add a second accent hue. WhatsApp green stays limited to WhatsApp's own marks, and sand stays decorative.
- **Don't** use pure black, neutral gray, or a hard, unblurred offset shadow.
- **Don't** put square or low-radius corners on buttons or tags; they are pills.
- **Don't** add a contact form, e-mail CTA or any second conversion path beside WhatsApp without a client request.
- **Don't** add a testimonials or depoimentos section, or invent quotes, until real, authorized testimonials exist. The commitment band is Luana's own statement, not a review.
- **Don't** invent stats, prices, before/after results or procedure claims. Hero stats and badges only restate facts confirmed in PRODUCT.md.
- **Don't** hide content in CSS behind a scroll reveal that depends on JS to show it.
- **Don't** set repeating card subheads or FAQ questions in Spectral.
