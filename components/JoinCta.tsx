import Link from "next/link";
import { site } from "@/lib/content";

export default function JoinCta({
  title = "まずは、お気軽にお電話ください。",
  lead = "入会のご相談、研修会への参加、福利厚生制度のことなど、事務局がご案内します。企業規模・業種を問わず、どんな企業も会員になれます。",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="section cta seigaiha" aria-labelledby="cta-title">
      <div className="wrap">
        <span className="eyebrow" style={{ color: "#e9b48a" }}>
          JOIN US
        </span>
        <h2 id="cta-title" style={{ marginTop: 10 }}>
          {title}
        </h2>
        <p>{lead}</p>
        <div className="cta-actions">
          <a className="cta-tel" href={site.telHref}>
            <small>事務局 TEL</small>
            <b>{site.tel}</b>
          </a>
          <Link href="/join" className="btn btn-shu">
            入会のご案内を見る <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
