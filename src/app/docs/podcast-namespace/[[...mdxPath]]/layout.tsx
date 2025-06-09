import type { Metadata } from "next";
import { Footer } from "@/components/ui/Footer";
// import { Header } from "@/components/ui/Header";
import { Layout } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import { getPageMap as getTestPageMap } from "./page";
import { AppBanner } from "@/components/AppBanner";
import { AppNavBar } from "@/components/AppNavBar";

// Helper function to filter out podcast-namespace from base page map
function filterPodcastNamespaceFromPageMap(pageMap: any[]): any[] {
  return pageMap.map((item) => {
    if (item.name === "docs" && item.children) {
      return {
        ...item,
        children: item.children.filter(
          (child: any) => child.name !== "podcast-namespace",
        ),
      };
    }
    return item;
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Build pageMap asynchronously
  const [basePageMap, testPageMap] = await Promise.all([
    getPageMap(),
    getTestPageMap(),
  ]);

  // Filter out podcast-namespace from base page map to avoid duplication
  const filteredBasePageMap = filterPodcastNamespaceFromPageMap(basePageMap);
  const pageMap = [...filteredBasePageMap, testPageMap];

  return (
    <Layout
      banner={<AppBanner />}
      navbar={<AppNavBar />}
      pageMap={pageMap}
      docsRepositoryBase="https://github.com/Podcastindex-org/podcast-namespace/tree/main/docs"
      footer={<Footer />}
      // ... Your additional layout options
    >
      {children}
    </Layout>
  );
}
