import type { NextConfig } from "next";
import { news } from "./lib/news";

// 旧サイト（WordPress）のURLから新URLへの301リダイレクト
const pages = ["about", "activity", "welfare", "join", "disclosure", "contact", "privacy"];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...pages.map((p) => ({ source: `/${p}.html`, destination: `/${p}`, permanent: true })),
      { source: "/link.html", destination: "/links", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/news/page/:n", destination: "/news", permanent: true },
      // 記事ページがあったお知らせは個別ページへ、それ以外（PDFのみ）は一覧へ
      ...news
        .filter((n) => n.slug)
        .map((n) => ({ source: `/news/${n.slug}.html`, destination: `/news/${n.slug}`, permanent: true })),
      { source: "/news/:slug.html", destination: "/news", permanent: true },
      { source: "/feed/:path*", destination: "/news", permanent: true },
    ];
  },
};

export default nextConfig;
