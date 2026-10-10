import Link from "next/link";

export default function PageHero({ en, title, lead }: { en: string; title: string; lead?: string }) {
  return (
    <>
      <section className="page-hero seigaiha">
        <div className="wrap">
          <span className="eyebrow">{en}</span>
          <h1>{title}</h1>
          {lead && <p>{lead}</p>}
        </div>
      </section>
      <nav className="breadcrumb wrap" aria-label="パンくずリスト">
        <ol>
          <li>
            <Link href="/">ホーム</Link>
          </li>
          <li aria-current="page">{title}</li>
        </ol>
      </nav>
    </>
  );
}
