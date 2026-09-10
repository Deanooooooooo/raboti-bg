---
name: "Raboti Studio"
description: "Approved light Studio identity for scoped AI services."
colors:
  action: "#5154cc"
  action-hover: "#4143aa"
  text-blue: "#315cf5"
  ink: "#17233d"
  muted: "#697286"
  heading-muted: "#798195"
  page: "#fcfdff"
  white: "#ffffff"
  line: "#e1e6ef"
  process-field: "#f2f3fa"
  service-field: "#f0f4fb"
typography:
  display:
    fontSize: "clamp(2.5rem,4.5vw,3.75rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-.035em"
    fontFamily: "Onest, sans-serif"
  heading:
    fontSize: "2.5rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-.03em"
    fontFamily: "Onest, sans-serif"
  title:
    fontSize: "1.5rem"
    fontWeight: 500
    fontFamily: "Onest, sans-serif"
  lead:
    fontSize: "1.125rem"
    lineHeight: 1.65
    fontFamily: "Onest, sans-serif"
  body:
    fontSize: "1rem"
    fontFamily: "Onest, sans-serif"
  label:
    fontSize: ".875rem"
    fontFamily: "Onest, sans-serif"
  meta:
    fontSize: ".8125rem"
    fontFamily: "Onest, sans-serif"
rounded:
  input: "10px"
  work-window: "14px"
  panel: "16px"
  service: "20px"
  contact: "22px"
  action: "999px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.white}"
    rounded: "{rounded.action}"
    padding: "16px 25px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
  button-header:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.action}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.input}"
    padding: "12px 14px"
  card-project:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "30px 34px"
---

# Design System: Raboti Studio

## Overview

**Creative North Star: "Approved Studio"**

The approved Studio uses neutral-white pages, navy and blue text, Onest typography, purple pill actions, portraits and concrete work examples. This replaces the retired dark/cyan design reference; it does not authorize a new visual direction.

Authority: `src/styles/studio.css` (including its final overrides), `src/styles/studio-secondary.css`, route-local styles, and shared navigation in `src/styles/global.css`. This is a source-extracted reference, not a browser-computed snapshot. Existing `.studio` pages inherit this system; legacy selectors are not a second approved global identity.

**Key Characteristics:**

- Neutral-white canvas with pale supporting fields.
- Navy body/headings, blue emphasis and purple actions remain distinct.
- One Onest role scale; fully pill-shaped action controls.
- Translucent floating navigation at both the top and after scrolling.

## Colors

Primary action purple is separate from text blue. Navy is the principal ink and the header CTA fill; muted gray-blue supports descriptions. Page white, white cards and pale fields establish the light identity. Preserve existing localized portrait tints and route-specific blue overrides rather than spreading new role colors.

## Typography

Use the frontmatter's Onest roles, matching `--type-*` in Studio. Display and heading weights are 500; body and label weights/leading vary by component, so no universal values are invented here. At 700px and below, display becomes 2.5rem, heading 1.875rem and title 1.375rem. The lead becomes body-sized in the mobile hero.

Secondary pages have explicit reading exceptions: at 650px and below, their main headings are 2.5rem / 2rem / 1.5rem; article titles may be 2.25rem and article section headings 1.75rem. Preserve these source exceptions instead of applying the homepage scale blindly.

## Layout

Studio content uses a 1220px cap with 48px side gutters. The shared homepage wrapper reduces gutters to 28px at 1050px and 20px at 700px. Secondary wrappers use 20px at 650px. Integrations changes its catalog from three to two columns at 900px and one at 650px. Homepage splits generally stack at 700px; custom service tabs become a 2×2 grid at 650px. Surface briefs own page composition. Spacing is component-specific, not a fabricated universal spacing scale.

## Elevation & Depth

Pale fields, thin borders and white inset panels provide structure. Work/project and form panels retain their existing soft shadows; primary buttons have no shadow. Preserve the navigation's blur, shadow and short scroll translation. Project reveal runs only without reduced-motion preference; the Studio reduced-motion rule removes animation and transition.

## Shapes

Actions are fully pill-shaped via `--radius-action`, including buttons and button-like links. Do not mistake earlier 6–8px declarations for their effective shape. Inputs and panels keep the distinct frontmatter radii. Portraits, marks and role selectors retain their existing geometry.

## Components

- **Role wordmarks:** Vdiga, Pishe and Pomaga use their owner-supplied transparent wordmarks as restrained identity anchors. Use the dark variants on white/pale fields and the light variants over portraits, dark fields or saturated color. Vdiga and Pishe use width-led sizing; Pomaga is calibrated to Pishe's visible, non-transparent letter bounds separately for each tone because the source padding differs. Dark Pomaga targets are 26px in the compact service strip, 30px in the homepage demo and 49px desktop / 41px mobile in agent-page heroes. Light Pomaga targets are 57px desktop / 49px mobile over portraits. Preserve each native aspect ratio. Pishe's light foreground alpha is normalized to solid white while retaining the blue accent. One identifying mark per role-focused region is enough.

- **Primary action:** Purple with white text; darker purple hover, no glow or lift. Desktop padding is in frontmatter; mobile uses the label size. Secondary-page button hover is locally `#4143ac`.
- **Header:** Floating rounded shell; the exact background in both top and scrolled states is `linear-gradient(180deg,rgba(255,255,255,.4) 10%,rgba(255,255,255,.8) 100%)`, with 4px backdrop blur. Unsupported backdrop-filter falls back to 98% white. Scroll changes position, not opacity. Header CTA remains navy, hovering to `#283956`; the transparent logo keeps its native ratio at 122px wide (110px at 650px), matching the former wordmark's optical presence.
- **Fields:** White, 10px corners, 1px stroke; homepage stroke `#dbe3f1`, secondary-page stroke `#cbd3e2`. Inputs retain the shared 50px minimum height; textareas are not fixed to that height.
- **Selectors:** Pill controls with `aria-pressed`; service selection uses navy/white, integrations uses purple/white. Do not conflate these states.
- **Panels:** White project/work records and pale service panels; retain source-specific padding and mobile reductions. Product demonstrations are illustrative, not live customer activity.
- **Focus:** Shared Studio focus is a 3px `#6e91ff` outline with 5px offset. Secondary main content and integration controls have explicit local purple/blue overrides.

## Do's and Don'ts

### Do:

- Use the current Studio cascade and route-specific overrides as the implementation authority.
- Keep concrete role scope, price, permissions and next actions readable.
- Label illustrative demonstrations; retain keyboard focus and reduced-motion behavior.

### Don't:

- Do not restore the old dark/cyan system, Inter hierarchy or retired surface concepts.
- Do not turn the header opaque on scroll or recolor all blue text purple.
- Do not use generic „ясна/реална“ filler in scope copy; name the task, systems, permitted actions and approval conditions.
- Do not invent customer evidence, universal integration support or a fixed-price custom subscription.
