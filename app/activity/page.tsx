import type { Metadata } from "next";
import JoinCta from "@/components/JoinCta";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SideInfo from "@/components/SideInfo";
import { activity as a, awards } from "@/lib/content";

export const metadata: Metadata = {
  title: "活動案内",
  description: "本庄法人会の令和6年度の活動実績。研修事業・社会貢献事業、租税教室、支部活動、会報誌「ほうじんナウ」をご紹介します。",
  alternates: { canonical: "/activity" },
};

const Hint = () => <p className="table-scroll-hint">← 表は横にスクロールできます →</p>;

export default function ActivityPage() {
  const [r1, r2, r3, r4, r5, r6, r7] = a.reports;
  return (
    <div className="page-body">
      <PageHero en="ACTIVITY" title="活動案内" lead={`${a.year}の活動実績をご報告します。表１の研修会は一般公開講座です。`} />

      <section className="section tight">
        <div className="wrap narrow prose">
          <ul className="toc">
            <li><a href="#overview">概況</a></li>
            <li><a href="#training">研修事業</a></li>
            <li><a href="#members">会員加入状況</a></li>
            <li><a href="#report">活動報告</a></li>
            <li><a href="#tax-school">租税教室</a></li>
            <li><a href="#branch">支部活動</a></li>
            <li><a href="#hojinnow">会報誌</a></li>
          </ul>

          <Reveal>
            <h2 id="overview">概況</h2>
            <p className="lead">{a.overview}</p>
            <div className="awards" style={{ marginTop: 24 }}>
              {awards.map((t) => (
                <div className="award" key={t}>
                  <span className="award-icon" aria-hidden="true">賞</span>
                  <p>{t}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h3 id="training">研修事業・社会貢献事業（表１）</h3>
            <Hint />
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">区分</th>
                    <th scope="col">事業名</th>
                    <th scope="col" className="num">回数</th>
                    <th scope="col" className="num">参加者数</th>
                  </tr>
                </thead>
                <tbody>
                  {a.table1.map((r) => (
                    <tr key={r.name}>
                      <td className="nowrap">{r.kind && <span className={`tag${r.kind === "新規" ? " tag-pdf" : ""}`}>{r.kind}</span>}</td>
                      <td>{r.name}</td>
                      <td className="num">{r.times}</td>
                      <td className="num">{r.people}</td>
                    </tr>
                  ))}
                  <tr className="total">
                    <td />
                    <td>合計</td>
                    <td className="num">{a.table1Total.times}</td>
                    <td className="num">{a.table1Total.people}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="note">{a.table1Note}</p>
          </Reveal>

          <Reveal>
            <h3 id="members">会員加入状況（表２）</h3>
            <Hint />
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" rowSpan={2}>支部名</th>
                    <th scope="col" rowSpan={2} className="num">5年3月末</th>
                    <th scope="colgroup" colSpan={3} style={{ textAlign: "center" }}>6年3月末</th>
                  </tr>
                  <tr>
                    <th scope="col" className="num">法人会員</th>
                    <th scope="col" className="num">個人会員</th>
                    <th scope="col" className="num">合計</th>
                  </tr>
                </thead>
                <tbody>
                  {a.table2.map((r) => (
                    <tr key={r.branch} className={r.branch === "合計" ? "total" : undefined}>
                      <th scope="row">{r.branch}</th>
                      <td className="num">{r.prev}</td>
                      <td className="num">{r.corp}</td>
                      <td className="num">{r.indiv}</td>
                      <td className="num">{r.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <div id="report">
            {[r1, r2, r3, r4, r5, r6].map((r) => (
              <Reveal key={r.title}>
                <h2>{r.title}</h2>
                {r.body.split("\n").map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2 id="tax-school">{r7.title}</h2>
            <p>{r7.body}</p>
            <h3>租税教室開催日程（小学校・中学校）</h3>
            <Hint />
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">開催日</th>
                    <th scope="col">場所</th>
                    <th scope="col">講師</th>
                    <th scope="col" className="num">生徒数</th>
                  </tr>
                </thead>
                <tbody>
                  {a.taxSchool.map((r) => (
                    <tr key={r.date}>
                      <td className="nowrap">{r.date}</td>
                      <td>{r.place}</td>
                      <td>{r.teacher}</td>
                      <td className="num">{r.count}</td>
                    </tr>
                  ))}
                  <tr className="total">
                    <td>合計</td>
                    <td />
                    <td />
                    <td className="num">{a.taxSchoolTotal}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="note">{a.taxSchoolNote}</p>

            <h3>租税教室開催日程（商工祭：紙芝居）</h3>
            <Hint />
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">開催日</th>
                    <th scope="col">場所</th>
                    <th scope="col">講師</th>
                    <th scope="col" className="num">観客数</th>
                  </tr>
                </thead>
                <tbody>
                  {a.kamishibai.map((r) => (
                    <tr key={r.date}>
                      <td className="nowrap">{r.date}</td>
                      <td>{r.place}</td>
                      <td>{r.teacher}</td>
                      <td className="num">{r.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal>
            <h2 id="branch">{a.branchTitle}</h2>
            <p>{a.branchLead}</p>
          </Reveal>
        </div>
        <div className="wrap">
          <Reveal>
            <Hint />
            <div className="table-wrap">
              <table className="table" style={{ minWidth: 820 }}>
                <thead>
                  <tr>
                    <th scope="col">開催日</th>
                    <th scope="col">内容</th>
                    <th scope="col">会場</th>
                    <th scope="col">詳細</th>
                    <th scope="col" className="num">参加人数</th>
                  </tr>
                </thead>
                <tbody>
                  {a.branch.map((r) => (
                    <tr key={r.date + r.what}>
                      <td className="nowrap">{r.date}</td>
                      <td>{r.what}</td>
                      <td className="pre">{r.place}</td>
                      <td className="pre" style={{ fontSize: 14 }}>{r.detail}</td>
                      <td className="num">{r.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <SideInfo />
      <JoinCta title="研修会は、会員でなくても参加できます。" lead="表１の研修会は一般公開講座です。まずは研修会に参加してみて、法人会の雰囲気を知ってください。お申し込み・お問い合わせは事務局まで。" />
    </div>
  );
}
