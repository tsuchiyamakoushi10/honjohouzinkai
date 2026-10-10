import type { Metadata } from "next";
import Banners from "@/components/Banners";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { links } from "@/lib/content";

export const metadata: Metadata = {
  title: "リンク集",
  description: "国税庁、e-Tax、全国法人会総連合、埼玉県法人会連合会ほか、本庄法人会の関連リンク集。",
  alternates: { canonical: "/links" },
};

export default function LinksPage() {
  return (
    <div className="page-body">
      <PageHero en="LINKS" title="リンク集" lead="↗ のマークがついているリンクは、リンク先が別ウィンドウで表示されます。" />
      <section className="section tight">
        <div className="wrap">
          <Reveal className="prose">
            <h2>関連団体・提携会社</h2>
            <ul className="banner-grid">
              {links.map((l) => (
                <li key={l.href}>
                  <a className="banner" href={l.href} target="_blank" rel="noopener">
                    <span>
                      {l.label}
                      <span className="ext" aria-label="（別ウィンドウ）">↗</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="prose">
            <h2 id="banners" style={{ marginTop: 64 }}>国税・関連情報</h2>
            <Banners />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
