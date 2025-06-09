import { Badge } from "@/components/ui/badge";
import { podcastNamespaceTags } from "@/data/podcastNamespaceTags";
import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";
import { MyCodeBlock } from "@/components/ui/MyCodeBlock";
import { HeroHeader } from "@/components/ui/HeroHeader";
import { MyCode } from "@/components/ui/MyCode";
import { ItemNav } from "@/components/ItemNav";
import { getApps } from "@/data/apps";
import { AppsGridSmall } from "@/components/AppsGridSmall";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
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

export default async function SingleTag(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const tag: NamespaceTag | undefined = podcastNamespaceTags.find(
    (tag) => tag.slug.toLowerCase() === params.slug.toLowerCase(),
  );
  if (!tag) {
    return notFound();
  }

  const supportedApps = (await getApps()).filter((app) =>
    app.supportedElements.some(
      (element) =>
        element.elementName.toLowerCase().replaceAll(" ", "") ===
        tag.slug.toLowerCase(),
    ),
  );

  const supportedPodcastPlayers = supportedApps.filter((app) =>
    app.appType.includes("podcast player"),
  );
  const supportedPublishingTools = supportedApps.filter((app) =>
    app.appType.includes("hosting"),
  );

  const supportedOtherApps = supportedApps.filter(
    (app) =>
      !app.appType.includes("hosting") &&
      !app.appType.includes("podcast player"),
  );

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

      <h2>Platform support</h2>
      <h3>Podcast apps</h3>
      {supportedPodcastPlayers.length === 0 ? (
        <p>
          No podcast apps are known to support{" "}
          <MyCode text={tag.tag} language="xml" /> at this time.
        </p>
      ) : (
        <AppsGridSmall apps={supportedPodcastPlayers} />
      )}

      <h3>Publishing/hosting tools</h3>
      {supportedPublishingTools.length === 0 ? (
        <p>
          No publishing/hosting tools are known to support{" "}
          <MyCode text={tag.tag} language="xml" /> at this time.
        </p>
      ) : (
        <AppsGridSmall apps={supportedPublishingTools} />
      )}

      <h3>Other apps and platforms</h3>
      {supportedOtherApps.length === 0 ? (
        <p>
          No other apps or platforms are known to support{" "}
          <MyCode text={tag.tag} language="xml" /> at this time.
        </p>
      ) : (
        <AppsGridSmall apps={supportedOtherApps} />
      )}

      <p>
        <small>
          This data is provided by Podcast Index.{" "}
          <a
            href="https://github.com/Podcastindex-org/web-ui/blob/master/server/data/apps.json"
            target="_blank"
          >
            edit it on GitHub
          </a>
        </small>
      </p>

      <ItemNav current={tag} items={podcastNamespaceTags} />
    </>
  );
}
