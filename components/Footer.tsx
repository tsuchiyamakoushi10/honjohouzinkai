import Link from "next/link";
import { footerNav, nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="logo">
              <span className="logo-mark" aria-hidden="true">法</span>
              <span className="logo-text">
                <small>公益社団法人</small>
                <strong>本庄法人会</strong>
              </span>
            </Link>
            <address>
              事務局　〒{site.postal} {site.address}
              <br />
              TEL <a href={site.telHref}>{site.tel}</a>　FAX {site.fax}
            </address>
          </div>
          <div>
            <h3>MENU</h3>
            <ul>
              <li>
                <Link href="/">ホーム</Link>
              </li>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>INFORMATION</h3>
            <ul>
              {footerNav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copyright">© 公益社団法人 本庄法人会 All Rights Reserved.</p>
      </div>
    </footer>
  );
}
