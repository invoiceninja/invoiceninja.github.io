import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate, { translate } from "@docusaurus/Translate";

function getDocSections() {
  return [
    {
      title: translate({ id: "homepage.userGuide.title", message: "User Guide" }),
      description: translate({
        id: "homepage.userGuide.description",
        message: "General documentation covering invoices, clients, payments, expenses, and all platform features.",
      }),
      link: "/docs/user-guide",
      icon: "\u{1F4D6}",
    },
    {
      title: translate({ id: "homepage.developerResources.title", message: "Developer Resources" }),
      description: translate({
        id: "homepage.developerResources.description",
        message: "API integration guides, payment gateway development, and technical reference materials.",
      }),
      link: "/docs/developer-guide",
      icon: "\u2699\uFE0F",
    },
    {
      title: translate({ id: "homepage.selfHosted.title", message: "Self-Hosted Installation" }),
      description: translate({
        id: "homepage.selfHosted.description",
        message: "Install and manage your own Invoice Ninja instance. Server requirements, configuration, and updates.",
      }),
      link: "/docs/self-host/self-host-installation",
      icon: "\u{1F5A5}\uFE0F",
    },
    {
      title: translate({ id: "homepage.migrate.title", message: "Migrate to V5" }),
      description: translate({
        id: "homepage.migrate.description",
        message: "Step-by-step guide to migrate your data from Invoice Ninja v4 to the latest v5 platform.",
      }),
      link: "/docs/migration",
      icon: "\u{1F504}",
    },
  ];
}

function getCommunitySections() {
  return [
    {
      title: translate({ id: "homepage.slack.title", message: "Slack" }),
      description: translate({
        id: "homepage.slack.description",
        message: "Join our community chat for real-time help and discussion.",
      }),
      link: "https://invoiceninja.slack.com",
      secondaryLink: "http://slack.invoiceninja.com",
      secondaryText: translate({
        id: "homepage.slack.secondaryText",
        message: "Not a member? Click for invite",
      }),
      image: "/assets/images/slackbot.png",
    },
    {
      title: translate({ id: "homepage.forum.title", message: "Forum" }),
      description: translate({
        id: "homepage.forum.description",
        message: "Browse and participate in community discussions, feature requests, and support threads.",
      }),
      link: "https://forum.invoiceninja.com",
      image: "/assets/images/discourse.png",
    },
    {
      title: translate({ id: "homepage.email.title", message: "Email" }),
      description: translate({
        id: "homepage.email.description",
        message: "Reach out directly to our team for support inquiries.",
      }),
      link: "mailto:contact@invoiceninja.com",
      displayLink: "contact@invoiceninja.com",
    },
    {
      title: translate({ id: "homepage.demo.title", message: "Demo" }),
      description: translate({
        id: "homepage.demo.description",
        message: "Try Invoice Ninja with a fully interactive demo environment. No signup required.",
      }),
      link: "https://react.invoicing.co/demo",
      image: "/assets/images/invoiceninja_icon_large.png",
    },
  ];
}

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
  const docSections = getDocSections();
  return (
    <section className="homepage-section">
      <div className="container">
        <h2 className="homepage-section__title">
          <Translate id="homepage.helpTitle">What can we help with?</Translate>
        </h2>
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
  const communitySections = getCommunitySections();
  return (
    <section className="homepage-section homepage-section--alt">
      <div className="container">
        <h2 className="homepage-section__title">
          <Translate id="homepage.communityTitle">Community & Support</Translate>
        </h2>
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
        <h2 className="homepage-section__title">
          <Translate id="homepage.moreResources">More Resources</Translate>
        </h2>
        <div className="row">
          <div
            className="col col--4"
            style={{ marginBottom: "1.5rem" }}
          >
            <Link to="/docs/hosted/hosted-quickstart" className="homepage-card homepage-card--compact">
              <div>
                <h3 className="homepage-card__title">
                  <Translate id="homepage.hostedPlatform.title">Hosted Platform</Translate>
                </h3>
                <p className="homepage-card__description">
                  <Translate id="homepage.hostedPlatform.description">
                    Quick setup on our managed cloud. No server required.
                  </Translate>
                </p>
              </div>
            </Link>
          </div>
          <div
            className="col col--4"
            style={{ marginBottom: "1.5rem" }}
          >
            <Link to="/docs/api-reference/invoice-ninja-api-reference" className="homepage-card homepage-card--compact">
              <div>
                <h3 className="homepage-card__title">
                  <Translate id="homepage.apiReference.title">API Reference</Translate>
                </h3>
                <p className="homepage-card__description">
                  <Translate id="homepage.apiReference.description">
                    Interactive API docs with examples for every endpoint.
                  </Translate>
                </p>
              </div>
            </Link>
          </div>
          <div
            className="col col--4"
            style={{ marginBottom: "1.5rem" }}
          >
            <Link to="/docs/legal/license" className="homepage-card homepage-card--compact">
              <div>
                <h3 className="homepage-card__title">
                  <Translate id="homepage.legal.title">Legal</Translate>
                </h3>
                <p className="homepage-card__description">
                  <Translate id="homepage.legal.description">
                    License, terms of service, privacy policy, and GDPR.
                  </Translate>
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
