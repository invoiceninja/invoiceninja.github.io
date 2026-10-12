import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import DocumentationSearch from "@site/src/components/DocumentationSearch";

export default function SearchPage() {
  return <Layout title="Search">
    <Head><meta name="robots" content="noindex, follow" /></Head>
    <main className="container margin-vert--lg">
      <h1>Search</h1>
      <p>Search all guides and API endpoints. Results are grouped by content type.</p>
      <DocumentationSearch expanded />
    </main>
  </Layout>;
}
