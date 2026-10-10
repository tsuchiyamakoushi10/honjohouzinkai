"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";

/** スマホ用：画面下に常時固定する「電話で相談／入会のご案内」 */
export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky-cta${visible ? " is-visible" : ""}`}>
      <a href={site.telHref}>
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" />
        </svg>
        電話で相談
      </a>
      <Link href="/join">入会のご案内 →</Link>
    </div>
  );
}
