import Link from "next/link";
import { menuBanners, otherLinks } from "@/lib/content";

export default function Banners({ showOthers = true }: { showOthers?: boolean }) {
  return (
    <div className="banner-groups">
      {menuBanners.map((g) => (
        <div className={`banner-group grp-${g.color}`} key={g.group}>
          <h3>{g.group}</h3>
          <ul className="menu-banners">
            {g.items.map((b) => {
              const external = b.href.startsWith("http");
              const img = <img src={`/images/menu/${b.id}.webp`} alt={b.label} width={520} height={90} loading="lazy" />;
              return (
                <li key={b.id}>
                  {external ? (
                    <a className="menu-banner" href={b.href} target="_blank" rel="noopener" aria-label={`${b.label}（別ウィンドウ）`}>
                      {img}
                    </a>
                  ) : (
                    <Link className="menu-banner" href={b.href}>
                      {img}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      {showOthers && (
        <div className="banner-group">
          <h3>そのほかのリンク</h3>
          <ul className="other-links">
            {otherLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener">
                  {l.label}
                  <span className="ext" aria-label="（別ウィンドウ）">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
