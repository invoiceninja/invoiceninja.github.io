import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import BookOpenIcon from "@site/static/assets/images/icons/BookOpen.svg";
import OfficeIcon from "@site/static/assets/images/icons/Office.svg";
import CloudUploadIcon from "@site/static/assets/images/icons/CloudUpload.svg";
import ArrowsOppositeDirectionIcon from "@site/static/assets/images/icons/ArrowsOppositeDirection.svg";
import GearIcon from "@site/static/assets/images/icons/Gear.svg";
import TableColumnsIcon from "@site/static/assets/images/icons/TableColumns.svg";
import CircleLockIcon from "@site/static/assets/images/icons/CircleLock.svg";
import CreditCardIcon from "@site/static/assets/images/icons/CreditCard.svg";
import MessageIcon from "@site/static/assets/images/icons/Message.svg";
import MsgBubbleUserIcon from "@site/static/assets/images/icons/MsgBubbleUser.svg";
import UsersIcon from "@site/static/assets/images/icons/Users.svg";
import MediaPlayIcon from "@site/static/assets/images/icons/MediaPlay.svg";
import CircleWarningIcon from "@site/static/assets/images/icons/CircleWarning.svg";
import CircleQuestionIcon from "@site/static/assets/images/icons/CircleQuestion.svg";
import EnvelopArrowRightIcon from "@site/static/assets/images/icons/EnvelopArrowRight.svg";

type CardLink = {
  label: string;
} & ({ to: string } | { href: string });

