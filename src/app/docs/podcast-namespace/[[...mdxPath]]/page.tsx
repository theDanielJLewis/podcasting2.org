import { notFound } from "next/navigation";
import { compileMdx } from "nextra/compile";
import { Callout, Tabs } from "nextra/components";
import { evaluate } from "nextra/evaluate";
import {
  convertToPageMap,
  mergeMetaWithPageMap,
  normalizePageMap,
} from "nextra/page-map";
import { importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../../../../mdx-components";
import { AppsGridSmall } from "@/components/AppsGridSmall";

//raw.githubusercontent.com/Podcastindex-org/podcast-namespace/refs/heads/main/docs/1.0.md
//raw.githubusercontent.com/theDanielJLewis/podcast-namespace/refs/heads/main/docs/other-recommendations.md

const user = "theDanielJLewis";
const repo = "podcast-namespace";
const branch = "refs/heads/main";
const docsPath = "/docs/";

// Function to fetch all files from the tags directory
async function getTagsFiles(): Promise<string[]> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${user}/${repo}/contents/docs/tags?ref=main`,
    );
    const data = await response.json();

    if (Array.isArray(data)) {
      return data
        .filter(
          (file: any) => file.type === "file" && file.name.endsWith(".md"),
        )
        .map((file: any) => `tags/${file.name}`);
    }
    return [];
  } catch (error) {
    console.error("Error fetching tags files:", error);
    return [];
  }
}

// Build filePaths dynamically
async function buildFilePaths(): Promise<string[]> {
  const tagsFiles = await getTagsFiles();
  return ["1.0.md", "other-recommendations.md", ...tagsFiles];
}

// Build page map dynamically
async function buildPageMap() {
  const filePaths = await buildFilePaths();

  // Add local MDX files to the file paths
  const localFiles = Array.from(localMdxRoutes).map((route) =>
    route === "" ? "index.mdx" : `${route}.mdx`,
  );

  const allFilePaths = [...localFiles, ...filePaths];

  const { mdxPages: allMdxPages, pageMap: _pageMap } = convertToPageMap({
    filePaths: allFilePaths,
    basePath: "docs/podcast-namespace",
  });

  // Filter out local files from mdxPages for remote fetching
  const mdxPages = Object.fromEntries(
    Object.entries(allMdxPages).filter(
      ([route, filePath]) => !shouldUseLocalMdx(route),
    ),
  );

  // `mergeMetaWithPageMap` is used to change sidebar order and title
  const eslintPageMap = mergeMetaWithPageMap(_pageMap[0]!, {
    "podcast-namespace": {
      items: {
        index: "Introduction", // This will be our local index.mdx
        "1.0": "RSS 2.0 Declaration",
        "other-recommendations": "Other Recommendations",
        tags: {
          title: "RSS Tags",
        },
      },
    },
  });

  return {
    pageMap: normalizePageMap(eslintPageMap),
    mdxPages,
  };
}

// Cache the result to avoid multiple API calls
let cachedPageData: { pageMap: any; mdxPages: any } | null = null;

async function getPageData() {
  if (!cachedPageData) {
    cachedPageData = await buildPageMap();
  }
  return cachedPageData;
}

// Define which routes should be served from local MDX files
const localMdxRoutes = new Set([
  "", // index.mdx at /docs/podcast-namespace/
  // Add more local routes here as needed
]);

function shouldUseLocalMdx(route: string): boolean {
  return localMdxRoutes.has(route);
}

const { wrapper: Wrapper, ...components } = getMDXComponents({
  $Tabs: Tabs,
  Callout,
});

type PageProps = Readonly<{
  params: Promise<{
    mdxPath?: string[];
  }>;
}>;

export default async function Page(props: PageProps) {
  const params = await props.params;
  const route = params.mdxPath?.join("/") ?? "";

  // Check if this route should use local MDX
  if (shouldUseLocalMdx(route)) {
    try {
      const localMdxPath = route
        ? ["docs/podcast-namespace", ...route.split("/")]
        : ["docs/podcast-namespace"];
      const result = await importPage(localMdxPath);
      const { default: MDXContent, toc, metadata } = result;
      return (
        <Wrapper toc={toc} metadata={metadata}>
          <MDXContent {...props} params={params} />
        </Wrapper>
      );
    } catch (error: any) {
      // If we expected a local file but it's not found, throw the error
      throw new Error(
        `Expected local MDX file for route "${route}" but it was not found`,
      );
    }
  }

  // Use remote content from GitHub
  const { mdxPages } = await getPageData();
  const filePath = mdxPages[route];

  if (!filePath) {
    notFound();
  }

  const response = await fetch(
    `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${docsPath}${filePath}`,
  );
  const data = await response.text();
  const rawJs = await compileMdx(data, { filePath });
  const { default: MDXContent, toc, metadata } = evaluate(rawJs, components);
  console.log(metadata);

  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent />
      {metadata.filePath.includes("tags") && (
        <>
          <h2>Podcast apps supporting this tag</h2>
          <AppsGridSmall
            appType="podcast player"
            tags={metadata.title.toLowerCase()}
          />
          <h2>Publishing tools supporting this tag</h2>
          <AppsGridSmall
            appType="hosting"
            tags={metadata.title.toLowerCase()}
          />
        </>
      )}
    </Wrapper>
  );
}

export async function generateStaticParams() {
  const { mdxPages } = await getPageData();
  const remoteParams = Object.keys(mdxPages).map((route) => ({
    mdxPath: route.split("/"),
  }));

  // Add local MDX files - for now just the index page
  const localParams = [
    { mdxPath: [] }, // This handles the index.mdx file at /docs/podcast-namespace/
  ];

  return [...localParams, ...remoteParams];
}

// Export pageMap for use in layout
export async function getPageMap() {
  const { pageMap } = await getPageData();
  return pageMap;
}
