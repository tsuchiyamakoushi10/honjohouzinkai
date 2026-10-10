import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Shippori_Mincho_B1 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import { site } from "@/lib/content";
import "./globals.css";

const shippori = Shippori_Mincho_B1({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-shippori",
  preload: false,
});

const noto = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}｜埼玉県本庄市・児玉郡の経営者の団体`,
    template: `%s｜${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: site.name,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#1f3352",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  telephone: "+81-495-21-1065",
  faxNumber: "+81-495-22-7898",
  address: {
    "@type": "PostalAddress",
    postalCode: site.postal,
    addressRegion: "埼玉県",
    addressLocality: "本庄市",
    streetAddress: "朝日町三丁目1番35号 本庄商工会議所会館2階",
    addressCountry: "JP",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  areaServed: ["本庄市", "美里町", "神川町", "上里町"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${shippori.variable} ${noto.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a href="#main" className="skip">
          本文へスキップ
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCta />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
