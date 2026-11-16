import { prepareResults, type SearchHit, type SearchSection } from "./results";

// The checker and browser call this same adapter around the installed worker.
export async function searchScope(query: string, sections: SearchSection[], retrieve: (query: string) => Promise<SearchHit[]>) {
  const hits = await retrieve(query.trim());
  return prepareResults(hits, Number.MAX_SAFE_INTEGER, query, sections);
}
