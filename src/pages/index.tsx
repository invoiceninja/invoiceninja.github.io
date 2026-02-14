import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const docSections = [
  {
    title: "User Guide",
    description:
      "General documentation covering invoices, clients, payments, expenses, and all platform features.",
    link: "/en/user-guide",
    icon: "📖",
  },
  {
    title: "Developer Resources",
    description:
      "API integration guides, payment gateway development, and technical reference materials.",
    link: "/en/developer-guide",
    icon: "⚙️",
  },
  {
    title: "Self-Hosted Installation",
    description:
      "Install and manage your own Invoice Ninja instance. Server requirements, configuration, and updates.",
    link: "/en/self-host/self-host-installation",
    icon: "🖥️",
  },
  {
    title: "Migrate to V5",
    description:
      "Step-by-step guide to migrate your data from Invoice Ninja v4 to the latest v5 platform.",
    link: "/en/migration",
    icon: "🔄",
  },
];

const communitySections = [
  {
    title: "Slack",
    description: "Join our community chat for real-time help and discussion.",
    link: "https://invoiceninja.slack.com",
    secondaryLink: "http://slack.invoiceninja.com",
    secondaryText: "Not a member? Click for invite",
    image: "/assets/images/slackbot.png",
  },
  {
    title: "Forum",
    description:
      "Browse and participate in community discussions, feature requests, and support threads.",
    link: "https://forum.invoiceninja.com",
    image: "/assets/images/discourse.png",
  },
  {
    title: "Email",
    description: "Reach out directly to our team for support inquiries.",
    link: "mailto:contact@invoiceninja.com",
    displayLink: "contact@invoiceninja.com",
  },
  {
    title: "Demo",
    description:
      "Try Invoice Ninja with a fully interactive demo environment. No signup required.",
    link: "https://react.invoicing.co/demo",
    image: "/assets/images/invoiceninja_icon_large.png",
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero hero--primary" style={{ textAlign: "center" }}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function DocCards() {
  return (
    <section className="homepage-section">
      <div className="container">
        <h2 className="homepage-section__title">What can we help with?</h2>
        <div className="row">
          {docSections.map((section) => (
            <div
              key={section.title}
              className="col col--6"
              style={{ marginBottom: "1.5rem" }}
            >
              <Link to={section.link} className="homepage-card">
                <span className="homepage-card__icon">{section.icon}</span>
                <div>
                  <h3 className="homepage-card__title">{section.title}</h3>
                  <p className="homepage-card__description">
                    {section.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunityCards() {
  return (
    <section className="homepage-section homepage-section--alt">
      <div className="container">
        <h2 className="homepage-section__title">Community & Support</h2>
        <div className="row">
          {communitySections.map((section) => (
            <div
              key={section.title}
              className="col col--3"
              style={{ marginBottom: "1.5rem" }}
            >
              <a
                href={section.link}
                className="homepage-community-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                {section.image && (
                  <img
                    src={section.image}
                    alt={section.title}
                    className="homepage-community-card__image"
                  />
                )}
                {!section.image && (
                  <div className="homepage-community-card__icon-placeholder">
                    ✉️
                  </div>
                )}
                <h3 className="homepage-community-card__title">
                  {section.title}
                </h3>
                <p className="homepage-community-card__description">
                  {section.description}
                </p>
                {section.secondaryLink && (
                  <span className="homepage-community-card__secondary">
                    {section.secondaryText}
                  </span>
                )}
                {section.displayLink && (
                  <span className="homepage-community-card__secondary">
                    {section.displayLink}
                  </span>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickLinks() {
  return (
    <section className="homepage-section">
      <div className="container">
        <h2 className="homepage-section__title">More Resources</h2>
        <div className="row">
          <div
            className="col col--4"
            style={{ marginBottom: "1.5rem" }}
          >
            <Link to="/en/hosted/hosted-quickstart" className="homepage-card homepage-card--compact">
              <div>
                <h3 className="homepage-card__title">Hosted Platform</h3>
                <p className="homepage-card__description">
                  Quick setup on our managed cloud. No server required.
                </p>
              </div>
            </Link>
          </div>
          <div
            className="col col--4"
            style={{ marginBottom: "1.5rem" }}
          >
            <Link to="/en/api-reference/invoice-ninja-api-reference" className="homepage-card homepage-card--compact">
              <div>
                <h3 className="homepage-card__title">API Reference</h3>
                <p className="homepage-card__description">
                  Interactive API docs with examples for every endpoint.
                </p>
              </div>
            </Link>
          </div>
          <div
            className="col col--4"
            style={{ marginBottom: "1.5rem" }}
          >
            <Link to="/en/legal/license" className="homepage-card homepage-card--compact">
              <div>
                <h3 className="homepage-card__title">Legal</h3>
                <p className="homepage-card__description">
                  License, terms of service, privacy policy, and GDPR.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <DocCards />
        <CommunityCards />
        <QuickLinks />
      </main>
    </Layout>
  );
}
