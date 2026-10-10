import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SideInfo from "@/components/SideInfo";
import { about, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "公益社団法人 本庄法人会 事務局（埼玉県本庄市朝日町三丁目1番35号 本庄商工会議所会館2階）TEL 0495-21-1065 FAX 0495-22-7898",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="page-body">
      <PageHero en="CONTACT" title="お問い合わせ" lead="入会のご相談、研修会・講演会へのお申し込み、福利厚生制度のことなど、お気軽に事務局までお電話ください。" />
      <section className="section tight">
        <div className="wrap">
          <div className="access-grid">
            <Reveal className="access-info">
              <h2 style={{ fontSize: 24 }}>{site.name}</h2>
              <dl>
                <dt>電話</dt>
                <dd>
                  <a className="tel-big" href={site.telHref}>
                    {site.tel}
                  </a>
                </dd>
                <dt>FAX</dt>
                <dd>{site.fax}</dd>
                <dt>住所</dt>
                <dd>
                  〒{site.postal}
                  <br />
                  {site.address}
                </dd>
              </dl>
              <div className="btn-row" style={{ marginTop: 28 }}>
                <a href={site.telHref} className="btn btn-shu">
                  電話をかける
                </a>
                <a href={site.mapLink} target="_blank" rel="noopener" className="btn btn-ghost">
                  Googleマップ ↗
                </a>
              </div>
            </Reveal>
            <Reveal className="map" delay={0.1}>
              <iframe src={site.mapEmbed} title="本庄法人会 事務局の地図" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </Reveal>
          </div>
        </div>
        <div className="wrap narrow prose" style={{ marginTop: 64 }}>
          <Reveal>
            <h2>各支部の連絡先</h2>
          </Reveal>
        </div>
        <div className="wrap">
          <div className="office-grid">
            {about.offices.slice(1).map((o) => (
              <Reveal key={o.name} className="office">
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
          <p className="note" style={{ marginTop: 24 }}>
            お預かりした個人情報は<Link href="/privacy">個人情報保護方針</Link>に基づき適切に取り扱います。
          </p>
        </div>
      </section>
      <SideInfo />
    </div>
  );
}
