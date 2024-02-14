"use client";
// import { PrismTheme } from "prism-react-renderer";
import { CodeBlock, atomOneDark, atomOneLight } from "react-code-blocks";
import { CodeBlockProps } from "react-code-blocks/dist/components/CodeBlock";
import { useDarkMode } from "color-scheme-hook";
import { useEffect, useState } from "react";

export function MyCodeBlock(props: CodeBlockProps) {
  const [isDarkMode, toggleColorScheme, resetPreference] = useDarkMode();
  const [theme, setTheme] = useState(atomOneDark);

  useEffect(() => {
    setTheme(isDarkMode ? atomOneDark : atomOneLight);
  }, [isDarkMode]);

  return (
    <CodeBlock
      {...props}
      theme={theme}
      customStyle={{ borderRadius: "8px", padding: "0 0.75rem" }}
    />
  );
}
