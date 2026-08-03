---
name: "Работи"
description: "Operational clarity for scoped AI employees and the unfinished work they take over."
colors:
  night: "#070a18"
  night-raised: "#0d1228"
  operational-ink: "#111426"
  warm-field: "#f4f1ec"
  white: "#ffffff"
  cyan-signal: "#2de2d0"
  violet-signal: "#8f7cff"
  coral-signal: "#ff8d72"
  lime-signal: "#c7f36b"
  blue-signal: "#62a8ff"
  line-light: "rgba(255,255,255,.13)"
  muted-on-dark: "rgba(255,255,255,.55)"
  muted-on-light: "#686773"
typography:
  display:
    fontFamily: "Inter Variable, Inter, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 5.65vw, 6.15rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-.042em"
  headline:
    fontFamily: "Inter Variable, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.65rem, 5vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-.038em"
  title:
    fontFamily: "Inter Variable, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.6vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-.012em"
  body:
    fontFamily: "Inter Variable, Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.58
  label:
    fontFamily: "Inter Variable, Inter, system-ui, sans-serif"
    fontSize: ".8125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: ".01em"
rounded:
  sm: "10px"
  md: "16px"
  lg: "28px"
  pill: "999px"
spacing:
  1: "8px"
  2: "16px"
  3: "24px"
  4: "32px"
  5: "48px"
  6: "64px"
  7: "96px"
  8: "128px"
  9: "160px"
components:
  button-spectrum:
    backgroundColor: "linear-gradient(110deg, {colors.cyan-signal}, #63cff5 48%, {colors.violet-signal})"
    textColor: "{colors.night}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
    height: "58px"
  button-dark:
    backgroundColor: "{colors.operational-ink}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 23px"
    height: "52px"
  card-operational:
    backgroundColor: "{colors.night-raised}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "30px"
  card-record:
    backgroundColor: "{colors.white}"
    textColor: "{colors.operational-ink}"
    rounded: "26px"
    padding: "30px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.operational-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "13px 14px"
---

# Design System: Работи

## Overview

**Creative North Star: "The Work Ledger After Dark"**

Работи feels like a live operational surface rather than a generic technology landing page. Near-black workspaces make unfinished tasks visible; cyan, violet, and coral signals identify who owns the next action; crisp warm and white fields turn claims into readable scope, price, approval, and work records.

The visual system is confident but grounded. Expressive aurora light and spectral accents establish energy at decisive moments, while the underlying structure stays legible, explicit, and businesslike. Every flourish should help a visitor recognize unfinished work, see a role take it within limits, or inspect the record it leaves behind.

**Key Characteristics:**

- Near-black operational stages paired with warm, high-clarity evidence fields.
- Cyan, violet, and coral used as functional role and state signals.
- Large, tightly set Inter headlines balanced by compact work-record labels.
- Rounded, bordered surfaces with restrained lift and precise internal structure.
- Movement that explains transfer, progress, selection, or ownership.

## Colors

The palette moves between a deep night workspace and quiet paper-like fields, with spectral accents reserved for active roles, states, and boundaries.

### Primary

- **Live Cyan**: The principal action and completion signal; use it for primary emphasis, active paths, and the Вдига role.

### Secondary

- **Scoped Violet**: Identifies operational transfer and Помага; it also carries selected structural emphasis on light fields.

### Tertiary

- **Human Coral**: Marks Пише and moments that wait, interrupt, or require a human boundary.
- **Progress Blue**: Bridges cyan and violet in spectral actions and process diagrams.
- **Guardrail Lime**: A rare supporting signal for permitted or safeguarded states, never a general page accent.

### Neutral

- **Working Night**: The immersive base for hero, process, and contact stages.
- **Raised Night**: The operational-card layer above Working Night.
- **Record Ink**: Primary text and dark controls on light evidence fields.
- **Warm Workpaper**: The quiet roster and FAQ field.
- **Crisp White**: Cards, form surfaces, and factual proof sections.
- **Muted Copy**: Secondary text adapts to the surface rather than competing with titles.

### Named Rules

**The Signal Has a Job Rule.** Cyan, violet, coral, blue, and lime must identify an action, role, status, path, or boundary; never scatter them as decoration.

**The Two Working Conditions Rule.** Use near-black for live work in motion and warm/white fields for scope, comparison, price, and durable records.

## Typography

**Display Font:** Inter Variable (with Inter, system-ui, sans-serif fallback)  
**Body Font:** Inter Variable (with Inter, system-ui, sans-serif fallback)

**Character:** One sans-serif family keeps the product direct and non-technical. Personality comes from scale, tight display spacing, disciplined weight, and the contrast between decisive headlines and compact operational labels.

### Hierarchy

- **Display** (700, fluid oversized, line-height 1): Homepage thesis and other singular first-view statements.
- **Headline** (700, fluid large, line-height 1.02): Major section turns and closing calls to action.
- **Title** (700, fluid compact, line-height 1.12): Card names, work outcomes, and proof headings.
- **Body** (400, 1.125rem, line-height 1.58): Explanations; keep long reading lines near 65 characters.
- **Label** (600, .8125rem, line-height 1.3): Time, status, role, price, and boundary metadata. Sentence case is the default.

