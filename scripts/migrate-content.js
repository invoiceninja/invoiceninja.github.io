#!/usr/bin/env node

/**
 * Migration Script: Jigsaw -> Docusaurus
 *
 * Processes all markdown files from source/en/ and source/fr_CA/,
 * converts frontmatter, Blade components, and internal links,
 * then writes to the Docusaurus directory structure.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SOURCE_DIR = path.join(ROOT, "source");
const DOCS_DIR = path.join(ROOT, "docs");
const I18N_DIR = path.join(
  ROOT,
  "i18n",
  "fr-CA",
  "docusaurus-plugin-content-docs",
  "current"
);

// ============================================================
// FILE-TO-SECTION MAPPING
// ============================================================

const SECTION_MAP = {
  // User Guide
  "user-guide": "user-guide",
  faq: "user-guide",
  banking: "user-guide",
  clients: "user-guide",
  credits: "user-guide",
  "client-portal": "user-guide",
  einvoicing: "user-guide",
  esignatures: "user-guide",
  expenses: "user-guide",
  invoices: "user-guide",
  quotes: "user-guide",
  "recurring-invoices": "user-guide",
  gateways: "user-guide",
  products: "user-guide",
  payments: "user-guide",
  projects: "user-guide",
  purchase_orders: "user-guide",
  tasks: "user-guide",
  taxes: "user-guide",
  "recurring-expenses": "user-guide",
  reports: "user-guide",
  subscriptions: "user-guide",
  transactions: "user-guide",
  vendors: "user-guide",
  "basic-settings": "user-guide",
  "advanced-settings": "user-guide",

  // Advanced Topics
  "email-customization": "advanced-topics",
  "custom-fields": "advanced-topics",
  "import-and-export": "advanced-topics",
  "qr-codes": "advanced-topics",
  templates: "advanced-topics",
  schedules: "advanced-topics",
  "tax-accounting-tips": "advanced-topics",

  // Hosted
  "hosted-quickstart": "hosted",
  "hosted-activate": "hosted",
  "hosted-custom-domain": "hosted",
  "hosted-migration": "hosted",
  "hosted-mail": "hosted",
  "hosted-stripe": "hosted",
  "hosted-troubleshooting": "hosted",
  "hosted-trouble-shooting": "hosted", // fr_CA variant
  "hosted-delete-account": "hosted",

  // Self Host
  "getting-started": "self-host",
  "self-host": "self-host",
  "self-host-installation": "self-host",
  "self-host-troubleshooting": "self-host",
  "self-host-updating": "self-host",
  "env-variables": "self-host",
  "self-host-debug-mode": "self-host",
  "self-host-white-labeling": "self-host",

  // Developer Guide
  "developer-guide": "developer-guide",
  "payment-gateways": "developer-guide",
  statics: "developer-guide",

  // Migration (root level)
  migration: "",
};

// Sidebar position ordering per section
const SIDEBAR_POSITIONS = {
  "user-guide/getting-started": 1,
  "user-guide/user-guide": 2,
  "user-guide/faq": 3,
  "user-guide/banking": 4,
  "user-guide/clients": 5,
  "user-guide/credits": 6,
  "user-guide/client-portal": 7,
  "user-guide/einvoicing": 8,
  "user-guide/esignatures": 9,
  "user-guide/expenses": 10,
  "user-guide/invoices": 11,
  "user-guide/quotes": 12,
  "user-guide/recurring-invoices": 13,
  "user-guide/gateways": 14,
  "user-guide/products": 15,
  "user-guide/payments": 16,
  "user-guide/projects": 17,
  "user-guide/purchase-orders": 18,
  "user-guide/tasks": 19,
  "user-guide/taxes": 20,
  "user-guide/recurring-expenses": 21,
  "user-guide/reports": 22,
  "user-guide/subscriptions": 23,
  "user-guide/transactions": 24,
  "user-guide/vendors": 25,
  "user-guide/basic-settings": 26,
  "user-guide/advanced-settings": 27,
  "advanced-topics/email-customization": 1,
  "advanced-topics/custom-fields": 2,
  "advanced-topics/import-and-export": 3,
  "advanced-topics/qr-codes": 4,
  "advanced-topics/templates": 5,
  "advanced-topics/schedules": 6,
  "advanced-topics/tax-accounting-tips": 7,
  "hosted/hosted-quickstart": 1,
  "hosted/hosted-activate": 2,
  "hosted/hosted-custom-domain": 3,
  "hosted/hosted-migration": 4,
  "hosted/hosted-mail": 5,
  "hosted/hosted-stripe": 6,
  "hosted/hosted-troubleshooting": 7,
  "hosted/hosted-delete-account": 8,
  "self-host/getting-started": 1,
  "self-host/self-host": 2,
  "self-host/self-host-installation": 3,
  "self-host/self-host-troubleshooting": 4,
  "self-host/self-host-updating": 5,
  "self-host/env-variables": 6,
  "self-host/self-host-debug-mode": 7,
  "self-host/self-host-white-labeling": 8,
  "developer-guide/developer-guide": 1,
  "developer-guide/payment-gateways": 2,
  "developer-guide/statics": 3,
  "developer-guide/api/authentication": 1,
  "developer-guide/api/clients": 2,
  "developer-guide/api/invoices": 3,
  "legal/license": 1,
  "legal/terms-of-service": 2,
  "legal/data-privacy": 3,
  "legal/self-hosting-data": 4,
  "legal/self-hosting-terms": 5,
  "legal/gdpr": 6,
  migration: 99,
};

// Link rewrite map: old path -> new path (for internal links)
const LINK_MAP = {
  // User Guide
  "/user-guide": "/user-guide/getting-started",
  "/faq": "/user-guide/faq",
  "/banking": "/user-guide/banking",
  "/clients": "/user-guide/clients",
  "/credits": "/user-guide/credits",
  "/client-portal": "/user-guide/client-portal",
  "/einvoicing": "/user-guide/einvoicing",
  "/esignatures": "/user-guide/esignatures",
  "/expenses": "/user-guide/expenses",
  "/invoices": "/user-guide/invoices",
  "/quotes": "/user-guide/quotes",
  "/recurring-invoices": "/user-guide/recurring-invoices",
  "/gateways": "/user-guide/gateways",
  "/products": "/user-guide/products",
  "/payments": "/user-guide/payments",
  "/projects": "/user-guide/projects",
  "/purchase_orders": "/user-guide/purchase-orders",
  "/tasks": "/user-guide/tasks",
  "/taxes": "/user-guide/taxes",
  "/recurring-expenses": "/user-guide/recurring-expenses",
  "/reports": "/user-guide/reports",
  "/subscriptions": "/user-guide/subscriptions",
  "/transactions": "/user-guide/transactions",
  "/vendors": "/user-guide/vendors",
  "/basic-settings": "/user-guide/basic-settings",
  "/advanced-settings": "/user-guide/advanced-settings",
  // Advanced Topics
  "/email-customization": "/advanced-topics/email-customization",
  "/custom-fields": "/advanced-topics/custom-fields",
  "/import-and-export": "/advanced-topics/import-and-export",
  "/qr-codes": "/advanced-topics/qr-codes",
  "/templates": "/advanced-topics/templates",
  "/schedules": "/advanced-topics/schedules",
  "/tax-accounting-tips": "/advanced-topics/tax-accounting-tips",
  // Hosted
  "/hosted-quickstart": "/hosted/hosted-quickstart",
  "/hosted-activate": "/hosted/hosted-activate",
  "/hosted-custom-domain": "/hosted/hosted-custom-domain",
  "/hosted-migration": "/hosted/hosted-migration",
  "/hosted-mail": "/hosted/hosted-mail",
  "/hosted-stripe": "/hosted/hosted-stripe",
  "/hosted-troubleshooting": "/hosted/hosted-troubleshooting",
  "/hosted-delete-account": "/hosted/hosted-delete-account",
  // Self Host
  "/getting-started": "/self-host/getting-started",
  "/self-host": "/self-host/self-host",
  "/self-host-installation": "/self-host/self-host-installation",
  "/self-host-troubleshooting": "/self-host/self-host-troubleshooting",
  "/self-host-updating": "/self-host/self-host-updating",
  "/env-variables": "/self-host/env-variables",
  "/self-host-debug-mode": "/self-host/self-host-debug-mode",
  "/self-host-white-labeling": "/self-host/self-host-white-labeling",
  // Developer Guide
  "/developer-guide": "/developer-guide/developer-guide",
  "/payment-gateways": "/developer-guide/payment-gateways",
  "/statics": "/developer-guide/statics",
  "/api/authentication": "/developer-guide/api/authentication",
  "/api/clients": "/developer-guide/api/clients",
  "/api/invoices": "/developer-guide/api/invoices",
  // Legal (these already have /legal/ prefix in the old site)
  "/legal/license": "/legal/license",
  "/legal/terms_of_service": "/legal/terms-of-service",
  "/legal/data_privacy": "/legal/data-privacy",
  "/legal/self_hosting_data": "/legal/self-hosting-data",
  "/legal/self_hosting_terms": "/legal/self-hosting-terms",
  "/legal/gdpr": "/legal/gdpr",
  // Migration
  "/migration": "/migration",
};

// ============================================================
// HELPERS
// ============================================================

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function extractTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function removeFrontmatter(content) {
  const fmRegex = /^---\n[\s\S]*?\n---\n*/;
  return content.replace(fmRegex, "");
}

