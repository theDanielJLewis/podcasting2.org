import Link from "next/link";
import { Badge } from "./ui/badge";

export function NamespaceTag({ tag }: { tag: NamespaceTag }) {
  return (
    <>
      <h2 className="flex items-center gap-1" id={tag.name}>
        <code>{tag.tag}</code>
        {tag.levels.map((level) => (
          <Badge variant="secondary" key={level}>
            {level}
          </Badge>
        ))}
      </h2>
      <p>{tag.description}</p>
      <p>
        <Link href={tag.documentationUrl}>Documentation</Link>
        {tag.exampleUrl && (
          <>
            {" "}
            | <Link href={tag.exampleUrl}>Example</Link>
          </>
        )}
      </p>
    </>
  );
}
