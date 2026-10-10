import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "個人情報保護方針",
  description: "公益社団法人 本庄法人会の個人情報保護方針、個人番号及び特定個人情報保護に関する基本方針。",
  alternates: { canonical: "/privacy" },
};

// 現行サイト /privacy.html の原文をそのまま掲載
export default function PrivacyPage() {
  return (
    <div className="page-body">
      <PageHero en="PRIVACY POLICY" title="個人情報保護方針" />
      <section className="section tight">
        <div className="wrap narrow prose">
          <p>
            当会は、会員企業に係る「個人情報」を、研修会・諸会議等の開催通知、機関誌等の送付、並びに福利厚生制度等のご案内など、本会の事業活動のために利用し、それ以外の目的で利用することは一切ございません。
            <br />
            また、お届けいただいた個人情報の開示、訂正等のお問い合わせは下記窓口まで、お願い致します。
          </p>
          <p style={{ textAlign: "right" }}>公益社団法人 本庄法人会 個人情報取扱係</p>

          <h2>個人番号及び特定個人情報保護に関する基本方針</h2>
          <p>
            公益社団法人本庄法人会（以下「本会」という。）は、本会で扱う個人番号その他特定個人情報（以下「特定個人情報等」という。）の安全かつ適正な取扱いの確保について、以下の基本方針に従い、特定個人情報等の保護に努めます。
          </p>
          <h3>1. 関係法令・ガイドライン等の遵守</h3>
          <p>
            本会は、「行政手続における特定の個人を識別するための番号の利用等に関する法律」、「個人情報の保護に関する法律」、及び「特定個人情報の適正な取扱いに関するガイドライン（事業者編）」、その他関連法令並びに関連規程を遵守します。
          </p>
          <h3>2. 安全管理措置に関する事項</h3>
          <p>
            本会は、特定個人情報等の漏えい、滅失又は毀損を防止し、特定個人情報等を適切に管理するために、社内規程等の整備を行い、併せて役職員に対する研修・教育を実施します。さらに漏えい等の事故を防止するための物理的・技術的な対策等の安全管理措置を講じます。
          </p>
          <h3>3. 質問・苦情等への対応</h3>
          <p>本会は、下記を対応窓口とし、特定個人情報等に関するご質問や苦情等に対して、適切かつ迅速に対応します。</p>
          <div className="card">
            特定個人情報等の保護に関するお問合せ窓口
            <br />
            公益社団法人本庄法人会
            <br />
            電話番号：<a href={site.telHref}>{site.tel}</a>
          </div>
          <p style={{ textAlign: "right", marginTop: 24 }}>公益社団法人本庄法人会</p>
        </div>
      </section>
    </div>
  );
}
