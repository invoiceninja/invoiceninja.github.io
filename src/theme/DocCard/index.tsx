/* ============================================================================
 * Swizzle (wrap) of @theme/DocCard.
 *
 * API reference resource pages render <DocCardList> with one card per endpoint.
 * Each endpoint sidebar item carries className "api-method get|post|..." and a
 * description of the form "### GET /api/v1/...". For those items we render a
 * compact card with a coloured HTTP verb badge, the operation summary as the
 * title, and the path in monospace. Every other DocCard (category indexes,
 * normal doc links across the site) falls through to the upstream rendering
 * unchanged.
 * ========================================================================== */
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import isInternalUrl from "@docusaurus/isInternalUrl";
import {
  useDocById,
  findFirstSidebarItemLink,
} from "@docusaurus/plugin-content-docs/client";
import {
  extractLeadingEmoji,
  useDocCardDescriptionCategoryItemsPlural,
} from "@docusaurus/theme-common/internal";
import Layout from "@theme/DocCard/Layout";

import styles from "./apicard.module.css";

const HTTP_METHODS = ["get", "post", "put", "patch", "delete", "head", "options"];

function getFallbackEmojiIcon(item: any) {
  if (item.type === "category") {
    return "🗃";
  }
  return isInternalUrl(item.href) ? "📄️" : "🔗";
}

function getIconTitleProps(item: any) {
  const extracted = extractLeadingEmoji(item.label);
  const emoji = extracted.emoji ?? getFallbackEmojiIcon(item);
  return {
    icon: emoji,
    title: extracted.rest.trim(),
  };
}

// ---- upstream behaviour, preserved for non-API items -----------------------

function CardCategory({ item }: any) {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useDocCardDescriptionCategoryItemsPlural();
  if (!href) {
    return null;
  }
  return (
    <Layout
      item={item}
      className={item.className}
      href={href}
      description={item.description ?? categoryItemsPlural(item.items.length)}
      {...getIconTitleProps(item)}
    />
  );
}

function CardLink({ item }: any) {
  const doc = useDocById(item.docId ?? undefined);
  return (
    <Layout
      item={item}
      className={item.className}
      href={item.href}
      description={item.description ?? doc?.description}
      {...getIconTitleProps(item)}
    />
  );
}

// ---- API endpoint card -----------------------------------------------------

function extractMethod(className?: string): string | undefined {
  if (!className) {
    return undefined;
  }
  const classes = className.split(/\s+/).map((c) => c.toLowerCase());
  return HTTP_METHODS.find((m) => classes.includes(m));
}

function extractPath(description?: string | null): string | undefined {
  if (!description) {
    return undefined;
  }
  // Frontmatter description looks like "###  GET /api/v1/clients"
  const match = description.match(
    /(?:GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)\s+(\/\S+)/i
  );
  return match?.[1];
}

function ApiCardLink({ item, method }: any) {
  const doc = useDocById(item.docId ?? undefined);
  const path = extractPath(item.description ?? doc?.description);
  const title = extractLeadingEmoji(item.label).rest.trim();

  return (
    <Link href={item.href} className={clsx("card", styles.apiCard)}>
      <div className={styles.apiCardHeader}>
        <span className={clsx(styles.apiCardBadge, styles[method])}>
          {method}
        </span>
        <span className={styles.apiCardTitle}>{title}</span>
      </div>
      {path && <code className={styles.apiCardPath}>{path}</code>}
    </Link>
  );
}

export default function DocCard({ item }: any) {
  switch (item.type) {
    case "link": {
      const method = extractMethod(item.className);
      if (method) {
        return <ApiCardLink item={item} method={method} />;
      }
      return <CardLink item={item} />;
    }
    case "category":
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