type Card = {
  links: CardLink[];
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const operationsCards: Card[] = [
  {
    title: "User Guide",
    description:
      "Daily operations: clients, invoices, payments, taxes, and recurring flows.",
    links: [{ to: "/docs/user-guide", label: "Open user guide" }],
    Icon: BookOpenIcon,
  },
  {
    title: "Self Host Installation",
    description: "Choose CLI, Docker, or manual install for your own infrastructure.",
    links: [{ to: "/docs/self-host/self-host-installation", label: "Install self-host" }],
    Icon: OfficeIcon,
  },
  {
    title: "Hosted Platform",
    description: "Quick start on the managed cloud platform with minimal setup.",
    links: [{ to: "/docs/hosted/hosted-quickstart", label: "Hosted quickstart" }],
    Icon: CloudUploadIcon,
  },
  {
    title: "Migration",
    description: "Move from v4 to v5 with the migration checklist and rollout path.",
    links: [{ to: "/docs/migration", label: "Migration guide" }],
    Icon: ArrowsOppositeDirectionIcon,
  },
];

const developerCards: Card[] = [
  {
    title: "Developer Guide",
    description:
      "Architecture, extension points, gateway development, and technical workflows.",
    links: [{ to: "/docs/developer-guide", label: "Developer docs" }],
    Icon: GearIcon,
  },
  {
    title: "API Reference",
    description: "Endpoint-level OpenAPI docs with request/response schemas.",
    links: [{ to: "/docs/api-reference/invoice-ninja-api-reference", label: "Open API docs" }],
    Icon: TableColumnsIcon,
  },
  {
    title: "API Authentication",
    description: "Auth model, headers, and token setup for secure integrations.",
    links: [{ to: "/docs/developer-guide/api/authentication", label: "Auth guide" }],
    Icon: CircleLockIcon,
  },
  {
    title: "Payment Gateways",
    description: "Implement or customize payment gateway integrations.",
    links: [{ to: "/docs/developer-guide/payment-gateways", label: "Gateway guide" }],
    Icon: CreditCardIcon,
  },
];

const communityCards: Card[] = [
  {
    title: "Support Forum",
    description: "Search community answers and share your own setup notes.",
    links: [{ href: "https://forum.invoiceninja.com", label: "Open forum" }],
    Icon: MessageIcon,
  },
  {
    title: "Slack",
    description: "Direct access to the team and community discussions.",
    links: [
      { href: "https://invoiceninja.slack.com", label: "Open Slack workspace" },
      { href: "http://slack.invoiceninja.com", label: "Not a member? Get invite" },
    ],
    Icon: MsgBubbleUserIcon,
  },
  {
    title: "Discord",
    description: "Chat with other self-hosters and exchange deployment tips.",
    links: [{ href: "https://discord.gg/ZwEdtfCwXA", label: "Join Discord" }],
    Icon: UsersIcon,
  },
  {
    title: "YouTube",
    description: "Watch walkthroughs, release notes, and deep-dives.",
    links: [{ href: "https://www.youtube.com/@appinvoiceninja", label: "Watch videos" }],
    Icon: MediaPlayIcon,
  },
];

const supportCards: Card[] = [
  {
    title: "Self Host Troubleshooting",
    description: "Fix install, cron, queue, update, and runtime issues for self-host.",
    links: [{ to: "/docs/self-host/self-host-troubleshooting", label: "Self-host fixes" }],
    Icon: CircleWarningIcon,
  },
  {
    title: "Hosted Troubleshooting",
    description: "Resolve common hosted account and platform issues quickly.",
    links: [{ to: "/docs/hosted/hosted-troubleshooting", label: "Hosted fixes" }],
    Icon: CircleWarningIcon,
  },
  {
    title: "FAQ",
    description: "Answers for common billing, setup, and workflow questions.",
    links: [{ to: "/docs/user-guide/faq", label: "Open FAQ" }],
    Icon: CircleQuestionIcon,
  },
  {
    title: "Contact Support",
    description: "Reach out directly for help with account or technical blockers.",
    links: [{ href: "mailto:contact@invoiceninja.com", label: "Email support" }],
    Icon: EnvelopArrowRightIcon,
  },
];

function IconAsset({
  Icon,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}): React.JSX.Element {
  return (
    <span className="overview-preview-doc-icon" aria-hidden="true">
      <Icon />
    </span>
  );
}

function renderCardAction(
  link: CardLink,
  key: string,
  isSecondary: boolean,
): React.JSX.Element {
  const className = isSecondary
    ? "overview-preview-card-action overview-preview-card-action--secondary"
    : "overview-preview-card-action";

  if ("to" in link) {
    return (
      <Link key={key} to={link.to} className={className}>
        {link.label}
      </Link>
    );
  }

  return (
    <a
      key={key}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {link.label}
    </a>
  );
}

function renderCard(card: Card, className: string): React.JSX.Element {
  return (
    <article key={card.title} className={className}>
      <IconAsset Icon={card.Icon} />
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <div className="overview-preview-card-actions">
        {card.links.map((link, index) =>
          renderCardAction(link, `${card.title}-${index}`, index > 0),
        )}
      </div>
    </article>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Documentation Overview"
      description="Context-based navigation for operations, developer workflows, community, and support"
    >
      <main>
        <section className="homepage-section">
          <div className="container">
            <div className="overview-preview-hero">
              <div>
                <p className="overview-preview-kicker">Invoice Ninja</p>
                <h1 className="overview-preview-title">
                  Free Source Available Invoicing, Expenses &amp; Time-Tracking
                </h1>
                <p className="overview-preview-description">
                  Start with a live demo, then choose the right docs path for
                  operations, development, self-hosting, or support.
                </p>
                <div className="overview-preview-actions">
                  <a
                    className="button button--primary"
                    href="https://react.invoicing.co/demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Demo Login
                  </a>
                  <a className="button button--secondary" href="/docs/user-guide">
                    User Guide
                  </a>
                  <a
                    className="button button--secondary"
                    href="/docs/self-host/self-host-installation"
                  >
                    Self Hosting
                  </a>
                </div>
              </div>
              <div className="overview-preview-hero-panel">
                <p className="overview-preview-panel-title">Jump to context</p>
                <a href="#operations" className="overview-preview-panel-link">Operations</a>
                <a href="#developer" className="overview-preview-panel-link">Developer</a>
                <a href="#community" className="overview-preview-panel-link">Community</a>
                <a href="#support" className="overview-preview-panel-link">Support</a>
              </div>
            </div>
          </div>
        </section>

        <section id="operations" className="homepage-section homepage-section--alt">
          <div className="container">
            <h2 className="homepage-section__title">Operations</h2>
            <div className="overview-preview-grid">
              {operationsCards.map((card) => renderCard(card, "overview-preview-doc-card"))}
            </div>
          </div>
        </section>

        <section id="developer" className="homepage-section">
          <div className="container">
            <h2 className="homepage-section__title">Developer</h2>
            <div className="overview-preview-grid overview-preview-grid--resources">
              {developerCards.map((card) => renderCard(card, "overview-preview-doc-card"))}
            </div>
          </div>
        </section>

        <section id="community" className="homepage-section homepage-section--alt">
          <div className="container">
            <h2 className="homepage-section__title">Community</h2>
            <div className="overview-preview-grid overview-preview-grid--community">
              {communityCards.map((card) => renderCard(card, "overview-preview-community-card"))}
            </div>
          </div>
        </section>

        <section id="support" className="homepage-section">
          <div className="container">
            <h2 className="homepage-section__title">Support</h2>
            <div className="overview-preview-grid overview-preview-grid--resources">
              {supportCards.map((card) => renderCard(card, "overview-preview-doc-card"))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
