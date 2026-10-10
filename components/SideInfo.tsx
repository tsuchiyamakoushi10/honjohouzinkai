import { hojinNow, sidePhotos } from "@/lib/content";
import Reveal from "./Reveal";

/** 旧サイトのサイドバー（爆笑会の写真・ほうじんナウ）を各ページ下部に */
export default function SideInfo({ id = "hojinnow" }: { id?: string }) {
  const [latest, ...rest] = hojinNow;
  return (
    <section id={id} className="section tight bg-deep" aria-labelledby={`${id}-title`}>
      <div className="wrap side-grid">
        <Reveal>
          <span className="eyebrow">PHOTO</span>
          <h2 style={{ fontSize: 24, margin: "8px 0 20px" }}>活動の様子</h2>
          <div className="side-photos">
            {sidePhotos.images.map((src, i) => (
              <img key={src} src={src} alt={`${sidePhotos.caption}の様子 ${i + 1}`} width={640} height={480} loading="lazy" />
            ))}
          </div>
          <p className="side-caption">{sidePhotos.caption}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="eyebrow">NEWSLETTER</span>
          <h2 id={`${id}-title`} style={{ fontSize: 24, margin: "8px 0 20px" }}>
            会報誌「ほうじんナウ」
          </h2>
          <a className="hojinnow-latest" href={latest.href} target="_blank" rel="noopener">
            <span className="hojinnow-cover" aria-hidden="true">
              <small>ほうじんナウ</small>
              <b>{latest.no}</b>
              <small>号</small>
            </span>
            <span>
              <span className="tag tag-pdf">最新号</span>
              <b style={{ display: "block", marginTop: 6, fontSize: 18 }}>ほうじんナウ {latest.no}号</b>
              <span className="note">PDF / {latest.size}</span>
            </span>
          </a>
          <p className="note" style={{ marginBottom: 10 }}>
            バックナンバー（PDF）
          </p>
          <ul className="hojinnow-list">
            {rest.map((h) => (
              <li key={h.no}>
                <a href={h.href} target="_blank" rel="noopener" title={`ほうじんナウ ${h.no}号 [PDF/${h.size}]`}>
                  {h.no}号
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
