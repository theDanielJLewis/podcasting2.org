"use client";
import { PrismTheme } from "prism-react-renderer";
import { CodeBlock } from "react-code-block";

export function MyCodeBlock({
  code,
  language,
  words,
  lines,
  theme,
}: {
  code: string;
  language: string;
  words?: string[];
  lines?: (number | string)[];
  theme?: PrismTheme;
}) {
  return (
    <CodeBlock code={code} language={language} {...words} {...lines} {...theme}>
      <CodeBlock.Code className="overflow-x-scroll rounded-xl bg-gray-800 p-6 shadow-lg">
        <div className="table-row">
          {/* <CodeBlock.LineNumber className="table-cell select-none pr-4 text-right text-sm text-gray-500" /> */}
          <CodeBlock.LineContent className="table-cell">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
    </CodeBlock>
  );
}
