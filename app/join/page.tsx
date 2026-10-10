import type { Metadata } from "next";
import Link from "next/link";
import JoinCta from "@/components/JoinCta";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SideInfo from "@/components/SideInfo";
import { about, fees, forms, merits, site, steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "入会案内",
  description: "本庄法人会の入会案内。入会のメリット、年会費（6,000円〜）、会費の納入方法、中途入会の会費、入会申込書のダウンロード。",
  alternates: { canonical: "/join" },
};

function FeeTable({ rows, head }: { rows: { range: string; fee: string }[]; head: string }) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">{head}</th>
            <th scope="col" className="num">会費金額</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.range}>
              <td>{r.range}</td>
              <td className="num">{r.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function JoinPage() {
  return (
    <div className="page-body">
      <PageHero en="JOIN" title="入会案内" lead="企業規模、業種を問わず、どんな企業も法人会の会員になれます。法人会への入会、それは繁栄への道を一歩前進することです。" />

      <section className="section tight">
        <div className="wrap narrow prose">
          <ul className="toc">
            <li><a href="#merit">入会のメリット</a></li>
            <li><a href="#flow">入会の流れ</a></li>
            <li><a href="#fee">年会費</a></li>
            <li><a href="#payment">納入方法</a></li>
            <li><a href="#forms">申込書</a></li>
          </ul>

          <Reveal>
            <h2 id="merit">入会のメリット</h2>
            <div className="merit-grid" style={{ marginBottom: 32 }}>
              {merits.map((m) => (
                <div className="merit" key={m.no}>
                  <span className="merit-no">{m.no}</span>
                  <h3 style={{ border: 0, padding: 0, margin: "0 0 10px" }}>{m.title}</h3>
                  <p>{m.body}</p>
                </div>
              ))}
            </div>
            <h3>メリットの樹</h3>
            <img src="/images/legacy/merit-tree.jpg" alt="" width={550} height={280} loading="lazy" style={{ margin: "16px auto 24px" }} />
            <ol className="tree-list">
              {about.meritTree.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ol>
            <p style={{ marginTop: 24 }}>
              <Link href="/welfare">会員特典・福利厚生制度の詳細 →</Link>
            </p>
          </Reveal>

          <Reveal>
            <h2 id="flow">入会の流れ</h2>
            <ol className="steps" style={{ gridTemplateColumns: "1fr" }}>
              {steps.map((s) => (
                <li className="step" key={s.no} style={{ marginLeft: 0, marginTop: -1 }}>
                  <span className="step-no">{s.no}</span>
                  <h3 style={{ border: 0, padding: 0, margin: "4px 0 6px" }}>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal>
            <h2 id="fee">年会費</h2>
            <div className="fee-hl">
              <div>
                <small>資本金500万円未満</small>
                <b>6,000円</b>
              </div>
              <div>
                <small>年度途中の入会</small>
                <b>1,000円</b>
              </div>
              <div>
                <small>正会員の系列会社（賛助）</small>
                <b>2,000円</b>
              </div>
            </div>
            <h4>1. 正会員は資本金額により次のとおりとする</h4>
            <FeeTable rows={fees.regular} head="資本金区分" />
            <h4>2. 賛助会員は次の通りとする</h4>
            <p>{fees.supportingNote}</p>
            <FeeTable rows={fees.supporting} head="区分" />
          </Reveal>

          <Reveal>
            <h2 id="payment">会費の納入方法</h2>
            <p>{fees.paymentLead}</p>
            {fees.payment.map((pm) => (
              <div className="card" key={pm.title}>
                <h4 style={{ marginTop: 0 }}>{pm.title}</h4>
                <p style={{ margin: 0 }}>{pm.body}</p>
                {pm.banks && (
                  <p className="note" style={{ margin: "12px 0 0" }}>
                    【指定金融機関】
                    <br />
                    {pm.banks}
                  </p>
                )}
              </div>
            ))}
            <h3>中途入会の会費</h3>
            <p>{fees.midYear}</p>
          </Reveal>

          <Reveal>
            <h2 id="forms">申込書</h2>
            <p>ダウンロードしてご記入のうえ、事務局（{site.address}）へご提出ください。</p>
            <ul className="dl-list">
              {forms.map((f) => (
                <li key={f.href}>
                  <a className={`dl${f.primary ? " primary" : ""}`} href={f.href} target="_blank" rel="noopener">
                    <span className="dl-icon">PDF</span>
                    <span>
                      <b>{f.label}</b>
                      <small>PDFを開く</small>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="note" style={{ marginTop: 16 }}>
              個人情報の取り扱いについては、<Link href="/privacy">個人情報保護方針</Link>をご覧下さい。
            </p>
          </Reveal>
        </div>
      </section>

      <SideInfo />
      <JoinCta title="ご不明な点は、事務局へお電話ください。" lead="書き方がわからない、資本金区分を確認したい、まずは話を聞いてみたい――どんなことでもお気軽にどうぞ。" />
    </div>
  );
}
