import Link from "next/link";
import { Badge } from "./ui/badge";

export function NamespaceTag({ tag }: { tag: NamespaceTag }) {
  return (
    <div className="mb-16">
      <h3 className="flex items-center gap-1" id={tag.label}>
        {tag.label}
      </h3>
      <code>{tag.tag}</code>
      {tag.parents.map((parent) => (
        <Badge variant="secondary" key={parent}>
          {parent}
        </Badge>
      ))}
      <p>{tag.description?.short}</p>
    </div>
  );
}
