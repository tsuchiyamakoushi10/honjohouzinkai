import Link from "next/link";
import Banners from "@/components/Banners";
import JoinCta from "@/components/JoinCta";
import NewsList from "@/components/NewsList";
import Reveal from "@/components/Reveal";
import SideInfo from "@/components/SideInfo";
import { about, activityCards, awards, hero, mall, merits, site, stats, steps } from "@/lib/content";
import { news } from "@/lib/news";

export default function Home() {
  return (
    <>
      {/* 1. HERO */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="noren-intro" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-bg" aria-hidden="true">
          <img src="/images/hero.webp" alt="" width={1920} height={1080} fetchPriority="high" />
        </div>
        <div className="kanban" aria-hidden="true">
          <span>中山道</span>
          <span>本庄宿</span>
        </div>
        <div className="wrap hero-inner">
          <p className="hero-badge">
            公益社団法人 本庄法人会 <b>会員募集中</b>
          </p>
          <h1 id="hero-title" className="hero-catch">
            {hero.lines.map((l, i) => (
              <span className="line" key={l}>
                <span>{i === 1 ? <em>{l}</em> : l}</span>
              </span>
            ))}
          </h1>
          <p className="hero-lead">{hero.lead}</p>
          <div className="hero-actions btn-row">
            <Link href="/join" className="btn btn-shu">
              入会のご案内 <span className="arrow">→</span>
            </Link>
            <Link href="/about" className="btn btn-ghost-light">
              法人会とは
            </Link>
          </div>
        </div>
        <span className="hero-scroll">SCROLL</span>
      </section>

      {/* 2. 数字 */}
      <section className="stats" aria-label="数字で見る本庄法人会">
        <div className="wrap">
          <Reveal className="stats-grid">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-label">{s.label}</div>
                <div className="stat-value">
                  <b>{s.value}</b>
                  <span>{s.unit}</span>
                </div>
                <div className="stat-note">{s.note}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* お知らせ（メインビジュアルの下に常時3件） */}
      <section className="top-news" aria-labelledby="news-title">
        <div className="wrap">
          <Reveal className="top-news-inner">
            <div className="top-news-head">
              <span className="eyebrow">NEWS</span>
              <h2 id="news-title">お知らせ</h2>
              <Link href="/news" className="top-news-more">
                一覧を見る →
              </Link>
            </div>
            <NewsList items={news.slice(0, 3)} />
          </Reveal>
        </div>
      </section>

      {/* 3. 法人会とは */}
      <section className="section" aria-labelledby="about-title">
        <div className="wrap intro-grid">
          <Reveal>
            <span className="eyebrow">ABOUT</span>
            <h2 id="about-title" style={{ fontSize: "clamp(26px,4vw,40px)", margin: "10px 0 28px" }}>
              法人会とは
            </h2>
            <p className="intro-quote">
              正しい税知識と経営の力を養う
              <br />
              「良き経営者の団体」
              <small>{about.paragraphs[0]}</small>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="check-list">
              {about.wishes.map((w) => (
                <li key={w}>{w}</li>
              ))}
              <li>同じ地域の経営者と、顔の見える関係をつくりたい・・・・・。</li>
            </ul>
            <p>{about.recruit}</p>
            <Link href="/about" className="btn btn-ghost">
              法人会について詳しく <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4. メリット */}
      <section className="section bg-white" aria-labelledby="merit-title">
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow">MERIT</span>
            <h2 id="merit-title">入会すると、できること</h2>
            <p>年会費6,000円から。研修・保障・交流・情報の4つの面から、会員企業の経営を支えます。</p>
          </Reveal>
          <div className="merit-grid">
            {merits.map((m, i) => (
              <Reveal className="merit" key={m.no} delay={i * 0.08}>
                <span className="merit-no">{m.no}</span>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 会員特典 商店街 */}
      <section className="section seigaiha" aria-labelledby="mall-title" style={{ color: "#e8e3d8" }}>
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow" style={{ color: "#e9b48a" }}>
              MEMBERS&apos; STREET
            </span>
            <h2 id="mall-title" style={{ color: "#fff" }}>
              会員特典 商店街
            </h2>
            <p style={{ color: "rgba(255,255,255,.78)" }}>
              中山道最大の宿場町・本庄宿のように、会員の皆さまが使える特典が軒を連ねています。暖簾をくぐって、のぞいてみてください。
            </p>
          </Reveal>
          <div className="mall">
            {mall.map((st, si) => (
              <Reveal key={st.street} className={`street street-${si + 1}`}>
                <div className="street-head">
                  <span className="street-sign">
                    <small>{st.kana}どおり</small>
                    {st.street}
                  </span>
                  <span className="street-desc">{st.desc}</span>
                </div>
                <div className="street-row">
                  {st.shops.map((sh) => (
                    <Link href={sh.href} className="shop" key={sh.name}>
                      <span className="shop-noren" aria-hidden="true">
                        <span />
                        <span>{sh.noren}</span>
                        <span />
                      </span>
                      <div className="shop-body">
                        <h4>{sh.name}</h4>
                        <p>{sh.body}</p>
                        <span className="more">のぞいてみる →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 活動実績 */}
      <section className="section" aria-labelledby="act-title">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">ACTIVITY</span>
            <h2 id="act-title">活動実績（令和6年度）</h2>
            <p>研修会・講演会の多くは一般公開。地域の皆さまにもご参加いただける公益事業を行っています。</p>
          </Reveal>
          <div className="act-grid">
            {activityCards.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <Link href={a.href} className="act-card">
                  <div className="act-photo seigaiha">
                    <span className="ph">{a.title}</span>
                    <span className="stat-chip">{a.stat}</span>
                  </div>
                  <div className="act-body">
                    <h3>{a.title}</h3>
                    <p>{a.body}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="awards">
            {awards.map((a) => (
              <Reveal className="award" key={a}>
                <span className="award-icon" aria-hidden="true">
                  賞
                </span>
                <p>{a}</p>
              </Reveal>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <Link href="/activity" className="btn btn-ghost">
              活動案内を詳しく <span className="arrow">→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* 7. 入会までの流れ */}
      <section className="section bg-white" aria-labelledby="flow-title">
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow">FLOW</span>
            <h2 id="flow-title">入会までの流れ</h2>
          </Reveal>
          <Reveal>
            <ol className="steps">
              {steps.map((s) => (
                <li className="step" key={s.no}>
                  <span className="step-no">{s.no}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal>
            <dl className="fee-box">
              <div>
                <dt>年会費（正会員）</dt>
                <dd>
                  6,000円〜<small>資本金500万円未満</small>
                </dd>
              </div>
              <div>
                <dt>年度の途中で入会した場合</dt>
                <dd>
                  1,000円<small>その年度は一律</small>
                </dd>
              </div>
              <div className="fee-cta">
                <Link href="/join" className="btn btn-shu">
                  会費・申込書 <span className="arrow">→</span>
                </Link>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 9. 写真・会報誌 */}
      <SideInfo />

      {/* 10. 事務局アクセス */}
      <section className="section" aria-labelledby="access-title">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">ACCESS</span>
            <h2 id="access-title">事務局のご案内</h2>
          </Reveal>
          <div className="access-grid">
            <Reveal className="access-info">
              <h3 style={{ fontSize: 22 }}>{site.name}</h3>
              <dl>
                <dt>所在地</dt>
                <dd>
                  〒{site.postal}
                  <br />
                  {site.address}
                </dd>
                <dt>電話</dt>
                <dd>
                  <a className="tel-big" href={site.telHref}>
                    {site.tel}
                  </a>
                </dd>
                <dt>FAX</dt>
                <dd>{site.fax}</dd>
              </dl>
              <p style={{ marginTop: 24 }}>
                <a href={site.mapLink} target="_blank" rel="noopener" className="btn btn-ghost">
                  Googleマップで開く <span className="arrow">↗</span>
                </a>
              </p>
            </Reveal>
            <Reveal className="map" delay={0.1}>
              <iframe src={site.mapEmbed} title="本庄法人会 事務局の地図" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 11. 国税・関連情報 */}
      <section className="section tight bg-white" aria-labelledby="banner-title">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">LINKS</span>
            <h2 id="banner-title">国税・関連情報</h2>
          </Reveal>
          <Reveal>
            <Banners />
          </Reveal>
        </div>
      </section>

      {/* 12. CTA */}
      <JoinCta />
    </>
  );
}
