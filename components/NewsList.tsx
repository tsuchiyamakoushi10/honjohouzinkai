import Link from "next/link";
import { formatDate, newsHref, type NewsItem } from "@/lib/news";

export default function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <ul className="news-list">
      {items.map((n) => {
        const href = newsHref(n);
        const isPdf = !n.slug;
        const inner = (
          <>
            <time dateTime={n.date}>{formatDate(n.date)}</time>
            <span>{isPdf ? <span className="tag tag-pdf">PDF</span> : <span className="tag">お知らせ</span>}</span>
            <span className="title">{n.title}</span>
          </>
        );
        return (
          <li key={n.date + n.title}>
            {isPdf ? (
              <a href={href} target="_blank" rel="noopener">
                {inner}
              </a>
            ) : (
              <Link href={href}>{inner}</Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
