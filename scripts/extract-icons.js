#!/usr/bin/env node
/**
 * Purpose:
 * - Extracts and normalizes SVG icons from TSX icon components into static assets for docs usage.
 *
 * Existence justification:
 * - Keeps icon output deterministic and framework-agnostic so docs can use plain SVG files without React/TSX runtime.
 *
 * Consumes:
 * - Icon component files from `ICON_SRC`, `--src`, or the default UI icon directory.
 * - By default, the source is the Invoice Ninja UI repository checkout at
 *   `external/invoiceninja-ui/src/components/icons`.
 * - Script arguments and environment configuration.
 *
 * Computes:
 * - A normalized SVG representation per TSX icon (attribute cleanup, JSX stripping, root normalization).
 * - A deterministic output set and stale-file cleanup based on current source files.
 *
 * Outputs:
 * - Writes SVG files to `static/assets/images/icons`.
 *
 * Side effects:
 * - Creates the output directory if missing.
 * - Overwrites generated SVG files and removes stale generated SVGs.
 *
 * Usage:
 * - Run via `npm run icons:sync` (or `node scripts/extract-icons.js`).
 * - Optionally pass `--src <path>` or set `ICON_SRC` to override the source directory.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const allowedPropIdentifiers = new Set([
  'size',
  'color',
  'fill',
  'fillColor',
  'filledColor',
  'borderColor',
  'clockColor',
  'exclamationMarkColor',
  'strokeWidth',
  'className',
]);

function getArgValue(flag) {
  const idx = args.indexOf(flag);
  if (idx !== -1 && args[idx + 1]) {
    return args[idx + 1];
  }
  return null;
}

const configuredSrc = process.env.ICON_SRC || getArgValue('--src') || args.find((arg) => !arg.startsWith('-'));
const defaultSrc = path.resolve(__dirname, '..', 'external', 'invoiceninja-ui', 'src', 'components', 'icons');
const srcDir = configuredSrc ? path.resolve(process.cwd(), configuredSrc) : defaultSrc;
const outDir = path.resolve(__dirname, '..', 'static', 'assets', 'images', 'icons');

function listFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listFiles(fullPath));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  return files;
}

function parseAttributes(tag) {
  const attrs = {};
  const attrRe = /([^\s=]+)\s*=\s*("([^"]*)"|'([^']*)')/g;
  let match = null;
  while ((match = attrRe.exec(tag)) !== null) {
    const key = match[1];
    const value = match[3] !== undefined ? match[3] : match[4];
    attrs[key] = value;
  }
  return attrs;
}

function normalizeSvg(tsx, filePath) {
  const match = tsx.match(/<svg[\s\S]*?<\/svg>/m);
  if (!match) {
    if (/<Styled[A-Za-z0-9_]*\b/.test(tsx)) {
      console.log(`[icons] notice: skipping ${filePath} because it wraps SVG in a styled component`);
      return null;
    }
    console.log(`[icons] notice: skipping ${filePath} because no <svg> root was found`);
    return null;
  }

  let svg = match[0].replace(/\r\n/g, '\n');

  // Strip JSX-only syntax to keep output plain SVG.
  svg = svg.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  svg = svg.replace(/\s*style=\{\{[\s\S]*?\}\}/g, '');
  svg = svg.replace(/\s*style=(\{[^}]*\}|"[^"]*"|'[^']*')/g, '');
  svg = svg.replace(/\{\s*['"]\s*['"]\s*\}/g, '');
  svg = svg.replace(/\s*(className|class)=(\{[^}]*\}|"[^"]*"|'[^']*')/g, '');

  if (/\{\s*\.\.\./.test(svg)) {
    console.log(`[icons] notice: skipping ${filePath} due to JSX spread expression`);
    return null;
  }

  if (svg.includes('&&')) {
    console.log(`[icons] notice: skipping ${filePath} due to conditional JSX expression`);
    return null;
  }

  // Remove simple `{identifier}` expressions for known props or log+drop otherwise.
  const propExpr = /\s+([a-zA-Z:-]+)=\{([A-Za-z_][A-Za-z0-9_]*)\}/g;
  svg = svg.replace(propExpr, (match, attrName, identifier) => {
    if (allowedPropIdentifiers.has(identifier)) {
      return '';
    }

    console.log(`[icons] notice: unknown prop "${identifier}" in ${filePath}, value discarded`);
    return '';
  });

  // Normalize common JSX attribute casing to SVG attribute names.
  const attrMap = {
    strokeWidth: 'stroke-width',
    strokeLinecap: 'stroke-linecap',
    strokeLinejoin: 'stroke-linejoin',
    strokeMiterlimit: 'stroke-miterlimit',
    strokeDasharray: 'stroke-dasharray',
    strokeDashoffset: 'stroke-dashoffset',
    strokeOpacity: 'stroke-opacity',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    clipRule: 'clip-rule',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    xmlnsXlink: 'xmlns:xlink',
    xlinkHref: 'xlink:href',
    xmlSpace: 'xml:space',
  };

  for (const [from, to] of Object.entries(attrMap)) {
    svg = svg.replace(new RegExp(`\\b${from}=`, 'g'), `${to}=`);
  }

  // Convert JSX attribute values to plain strings.
  svg = svg.replace(/\s+([a-zA-Z:-]+)=\{true\}/g, ' $1');
  svg = svg.replace(/\s+([a-zA-Z:-]+)=\{false\}/g, '');
  svg = svg.replace(/=\{\s*(['"])(.*?)\1\s*\}/g, '="$2"');
  svg = svg.replace(/=\{\s*([0-9.]+)\s*\}/g, '="$1"');
  svg = svg.replace(/=\{\s*([a-zA-Z0-9._:-]+)\s*\}/g, '="$1"');

  if (/[{}]/.test(svg)) {
    throw new Error(`Unconverted JSX found in ${filePath}`);
  }

  // Enforce currentColor for any explicit fills/strokes.
  svg = svg.replace(/\sfill="(?!none|currentColor)[^"]*"/g, ' fill="currentColor"');
  svg = svg.replace(/\sstroke="(?!none|currentColor)[^"]*"/g, ' stroke="currentColor"');
  svg = svg.replace(/\sstop-color="(?!none|currentColor)[^"]*"/g, ' stop-color="currentColor"');

  const openTagMatch = svg.match(/<svg\b[^>]*>/);
  if (!openTagMatch) {
    throw new Error(`Malformed <svg> tag in ${filePath}`);
  }

  const openTag = openTagMatch[0];
  const rootAttrs = parseAttributes(openTag);
  const usesStroke = /stroke=|stroke-width=|stroke-linecap=|stroke-linejoin=/.test(svg);
  const rootFill = rootAttrs.fill;
  const hasViewBox = rootAttrs.viewBox || rootAttrs.viewbox;

  if (!hasViewBox) {
    throw new Error(`Missing viewBox in ${filePath}`);
  }

  if (!rootAttrs.viewBox && rootAttrs.viewbox) {
    rootAttrs.viewBox = rootAttrs.viewbox;
    delete rootAttrs.viewbox;
  }

  // Rebuild root tag deterministically to avoid churn across runs.
  delete rootAttrs.class;
  delete rootAttrs.style;
  delete rootAttrs.width;
  delete rootAttrs.height;
  delete rootAttrs.fill;
  delete rootAttrs.stroke;

  rootAttrs.xmlns = rootAttrs.xmlns || 'http://www.w3.org/2000/svg';
  rootAttrs.width = '1em';
  rootAttrs.height = '1em';

  if (rootFill === 'none' || (usesStroke && !rootFill)) {
    rootAttrs.fill = 'none';
  } else {
    rootAttrs.fill = 'currentColor';
  }

  if (usesStroke) {
    rootAttrs.stroke = 'currentColor';
  }

  const orderedKeys = Object.keys(rootAttrs).sort();
  const attrsString = orderedKeys.map((key) => `${key}="${rootAttrs[key]}"`).join(' ');
  const newOpenTag = attrsString ? `<svg ${attrsString}>` : '<svg>';

  svg = svg.replace(openTag, newOpenTag);

  return svg.trim();
}

function main() {
  if (!fs.existsSync(srcDir)) {
    if (!fs.existsSync(outDir)) {
      return;
    }
    const hasSvg = fs.readdirSync(outDir).some((name) => name.endsWith('.svg'));
    if (!hasSvg) {
      return;
    }
    throw new Error(`ICON_SRC not found at ${srcDir}`);
  }

  const tsxFiles = listFiles(srcDir).sort();
  if (tsxFiles.length === 0) {
    const hasSvg = fs.existsSync(outDir) && fs.readdirSync(outDir).some((name) => name.endsWith('.svg'));
    if (!hasSvg) {
      return;
    }
    throw new Error(`No TSX icons found in ${srcDir}`);
  }

  fs.mkdirSync(outDir, { recursive: true });

  const written = new Set();

  for (const filePath of tsxFiles) {
    const tsx = fs.readFileSync(filePath, 'utf8');
    const svg = normalizeSvg(tsx, filePath);
    if (svg === null) {
      continue;
    }
    const fileName = path.basename(filePath, '.tsx');
    const outPath = path.join(outDir, `${fileName}.svg`);
    fs.writeFileSync(outPath, `${svg}\n`, 'utf8');
    written.add(path.basename(outPath));
  }

  // Remove stale SVGs to keep output deterministic.
  const existing = fs.readdirSync(outDir);
  for (const name of existing) {
    if (!name.endsWith('.svg')) {
      continue;
    }
    if (!written.has(name)) {
      fs.unlinkSync(path.join(outDir, name));
    }
  }
}

main();
