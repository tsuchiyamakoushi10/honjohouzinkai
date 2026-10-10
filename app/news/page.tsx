import type { Metadata } from "next";
import NewsList from "@/components/NewsList";
import PageHero from "@/components/PageHero";
import SideInfo from "@/components/SideInfo";
import { news, newsByYear } from "@/lib/news";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "本庄法人会からのお知らせ。研修会・講演会・爆笑会などのご案内（チラシPDF）を掲載しています。",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  const years = newsByYear();
  return (
    <div className="page-body">
      <PageHero en="NEWS" title="お知らせ" lead={`研修会・講演会などのご案内です（全${news.length}件）。「PDF」はチラシが開きます。`} />
      <section className="section tight">
        <div className="wrap narrow">
          <nav aria-label="年別">
            <ul className="year-nav" style={{ listStyle: "none", padding: 0 }}>
              {years.map(([y, items]) => (
                <li key={y}>
                  <a href={`#y${y}`}>
                    {y}年（{items.length}）
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {years.map(([y, items]) => (
            <section className="news-year" key={y} id={`y${y}`} aria-labelledby={`y${y}-h`}>
              <h2 id={`y${y}-h`}>{y}年</h2>
              <NewsList items={items} />
            </section>
          ))}
        </div>
      </section>
      <SideInfo />
    </div>
  );
}
