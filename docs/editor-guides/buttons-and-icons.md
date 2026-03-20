---
title: "Buttons & Icons"
sidebar_position: 10
---

This page answers one question:
How do I get an icon from the Invoice Ninja UI repo into the docs page I am editing?

## At a glance

- Input: TSX icons from `external/invoiceninja-ui/src/components/icons`
- Tool: `npm run icons:sync`
- Output: SVG files in `static/assets/images/icons/`
- Usage in Markdown/MDX docs: `<img src="/assets/images/icons/<IconName>.svg" ... />`
- Usage in React pages (`src/pages/*.tsx`): `import Icon from "@site/static/assets/images/icons/<IconName>.svg"`

If you only need the fast path, go to: [How to use it to reach a concrete result](#how-to-use-it-to-reach-a-concrete-result).

## Which usage mode?

- Use `<img ...>` when editing docs content files in `docs/` (Markdown/MDX).
- Use SVG import as React component when editing page components in `src/pages/`.

## Icon paths

- Source icons from `external/invoiceninja-ui/src/components/icons`.
- Store publishable SVGs in `static/assets/images/icons/`.
- Run `npm run icons:sync` to normalize TSX icons into SVGs.

Only keep icons that are actually used in docs to avoid asset bloat.

## Icon sync workflow

Use this flow when the icon set in the Invoice Ninja UI repository changed.

1. Ensure the UI repo is available at `external/invoiceninja-ui`.
2. Run the sync script:

```bash
npm run icons:sync
```

3. Review generated changes in `static/assets/images/icons/`.
4. Validate determinism in CI or before commit:

```bash
npm run icons:check
```

`icons:check` reruns extraction and fails if Git diff changes, which helps catch
out-of-date icon output.

## How to use it to reach a concrete result

Goal: show a specific UI icon on a specific docs page.

1. Identify the icon component name in the Invoice Ninja UI repo:
   `external/invoiceninja-ui/src/components/icons`  
   Example: `ArrowRight.tsx` -> target file name will be `ArrowRight.svg`.
2. Generate/update docs icons:

```bash
npm run icons:sync
```

3. Confirm the expected output file exists:
   `static/assets/images/icons/ArrowRight.svg`
4. Use it in your docs page:

```html
<img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true" />
```

Or, if you are inside a React page component (`src/pages/*.tsx`):

```tsx
import ArrowRightIcon from "@site/static/assets/images/icons/ArrowRight.svg";

<span aria-hidden="true">
  <ArrowRightIcon />
</span>
```

5. Reference that image in your CTA/button snippet and run the site locally
   (`npm start`) to verify it renders.

Expected result:
- The icon is available under `/assets/images/icons/<Name>.svg`.
- The icon renders either via `<img ...>` (docs content) or via SVG component import (React page).

## Quick command map by goal

- Update generated icon set from default Invoice Ninja source:
  `npm run icons:sync`
- Verify generated icon output is up to date (CI/pre-commit):
  `npm run icons:check`
- Use a different icon source directory:
  `node scripts/extract-icons.js --src /absolute/path/to/icons`

### Custom source directory

If your icons are not under the default Invoice Ninja checkout path, use one of
these overrides:

```bash
node scripts/extract-icons.js --src /absolute/path/to/icons
```

```bash
ICON_SRC=/absolute/path/to/icons node scripts/extract-icons.js
```

### What the script does

- Reads TSX icon components.
- Strips JSX-only syntax and normalizes SVG attributes.
- Forces a deterministic root SVG shape (`width/height`, `viewBox`, colors).
- Writes output to `static/assets/images/icons/`.
- Removes stale generated SVGs that no longer exist in source.

## Troubleshooting

- `ICON_SRC not found ...`
  The configured source path does not exist. Ensure `external/invoiceninja-ui`
  is present or pass `--src`.
- Expected icon SVG not generated
  Check script output for `skipping ...` notices (for example styled wrappers or
  unsupported JSX patterns).
- Icon file exists but does not render
  Verify exact filename/case in the image path and restart local dev server.
- I need brand logos (Discord/YouTube/Slack) from UI stack
  The Invoice Ninja UI icon set contains generic product icons, not full brand-logo packs. Use the closest UI icon (for example `Users`, `MediaPlay`, `Message`) for visual consistency.

## Minimal CTA buttons

```html
<a href="/docs/self-host/self-host-installation" class="card-btn card-btn-primary">
  Primary CTA
</a>

<a href="/docs/user-guide" class="card-btn card-btn-outline">
  Secondary CTA
</a>
```

## Buttons with icon

```html
<a class="card-btn card-btn-outline" href="https://www.youtube.com/watch?v=xo6a3KtLC2g" target="_blank" rel="noopener noreferrer">
  <img src="/assets/images/icons/MediaPlay.svg" alt="" aria-hidden="true" />
  Watch demo
</a>
```

Primary buttons invert icon color automatically.

## Card with CTA stack

```html
<div class="card-panel">
  <p><strong>Secure & fast maintenance</strong></p>
  <h3>INmanage CLI installer</h3>
  <p>Provisioning, upgrades, backups, and alerts in one flow.</p>
  <div class="card-cta">
    <a class="card-btn card-btn-primary" href="https://github.com/DrDBanner/inmanage" target="_blank" rel="noopener noreferrer">
      Open CLI
      <img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true" />
    </a>
  </div>
</div>
```

## Best practices

- Use `card-btn` for consistency.
- For off-site links always include `target="_blank" rel="noopener noreferrer"`.
- Keep CTA labels action-oriented and short.
