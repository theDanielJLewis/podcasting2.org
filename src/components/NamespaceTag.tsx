import Link from "next/link";
import { Badge } from "./ui/badge";
import { nl2br } from "react-js-nl2br";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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
      <p>
        <code>{nl2br(tag.examples?.[0].code)}</code>
      </p>
      <Collapsible>
        <CollapsibleTrigger>
          <h4>Details</h4>
        </CollapsibleTrigger>
        <CollapsibleContent>{nl2br(tag.description?.long)}</CollapsibleContent>
      </Collapsible>
    </div>
  );
}
