---
name: Valuable Feedback, Fast
description: Test automation maturity assessment — direct, warm, frank
colors:
  navy: "#1e3a5f"
  navy-dark: "#0a1628"
  navy-hero: "#112240"
  teal: "#0096c7"
  teal-deep: "#0369a1"
  text: "#2d3748"
  muted: "#718096"
  border: "#e2e8f0"
  bg: "#f7fafc"
  amber: "#f59e0b"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(28px, 5vw, 52px)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "normal"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1.2
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "2px"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "52px"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "18px 24px"
  button-primary-hover:
    backgroundColor: "{colors.teal-deep}"
  nav-link:
    textColor: "#94a3b8"
    rounded: "{rounded.sm}"
    padding: "6px 12px"
  nav-link-active:
    textColor: "#ffffff"
    backgroundColor: "rgba(255,255,255,0.12)"
  card:
    backgroundColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "24px 26px"
---

# Design System: Valuable Feedback, Fast

## 1. Overview

**Creative North Star: "The Honest Brief"**

This is a system that earns attention by wasting none of it. Every element on screen has a job. The hero delivers the premise and the instruction; the assessment delivers the questions; the results deliver a verdict the user can act on. Nothing floats. Nothing decorates. The visual language is the same as the voice: direct, warm, specific.

The palette is built around a deep navy and a clear teal — not because that's what "professional" looks like, but because those are genuinely the colors of the brand. The hero is dark. The content body is light. That contrast is the rhythm of the page: you descend from authority into work. Motion is restrained to a single animated fill; you feel progress, not performance.

The tone carries weight because the design doesn't compete with it. A clean card, a legible question, a clear button — and then the copy does the talking. That's the brief.

**Key Characteristics:**
- Dark-hero / light-body rhythm that signals descent from context into work
- No decorative devices; every visual element serves a structural role
- System font stack; typographic hierarchy from weight and size alone, no pairing
- Teal as the single live-state color (progress, scores, CTA, active nav)
- Cards with uniform shadow and 12px radius as the content container language
- Warm and considered component feel: soft corners, legible labels, generous touch targets

## 2. Colors: The Honest Palette

One dark family, one clear accent, one neutral surface. Nothing is added for visual interest.

### Primary
- **Clear Teal** (`#0096c7`): The action color. Progress bars, section scores, CTA buttons, active states, focus rings. Used sparingly so it always reads as live and clickable.
- **Deep Teal** (`#0369a1`): Teal on hover and in gradient CTAs. The hover state of any teal element.

### Secondary
- **Amber** (`#f59e0b`): Star ratings on the testimonials page only. Warm signal color for qualitative delight, not for structural UI.

### Neutral
- **Navy** (`#1e3a5f`): Headings, section numbers, card title text. The brand's anchor ink.
- **Deep Navy** (`#0a1628`): Sticky navigation background. Darkest surface in the system.
- **Hero Navy** (`#112240`): Hero gradient start. Slightly darker than the mid-navy.
- **Body Text** (`#2d3748`): All body copy and question text. Dark enough for WCAG AA at 4.5:1 on white.
- **Muted** (`#718096`): Secondary labels, card descriptions, footer text. 4.5:1 must be verified against white; use sparingly for UI chrome, not for substantive copy.
- **Border** (`#e2e8f0`): Card borders, row dividers, section separators. Never structural; always a quiet edge.
- **Background** (`#f7fafc`): Page surface and breakdown card fills. Slightly blue-tinted off-white.
- **White** (`#ffffff`): Card surfaces, question areas, result panels.

### Named Rules
**The One Accent Rule.** Teal appears only on interactive elements, scores, progress indicators, and the primary CTA. It must never be used for decorative borders, background fills, or text that isn't a link or button. Its scarcity is what makes it readable as "do something."

**The Dark-First Hero Rule.** Every page opens with a dark gradient hero. This is not optional branding — it establishes authority before the content begins. Pages without the hero gradient do not exist in this system.

## 3. Typography

**Display Font:** System UI stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`)
**Body Font:** Same stack — single family, differentiated by weight and size alone.

**Character:** One family, committed weight contrast. The display heading at 800 weight is genuinely heavy; the body at 400 is genuinely light. The separation is about scale and weight, not typeface identity. This is a deliberate choice: the brand voice is strong enough that it doesn't need a distinctive typeface to carry it.

### Hierarchy
- **Display** (800, `clamp(28px, 5vw, 52px)`, 1.15): Hero H1 only. The single statement at the top of every page.
- **Headline** (800, 22px, 1.2): Results panel heading, section headings in content.
- **Title** (700, 17–18px, 1.3): Card H2s, resource card headings, contact card headings.
- **Body** (400, 15–15.5px, 1.7): Question text, card descriptions, intro copy. Line length capped at the 860px container — approximately 70ch at body size.
- **Label** (700, 11–13px, 1–2px letter-spacing, sometimes uppercase): Type badges, scale items, section score labels, nav links. Uppercase only for the hero eyebrow and scale explanations.

### Named Rules
**The Weight-Only Distinction Rule.** Typographic hierarchy is achieved through weight (400 vs 700 vs 800) and size alone. No italic, no underline, no color change for emphasis within body copy. Structural color (teal for links, navy for headings) is the only typographic color change permitted.

## 4. Elevation

The system uses a single ambient shadow for cards and a flat, dark background for the navigation and hero. Depth is achieved by value contrast (dark nav, white card, off-white page), not by layered shadow scales.

### Shadow Vocabulary
- **Card shadow** (`0 4px 20px rgba(0,0,0,0.07)`): Applied to all white card surfaces. Ambient, diffuse. It reads as "this card is a surface" without announcing itself. This is the only shadow value in the system.

### Named Rules
**The Flat-By-Default Rule.** Shadows appear only on white card surfaces sitting above the page background. Navigation, hero, progress bar, and sticky elements use background-color to establish their layer — not shadow. The single shadow value must not be strengthened or multiplied.

## 5. Components

### Buttons
- **Shape:** Gently curved (12px radius) — warm and considered, not pill-shaped, not sharp.
- **Primary:** Clear Teal background (`#0096c7`), white text, 18px vertical padding, 24px horizontal. Full-width block button on the assessment page CTA.
- **Hover:** Gradient shift to Deep Teal and `#1e3a5f`, -1px translateY lift.
- **Disabled:** Border color background, muted text, `cursor: not-allowed`, no transform.

