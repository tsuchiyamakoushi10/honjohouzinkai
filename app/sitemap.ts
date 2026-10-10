import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { news } from "@/lib/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/activity", "/welfare", "/join", "/disclosure", "/contact", "/news", "/links", "/privacy"];
  return [
    ...pages.map((p) => ({
      url: `${site.url}${p}`,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : p === "/join" ? 0.9 : 0.7,
    })),
    ...news.filter((n) => n.slug).map((n) => ({ url: `${site.url}/news/${n.slug}`, lastModified: n.date })),
  ];
}
