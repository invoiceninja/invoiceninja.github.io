import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "Invoice Ninja",
  tagline:
    "Free Source Available Invoicing, Expenses & Time-Tracking",
  favicon: "img/favicon.png",

  url: "https://invoiceninja.github.io",
  baseUrl: "/",

  organizationName: "invoiceninja",
  projectName: "invoiceninja.github.io",
  trailingSlash: false,

  onBrokenLinks: "warn",

  markdown: {
    format: "detect",
    hooks: {
      onBrokenMarkdownLinks: "warn",
      onBrokenMarkdownImages: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    // TODO: Re-enable fr-CA once OpenAPI spec duplicate tags are consolidated
    // and translations are complete. The duplicate tag names (Credits, Payment Terms,
    // Task Status, Webhooks) cause translation key collisions.
    // locales: ["en", "fr-CA"],
    localeConfigs: {
      en: { label: "English", direction: "ltr", htmlLang: "en-US" },
      "fr-CA": {
        label: "Fran\u00e7ais (CA)",
        direction: "ltr",
        htmlLang: "fr-CA",
      },
    },
  },

  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@300..700&display=swap",
      type: "text/css",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap",
      type: "text/css",
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/invoiceninja/invoiceninja.github.io/tree/v5-rework/",
          routeBasePath: "en",
          showLastUpdateTime: true,
          docItemComponent: "@theme/ApiItem",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api-docs",
        docsPluginId: "default",
        config: {
          invoiceninja: {
            specPath: "openapi.yaml",
            outputDir: "docs/api-reference",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        } satisfies OpenApiPlugin.Options,
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // User Guide pages (flat -> subdirectory)
          { from: "/en/faq", to: "/en/user-guide/faq" },
          { from: "/en/banking", to: "/en/user-guide/banking" },
          { from: "/en/clients", to: "/en/user-guide/clients" },
          { from: "/en/credits", to: "/en/user-guide/credits" },
          { from: "/en/client-portal", to: "/en/user-guide/client-portal" },
          { from: "/en/einvoicing", to: "/en/user-guide/einvoicing" },
          { from: "/en/esignatures", to: "/en/user-guide/esignatures" },
          { from: "/en/expenses", to: "/en/user-guide/expenses" },
          { from: "/en/invoices", to: "/en/user-guide/invoices" },
          { from: "/en/quotes", to: "/en/user-guide/quotes" },
          {
            from: "/en/recurring-invoices",
            to: "/en/user-guide/recurring-invoices",
          },
          { from: "/en/gateways", to: "/en/user-guide/gateways" },
          { from: "/en/products", to: "/en/user-guide/products" },
          { from: "/en/payments", to: "/en/user-guide/payments" },
          { from: "/en/projects", to: "/en/user-guide/projects" },
          {
            from: "/en/purchase_orders",
            to: "/en/user-guide/purchase-orders",
          },
          { from: "/en/tasks", to: "/en/user-guide/tasks" },
          { from: "/en/taxes", to: "/en/user-guide/taxes" },
          {
            from: "/en/recurring-expenses",
            to: "/en/user-guide/recurring-expenses",
          },
          { from: "/en/reports", to: "/en/user-guide/reports" },
          { from: "/en/subscriptions", to: "/en/user-guide/subscriptions" },
          { from: "/en/transactions", to: "/en/user-guide/transactions" },
          { from: "/en/vendors", to: "/en/user-guide/vendors" },
          { from: "/en/basic-settings", to: "/en/user-guide/basic-settings" },
          {
            from: "/en/advanced-settings",
            to: "/en/user-guide/advanced-settings",
          },
          // Advanced Topics
          {
            from: "/en/email-customization",
            to: "/en/advanced-topics/email-customization",
          },
          { from: "/en/custom-fields", to: "/en/advanced-topics/custom-fields" },
          {
            from: "/en/import-and-export",
            to: "/en/advanced-topics/import-and-export",
          },
          { from: "/en/qr-codes", to: "/en/advanced-topics/qr-codes" },
          { from: "/en/templates", to: "/en/advanced-topics/templates" },
          { from: "/en/schedules", to: "/en/advanced-topics/schedules" },
          {
            from: "/en/tax-accounting-tips",
            to: "/en/advanced-topics/tax-accounting-tips",
          },
          // Hosted
          {
            from: "/en/hosted-quickstart",
            to: "/en/hosted/hosted-quickstart",
          },
          { from: "/en/hosted-activate", to: "/en/hosted/hosted-activate" },
          {
            from: "/en/hosted-custom-domain",
            to: "/en/hosted/hosted-custom-domain",
          },
          {
            from: "/en/hosted-migration",
            to: "/en/hosted/hosted-migration",
          },
          { from: "/en/hosted-mail", to: "/en/hosted/hosted-mail" },
          { from: "/en/hosted-stripe", to: "/en/hosted/hosted-stripe" },
          {
            from: "/en/hosted-troubleshooting",
            to: "/en/hosted/hosted-troubleshooting",
          },
          {
            from: "/en/hosted-delete-account",
            to: "/en/hosted/hosted-delete-account",
          },
          // Self Host
          { from: "/en/getting-started", to: "/en/self-host/getting-started" },
          {
            from: "/en/self-host-installation",
            to: "/en/self-host/self-host-installation",
          },
          {
            from: "/en/self-host-troubleshooting",
            to: "/en/self-host/self-host-troubleshooting",
          },
          {
            from: "/en/self-host-updating",
            to: "/en/self-host/self-host-updating",
          },
          { from: "/en/env-variables", to: "/en/self-host/env-variables" },
          {
            from: "/en/self-host-debug-mode",
            to: "/en/self-host/self-host-debug-mode",
          },
          {
            from: "/en/self-host-white-labeling",
            to: "/en/self-host/self-host-white-labeling",
          },
          // Developer Guide
          {
            from: "/en/payment-gateways",
            to: "/en/developer-guide/payment-gateways",
          },
          { from: "/en/statics", to: "/en/developer-guide/statics" },
          {
            from: "/en/api/authentication",
            to: "/en/developer-guide/api/authentication",
          },
          {
            from: "/en/api/clients",
            to: "/en/developer-guide/api/clients",
          },
          {
            from: "/en/api/invoices",
            to: "/en/developer-guide/api/invoices",
          },
        ],
      },
    ],
  ],

  themes: [
    "docusaurus-theme-openapi-docs",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: "en",
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
    },
    navbar: {
      title: "",
      logo: {
        alt: "Invoice Ninja",
        src: "img/logo-rounded.png",
      },
      items: [
        {
          type: "doc",
          docId: "user-guide/user-guide",
          label: "User Guide",
          position: "left",
        },
        {
          type: "doc",
          docId: "self-host/self-host-installation",
          label: "Self Host",
          position: "left",
        },
        {
          type: "doc",
          docId: "hosted/hosted-quickstart",
          label: "Hosted",
          position: "left",
        },
        {
          type: "doc",
          docId: "developer-guide/developer-guide",
          label: "Developer Guide",
          position: "left",
        },
        {
          label: "API Reference",
          to: "/en/api-reference/invoice-ninja-api-reference",
          position: "left",
        },
        {
          href: "https://github.com/invoiceninja/invoiceninja",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://app.invoicing.co",
          label: "Open App",
          position: "right",
        },
        { type: "localeDropdown", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "User Guide",
              to: "/en/user-guide",
            },
            {
              label: "Self Host",
              to: "/en/self-host/self-host-installation",
            },
            {
              label: "API Reference",
              to: "/en/api-reference/invoice-ninja-api-reference",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Forum",
              href: "https://forum.invoiceninja.com",
            },
            {
              label: "Slack",
              href: "https://invoiceninja.slack.com",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/invoiceninja/invoiceninja",
            },
            {
              label: "Website",
              href: "https://www.invoiceninja.com",
            },
          ],
        },
      ],
      copyright: `Copyright \u00a9 ${new Date().getFullYear()} Invoice Ninja. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["php", "bash", "json", "nginx", "yaml"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