### Rating Buttons (`.rbt`)
- **Shape:** 40×40px square with 8px radius. Touch-target-friendly.
- **Default:** White background, border-colored border, muted text.
- **Hover:** Teal border, teal text, light blue tint (`#f0f9ff`).
- **Selected states:** Four distinct color-coded states — red (1), amber (2), green (3), blue (4). Color encodes the scale visually without text labels.
- **Character:** These are the core interactive primitive of the page. They should feel responsive and settled on click.

### Cards (`.scard`, `.rcard`, `.ccard`, `.tcard`)
- **Corner Style:** Gently curved (12px radius).
- **Background:** White.
- **Shadow:** `0 4px 20px rgba(0,0,0,0.07)` — ambient card shadow.
- **Border:** 1px `#e2e8f0` — quiet edge, not structural.
- **Internal Padding:** 24–32px depending on card type.
- **Accent Device:** Left-side colored stripe (4–5px) used on section card headers, step items, and callout notes.

### Navigation
- **Style:** Sticky dark bar (`#0a1628`), 48px height, full-width.
- **Brand:** 14px, 700 weight, light text (`#e2e8f0`).
- **Links:** 13px, 600 weight, muted inactive (`#94a3b8`), hover gains light background and brighter text.
- **Active:** White text, `rgba(255,255,255,0.12)` background pill.
- **Mobile:** No hamburger — nav links compress with smaller gap. Below ~480px the brand and links may collide; responsive treatment needed.

### Progress Bar (Sticky)
- **Position:** Sticky below nav at `top: 48px`, z-index 100.
- **Background:** `#0f1f3a` (between deep navy and hero navy).
- **Fill:** Teal-to-sky-blue gradient, `transition: width .3s`. Width animation is a performance note (layout thrash) but negligible at the 7px bar height.
- **Label:** Muted count on left, score on right. 12px, both informational.

### Results Panel
- **Hero:** Dark gradient matching page hero. Big score number (72px, 800) in white. Maturity badge in color-coded pill.
- **Maturity badges:** Four states — Early (red tint), Developing (amber tint), Practicing (green tint), Optimizing (blue tint). Color encodes severity in the same system as the rating buttons.
- **Breakdown grid:** `auto-fill, minmax(190px, 1fr)` — compact dimension cards on background surface.
- **Next steps:** Teal left-stripe cards with numbered teal circles. Same accent device as section headers.

## 6. Do's and Don'ts

### Do:
- **Do** use teal exclusively for interactive, scored, or progress-indicating elements. Nothing else.
- **Do** maintain the dark-hero / light-body rhythm on every page. The hero gradient is the brand signature.
- **Do** use the single card shadow (`0 4px 20px rgba(0,0,0,0.07)`) for all white card surfaces. No other shadow.
- **Do** use 12px radius for cards and 8px radius for buttons, input elements, and inline components.
- **Do** write body copy at 15–15.5px / 1.7 line-height within the 860px container. The line length is already constrained; do not add `max-width` to paragraphs.
- **Do** use weight (400 / 700 / 800) as the primary typographic differentiator within the system font.
- **Do** keep the four rating-button color states (red / amber / green / blue) consistent with the maturity badge colors.

### Don't:
- **Don't** use side-stripe borders (`border-left > 1px`) as the primary accent on new components. The three existing uses (`.scard-head`, `.step`, `.focus-note`) are legacy; do not introduce new ones. Prefer background tints, full borders, or leading icons.
- **Don't** introduce new font families. The system font stack is deliberate. If typographic personality is needed, use weight and size contrast, not a new typeface.
- **Don't** add new accent colors. The palette is teal, navy, amber (testimonials only), and neutrals. New hues dilute the signal.
- **Don't** animate `width` on new progress or fill elements. Use `transform: scaleX()` on a full-width element with `transform-origin: left` instead.
- **Don't** use `transition: all`. Specify the exact properties to transition.
- **Don't** add small uppercase tracked labels above every new section heading. "SECTION SCORE" exists for functional reasons; adding more uppercase eyebrows as section grammar repeats an AI-generation tell.
- **Don't** introduce glassmorphism, gradient text, or identical three-icon card grids. The system's authority comes from restraint and specificity, not visual novelty.
