"use client";
import { Code, atomOneDark, atomOneLight } from "react-code-blocks";
import { CodeProps } from "react-code-blocks/dist/components/Code";
import { useDarkMode } from "color-scheme-hook";
import { useEffect, useState } from "react";

export function MyCode(props: CodeProps) {
  const [isDarkMode, toggleColorScheme, resetPreference] = useDarkMode();
  const [theme, setTheme] = useState(atomOneDark);

  useEffect(() => {
    setTheme(isDarkMode ? atomOneDark : atomOneLight);
  }, [isDarkMode]);

  return (
    <Code {...props} theme={theme} customStyle={{ borderRadius: "0.25rem" }} />
  );
}
