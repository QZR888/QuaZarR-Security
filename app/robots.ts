import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/quote", "/free-report"],
    },
    sitemap: "https://quazarrsecurity.com/sitemap.xml",
  };
}
