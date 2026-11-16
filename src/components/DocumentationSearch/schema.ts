export const SEARCH_CONTEXT_SCHEMA = 1;
export const API_CONTEXT = "docs/api-reference";
export const SEARCH_SCOPES = [
  { value: "", label: "Documentation" },
  { value: API_CONTEXT, label: "API Reference" },
  { value: "docs/developer-guide", label: "Developer Guides" },
  { value: "docs/legal", label: "Legal" },
];
export interface SearchDocument { i: number; t: string; u: string; h?: string; s?: string; b?: string[] }
export interface SearchHit {
  document: SearchDocument;
  page?: SearchDocument;
  type: number;
  tokens: string[];
  metadata: Record<string, { t?: { position?: [number, number][] } }>;
}
export interface SearchSection {
  id: string;
  url: string;
  pageTitle: string;
  sectionTitle: string;
  headingPath: string[];
  aliases: string[];
  body: string;
  summary: string;
  relatedLinks: boolean;
  sourcePath: string;
  scope: string;
  contentHash: string;
}
export interface SearchContext {
  schema: number;
  scope: string;
  contentHash: string;
  contextVersion: string;
  indexVersion: string;
  sections: SearchSection[];
}
export interface SearchResult {
  url: string;
  title: string;
  section: string;
  category: string;
  excerpt: string;
  score: number;
}

