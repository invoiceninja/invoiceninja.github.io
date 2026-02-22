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
          routeBasePath: "docs",
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
          // Legacy user guide redirects - flat structure to nested
          { from: ['/en/user-guide'], to: '/docs/user-guide' },
          { from: ['/en/clients'], to: '/docs/user-guide/clients' },
          { from: ['/en/credits'], to: '/docs/user-guide/credits' },
          { from: ['/en/client-portal'], to: '/docs/user-guide/client-portal' },
          { from: ['/en/einvoicing'], to: '/docs/user-guide/einvoicing' },
          { from: ['/en/esignatures'], to: '/docs/user-guide/esignatures' },
          { from: ['/en/expenses'], to: '/docs/user-guide/expenses' },
          { from: ['/en/invoices'], to: '/docs/user-guide/invoices' },
          { from: ['/en/quotes'], to: '/docs/user-guide/quotes' },
          { from: ['/en/recurring-invoices'], to: '/docs/user-guide/recurring-invoices' },
          { from: ['/en/gateways'], to: '/docs/user-guide/gateways' },
          { from: ['/en/products'], to: '/docs/user-guide/products' },
          { from: ['/en/payments'], to: '/docs/user-guide/payments' },
          { from: ['/en/projects'], to: '/docs/user-guide/projects' },
          { from: ['/en/purchase_orders'], to: '/docs/user-guide/purchase-orders' },
          { from: ['/en/tasks'], to: '/docs/user-guide/tasks' },
          { from: ['/en/taxes'], to: '/docs/user-guide/taxes' },
          { from: ['/en/recurring-expenses'], to: '/docs/user-guide/recurring-expenses' },
          { from: ['/en/reports'], to: '/docs/user-guide/reports' },
          { from: ['/en/subscriptions'], to: '/docs/user-guide/subscriptions' },
          { from: ['/en/transactions'], to: '/docs/user-guide/transactions' },
          { from: ['/en/vendors'], to: '/docs/user-guide/vendors' },
          { from: ['/en/banking'], to: '/docs/user-guide/banking' },
          { from: ['/en/faq'], to: '/docs/user-guide/faq' },
          { from: ['/en/basic-settings'], to: '/docs/user-guide/basic-settings' },
          { from: ['/en/advanced-settings'], to: '/docs/user-guide/advanced-settings' },

          // Advanced topics redirects
          { from: ['/en/email-customization'], to: '/docs/advanced-topics/email-customization' },
          { from: ['/en/custom-fields'], to: '/docs/advanced-topics/custom-fields' },
          { from: ['/en/import-and-export'], to: '/docs/advanced-topics/import-and-export' },
          { from: ['/en/qr-codes'], to: '/docs/advanced-topics/qr-codes' },
          { from: ['/en/templates'], to: '/docs/advanced-topics/templates' },
          { from: ['/en/schedules'], to: '/docs/advanced-topics/schedules' },
          { from: ['/en/tax-accounting-tips'], to: '/docs/advanced-topics/tax-accounting-tips' },

          // Self-host redirects
          { from: ['/en/self-host-installation'], to: '/docs/self-host/self-host-installation' },
          { from: ['/en/self-host-troubleshooting'], to: '/docs/self-host/self-host-troubleshooting' },
          { from: ['/en/self-host-debug-mode'], to: '/docs/self-host/self-host-debug-mode' },
          { from: ['/en/self-host-updating'], to: '/docs/self-host/self-host-updating' },
          { from: ['/en/env-variables'], to: '/docs/self-host/env-variables' },

          // Hosted redirects
          { from: ['/en/hosted-quickstart'], to: '/docs/hosted/hosted-quickstart' },
          { from: ['/en/hosted-activate'], to: '/docs/hosted/hosted-activate' },
          { from: ['/en/hosted-custom-domain'], to: '/docs/hosted/hosted-custom-domain' },
          { from: ['/en/hosted-migration'], to: '/docs/hosted/hosted-migration' },
          { from: ['/en/hosted-stripe'], to: '/docs/hosted/hosted-stripe' },
          { from: ['/en/hosted-troubleshooting'], to: '/docs/hosted/hosted-troubleshooting' },
          { from: ['/en/hosted-mail'], to: '/docs/hosted/hosted-mail' },
          { from: ['/en/hosted-delete-account'], to: '/docs/hosted/hosted-delete-account' },

          // Developer guide redirects
          { from: ['/en/developer-guide'], to: '/docs/developer-guide' },
          { from: ['/en/api/authentication'], to: '/docs/developer-guide/api/authentication' },
          { from: ['/en/api/clients'], to: '/docs/developer-guide/api/clients' },
          { from: ['/en/api/invoices'], to: '/docs/developer-guide/api/invoices' },
          { from: ['/en/payment-gateways'], to: '/docs/developer-guide/payment-gateways' },
          { from: ['/en/statics'], to: '/docs/developer-guide/statics' },

          // Migration redirects
          { from: ['/en/migration'], to: '/docs/migration' },

          // Legal redirects
          { from: ['/en/legal/license'], to: '/docs/legal/license' },
          { from: ['/en/legal/terms_of_service'], to: '/docs/legal/terms-of-service' },
          { from: ['/en/legal/data_privacy'], to: '/docs/legal/data-privacy' },
          { from: ['/en/legal/self_hosting_data'], to: '/docs/legal/self-hosting-data' },
          { from: ['/en/legal/self_hosting_terms'], to: '/docs/legal/self-hosting-terms' },
          { from: ['/en/legal/gdpr'], to: '/docs/legal/gdpr' },
        ],
        createRedirects(existingPath) {
          // Fallback: redirect any remaining /en/* paths to /docs/*
          // Skip paths that have explicit redirects defined above
          const explicitPaths = [
            '/docs/user-guide',
            '/docs/user-guide/clients', '/docs/user-guide/credits', '/docs/user-guide/client-portal',
            '/docs/user-guide/einvoicing', '/docs/user-guide/esignatures', '/docs/user-guide/expenses',
            '/docs/user-guide/invoices', '/docs/user-guide/quotes', '/docs/user-guide/recurring-invoices',
            '/docs/user-guide/gateways', '/docs/user-guide/products', '/docs/user-guide/payments',
            '/docs/user-guide/projects', '/docs/user-guide/purchase-orders', '/docs/user-guide/tasks',
            '/docs/user-guide/taxes', '/docs/user-guide/recurring-expenses', '/docs/user-guide/reports',
            '/docs/user-guide/subscriptions', '/docs/user-guide/transactions', '/docs/user-guide/vendors',
            '/docs/user-guide/banking', '/docs/user-guide/faq', '/docs/user-guide/basic-settings',
            '/docs/user-guide/advanced-settings',
            '/docs/advanced-topics/email-customization', '/docs/advanced-topics/custom-fields',
            '/docs/advanced-topics/import-and-export', '/docs/advanced-topics/qr-codes',
            '/docs/advanced-topics/templates', '/docs/advanced-topics/schedules',
            '/docs/advanced-topics/tax-accounting-tips',
            '/docs/self-host/self-host-installation', '/docs/self-host/self-host-troubleshooting',
            '/docs/self-host/self-host-debug-mode', '/docs/self-host/self-host-updating',
            '/docs/self-host/env-variables',
            '/docs/hosted/hosted-quickstart', '/docs/hosted/hosted-activate',
            '/docs/hosted/hosted-custom-domain', '/docs/hosted/hosted-migration',
            '/docs/hosted/hosted-stripe', '/docs/hosted/hosted-troubleshooting',
            '/docs/hosted/hosted-mail', '/docs/hosted/hosted-delete-account',
            '/docs/developer-guide', '/docs/developer-guide/api/authentication',
            '/docs/developer-guide/api/clients', '/docs/developer-guide/api/invoices',
            '/docs/developer-guide/payment-gateways', '/docs/developer-guide/statics',
            '/docs/migration',
            '/docs/legal/license', '/docs/legal/terms-of-service', '/docs/legal/data-privacy',
            '/docs/legal/self-hosting-data', '/docs/legal/self-hosting-terms', '/docs/legal/gdpr',
          ];

          if (existingPath.startsWith("/docs/") && !explicitPaths.includes(existingPath)) {
            return [existingPath.replace("/docs/", "/en/")];
          }
          return undefined;
        },
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
        docsRouteBasePath: "docs",
        explicitSearchResultPath: true,
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
          type: "docSidebar",
          sidebarId: "userGuide",
          label: "User Guide",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "hosted",
          label: "Hosted",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "selfHost",
          label: "Self Host",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "developerGuide",
          label: "Developer Guide",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "apisidebar",
          label: "API Reference",
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
              to: "/docs/user-guide",
            },
            {
              label: "Self Host",
              to: "/docs/self-host/self-host-installation",
            },
            {
              label: "API Reference",
              to: "/docs/api-reference/invoice-ninja-api-reference",
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
