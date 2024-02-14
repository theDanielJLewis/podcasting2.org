// app/server-sitemap.xml/route.ts
import { getServerSideSitemap } from "next-sitemap";
import { podcastNamespaceTags } from "@/data/podcastNamespaceTags";

export async function GET(request: Request) {
  const baseUrl = process.env.SITEMAP_BASE_URL!;
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  const tags = podcastNamespaceTags.map((tag) => ({
    loc: `${baseUrl}/podcast-namespace/tags/${tag.slug}`,
    lastmod: new Date().toISOString(),
    // changefreq
    // priority
  }));

  return getServerSideSitemap([...tags]);
}
