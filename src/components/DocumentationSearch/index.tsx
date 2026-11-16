import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "@docusaurus/Link";
import { useHistory, useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { preloadSearch, searchDocumentation } from "./client";
import { SEARCH_SCOPES, type SearchResult } from "./schema";
import styles from "./styles.module.css";

function Highlight({ text, query }: { text: string; query: string }) {
  const words = query.match(/[\p{L}\p{N}_-]+/gu) ?? [];
  if (!words.length) return <>{text}</>;
  const escaped = words.map(word => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "gi"));
  return <>{parts.map((part, i) => i % 2 ? <mark key={i}>{part}</mark> : part)}</>;
}

export default function DocumentationSearch({ expanded = false }: { expanded?: boolean }) {
  const location = useLocation();
  const history = useHistory();
  const { siteConfig: { baseUrl, customFields } } = useDocusaurusContext();
  const contextVersion = String(customFields.searchContextVersion);
  const params = new URLSearchParams(location.search);
  const [query, setQuery] = useState(expanded ? params.get("q") || "" : "");
  const [hiddenCategories, setHiddenCategories] = useState<string[]>(params.getAll("hide"));
  const [groups, setGroups] = useState<{ label: string; results: SearchResult[]; failed: boolean }[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [visibleLimits, setVisibleLimits] = useState<Record<string, number>>({});
  const input = useRef<HTMLInputElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const id = useId();
  const visibleGroups = groups.filter(group => !hiddenCategories.includes(group.label));
  const limitFor = (label: string) => visibleLimits[label] ?? (expanded ? 20 : 5);
  const totalCount = visibleGroups.reduce((count, group) => count + group.results.length, 0);
  const resultCount = visibleGroups.reduce((count, group) => count + Math.min(limitFor(group.label), group.results.length), 0);
  const failedGroups = visibleGroups.filter(group => group.failed);
  const allHidden = SEARCH_SCOPES.every(scope => hiddenCategories.includes(scope.label));
  const warmSearch = useCallback(() => {
    preloadSearch(baseUrl, SEARCH_SCOPES.map(scope => scope.value), contextVersion);
  }, [baseUrl, contextVersion]);

  useEffect(() => {
    const idle = window.requestIdleCallback?.(warmSearch, { timeout: 1500 });
    const timer = idle === undefined ? window.setTimeout(warmSearch, 400) : undefined;
    return () => {
      if (idle !== undefined) window.cancelIdleCallback(idle);
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [warmSearch]);

  useEffect(() => {
    setOpen(false);
    if (expanded) {
      const params = new URLSearchParams(location.search);
      setQuery(params.get("q") || "");
      setHiddenCategories(params.getAll("hide"));
    }
  }, [location.pathname, location.search, expanded]);

  useEffect(() => {
    if (expanded) return;
    const shortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        input.current?.focus();
      }
    };
    document.addEventListener("keydown", shortcut);
    return () => document.removeEventListener("keydown", shortcut);
  }, [expanded]);

  useEffect(() => {
    let cancelled = false;
    setGroups([]);
    setVisibleLimits({});
    if (!query.trim()) {
      setLoading(false);
      return;
    }
    warmSearch();
    setLoading(true);
    const timer = setTimeout(async () => {
      // Search each index independently so API volume cannot crowd out guides.
      const searches = await Promise.allSettled(SEARCH_SCOPES.map(async scope =>
        searchDocumentation(baseUrl, scope.value, query.trim(), contextVersion)));
      if (!cancelled) {
        setGroups(searches.map((search, index) => ({
          label: SEARCH_SCOPES[index].label,
          results: search.status === "fulfilled" ? search.value : [],
          failed: search.status === "rejected",
        })));
        setLoading(false);
      }
    }, 180);
    return () => { cancelled = true; clearTimeout(timer); };
  }, [query, expanded, baseUrl, contextVersion, warmSearch]);

  const searchParams = new URLSearchParams({ q: query.trim() });
  SEARCH_SCOPES.forEach(scope => {
    if (hiddenCategories.includes(scope.label)) searchParams.append("hide", scope.label);
  });
  const searchUrl = `${baseUrl}search?${searchParams}`;
  const showResults = expanded || (open && query.trim().length > 0);

  return (
    <div className={`${styles.search} ${expanded ? styles.expanded : styles.compact}`}
      onFocus={() => { warmSearch(); setOpen(true); }}
      onPointerEnter={warmSearch}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false); }}
      onKeyDown={event => {
        if (event.key === "Escape") {
          input.current?.focus();
          setOpen(false);
        }
        if (event.key === "ArrowDown" && event.target === input.current) {
          const first = panel.current?.querySelector<HTMLAnchorElement>("li a");
          if (first) { event.preventDefault(); first.focus(); }
        } else if ((event.key === "ArrowDown" || event.key === "ArrowUp") && panel.current) {
          const links = Array.from(panel.current.querySelectorAll<HTMLAnchorElement>("li a"));
          const index = links.indexOf(event.target as HTMLAnchorElement);
          if (index >= 0) {
            event.preventDefault();
            const next = index + (event.key === "ArrowDown" ? 1 : -1);
            if (next < 0) input.current?.focus();
            else links[Math.min(next, links.length - 1)]?.focus();
          }
        }
      }}>
      <form role="search" aria-label={expanded ? "Search documentation and API reference" : "Site search"}
        className={styles.form} onSubmit={event => { event.preventDefault(); setOpen(false); history.push(searchUrl); }}>
        <label className={styles.srOnly} htmlFor={`${id}-query`}>Search guides and API reference</label>
        <input ref={input} id={`${id}-query`} type="search" value={query}
          placeholder="Search guides and API…" autoComplete="off"
          aria-controls={showResults ? `${id}-results` : undefined}
          onChange={event => { setQuery(event.target.value); setOpen(true); }} />
        {expanded && <button type="submit" className="button button--primary">Search</button>}
      </form>
      {showResults && <div ref={panel} id={`${id}-results`} className={styles.results}>
        <div className={styles.filters} role="group" aria-label="Result categories">
          {SEARCH_SCOPES.map(scope => {
            const active = !hiddenCategories.includes(scope.label);
            return <button key={scope.value} type="button" className={styles.filterBadge}
              aria-pressed={active} onClick={() => {
                const hidden = active ? [...hiddenCategories, scope.label]
                  : hiddenCategories.filter(label => label !== scope.label);
                setHiddenCategories(hidden);
                if (expanded) {
                  const params = new URLSearchParams({ q: query.trim() });
                  hidden.forEach(label => params.append("hide", label));
                  history.replace({ pathname: location.pathname, search: `?${params}` });
                }
              }}>
              <span aria-hidden="true">{active ? "✓" : "+"}</span> {scope.label}
            </button>;
          })}
        </div>
        <p className={styles.status} role="status" aria-live="polite" aria-atomic="true">
          {allHidden ? "Select a category above to display results."
            : loading ? "Searching…"
            : !query.trim() ? "Enter a word or question to find a guide or API endpoint."
            : process.env.NODE_ENV !== "production" ? "Search is available in the built site preview."
            : resultCount ? `${resultCount} of ${totalCount} matching sections shown, grouped by content type`
            : failedGroups.length ? "Some search results could not load."
            : "No results in the active categories. Try another category or search term."}
        </p>
        {failedGroups.length > 0 && <p className={styles.status} role="alert">
          Could not load {failedGroups.map(group => group.label).join(", ")}. Refresh the page to try again.
        </p>}
        {visibleGroups.filter(group => group.results.length > 0).map((group, index) => <section
          key={group.label} aria-labelledby={`${id}-group-${index}`}>
          <h2 id={`${id}-group-${index}`} className={styles.groupHeading}>{group.label}</h2>
          <ul className={styles.list}>
          {group.results.slice(0, limitFor(group.label)).map(result => <li key={result.url}>
            <Link to={result.url} className={styles.result} onClick={() => setOpen(false)}>
              <span className={styles.category}>{result.category}</span>
              <span className={styles.title}><Highlight text={result.section || result.title} query={query} /></span>
              {result.section && <span className={styles.section}><Highlight text={result.title} query={query} /></span>}
              {result.excerpt && <span className={styles.excerpt}><Highlight text={result.excerpt} query={query} /></span>}
            </Link>
          </li>)}
          </ul>
          {expanded && group.results.length > limitFor(group.label) && <button type="button" className={styles.moreResults}
            onClick={() => setVisibleLimits(limits => ({ ...limits, [group.label]: limitFor(group.label) + 20 }))}>Show more {group.label} sections</button>}
        </section>)}
        {!expanded && query.trim() && <Link className={styles.allResults} to={searchUrl} onClick={() => setOpen(false)}>See all results →</Link>}
      </div>}
    </div>
  );
}
