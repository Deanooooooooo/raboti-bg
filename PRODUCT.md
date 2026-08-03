# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are owners and managers of Bulgarian small and medium businesses. They are evaluating whether recurring operational work, missed calls, website updates, and routine transfers between systems can be handled reliably without adding more manual workload to their team.

## Product Purpose

Работи is a Bulgarian platform for AI employees with defined roles, responsibilities, monthly prices, setup periods, and human-control boundaries. Success means that a visitor quickly understands which real task each employee can take over, trusts the operating model, and can choose an employee or request a demo.

## Positioning

Работи presents AI as named employees hired for concrete recurring work, not as a generic software toolkit. Each employee has an explicit job, scope, integrations, price or availability status, and clear moments where a person remains in control.

## Operating Context

The work begins with real business inputs such as calls, email, forms, calendars, websites, documents, spreadsheets, CRM, and ERP systems. Tasks are configured around the business's existing process. Risky or irreversible actions can require human approval, and completed work can be recorded.

## Capabilities and Constraints

- Preserve the existing Astro architecture, static-first delivery, routes, real content, and product capabilities.
- Keep client-side JavaScript minimal and use it only for meaningful interaction.
- The current employees are Вдига, Помага, Пише, Смята, and Продава; their status, prices, duties, and integrations come from `src/content/agents/`.
- The homepage must remain truthful to the implemented offer and must not add unsupported proof or commercial claims.
- Bulgarian is the primary product language.

## Brand Commitments

- Name: Работи / raboti.bg.
- Preserve the white base and the established cyan → blue → violet spectrum as recognizable brand material.
- The visual world should be technology-led, expressive, coherent, and scalable across hero art, employee identities, icons, graphs, illustration, motion, typography, and layout.
- Visual elements should communicate how work is received, understood, completed, and returned as a result.

## Evidence on Hand

- Verified product and offer content: `src/content/agents/`, `src/data/site.ts`, and the existing routes.
- Existing logo mark and favicon: `public/assets/logo-mark.svg` and `public/assets/favicon.svg`.
- Existing structured data, FAQs, pricing, and service descriptions are implemented in the repository.
- No customer logos, testimonials, or performance benchmarks are available for the homepage and none should be fabricated.

## Product Principles

- Start with the business task, not with AI terminology.
- Make each employee's role and result immediately understandable.
- Show human control as part of how the service works.
- Earn trust through specific scope, transparent status, pricing, and process.
- Keep the experience fast enough to feel immediate on ordinary mobile connections.

## Accessibility & Inclusion

The public site should meet WCAG AA fundamentals, support keyboard navigation, readable Bulgarian typography, reduced motion, and responsive use across mobile and desktop.
