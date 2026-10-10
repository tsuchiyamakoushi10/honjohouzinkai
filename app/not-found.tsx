import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-body">
      <section className="wrap notfound">
        <span className="eyebrow">404</span>
        <h1>ページが見つかりません</h1>
        <p>お探しのページは移動または削除された可能性があります。</p>
        <div className="btn-row" style={{ justifyContent: "center", marginTop: 24 }}>
          <Link href="/" className="btn btn-ai">
            トップへ戻る
          </Link>
          <Link href="/news" className="btn btn-ghost">
            お知らせ一覧
          </Link>
        </div>
      </section>
    </div>
  );
}
