import Link from "next/link";
import { Badge } from "./ui/badge";

export function NamespaceTag({ tag }: { tag: NamespaceTag }) {
  return (
    <>
      <h2 className="flex items-center gap-1" id={tag.label}>
        <code>{tag.tag}</code>
        {tag.parents.map((parent) => (
          <Badge variant="secondary" key={parent}>
            {parent}
          </Badge>
        ))}
      </h2>
      <p>{tag.description?.short}</p>
      <p>
        {tag.documentationUrl && (
          <Link href={tag.documentationUrl}>Documentation</Link>
        )}
        {/* {tag.exampleUrl && (
          <>
            {" "}
            | <Link href={tag.exampleUrl}>Example</Link>
          </>
        )} */}
      </p>
    </>
  );
}
