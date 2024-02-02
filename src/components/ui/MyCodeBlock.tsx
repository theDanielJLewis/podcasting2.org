"use client";
import { PrismTheme } from "prism-react-renderer";
import { CodeBlock } from "react-code-block";

export function MyCodeBlock({
  code,
  language,
  words,
  lines,
  theme,
  lineNumbers,
}: {
  code: string;
  language: string;
  words?: string[];
  lines?: (number | string)[];
  theme?: PrismTheme;
  lineNumbers?: boolean;
}) {
  return (
    <CodeBlock
      code={code}
      language={language}
      words={words}
      lines={lines}
      theme={theme}
    >
      <CodeBlock.Code className="overflow-x-scroll rounded-xl bg-gray-800 p-4 shadow-lg">
        {({ isLineHighlighted }) => (
          <div
            className={`table-row ${isLineHighlighted ? "bg-gray-500/30" : ""}`}
          >
            {lineNumbers && (
              <CodeBlock.LineNumber
                className={`table-cell select-none pl-6 pr-4 text-right text-sm ${
                  isLineHighlighted ? "text-gray-300" : "text-gray-500"
                }`}
              />
            )}
            <CodeBlock.LineContent className="table-cell">
              <CodeBlock.Token />
            </CodeBlock.LineContent>
          </div>
        )}
      </CodeBlock.Code>
    </CodeBlock>
  );
}
