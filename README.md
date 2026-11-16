<p align="center">
    <img src="https://raw.githubusercontent.com/hillelcoren/invoice-ninja/master/public/images/round_logo.png" alt="Sublime's custom image"/>
</p>

# Invoice Ninja Documentation

**Note:** This is the documentation for version 5 of the Invoice Ninja.

Documentation is available at [https://invoiceninja.github.io](https://invoiceninja.github.io).

### Introduction

Invoice Ninja documentation is written in Markdown and built with [Docusaurus](https://docusaurus.io/). You'll need Node.js (v18+) installed to build and preview the docs locally.

### Getting started

#### Clone the repository

```bash
git clone https://github.com/invoiceninja/invoiceninja.github.io.git
cd invoiceninja.github.io
```

#### Install dependencies

```bash
npm install
```

#### Generate API docs

```bash
npm run clean-api-docs && npm run gen-api-docs
```

#### Start the development server

```bash
npm start
```

This launches a local development server at `http://localhost:3000` with hot-reloading, so edits are reflected in real-time.

#### Build for production

```bash
npm run build
```

#### Serve the production build locally

```bash
npm run serve
```

#### Search development and validation

Use `npm run build` to generate both the plugin indexes and the section-context
assets. Search results are available in the production preview, not `npm start`.

```bash
npm ci
npm run gen-api-docs
npm run build
npm run search:check
npm run search:test
npx playwright install chromium
npm run search:smoke
```

`search:check` preserves the existing index-content checks and runs the 50-case
curated relevance fixture in `search/queries.json`. It fails for missing canonical
destinations, mandatory ranking regressions, unrelated negative results, or less
than 90% top-three success on answerable cases. `search:test` checks section
extraction, content changes/deletions and deterministic IDs. `search:smoke` tests
the built site in Chromium with external requests blocked. CI runs these checks
on pull requests and before publication.

The existing easyops search plugin still supplies body candidates and its
background worker. `scripts/search-context.cjs` supplements it with canonical
H1–H6 sections, searchable ancestor headings, section-specific aliases and
configuration examples for self-hosting/developer audiences. The record contract
is in `src/components/DocumentationSearch/schema.ts`. The shared retrieval adapter
ranks complete sections, downweights related links, rejects low-coverage matches,
and chooses excerpts from source text. Lunr's existing stemmer is reused as a
direct, pinned dependency; no new search engine or external query service is used.

Add customer terminology to `search/section-aliases.json` under an existing
canonical section URL. Aliases describe features, not exact-query redirects, and
are never displayed as instructions. Missing alias destinations fail the build.
Keep ordinary instructions in the documentation itself. Preserve public heading
IDs when changing task titles.

Context files have a schema version, deterministic destination IDs, source paths,
content hashes and scope. The frontend requests filenames containing the content
index version and a fingerprint of the context/ranking configuration. Incompatible
or missing assets show a refresh message. Search indexes, section context, and
ranking code start loading after the page is idle, and again when the search
field is hovered or focused, so a query can reuse that work. The expanded page
offers additional matches without suppressing sections from the same page.

`npm run search:benchmark` writes ranked results and local Node timings to
`.search-artifacts/candidate.json`. The checked-in baseline was captured at
`128341b84f0e1ae05c584f78ff5231ab2d14df59` using the actual installed worker and
original result preparation. Full local snapshots are under
`.search-artifacts/baseline`. To reproduce the original baseline in a fresh
checkout, build that audited revision in a separate worktree, then run the current
capture script against its output:

```bash
git worktree add --detach /tmp/invoiceninja-search-baseline 128341b84f0e1ae05c584f78ff5231ab2d14df59
# In that worktree: npm ci; npm run gen-api-docs; npm run build
node scripts/benchmark-search.cjs --capture-baseline --corpus /tmp/invoiceninja-search-baseline/build
```

The capture script reads the original result adapter from Git and refuses to
overwrite an existing snapshot. With a snapshot available, compare the candidate
on unchanged content:

```bash
node scripts/search-context.cjs .search-artifacts/baseline/site
npm run search:benchmark -- --corpus .search-artifacts/baseline/site
```

`npm run search:measure` measures cold/warm user-visible query times in Chromium
on an isolated local static server. `npm run search:report` writes the comparison
to `search/results.json`, including same-content results when the snapshot is
available. Timings include their measurement conditions and are local estimates,
not production latency promises.

The fixture is curated, not sampled from support logs. Reserved wording cases
were not used to adjust weights after the first run; they are not an independent
customer evaluation. Vocabulary support is editorial and lexical. Unfamiliar
paraphrases can still need better documentation or aliases.

Pull requests targeting `v5-rework` build and validate the site. Pushes to
`v5-rework` publish only after the required search checks pass.

### Code of Conduct

Code of conduct can be found in our main repository. [Code of Conduct](https://github.com/invoiceninja/invoiceninja/blob/master/CODE_OF_CONDUCT.md).

### Licence

Licence can be found in our main repository. [Licence](https://github.com/invoiceninja/invoiceninja/blob/master/LICENSE).
