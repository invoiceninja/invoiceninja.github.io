// Private plugin imports are confined to this adapter and covered by production
// browser tests. The plugin retains its index builder and background retrieval.
import { searchByWorker } from "@easyops-cn/docusaurus-search-local/dist/client/client/theme/searchByWorker";
import { searchIndexUrl } from "@easyops-cn/docusaurus-search-local/dist/client/client/utils/proxiedGeneratedConstants";
import { SEARCH_CONTEXT_SCHEMA, type SearchContext } from "./schema";

const contextCache = new Map<string, Promise<SearchContext>>();
export function contextUrl(baseUrl: string, scope: string, contextVersion: string): string {
  const indexVersion = new URLSearchParams(searchIndexUrl.split("?")[1]).get("_");
  const suffix = scope ? `-${scope.replaceAll("/", "-")}` : "";
  return `${baseUrl}search-context${suffix}.${contextVersion}.${indexVersion}.json`;
}

async function fetchContext(baseUrl: string, scope: string, contextVersion: string) {
  const url = contextUrl(baseUrl, scope, contextVersion);
  let promise = contextCache.get(url);
  if (!promise) {
    promise = (async () => {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Search context could not load. Refresh to load the latest site.");
      const context: SearchContext = await response.json();
      const indexVersion = new URLSearchParams(searchIndexUrl.split("?")[1]).get("_");
      if (context.schema !== SEARCH_CONTEXT_SCHEMA || context.contextVersion !== contextVersion
        || context.indexVersion !== indexVersion || context.scope !== scope || !Array.isArray(context.sections)) {
        throw new Error("Search assets changed. Refresh to load the latest site.");
      }
      return context;
    })();
    contextCache.set(url, promise);
    // Failed requests may be retried on the next query.
    promise.catch(() => contextCache.delete(url));
  }
  return promise;
}

export async function searchDocumentation(baseUrl: string, scope: string, query: string, version: string) {
  const [context, hits, { searchScope }] = await Promise.all([
    fetchContext(baseUrl, scope, version),
    searchByWorker(baseUrl, scope, query.trim(), 200),
    import("./retrieval"),
  ]);
  return searchScope(query, context.sections, async () => hits);
}
