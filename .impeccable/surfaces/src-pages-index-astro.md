---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/components/WorkdayStory.astro"]
---

Scope: Homepage at src/pages/index.astro. Visitor mode: Persuade.

Audience and job: A Bulgarian small-business owner or manager who recognizes recurring unfinished work and needs to decide whether one available role can take it over.

Primary action: Describe one real task for evaluation. Secondary action: inspect the three currently available roles.

Proof and constraints: Show role scope, current prices, setup boundaries, approvals, and recorded work. Only Вдига, Пише, and Помага are available. Do not invent customers, testimonials, logos, or performance metrics.

Direction: Three unfinished moments in one working day. The memorable interaction lets the visitor move between the ringing phone, waiting website change, and unprocessed operational email, then see work, result, and human boundary.

Unresolved: Real customer proof remains unavailable; product demonstrations must remain explicitly illustrative.

## Homepage refinement preview — 2026-09-06

User-directed scope: preserve all seven homepage sections in their original order, existing Bulgarian copy, three portrait-based agent cards, prices, links, and form behavior. Remove only the oversized hero R. This is a styling refinement, not a replacement homepage concept.

Homepage-only styling lives in src/styles/home-refinement.css. Onest (self-hosted, Cyrillic and Latin, OFL license in src/assets/fonts/LICENSE) replaces Inter only on this surface. Display 64px desktop / 42px mobile, section headings 44px / 32px, card names 38px, body 16–18px, utility 12–15px. Weight 450–500 on display, 400 body.

Surface tokens: ink #171c26, muted #596271, line #dce1e8, action blue #2455d6, cool field #f4f6fa, dark process/footer #151c2b. Retain role portrait colours. Cards 14px, inputs 6px, CTA pills. Preserve white/light reading areas and a single dark process section.

The mechanical detector reports intentional differences from the incumbent global DESIGN.md (font, type sizes, palette and radii). These are authorized homepage-local refinements, not global token migrations; other routes keep their visual system. No detector errors outside those documented system differences.

## Interactive refinement — 2026-09-06

Follow-up request restores the original floating navigation and authorizes rewritten agent-card copy plus lightweight 3D interaction. RoleKeys.astro adds three CSS-perspective keycaps tied to role-specific illustrative tasks. Click/tap and arrow-key selection update the example; pointer tilt is fine-pointer only, event-driven and disabled for reduced motion. No WebGL, image assets, animation dependency, autoplay, or continuous rendering loop. Cards retain prices and portraits, with shorter benefit headings and descriptions. Homepage font preloads now prioritize Onest; other routes retain Inter preloads.

## Approved compositional pass — 2026-09-06

User approved the continuous three-column portrait gallery, dimensional workflow, open 2×2 enquiry explanations, full-width FAQ with desktop side-by-side answers, and unboxed contact form. All visible wording, section order, hero and original floating navigation remain unchanged. Workflow stages support keyboard focus and one bounded IntersectionObserver entrance; reduced-motion disables it. Mobile gallery stacks, workflow flattens, and FAQ answers follow their questions. No dependencies or new media assets introduced.
