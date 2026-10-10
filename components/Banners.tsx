import { banners } from "@/lib/content";

const groups = ["国税", "法人会", "地域・制度"] as const;
const groupLabel = { 国税: "国税庁からのお知らせ", 法人会: "法人会のサービス", "地域・制度": "地域・制度" };

export default function Banners() {
  return (
    <div className="banner-groups">
      {groups.map((g) => (
        <div className="banner-group" key={g}>
          <h3>{groupLabel[g]}</h3>
          <ul className="banner-grid">
            {banners
              .filter((b) => b.group === g)
              .map((b) => (
                <li key={b.href}>
                  <a className="banner" href={b.href} target="_blank" rel="noopener">
                    {b.img ? <img src={b.img} alt="" width={96} height={40} loading="lazy" /> : <span className="noimg">LINK</span>}
                    <span>
                      {b.label}
                      <span className="ext" aria-label="（別ウィンドウ）">↗</span>
                    </span>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
