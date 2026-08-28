# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page marketing site for **LEORA Up & Lab**, the retail-optimization consultancy of a
consultant named Sarah, based in the Pas-de-Calais region of France. All user-facing copy is in
French. This is a static site — no build step, no framework, no package manager, not a git repo.

## Running / previewing

Open `index.html` directly in a browser, or serve the folder to make the root-relative asset paths
behave exactly as in production:

```
python -m http.server 8000
```

There is no build, lint, or test tooling. Changes to HTML/CSS/JS are live on reload.

## Structure

- `index.html` — the entire site; every section lives here (nav, hero, méthode, services, à propos,
  CTA, fiscal, contact, footer). Sections are linked by `id` and reached via in-page `#anchor` nav.
- `css/style.css` — all styling. Single file, organized by commented section banners in the same
  order as the page.
- `js/main.js` — all behavior: mobile hamburger menu toggle, navbar shrink-on-scroll
  (`.scrolled` class past 50px), and JS smooth-scroll with navbar-height offset for anchor links.
- `images/` — local photography (`hero-bg.jpg` is reused as the fixed background for the method,
  about, and — via CSS — several sections).

## Conventions that matter

- **Design tokens live in `:root` in `style.css`** — the bordeaux brand palette (`--bordeaux` and
  its light/dark variants), greys, shadows (`--shadow-sm/md/lg`), and `--transition`. Use these
  variables rather than hardcoding colors or shadows.
- **Layout** relies on two grid helpers: `.grid-3` (auto-fit cards, min 300px) and `.about-grid`
  (2-col, collapses to 1-col at ≤992px). Responsive breakpoints are 992px and 768px.
- Some sections (notably `#fiscal`) carry heavy **inline `style=` attributes** rather than classes.
  Match the existing approach when editing that section; prefer classes elsewhere.
- External dependencies are CDN `<link>`s in `<head>`: Google Fonts (Inter) and Font Awesome 6.4.0
  (icon classes like `fa-search-dollar`). Method-step images are hotlinked from Unsplash.
- **The contact form is intentionally disabled.** `js/main.js` has the AJAX submit handler commented
  out, and `index.html` currently renders only the contact-info panel (no `<form id="contactForm">`).
  If reinstating a form, re-enable the handler block in `main.js` too.
