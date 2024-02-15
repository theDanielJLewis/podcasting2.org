import { TxtForm } from "@/components/tagGenerator/TxtForm";
import { HeroHeader } from "@/components/ui/HeroHeader";
import React from "react";

export default function TagGenerator({ params }: { params: { slug: string } }) {
  return (
    <>
      <HeroHeader>
        <h1>TXT Tag Generator</h1>
      </HeroHeader>
      <TxtForm />
    </>
  );
}
