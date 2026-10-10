"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const isTop = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ページ移動でメニューを閉じる
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const cls = ["header", isTop && !scrolled ? "is-clear" : "", open ? "menu-open" : ""].filter(Boolean).join(" ");

  return (
    <header className={cls}>
      <div className="wrap header-inner">
        <Link href="/" className="logo" aria-label={`${site.name} トップへ`}>
          <span className="logo-mark" aria-hidden="true">法</span>
          <span className="logo-text">
            <small>公益社団法人</small>
            <strong>本庄法人会</strong>
          </span>
        </Link>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="gnav"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="gnav" className="gnav" aria-label="メインメニュー">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={pathname.startsWith(n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="header-tel" aria-current={pathname === "/contact" ? "page" : undefined}>
            お問い合わせ
          </Link>
          <Link href="/join" className="btn btn-shu">
            入会のご案内
          </Link>
        </nav>
      </div>
    </header>
  );
}
