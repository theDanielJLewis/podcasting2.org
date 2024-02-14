// app/server-sitemap-index.xml/route.ts
import { getServerSideSitemapIndex } from "next-sitemap";

export async function GET(request: Request) {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  return getServerSideSitemapIndex([
    `${process.env.SITEMAP_BASE_URL}/server-sitemap.xml`,
  ]);
}
