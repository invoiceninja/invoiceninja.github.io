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

The official repository is configured to build and deploy the site on each commit, so there's no need to compile the production version locally.

### Code of Conduct

Code of conduct can be found in our main repository. [Code of Conduct](https://github.com/invoiceninja/invoiceninja/blob/master/CODE_OF_CONDUCT.md).

### Licence

Licence can be found in our main repository. [Licence](https://github.com/invoiceninja/invoiceninja/blob/master/LICENSE).
