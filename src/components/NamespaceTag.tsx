"use client";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { nl2br } from "react-js-nl2br";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CopyBlock, atomOneDark } from "react-code-blocks";
import Markdown from "markdown-to-jsx";

export function NamespaceTag({ tag }: { tag: NamespaceTag }) {
  return (
    <div className="mb-16">
      <h3 className="flex items-center gap-1" id={tag.label}>
        <code>{tag.tag}</code>
        {tag.parents.map((parent) => (
          <Badge variant="secondary" key={parent}>
            {parent}
          </Badge>
        ))}
      </h3>
      <p>{tag.description?.short}</p>
      <div className="mb-8">
        <CopyBlock
          text={tag.examples[0].code}
          language={tag.examples[0].language}
          showLineNumbers={false}
          wrapLongLines={true}
          theme={atomOneDark}
          codeBlock
        />
      </div>

      <Collapsible>
        <CollapsibleTrigger>
          <h4>Details</h4>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Markdown>{tag.description.long}</Markdown>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
