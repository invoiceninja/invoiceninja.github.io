<p align="center">
    <img src="https://raw.githubusercontent.com/hillelcoren/invoice-ninja/master/public/images/round_logo.png" alt="Sublime's custom image"/>
</p>

# Invoice Ninja Documentation

**Note:** This is the documentation for version 5 of the Invoice Ninja.

Documentation is available at [https://invoiceninja.github.io](https://invoiceninja.github.io).

### Table of contents
- [Invoice Ninja Documentation](#invoice-ninja-documentation)
    + [Introduction](#introduction)
    + [Getting started](#getting-started)
        - [Clone the repository](#clone-the-repository)
        - [Change directory and install dependencies](#change-directory-and-install-dependencies)
        - [Preview it](#preview-it)

### Introduction

Invoice Ninja documentation is written in the markdown. To process and compile docs locally, we'll need PHP &
Node.js.

The documentation is using Laravel Jigsaw (https://jigsaw.tighten.co/) as a processing engine.

### Getting started

#### Clone the repository

```bash
git clone https://github.com/invoiceninja/invoiceninja.github.io.git
```

#### Change directory and install dependencies

```bash
cd invoiceninja.github.io
composer i
npm i
```

#### Preview it

```bash
npm run watch
```

Now you should be able to edit & preview your changes in real-time.

The official repository is configured to build the site on each commit, so there's no need to compile the production version
locally.

### Code of Conduct
Code of conduct can be found in our main repository. [Code of Conduct](https://github.com/invoiceninja/invoiceninja/blob/master/CODE_OF_CONDUCT.md).

### Licence
Licence can be found in our main repository. [Licence](https://github.com/invoiceninja/invoiceninja/blob/master/LICENSE).