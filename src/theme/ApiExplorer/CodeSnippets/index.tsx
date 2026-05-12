import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ApiCodeBlock from "@theme/ApiExplorer/ApiCodeBlock";
import * as sdk from "postman-collection";

import { CodeSample } from "./code-snippets-types";

export interface Props {
  postman: sdk.Request;
  codeSamples: CodeSample[];
  maskCredentials?: boolean;
}

const LANGS: { lang: string; label: string; highlight: string }[] = [
  { lang: "curl", label: "curl", highlight: "bash" },
  { lang: "php", label: "php", highlight: "php" },
];

function CodeSnippets({ codeSamples }: Props) {
  const byLang = new Map<string, string>();
  for (const s of codeSamples ?? []) {
    if (!byLang.has(s.lang)) byLang.set(s.lang, s.source);
  }

  return (
    <Tabs groupId="code-samples">
      {LANGS.map(({ lang, label, highlight }) => (
        <TabItem key={lang} value={lang} label={label}>
          {/* @ts-ignore */}
          <ApiCodeBlock
            language={highlight}
            className="openapi-explorer__code-block"
            showLineNumbers={true}
          >
            {byLang.get(lang) ?? `// No ${label} sample available`}
          </ApiCodeBlock>
        </TabItem>
      ))}
    </Tabs>
  );
}

export default CodeSnippets;
