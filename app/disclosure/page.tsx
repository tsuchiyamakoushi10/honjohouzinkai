import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SideInfo from "@/components/SideInfo";
import { disclosure } from "@/lib/content";

export const metadata: Metadata = {
  title: "情報公開",
  description: "公益社団法人 本庄法人会の定款、役員名簿、事業報告、財務諸表（貸借対照表・正味財産増減計算書・財産目録）、事業計画、収支予算書、監査報告書。",
  alternates: { canonical: "/disclosure" },
};

function Doc({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <a className="dl" href={href} target="_blank" rel="noopener">
        <span className="dl-icon">PDF</span>
        <b>{label}</b>
      </a>
    </li>
  );
}

export default function DisclosurePage() {
  return (
    <div className="page-body">
      <PageHero en="DISCLOSURE" title="情報公開" lead="公益社団法人として、定款・事業報告・財務諸表などを公開しています。" />
      <section className="section tight">
        <div className="wrap narrow prose">
          <Reveal>
            <h2>定款・事業報告・財務諸表</h2>
            <ul className="dl-list">
              {disclosure.docs.map((d) => (
                <Doc key={d.href} {...d} />
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <h3>貸借対照表 [PDF]</h3>
            <ul className="bs-grid">
              {disclosure.balanceSheets.map((d) => (
                <li key={d.href}>
                  <a href={d.href} target="_blank" rel="noopener">
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <h2>財産目録・事業計画・予算・監査</h2>
            <ul className="dl-list">
              {disclosure.docsAfter.map((d) => (
                <Doc key={d.href} {...d} />
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <SideInfo />
    </div>
  );
}