function convertComponents(content) {
  // <x-info> -> :::info
  content = content.replace(
    /<x-info>\s*\n?([\s\S]*?)\n?\s*<\/x-info>/g,
    ":::info\n$1\n:::"
  );

  // <x-warning> -> :::warning
  content = content.replace(
    /<x-warning>\s*\n?([\s\S]*?)\n?\s*<\/x-warning>/g,
    ":::warning\n$1\n:::"
  );

  // <x-next url=...>...</x-next> -> remove entirely (Docusaurus has built-in prev/next)
  content = content.replace(
    /\n*<x-next\s+url=[^>]*>[^<]*<\/x-next>\s*\n*/g,
    "\n"
  );

  // <x-container> / </x-container> -> remove
  content = content.replace(/<\/?x-container>/g, "");

  // <x-section> / </x-section> -> remove
  content = content.replace(/<\/?x-section>/g, "");

  // <div class="video_container"> wrapper -> remove (keep inner content)
  content = content.replace(
    /<div\s+class="video_container">\s*\n?/g,
    ""
  );
  // Close the video_container div
  content = content.replace(/\n?\s*<\/div>\s*(?=\n|$)/g, "\n");

  // <x-video src="..." is_dash="true" id="..."></x-video> -> <VideoPlayer>
  content = content.replace(
    /<x-video\s+src="([^"]*)"(?:\s+is_dash="([^"]*)")?(?:\s+id="([^"]*)")?\s*(?:\/>|><\/x-video>)/g,
    (match, src, isDash, id) => {
      const parts = [`src="${src}"`];
      if (isDash === "true") parts.push("isDash={true}");
      if (id) parts.push(`id="${id}"`);
      return `<VideoPlayer ${parts.join(" ")} />`;
    }
  );

  return content;
}

