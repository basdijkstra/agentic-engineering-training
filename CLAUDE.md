# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

A self-contained, three-page static HTML site built around the **Valuable Feedback, Fast** test automation maturity assessment by Bas Dijkstra. No build step, no framework, no dependencies — each page is a single `.html` file with embedded CSS and JavaScript.

## Pages

| File | Purpose |
|------|---------|
| `valuable-feedback-fast-assessment.html` | The main assessment — 36 questions across 8 dimensions, live scoring, maturity-level results |
| `resources.html` | Links to related blog posts and training courses |
| `contact.html` | Links to Bas's contact page and LinkedIn profile |

## Architecture

All three pages share:
- **Identical nav markup** — sticky bar with brand link + Assessment / Resources / Contact links. Active page gets `class="nav-link active"`. When adding a page, update the nav in all three files.
- **Identical CSS custom properties** — `--navy`, `--teal`, `--text`, `--muted`, `--border`, `--bg`, `--radius`, `--shadow` defined in `:root`. Use these; don't introduce new colour values.
- **Identical nav and footer patterns** — copy from an existing page when adding a new one.

### Assessment page internals

The assessment is driven entirely by vanilla JS in a `<script>` block at the bottom of the file:

- **`SECTIONS`** — array of `{ id, name, max }` objects defining the 8 dimensions. `max` is the number of questions × 4.
- **`answers`** — plain object keyed by `"sectionId_questionIndex"` (e.g. `"1_3"`), value is 1–4.
- **`DESCS`** — object keyed by maturity level (`early` / `developing` / `practicing` / `optimizing`) containing the description shown in results.
- **`STEPS`** — object keyed by maturity level containing arrays of `{ n, title, body }` next-step cards.
- **`maturity(pct)`** — maps a percentage score to a maturity level object.
- **`refresh()`** — updates progress bar and per-section score bars after every answer click.
- **`showResults()`** — called by the CTA button; renders the full results panel.

Maturity thresholds: Early 0–25 %, Developing 26–50 %, Practicing 51–75 %, Optimizing 76–100 %. Total max score is 144 (36 questions × 4).

## Tone of voice

All copy is written in the style of Bas Dijkstra: direct, warm, and lightly humorous. Short punchy sentences. Occasional self-aware asides. Honest about tradeoffs without sitting on the fence. See the section descriptions and maturity-level results text in the assessment page for reference — match that register when adding or editing any user-facing copy.

## Allowed web fetches

`.claude/settings.local.json` pre-approves fetches from `www.ontestautomation.com`. Use `WebFetch` against that domain freely when sourcing content or checking links.
