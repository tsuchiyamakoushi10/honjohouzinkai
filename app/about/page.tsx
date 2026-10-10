import type { Metadata } from "next";
import JoinCta from "@/components/JoinCta";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SideInfo from "@/components/SideInfo";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "法人会とは",
  description: "正しい税知識と経営の力を養う「良き経営者の団体」それが法人会です。本庄法人会の各支部所在地と会員の加入状況をご紹介します。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const max = Math.max(...about.membership.at(-1)!.counts);
  const min = Math.min(...about.membership.at(-1)!.counts);
  return (
    <div className="page-body">
      <PageHero en="ABOUT" title="法人会とは" lead="本庄市・児玉郡（美里町・神川町・上里町）の法人で組織する、税と経営を学ぶ経営者の団体です。" />

      <section className="section tight">
        <div className="wrap narrow prose">
          <Reveal>
            <h2>{about.catch}</h2>
            <ul className="check-list">
              {about.wishes.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
            {about.paragraphs.map((p) => (
              <p className="lead" key={p}>
                {p}
              </p>
            ))}
            <p className="note">{about.note}</p>
          </Reveal>

          <Reveal>
            <h2 id="merit-tree">法人会 メリットの樹</h2>
            <p>全国法人会総連合を幹に、会員の皆さまに10の実がなります。</p>
            <img src="/images/legacy/merit-tree.jpg" alt="" width={550} height={280} loading="lazy" style={{ margin: "16px auto 24px" }} />
            <ol className="tree-list">
              {about.meritTree.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ol>
          </Reveal>

          <Reveal>
            <h2 id="offices">公益社団法人 本庄法人会各支部並びに本会事務局所在地</h2>
          </Reveal>
        </div>
        <div className="wrap">
          <div className="office-grid">
            {about.offices.map((o, i) => (
              <Reveal key={o.name} className={`office${i === 0 ? " main" : ""}`} delay={i * 0.05}>
                <h4>{o.name}</h4>
                <p>
                  {o.address}
                  <br />
                  {o.building}
                </p>
                <a href={`tel:${o.tel.replace(/-/g, "")}`}>TEL {o.tel}</a>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="wrap narrow prose">
          <Reveal>
            <h2 id="members">会員の加入状況（過去5年間）</h2>
            <div className="bars" aria-hidden="true">
              {about.membership.at(-1)!.counts.map((c, i) => (
                <div className={`bar${i === 4 ? " now" : ""}`} key={i}>
                  <span>{c}社</span>
                  <i style={{ height: `${40 + ((c - min) / (max - min)) * 55}%` }} />
                </div>
              ))}
            </div>
            <div className="bars-labels" aria-hidden="true">
              {about.membershipYears.map((y) => (
                <span key={y}>{y.replace("3月末", "")}</span>
              ))}
            </div>
            <p className="table-scroll-hint">← 表は横にスクロールできます →</p>
            <div className="table-wrap">
              <table className="table">
                <caption className="sr-only">会員の加入状況（過去5年間）</caption>
                <thead>
                  <tr>
                    <th scope="col">支部名</th>
                    {about.membershipYears.map((y) => (
                      <th scope="col" key={y} className="num">
                        {y}
                      </th>
                    ))}
                    <th scope="col" className="num">
                      期中増減
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {about.membership.map((r) => (
                    <tr key={r.branch} className={r.branch === "合計" ? "total" : undefined}>
                      <th scope="row">{r.branch}</th>
                      {r.counts.map((c, i) => (
                        <td className="num" key={i}>
                          {c}社
                        </td>
                      ))}
                      <td className="num">{r.diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <SideInfo />
      <JoinCta />
    </div>
  );
}