function updateLinks(content, locale) {
  const oldLocale = locale === "fr-CA" ? "fr_CA" : "en";
  const newLocale = locale;

  // Update markdown links: [text](/en/page) or [text](/fr_CA/page)
  // Also handles links with anchors like [text](/en/page#section)
  content = content.replace(
    /\]\(\s*\/(en|fr_CA)(\/[^)\s#]*)(#[^)]*)?\s*\)/g,
    (match, linkLocale, linkPath, anchor) => {
      const newLocaleForLink = linkLocale === "fr_CA" ? "fr-CA" : "en";
      const mapped = LINK_MAP[linkPath];
      const newPath = mapped || linkPath;
      return `](/${newLocaleForLink}${newPath}${anchor || ""})`;
    }
  );

  // Update href attributes in HTML: href="/en/page" or href="/fr_CA/page"
  content = content.replace(
    /href=["']\/(en|fr_CA)(\/[^"'#]*)(#[^"']*)?["']/g,
    (match, linkLocale, linkPath, anchor) => {
      const newLocaleForLink = linkLocale === "fr_CA" ? "fr-CA" : "en";
      const mapped = LINK_MAP[linkPath];
      const newPath = mapped || linkPath;
      return `href="/${newLocaleForLink}${newPath}${anchor || ""}"`;
    }
  );

  return content;
}

function getOutputFilename(basename) {
  // Normalize filenames: replace underscores with hyphens
  let name = basename.replace(/_/g, "-");

  // Special case for fr_CA variant
  if (name === "hosted-trouble-shooting") {
    name = "hosted-troubleshooting";
  }

  return name;
}

function getSection(basename, subdir) {
  // Handle api/ subdirectory
  if (subdir === "api") {
    return "developer-guide/api";
  }
  // Handle legal/ subdirectory
  if (subdir === "legal") {
    return "legal";
  }

  const section = SECTION_MAP[basename];
  if (section !== undefined) return section;

  console.warn(`  WARNING: No section mapping for "${basename}", placing at root`);
  return "";
}

function getLegalOutputName(basename) {
  // Normalize legal filenames
  const map = {
    terms_of_service: "terms-of-service",
    data_privacy: "data-privacy",
    self_hosting_data: "self-hosting-data",
    self_hosting_terms: "self-hosting-terms",
  };
  return map[basename] || basename;
}

// ============================================================
// PROCESS A SINGLE FILE
// ============================================================

function processFile(filePath, locale, outputBaseDir) {
  const content = fs.readFileSync(filePath, "utf-8");
  const relativePath = path.relative(
    path.join(SOURCE_DIR, locale === "fr-CA" ? "fr_CA" : "en"),
    filePath
  );
  const parsed = path.parse(relativePath);
  const subdir = parsed.dir; // e.g., "api", "legal", ""
  const basename = parsed.name; // e.g., "invoices", "authentication"

  // Determine output section
  const section = getSection(basename, subdir);

  // Determine output filename
  let outputName;
  if (subdir === "legal") {
    outputName = getLegalOutputName(basename);
  } else {
    outputName = getOutputFilename(basename);
  }

  // Build output path
  const outputRelPath = section
    ? path.join(section, outputName)
    : outputName;

  // Get sidebar position
  const posKey = outputRelPath;
  const sidebarPosition = SIDEBAR_POSITIONS[posKey];

  // Process content
  let processed = removeFrontmatter(content);
  const title = extractTitle(processed);

  // Convert components
  processed = convertComponents(processed);

  // Check if this file needs MDX (has VideoPlayer component)
  const needsMdx = processed.includes("<VideoPlayer");

  // Update links
  processed = updateLinks(processed, locale);

  // Build new frontmatter
  const fmLines = ["---"];
  if (title) fmLines.push(`title: "${title.replace(/"/g, '\\"')}"`);
  if (sidebarPosition) fmLines.push(`sidebar_position: ${sidebarPosition}`);
  fmLines.push("---");
  fmLines.push("");

  // Add MDX imports if needed
  let imports = "";
  if (needsMdx) {
    imports =
      'import VideoPlayer from "@site/src/components/VideoPlayer";\n\n';
  }

  const finalContent = fmLines.join("\n") + imports + processed;

  // Determine extension
  const ext = needsMdx ? ".mdx" : ".md";
  const outputPath = path.join(outputBaseDir, outputRelPath + ext);

  return { outputPath, content: finalContent, needsMdx };
}

// ============================================================
// PROCESS ALL FILES FOR A LOCALE
// ============================================================

function processLocale(locale, sourceSubdir, outputBaseDir) {
  const sourceDir = path.join(SOURCE_DIR, sourceSubdir);

  if (!fs.existsSync(sourceDir)) {
    console.log(`Source directory not found: ${sourceDir}`);
    return [];
  }

  const results = [];

  function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.name.endsWith(".md")) {
        try {
          const result = processFile(fullPath, locale, outputBaseDir);
          ensureDir(path.dirname(result.outputPath));
          fs.writeFileSync(result.outputPath, result.content, "utf-8");
          results.push(result);
          console.log(
            `  ${result.needsMdx ? "[MDX]" : "[MD] "} ${path.relative(outputBaseDir, result.outputPath)}`
          );
        } catch (err) {
          console.error(`  ERROR processing ${fullPath}: ${err.message}`);
        }
      }
    }
  }

  walkDir(sourceDir);
  return results;
}

