import { notFound } from "next/navigation";
import { compileMdx } from "nextra/compile";
import { Callout, Tabs } from "nextra/components";
import { evaluate } from "nextra/evaluate";
import {
  convertToPageMap,
  mergeMetaWithPageMap,
  normalizePageMap,
} from "nextra/page-map";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";

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

const tagsFiles2 = ["tags/txt.md"];

// Build filePaths dynamically
async function buildFilePaths(): Promise<string[]> {
  const tagsFiles = await getTagsFiles();
  return ["1.0.md", "other-recommendations.md", ...tagsFiles2];
}

// Build page map dynamically
async function buildPageMap() {
  const filePaths = await buildFilePaths();

  const { mdxPages, pageMap: _pageMap } = convertToPageMap({
    filePaths,
    basePath: "docs/podcast-namespace",
  });

  // `mergeMetaWithPageMap` is used to change sidebar order and title
  const eslintPageMap = mergeMetaWithPageMap(_pageMap[0]!, {
    // "1.0": "Overview",
    // tags: {
    //   items: {
    //     txt: "TXT",
    //   },
    // },
  });
  console.dir(eslintPageMap, { depth: null });

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

const { wrapper: Wrapper, ...components } = getMDXComponents({
  $Tabs: Tabs,
  Callout,
});

type PageProps = Readonly<{
  params: Promise<{
    slug?: string[];
  }>;
}>;

export default async function Page(props: PageProps) {
  const params = await props.params;
  const route = params.slug?.join("/") ?? "";
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

  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent />
    </Wrapper>
  );
}

export async function generateStaticParams() {
  const { mdxPages } = await getPageData();
  const params = Object.keys(mdxPages).map((route) => ({
    slug: route.split("/"),
  }));

  return params;
}

// Export pageMap for use in layout
export async function getPageMap() {
  const { pageMap } = await getPageData();
  return pageMap;
}
