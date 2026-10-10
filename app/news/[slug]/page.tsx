import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, news } from "@/lib/news";

export function generateStaticParams() {
  return news.filter((n) => n.slug).map((n) => ({ slug: n.slug! }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

function find(slug: string) {
  return news.find((n) => n.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const n = find((await params).slug);
  return n ? { title: n.title, alternates: { canonical: `/news/${n.slug}` } } : {};
}

export default async function NewsArticle({ params }: Props) {
  const n = find((await params).slug);
  if (!n) notFound();
  return (
    <div className="page-body">
      <section className="page-hero seigaiha">
        <div className="wrap narrow">
          <span className="eyebrow">NEWS</span>
          <h1 style={{ fontSize: "clamp(24px,4vw,36px)" }}>{n.title}</h1>
        </div>
      </section>
      <nav className="breadcrumb wrap narrow" aria-label="パンくずリスト">
        <ol>
          <li>
            <Link href="/">ホーム</Link>
          </li>
          <li>
            <Link href="/news">お知らせ</Link>
          </li>
          <li aria-current="page">{n.title}</li>
        </ol>
      </nav>
      <article className="section tight">
        <div className="wrap narrow prose">
          <p className="article-meta">
            投稿日：<time dateTime={n.date}>{formatDate(n.date)}</time>
          </p>
          {n.body?.map((p) => (
            <p className="lead" key={p}>
              {p}
            </p>
          ))}
          {n.buttons && (
            <div className="btn-row">
              {n.buttons.map((b, i) => (
                <a key={b.href} href={b.href} target="_blank" rel="noopener" className={`btn ${i === 0 ? "btn-shu" : "btn-ghost"}`}>
                  {b.label} <span className="arrow">↗</span>
                </a>
              ))}
            </div>
          )}
          {n.images && (
            <div className="article-figs">
              {n.images.map((im) => (
                <figure key={im.src} style={{ maxWidth: im.caption ? 200 : 760 }}>
                  <img src={im.src} alt={im.alt} loading="lazy" />
                  {im.caption && <figcaption>{im.caption}</figcaption>}
                </figure>
              ))}
            </div>
          )}
          <p style={{ marginTop: 48 }}>
            <Link href="/news" className="btn btn-ghost">
              ← お知らせ一覧へ
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
}