// ============================================================
// CONVERT PHP TRANSLATIONS TO JSON
// ============================================================

function convertTranslations() {
  const phpFile = path.join(ROOT, "lang", "fr_CA", "texts.php");
  if (!fs.existsSync(phpFile)) {
    console.log("No fr_CA translations file found, skipping.");
    return;
  }

  const phpContent = fs.readFileSync(phpFile, "utf-8");

  // Extract key-value pairs from PHP array
  const translations = {};
  const regex = /'([^']+)'\s*=>\s*'((?:[^'\\]|\\.)*)'/g;
  let match;
  while ((match = regex.exec(phpContent)) !== null) {
    const key = match[1];
    const value = match[2].replace(/\\'/g, "'");
    translations[`sidebar.${key}`] = {
      message: value,
    };
  }

  const outputDir = path.join(ROOT, "i18n", "fr-CA");
  ensureDir(outputDir);
  fs.writeFileSync(
    path.join(outputDir, "code.json"),
    JSON.stringify(translations, null, 2),
    "utf-8"
  );
  console.log(
    `  Converted ${Object.keys(translations).length} translation keys to i18n/fr-CA/code.json`
  );
}

// ============================================================
// MAIN
// ============================================================

function main() {
  console.log("=== Invoice Ninja Docs Migration: Jigsaw -> Docusaurus ===\n");

  // Process English files
  console.log("Processing English (en) files:");
  const enResults = processLocale("en", "en", DOCS_DIR);
  console.log(`\n  Total English files: ${enResults.length}\n`);

  // Process French Canadian files
  console.log("Processing French Canadian (fr-CA) files:");
  const frResults = processLocale("fr-CA", "fr_CA", I18N_DIR);
  console.log(`\n  Total French Canadian files: ${frResults.length}\n`);

  // Convert translations
  console.log("Converting translations:");
  convertTranslations();

  // Summary
  const mdxCount =
    enResults.filter((r) => r.needsMdx).length +
    frResults.filter((r) => r.needsMdx).length;
  console.log("\n=== Migration Summary ===");
  console.log(`  English files:   ${enResults.length}`);
  console.log(`  French files:    ${frResults.length}`);
  console.log(`  MDX conversions: ${mdxCount}`);
  console.log(`  Total files:     ${enResults.length + frResults.length}`);
  console.log("\nDone!");
}

main();