### Named Rules

**The Plain-Spoken Scale Rule.** Create authority with size and compression, not ornamental type or jargon-like uppercase labeling.

## Layout

The desktop shell is capped at 1180px with 20px side gutters. First viewports pair a direct offer on the left with an operational interaction on the right; major evidence sections use 12-column card grids or asymmetric two-column structures. Section spacing is generous and fluid, while work records remain dense enough to scan as real operating artifacts.

At 920px, primary split layouts collapse to one column and the navigation becomes a contained dark menu. Below 700px, interactive records stack internally, tab targets remain at least 62px tall, and card padding tightens without removing boundaries or status context. The base spacing rhythm is 8px and expands through the documented scale.

**The Offer-and-Operation Rule.** When a first viewport has two columns, the left side explains the offer and the right side demonstrates work moving to a recorded result.

## Elevation & Depth

Depth is hybrid but restrained. Dark operational surfaces use faint light borders, tonal layers, aurora fields, and deep ambient shadows; light record cards use very soft lift and become more dimensional only on hover. Hairline dividers and background contrast do most structural work.

### Shadow Vocabulary

- **Operational float** (`0 46px 110px -50px #000`): The interactive workday panel above the night field.
- **Action glow** (`0 20px 50px -22px rgba(45,226,208,.8)`): Spectral primary action only.
- **Record rest** (`0 24px 70px -50px rgba(25,20,50,.5)`): White work and role records on warm fields.

**The Flat Record Rule.** Records stay nearly flat at rest; stronger lift is reserved for the active control or hovered role.

## Shapes

The form language uses confidently rounded containers with crisp internal divisions. Small controls use 10–16px corners, cards use 20–28px corners, and status dots or compact badges may be fully pill-shaped. Circles belong to status beacons, role marks, and diagram nodes—not to arbitrary text containers.

Borders remain thin and low contrast: pale gray on light fields and translucent white on night fields. Large silhouettes are calm rounded rectangles; internal work rows are smaller and more precise than their parent container.

## Components

### Buttons

- **Shape:** Firmly rounded rather than pill-shaped (16px), with a 52–58px minimum height.
- **Primary:** A cyan-to-violet spectral fill on dark stages with dark text and 24px horizontal padding.
- **Hover / Focus:** Lift by 2px and brighten the spectrum; all keyboard focus uses a visible 3px outline with 3px offset.
- **Dark:** Record Ink on light cards with white text; hover may adopt the owning role color.
- **Text link:** White or dark text with a signal-colored arrow that moves 3–4px on hover.

### Chips

- **Style:** Small status text, a signal dot, subtle tinted fill, and a low-contrast border where the state needs containment.
- **State:** Selected workday tabs use a 10% role-color wash plus a 2px inset underline; unselected tabs remain quiet but readable.

### Cards / Containers

- **Corner Style:** 26–28px for primary operational and role containers; 14–20px for nested records.
- **Background:** Raised Night for live operations; Crisp White or translucent white for evidence records.
- **Shadow Strategy:** Ambient and low at rest, colored only when a role becomes active.
- **Border:** One-pixel structural borders; translucent white on dark and Record Ink at roughly 11% on light.
- **Internal Padding:** 30px on desktop, reduced to 16–22px on narrow screens.

### Inputs / Fields

- **Style:** Crisp white field, quiet gray stroke, 10px corners, and direct sentence-case labels.
- **Focus:** Visible accent outline and border shift without removing the native focus indication.
- **Error / Disabled:** Error copy appears next to the form action in plain Bulgarian; disabled submission must remain visibly inactive while preserving label contrast.

### Navigation

The header is a 76px dark bar on the homepage with a cyan brand beacon, muted white links, and a translucent hire action. On mobile it becomes a contained dark panel rather than changing into a visually unrelated sheet.

### Interactive Workday

Three time-based tabs switch between unfinished moments. Each scene follows the same durable sequence: question, input situation, role action, recorded result, and explicit human boundary. Role color binds the tab, connector, labels, and destination link; motion is a short opacity and vertical transfer, removed under reduced-motion preferences.

### Work / Role Record

Role cards show role, name, concrete summary, availability, price, and next action in a single bounded surface. A soft role halo may identify ownership, but factual text and the price/action footer remain the visual anchor.

## Do's and Don'ts

### Do:

- **Do** show work as a sequence from real input to action, recorded result, and human boundary.
- **Do** pair expressive dark stages with crisp light evidence fields.
- **Do** keep role color consistent across tab, status, connector, card halo, and action state.
- **Do** preserve explicit price, permissions, approval, and availability hierarchy in product records.
- **Do** respect reduced motion and retain visible keyboard focus across interactive surfaces.

### Don't:

- **Don't** turn the signal palette into a decorative rainbow or use every accent in every section.
- **Don't** replace operational records with generic glass cards, floating blobs, or abstract AI imagery.
- **Don't** use warm/white evidence fields without clear borders, headings, and record structure.
- **Don't** present unavailable roles with the same emphasis or action language as available roles.
- **Don't** add invented logos, metrics, testimonials, or unlabeled demonstrations as proof.
