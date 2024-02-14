"use client";
import { CopyBlock, atomOneDark, atomOneLight } from "react-code-blocks";
import { CopyBlockProps } from "react-code-blocks/dist/components/CopyBlock";
import { useDarkMode } from "color-scheme-hook";
import { useEffect, useState } from "react";

export function MyCopyBlock(props: CopyBlockProps) {
  const [isDarkMode, toggleColorScheme, resetPreference] = useDarkMode();
  const [theme, setTheme] = useState(atomOneDark);

  useEffect(() => {
    setTheme(isDarkMode ? atomOneDark : atomOneLight);
  }, [isDarkMode]);

  return (
    <CopyBlock
      {...props}
      theme={theme}
      customStyle={{ borderRadius: "8px", padding: "0 0.75rem" }}
      codeBlock={props.codeBlock || true}
    />
  );
}
