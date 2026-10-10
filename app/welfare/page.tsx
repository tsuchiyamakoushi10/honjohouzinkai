import type { Metadata } from "next";
import JoinCta from "@/components/JoinCta";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SideInfo from "@/components/SideInfo";
import { welfare } from "@/lib/content";

export const metadata: Metadata = {
  title: "会員特典・福利厚生制度",
  description: "経営者大型総合保障制度、がん保険制度・医療保険制度、法人会WAYSなど、本庄法人会の会員企業がご利用いただける福利厚生制度のご案内。",
  alternates: { canonical: "/welfare" },
};

function Companies({ list }: { list: { name: string; tel: string }[] }) {
  return (
    <div className="company-box">
      <span>取扱会社</span>
      {list.map((c) => (
        <a key={c.name} href={`tel:${c.tel.replace(/-/g, "")}`}>
          {c.name}
          <b>{c.tel}</b>
        </a>
      ))}
    </div>
  );
}

export default function WelfarePage() {
  const { company: c, personal: p } = welfare;
  return (
    <div className="page-body">
      <PageHero en="WELFARE" title="会員特典・福利厚生制度" lead="会員企業だけが使える保障制度で、もしもの時の会社と、働く人を守ります。" />

      <section className="section tight">
        <div className="wrap narrow prose">
          <ul className="toc">
            <li><a href="#company">企業のための保障制度</a></li>
            <li><a href="#personal">個人のための保障制度</a></li>
          </ul>

          <Reveal>
            <h2 id="company">{c.title}</h2>
            <h3>{c.sub}</h3>
            <div className="card">
              <h4 style={{ marginTop: 0, fontSize: 20 }}>{c.main.name}</h4>
              <p style={{ margin: 0 }}>{c.main.body}</p>
              <Companies list={c.main.companies} />
            </div>
          </Reveal>

          <Reveal>
            <h3>{c.needsTitle}</h3>
          </Reveal>
        </div>
        <div className="wrap" style={{ maxWidth: 1000 }}>
          <div className="plan-grid">
            {c.needs.map((n, i) => (
              <Reveal className="plan" key={n.title} delay={i * 0.05}>
                <h4>■ {n.title}</h4>
                {n.plan && <span className="plan-name">{n.plan}</span>}
                <p>{n.body}</p>
              </Reveal>
            ))}
          </div>
          <Companies list={c.needsCompanies} />
        </div>

        <div className="wrap narrow prose">
          <Reveal>
            <h2 id="personal">{p.title}</h2>
            <h3>{p.cancer.title}</h3>
            <p>{p.cancer.lead}</p>
            <div className="plan-grid">
              {p.cancer.items.map((n) => (
                <div className="plan" key={n.title}>
                  <h4>■ {n.title}</h4>
                  <p>{n.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <h3>{p.ways.title}</h3>
            <p>{p.ways.lead}</p>
            <div className="plan">
              <h4>■ {p.ways.name}</h4>
              <span className="plan-name">{p.ways.catch}</span>
              <p>{p.ways.note}</p>
            </div>
            <Companies list={p.companies} />
          </Reveal>
        </div>
      </section>

      <SideInfo />
      <JoinCta title="制度のご利用は、入会後すぐに。" lead="福利厚生制度は法人会の会員企業のための制度です。詳しい内容は各取扱会社、入会については事務局へお問い合わせください。" />
    </div>
  );
}
