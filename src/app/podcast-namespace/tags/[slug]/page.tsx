import { Badge } from "@/components/ui/badge";
import { podcastNamespaceTags } from "@/data/podcastNamespaceTags";
import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";
import { MyCodeBlock } from "@/components/ui/MyCodeBlock";
import { HeroHeader } from "@/components/ui/HeroHeader";
import { MyCode } from "@/components/ui/MyCode";
import { ItemNav } from "@/components/ItemNav";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const tag: NamespaceTag | undefined = podcastNamespaceTags.find(
    (tag) => tag.slug.toLowerCase() === params.slug.toLowerCase(),
  );
  if (!tag) {
    return notFound();
  }

  return {
    title: `${tag.tag} - Podcast Namespace - Podcasting 2.0`,
    description: tag.description.short,
  };
}

export default function SingleTag({ params }: { params: { slug: string } }) {
  const tag: NamespaceTag | undefined = podcastNamespaceTags.find(
    (tag) => tag.slug.toLowerCase() === params.slug.toLowerCase(),
  );
  if (!tag) {
    return notFound();
  }

  return (
    <>
      <ItemNav current={tag} items={podcastNamespaceTags} />
      <HeroHeader>
        <h1>{tag.label}</h1>
        <span className="mb-4">
          <MyCode text={tag.tag} language="xml" />
        </span>
        <span>{tag.description.short}</span>
      </HeroHeader>

      <div className="mb-8">
        {tag.parents.length === 1 ? "Parent" : "Parents"}
        {": "}
        {tag.parents.map((parent) => (
          <Badge variant="secondary" className="m-0.5" key={parent}>
            <MyCode text={parent} language="xml" />
          </Badge>
        ))}
        {tag.parentsDescription && (
          <Markdown>{tag.parentsDescription}</Markdown>
        )}
      </div>
      <div className="mb-8">
        Count:{" "}
        <Badge variant="secondary" className="m-0.5">
          {tag.count}
        </Badge>
      </div>

      {tag.nodeValue && (
        <>
          <h2>Node value</h2>
          <Markdown>{tag.nodeValue}</Markdown>
        </>
      )}

      {tag.attributes && (
        <>
          <h2>Attributes</h2>
          <ul className="mb-8 list-disc pl-8">
            {tag.attributes.map((attribute) => (
              <li key={attribute.name}>
                <code>{attribute.name}</code>
                {attribute.recommended
                  ? " (recommended)"
                  : attribute.required
                    ? " (required)"
                    : ""}
                :{" "}
                {/* <Code text={attribute.name} language="xml" theme={dracula} />:{" "} */}
                <Markdown>{attribute.description}</Markdown>
              </li>
            ))}
          </ul>
          {tag.attributesDescription && (
            <Markdown>{tag.attributesDescription}</Markdown>
          )}
        </>
      )}

      <h2>Details</h2>
      <Markdown>{tag.description.long}</Markdown>

      {tag.notes && <Markdown>{tag.notes}</Markdown>}

      <h2>Examples</h2>
      {tag.examples.map((example) => (
        <div key={example.code} className="mb-8">
          {example.label && <p>{example.label}:</p>}
          <MyCodeBlock
            text={example.code}
            language={example.language}
            showLineNumbers={example.highlightLines ? true : false}
            highlight={example.highlightLines}
          />
        </div>
      ))}
      <ItemNav current={tag} items={podcastNamespaceTags} />
    </>
  );
}
