import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import { compileMdx } from "nextra/compile";
import { Callout, Tabs } from "nextra/components";
import { evaluate } from "nextra/evaluate";
import {
  convertToPageMap,
  mergeMetaWithPageMap,
  normalizePageMap,
} from "nextra/page-map";
import { importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "@/../mdx-components";
import { FeatureSupport } from "@/components/FeatureSupport";

const user = process.env.NAMESPACE_REPO_USER;
const repo = "podcast-namespace";
const branch = "refs/heads/main";
const docsPath = "/docs/";
const docsDirectory = "docs";
const DAY_IN_SECONDS = 60 * 60 * 24;

export const revalidate = DAY_IN_SECONDS;

function getGitHubMarkdownUrl(filePath: string): string {
  return `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${docsPath}${filePath}`;
}

async function fetchRemoteMarkdown(filePath: string): Promise<string> {
  const response = await fetch(getGitHubMarkdownUrl(filePath), {
    next: { revalidate: DAY_IN_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch remote markdown: ${filePath}`);
  }

  return response.text();
}

type GitHubContentEntry = {
  type: "file" | "dir";
  name: string;
  path: string;
};

function isMarkdownFile(fileName: string): boolean {
  return /\.(md|mdx)$/i.test(fileName);
}

function toDocsRelativePath(path: string): string {
  return path.replace(/^docs\//, "");
}

async function fetchGitHubDirectoryEntries(
  relativePathFromDocsRoot: string,
): Promise<GitHubContentEntry[]> {
  try {
    const path = `${docsDirectory}/${relativePathFromDocsRoot}`;
    const response = await fetch(
      `https://api.github.com/repos/${user}/${repo}/contents/${path}?ref=main`,
      {
        next: { revalidate: DAY_IN_SECONDS },
      },
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? (data as GitHubContentEntry[]) : [];
  } catch (error) {
    console.error(
      `Error fetching directory entries for ${relativePathFromDocsRoot}:`,
      error,
    );
    return [];
  }
}

async function getMarkdownFilesRecursively(
  relativePathFromDocsRoot: string,
): Promise<string[]> {
  const entries = await fetchGitHubDirectoryEntries(relativePathFromDocsRoot);
  const nestedResults = await Promise.all(
    entries.map(async (entry) => {
      if (entry.type === "dir") {
        return getMarkdownFilesRecursively(toDocsRelativePath(entry.path));
      }
      if (entry.type === "file" && isMarkdownFile(entry.name)) {
        return [toDocsRelativePath(entry.path)];
      }
      return [];
    }),
  );
  return nestedResults.flat();
}

export async function generateMetadata(props: any) {
  const params = await props.params;
  const route = params.mdxPath?.join("/") ?? "";

  // Check if this route should use local MDX
  if (shouldUseLocalMdx(route)) {
    try {
      const localMdxPath = route
        ? ["docs/podcast-namespace", ...route.split("/")]
        : ["docs/podcast-namespace"];
      const { metadata } = await importPage(localMdxPath);
      return {
        ...metadata,
        title: metadata.title
          ? `${metadata.title} - Podcasting 2.0`
          : "Podcasting 2.0",
      };
    } catch (error: any) {
      // If we expected a local file but it's not found, return default metadata
      return { title: "Page Not Found - Podcasting 2.0" };
    }
  }

  // Use remote content from GitHub
  try {
    const { mdxPages } = await getPageData();
    const filePath = mdxPages[route];

    if (!filePath) {
      return { title: "Page Not Found" };
    }

    const data = await fetchRemoteMarkdown(filePath);
    const rawJs = await compileMdx(data, {
      filePath,
      mdxOptions: { format: "detect" },
    });
    const { metadata } = evaluate(rawJs, components);
    return {
      ...metadata,
      title: metadata.title
        ? `${metadata.title} - Podcast Namespace - Podcasting 2.0`
        : "Podcasting 2.0",
    };
  } catch (error) {
    console.error("Error generating metadata for remote file:", error);
    return { title: "Documentation - Podcasting 2.0" };
  }
}

// Build filePaths dynamically
async function buildFilePaths(): Promise<string[]> {
  const [tagsFiles, exampleFiles] = await Promise.all([
    getMarkdownFilesRecursively("tags"),
    getMarkdownFilesRecursively("examples"),
  ]);

  return Array.from(
    new Set(["1.0.md", "other-recommendations.md", ...tagsFiles, ...exampleFiles]),
  ).sort((a, b) => a.localeCompare(b));
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
        examples: {
          title: "Examples",
        },
      },
    },
  });

  return {
    pageMap: normalizePageMap(eslintPageMap),
    mdxPages,
  };
}

const getPageData = unstable_cache(
  async () => buildPageMap(),
  ["podcast-namespace-page-data"],
  { revalidate: DAY_IN_SECONDS },
);

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

  const data = await fetchRemoteMarkdown(filePath);
  const rawJs = await compileMdx(data, {
    filePath,
    mdxOptions: { format: "detect" },
  });
  const { default: MDXContent, toc, metadata } = evaluate(rawJs, components);

  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent />
      {metadata.filePath?.includes("tags") && (
        <FeatureSupport tags={[metadata.title.toLowerCase()]} />
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
