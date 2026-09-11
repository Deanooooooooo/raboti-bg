# Raboti homepage update, 11 September 2026

## What changed

- Reframed the hero around the unfinished work a business owner recognizes.
- Kept the existing desktop routing geometry and dedicated mobile work-machine scene.
- Added one persistent HTML request/result panel controlled by the work-machine selection.
- Removed automatic employee switching and added a persistent pause/resume control.
- Replaced the separate price strip and tabbed service detail with three visible service summaries.
- Removed the long homepage-only Pishe/search section and the second Vdiga project demonstration.
- Rebuilt setup, responsibility, FAQ and enquiry into the shorter five-section sequence.
- Preserved the form endpoint, field names, consent, error recovery, query-parameter selection and the `#ekip` and `#naemi` anchors.
- Added the supplied SVG result icons and cropped cobalt r asset.

## Copy decisions

The supplied task-led hero, service comparison, FAQ and enquiry copy replaced the more generic incumbent copy. One supplied heading was rewritten:

- Supplied: `Какво поемаме и на каква цена? Ясно е преди старта.`
- Implemented: `Преди старта знаете какво поемаме и колко струва.`

The second version names what the visitor knows before the start and avoids the abstract claim `Ясно е`.

## Validation

- `npm run qa`: passed for all 23 generated HTML pages.
- Astro check: 60 files, 0 errors, 0 warnings and 0 hints.
- Viewports checked: 320, 375, 390, 430, 767, 768, 1024 and 1440 CSS px.
- Horizontal overflow: 0 px at every required viewport.
- Responsive transition: 0 px overflow at both 767 and 768 px.
- One H1 and five homepage sections at every required viewport.
- Five visible FAQ items and FAQ structured data generated from the same array.
- `?agent=vdiga`, `?agent=pishe`, `?agent=pomaga` and `?agent=custom` preselection tested.
- Vdiga, Pishe and Pomaga controls update request, icon, result title and detail together.
- User pause remains active after changing the selected employee.
- Empty-field, invalid-email and missing-consent messages tested without sending an enquiry.
- Vdiga product page and contacts page returned 200 and retained one H1 after shared-component changes.
- GitHub Pages base-path build preserved homepage labels, service links and all new SVG asset paths.
- Bulgarian copy scan found no em dash in the changed homepage source.
- Independent finish review: PASS, ready to ship. No rebuild or open material finding.

## Lighthouse mobile comparison

Measured locally against production builds under the same Lighthouse settings. A single run is directional, not a performance guarantee.

| Metric | Commit `60dfb71` | Updated homepage |
| --- | ---: | ---: |
| Performance | 96 | 99 |
| Accessibility | 96 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |
| LCP | 2725 ms | 1880 ms |
| CLS | 0 | 0 |
| Total transferred | 489,470 B | 372,667 B |
| CSS transferred | 38,292 B | 41,117 B |
| JavaScript transferred | 4,590 B | 5,412 B |
| Images transferred | 374,058 B | 256,366 B |

## Screenshots

- Baseline desktop: `artifacts/homepage-update-20260911/baseline/home-1440.png`
- Baseline mobile: `artifacts/homepage-update-20260911/baseline/home-390.png`
- Updated desktop: `artifacts/homepage-update-20260911/final/home-1440.png`
- Updated mobile: `artifacts/homepage-update-20260911/final/home-390.png`

## Known limit

The production enquiry endpoint was not called during visual QA. Validation and error states were exercised locally so no real business enquiry was sent.
