/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITEMAP_BASE_URL,
  generateRobotsTxt: true, // (optional)
  exclude: ["/server-sitemap-index.xml", "/server-sitemap.xml"], // <= exclude here
  // robotsTxtOptions: {
  //   additionalSitemaps: [
  //     `${process.env.SITEMAP_BASE_URL}/server-sitemap-index.xml`,
  //     `${process.env.SITEMAP_BASE_URL}/server-sitemap.xml`,
  //   ],
  // },
};
