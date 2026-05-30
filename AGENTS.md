# Repository Guidelines

## Project Structure & Module Organization
This repository is a static GitHub Pages personal website. The main page is
`index.html`, with styling in `styles.css` and language/theme behavior in
`script.js`. CV source files live in `CV.tex` and `CV_zh.tex`; generated PDF
assets are `cv-en.pdf` and `cv-zh.pdf`. Domain setup notes are in
`DOMAIN_SETUP.md`, with `CNAME.example` as a template. There is no package
manager, build directory, or formal test suite.

## Build, Test, and Development Commands
- `python3 -m http.server 8000`: serve the site locally at
  `http://localhost:8000`.
- `node --check script.js`: validate JavaScript syntax.
- `git diff --check`: catch whitespace errors before committing.
- `curl -L https://yuanyithu.github.io/`: inspect the deployed GitHub Pages
  output after pushing.

Because this is plain HTML/CSS/JS, opening `index.html` directly also works for
basic checks, but a local server is closer to production behavior.

## Coding Style & Naming Conventions
Use two-space indentation for HTML, CSS, and JavaScript. Keep text content
managed through `data-i18n` keys in `script.js` when it appears in both English
and Chinese. Use clear camelCase translation keys such as `footerUpdated` or
`contactTitle`. Keep CSS class names lowercase and hyphenated, for example
`.site-header` and `.contact-links`. Prefer small, focused edits over layout
rewrites unless the task explicitly calls for redesign.

## Testing Guidelines
There is no automated test framework. Before publishing, manually verify:
English and Chinese language toggles, light/dark theme toggle, responsive layout
at desktop and mobile widths, CV links, email link, and external links. For
JavaScript edits, always run `node --check script.js`. For deployment-sensitive
changes, confirm GitHub Pages serves the expected HTML and cache-busted assets.

## Commit & Pull Request Guidelines
Recent commits use short imperative summaries, for example `Clean up homepage
sections` and `Bust homepage asset cache`. Follow that style: concise,
present-tense, and scoped to the visible change. In pull requests or change
summaries, include what changed, why it changed, validation performed, and
screenshots for visible UI changes.

## Agent-Specific Instructions
Do not commit unrelated local files such as draft notes unless explicitly asked.
If changing translated content, update both English and Chinese dictionaries and
verify fallback HTML remains reasonable before JavaScript runs.
After each repository update, commit and push the intended changes to GitHub in
the same turn unless the user explicitly says not to.
