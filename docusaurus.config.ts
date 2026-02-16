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
    locales: [
      "en",      // English
      "de",      // German
      "es",      // Spanish
      "fr",      // French
      "fr-CA",   // French (Canada)
      "it",      // Italian
      "ja",      // Japanese
      "nl",      // Dutch
      "pt-BR",   // Portuguese (Brazil)
      "ru-RU",   // Russian
      "zh-TW",   // Chinese (Traditional)
      "en-GB",   // British English
      // Uncomment additional locales as needed for production:
      // "af-ZA", "ar", "bg", "ca", "cs", "da", "el", "es-ES", "et", "fa", "fi",
      // "fr-CH", "he", "hr", "hu", "id-ID", "km-KH", "lo-LA", "lt", "lv-LV",
      // "mk-MK", "nb-NO", "pl", "pt-PT", "ro", "sk", "sl", "sq", "sr", "sv",
      // "th", "tr-TR", "vi"
    ],
    localeConfigs: {
      en: { label: "English", direction: "ltr", htmlLang: "en-US" },
      "af-ZA": { label: "Afrikaans", direction: "ltr" },
      ar: { label: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629", direction: "rtl" },
      bg: { label: "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438", direction: "ltr" },
      ca: { label: "Catal\u00e0", direction: "ltr" },
      cs: { label: "\u010ce\u0161tina", direction: "ltr" },
      da: { label: "Dansk", direction: "ltr" },
      de: { label: "Deutsch", direction: "ltr" },
      el: { label: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac", direction: "ltr" },
      "en-GB": { label: "English (UK)", direction: "ltr" },
      es: { label: "Espa\u00f1ol", direction: "ltr" },
      "es-ES": { label: "Espa\u00f1ol (ES)", direction: "ltr" },
      et: { label: "Eesti", direction: "ltr" },
      fa: { label: "\u0641\u0627\u0631\u0633\u06cc", direction: "rtl" },
      fi: { label: "Suomi", direction: "ltr" },
      fr: { label: "Fran\u00e7ais", direction: "ltr" },
      "fr-CA": { label: "Fran\u00e7ais (CA)", direction: "ltr", htmlLang: "fr-CA" },
      "fr-CH": { label: "Fran\u00e7ais (CH)", direction: "ltr" },
      he: { label: "\u05e2\u05d1\u05e8\u05d9\u05ea", direction: "rtl" },
      hr: { label: "Hrvatski", direction: "ltr" },
      hu: { label: "Magyar", direction: "ltr" },
      "id-ID": { label: "Bahasa Indonesia", direction: "ltr" },
      it: { label: "Italiano", direction: "ltr" },
      ja: { label: "\u65e5\u672c\u8a9e", direction: "ltr" },
      "km-KH": { label: "\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a", direction: "ltr" },
      "lo-LA": { label: "\u0ea5\u0eb2\u0ea7", direction: "ltr" },
      lt: { label: "Lietuvi\u0173", direction: "ltr" },
      "lv-LV": { label: "Latvie\u0161u", direction: "ltr" },
      "mk-MK": { label: "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438", direction: "ltr" },
      "nb-NO": { label: "Norsk Bokm\u00e5l", direction: "ltr" },
      nl: { label: "Nederlands", direction: "ltr" },
      pl: { label: "Polski", direction: "ltr" },
      "pt-BR": { label: "Portugu\u00eas (BR)", direction: "ltr" },
      "pt-PT": { label: "Portugu\u00eas (PT)", direction: "ltr" },
      ro: { label: "Rom\u00e2n\u0103", direction: "ltr" },
      "ru-RU": { label: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439", direction: "ltr" },
      sk: { label: "Sloven\u010dina", direction: "ltr" },
      sl: { label: "Sloven\u0161\u010dina", direction: "ltr" },
      sq: { label: "Shqip", direction: "ltr" },
      sr: { label: "\u0421\u0440\u043f\u0441\u043a\u0438", direction: "ltr" },
      sv: { label: "Svenska", direction: "ltr" },
      th: { label: "\u0e44\u0e17\u0e22", direction: "ltr" },
      "tr-TR": { label: "T\u00fcrk\u00e7e", direction: "ltr" },
      vi: { label: "Ti\u1ebfng Vi\u1ec7t", direction: "ltr" },
      "zh-TW": { label: "\u7e41\u9ad4\u4e2d\u6587", direction: "ltr" },
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
          { from: ['/en/user-guide', '/fr-CA/user-guide', '/de/user-guide'], to: '/docs/user-guide' },
          { from: ['/en/clients', '/fr-CA/clients', '/de/clients'], to: '/docs/user-guide/clients' },
          { from: ['/en/credits', '/fr-CA/credits', '/de/credits'], to: '/docs/user-guide/credits' },
          { from: ['/en/client-portal', '/fr-CA/client-portal', '/de/client-portal'], to: '/docs/user-guide/client-portal' },
          { from: ['/en/einvoicing', '/fr-CA/einvoicing', '/de/einvoicing'], to: '/docs/user-guide/einvoicing' },
          { from: ['/en/esignatures', '/fr-CA/esignatures', '/de/esignatures'], to: '/docs/user-guide/esignatures' },
          { from: ['/en/expenses', '/fr-CA/expenses', '/de/expenses'], to: '/docs/user-guide/expenses' },
          { from: ['/en/invoices', '/fr-CA/invoices', '/de/invoices'], to: '/docs/user-guide/invoices' },
          { from: ['/en/quotes', '/fr-CA/quotes', '/de/quotes'], to: '/docs/user-guide/quotes' },
          { from: ['/en/recurring-invoices', '/fr-CA/recurring-invoices', '/de/recurring-invoices'], to: '/docs/user-guide/recurring-invoices' },
          { from: ['/en/gateways', '/fr-CA/gateways', '/de/gateways'], to: '/docs/user-guide/gateways' },
          { from: ['/en/products', '/fr-CA/products', '/de/products'], to: '/docs/user-guide/products' },
          { from: ['/en/payments', '/fr-CA/payments', '/de/payments'], to: '/docs/user-guide/payments' },
          { from: ['/en/projects', '/fr-CA/projects', '/de/projects'], to: '/docs/user-guide/projects' },
          { from: ['/en/purchase_orders', '/fr-CA/purchase_orders', '/de/purchase_orders'], to: '/docs/user-guide/purchase-orders' },
          { from: ['/en/tasks', '/fr-CA/tasks', '/de/tasks'], to: '/docs/user-guide/tasks' },
          { from: ['/en/taxes', '/fr-CA/taxes', '/de/taxes'], to: '/docs/user-guide/taxes' },
          { from: ['/en/recurring-expenses', '/fr-CA/recurring-expenses', '/de/recurring-expenses'], to: '/docs/user-guide/recurring-expenses' },
          { from: ['/en/reports', '/fr-CA/reports', '/de/reports'], to: '/docs/user-guide/reports' },
          { from: ['/en/subscriptions', '/fr-CA/subscriptions', '/de/subscriptions'], to: '/docs/user-guide/subscriptions' },
          { from: ['/en/transactions', '/fr-CA/transactions', '/de/transactions'], to: '/docs/user-guide/transactions' },
          { from: ['/en/vendors', '/fr-CA/vendors', '/de/vendors'], to: '/docs/user-guide/vendors' },
          { from: ['/en/banking', '/fr-CA/banking', '/de/banking'], to: '/docs/user-guide/banking' },
          { from: ['/en/faq', '/fr-CA/faq', '/de/faq'], to: '/docs/user-guide/faq' },
          { from: ['/en/basic-settings', '/fr-CA/basic-settings', '/de/basic-settings'], to: '/docs/user-guide/basic-settings' },
          { from: ['/en/advanced-settings', '/fr-CA/advanced-settings', '/de/advanced-settings'], to: '/docs/user-guide/advanced-settings' },

          // Advanced topics redirects
          { from: ['/en/email-customization', '/fr-CA/email-customization', '/de/email-customization'], to: '/docs/advanced-topics/email-customization' },
          { from: ['/en/custom-fields', '/fr-CA/custom-fields', '/de/custom-fields'], to: '/docs/advanced-topics/custom-fields' },
          { from: ['/en/import-and-export', '/fr-CA/import-and-export', '/de/import-and-export'], to: '/docs/advanced-topics/import-and-export' },
          { from: ['/en/qr-codes', '/fr-CA/qr-codes', '/de/qr-codes'], to: '/docs/advanced-topics/qr-codes' },
          { from: ['/en/templates', '/fr-CA/templates', '/de/templates'], to: '/docs/advanced-topics/templates' },
          { from: ['/en/schedules', '/fr-CA/schedules', '/de/schedules'], to: '/docs/advanced-topics/schedules' },
          { from: ['/en/tax-accounting-tips', '/fr-CA/tax-accounting-tips', '/de/tax-accounting-tips'], to: '/docs/advanced-topics/tax-accounting-tips' },

          // Self-host redirects
          { from: ['/en/self-host-installation', '/fr-CA/self-host-installation', '/de/self-host-installation'], to: '/docs/self-host/self-host-installation' },
          { from: ['/en/self-host-troubleshooting', '/fr-CA/self-host-troubleshooting', '/de/self-host-troubleshooting'], to: '/docs/self-host/self-host-troubleshooting' },
          { from: ['/en/self-host-debug-mode', '/fr-CA/self-host-debug-mode', '/de/self-host-debug-mode'], to: '/docs/self-host/self-host-debug-mode' },
          { from: ['/en/self-host-updating', '/fr-CA/self-host-updating', '/de/self-host-updating'], to: '/docs/self-host/self-host-updating' },
          { from: ['/en/env-variables', '/fr-CA/env-variables', '/de/env-variables'], to: '/docs/self-host/env-variables' },

          // Hosted redirects
          { from: ['/en/hosted-quickstart', '/fr-CA/hosted-quickstart', '/de/hosted-quickstart'], to: '/docs/hosted/hosted-quickstart' },
          { from: ['/en/hosted-activate', '/fr-CA/hosted-activate', '/de/hosted-activate'], to: '/docs/hosted/hosted-activate' },
          { from: ['/en/hosted-custom-domain', '/fr-CA/hosted-custom-domain', '/de/hosted-custom-domain'], to: '/docs/hosted/hosted-custom-domain' },
          { from: ['/en/hosted-migration', '/fr-CA/hosted-migration', '/de/hosted-migration'], to: '/docs/hosted/hosted-migration' },
          { from: ['/en/hosted-stripe', '/fr-CA/hosted-stripe', '/de/hosted-stripe'], to: '/docs/hosted/hosted-stripe' },
          { from: ['/en/hosted-troubleshooting', '/fr-CA/hosted-troubleshooting', '/de/hosted-troubleshooting'], to: '/docs/hosted/hosted-troubleshooting' },
          { from: ['/en/hosted-mail', '/fr-CA/hosted-mail', '/de/hosted-mail'], to: '/docs/hosted/hosted-mail' },
          { from: ['/en/hosted-delete-account', '/fr-CA/hosted-delete-account', '/de/hosted-delete-account'], to: '/docs/hosted/hosted-delete-account' },

          // Developer guide redirects
          { from: ['/en/developer-guide', '/fr-CA/developer-guide', '/de/developer-guide'], to: '/docs/developer-guide' },
          { from: ['/en/api/authentication', '/fr-CA/api/authentication', '/de/api/authentication'], to: '/docs/developer-guide/api/authentication' },
          { from: ['/en/api/clients', '/fr-CA/api/clients', '/de/api/clients'], to: '/docs/developer-guide/api/clients' },
          { from: ['/en/api/invoices', '/fr-CA/api/invoices', '/de/api/invoices'], to: '/docs/developer-guide/api/invoices' },
          { from: ['/en/payment-gateways', '/fr-CA/payment-gateways', '/de/payment-gateways'], to: '/docs/developer-guide/payment-gateways' },
          { from: ['/en/statics', '/fr-CA/statics', '/de/statics'], to: '/docs/developer-guide/statics' },

          // Migration redirects
          { from: ['/en/migration', '/fr-CA/migration', '/de/migration'], to: '/docs/migration' },

          // Legal redirects
          { from: ['/en/legal/license', '/fr-CA/legal/license', '/de/legal/license'], to: '/docs/legal/license' },
          { from: ['/en/legal/terms_of_service', '/fr-CA/legal/terms_of_service', '/de/legal/terms_of_service'], to: '/docs/legal/terms-of-service' },
          { from: ['/en/legal/data_privacy', '/fr-CA/legal/data_privacy', '/de/legal/data_privacy'], to: '/docs/legal/data-privacy' },
          { from: ['/en/legal/self_hosting_data', '/fr-CA/legal/self_hosting_data', '/de/legal/self_hosting_data'], to: '/docs/legal/self-hosting-data' },
          { from: ['/en/legal/self_hosting_terms', '/fr-CA/legal/self_hosting_terms', '/de/legal/self_hosting_terms'], to: '/docs/legal/self-hosting-terms' },
          { from: ['/en/legal/gdpr', '/fr-CA/legal/gdpr', '/de/legal/gdpr'], to: '/docs/legal/gdpr' },
        ],
        createRedirects(existingPath) {
          // Fallback: redirect any remaining /en/* or /fr-CA/* paths to /docs/*
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
            return [
              existingPath.replace("/docs/", "/en/"),
              existingPath.replace("/docs/", "/fr-CA/"),
            ];
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
          sidebarId: "selfHost",
          label: "Self Host",
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
