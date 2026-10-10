// お知らせ 全51件（旧 /news/ 全6ページ分）。新しい順。
// href が PDF のものはチラシへ直接リンク。body があるものは旧サイトで記事ページがあったもの。

const UP = "https://www.honjohojinkai.jp/wp-content/uploads";

export type NewsItem = {
  date: string; // YYYY-MM-DD
  title: string;
  href?: string;
  /** 旧記事ページのスラッグ（/news/xxxx.html） */
  slug?: string;
  body?: string[];
  buttons?: { label: string; href: string }[];
  images?: { src: string; alt: string; caption?: string }[];
};

export const news: NewsItem[] = [
  { date: "2026-07-15", title: "健康講座 ９月９日　テーマ「戦国武将の健康法に学ぶ」", href: `${UP}/2026/07/20260909.pdf` },
  { date: "2026-07-15", title: "本庄垂統塾 ８月５日　テーマ「収益とキャッシュフローの管理」", href: `${UP}/2026/07/20260805.pdf` },
  { date: "2026-06-05", title: "2026年6月 インターネットセミナースタート", href: `${UP}/2026/06/internet-seminar202606.pdf` },
  {
    date: "2026-02-16",
    title: "2月26日(木)　本庄支部講演会・新春交流会",
    slug: "20260216-467",
    body: ["本庄支部講演会・新春交流会"],
    buttons: [{ label: "添付をご覧ください [PDF/168KB]", href: `${UP}/2026/02/20260226.pdf` }],
  },
  {
    date: "2025-11-10",
    title: "12月9日（火）コーチング研修会",
    slug: "20251110-457",
    buttons: [
      { label: "お申し込みフォーム", href: "https://forms.gle/Lq4aoNRESNNdBbAN8" },
      { label: "チラシPDF", href: `${UP}/2025/11/coaching.pdf` },
    ],
    images: [
      { src: "/images/news/coaching-qr.webp", alt: "コーチング研修会申込QRコード", caption: "申込QRコード" },
      { src: "/images/news/coaching.webp", alt: "コーチング研修会" },
    ],
  },
  { date: "2024-07-19", title: "10月13日(日)　林家正蔵独演会", href: `${UP}/2024/07/20241013.pdf` },
  { date: "2024-07-19", title: "8月20日・27日　本庄垂統塾", href: `${UP}/2024/07/20240820_27.pdf` },
  { date: "2024-06-17", title: "8月1日(木)　サイバーセキュリティセミナー", href: `${UP}/2024/06/20240801.pdf` },
  { date: "2024-04-17", title: "5月23日（木）定額減税研修会", href: `${UP}/2024/04/teigakugenzei.pdf` },
  { date: "2024-03-05", title: "3月25日（月）　本庄支部研修会「130万円の壁」", href: `${UP}/2024/03/20240325.pdf` },
  { date: "2024-03-05", title: "3月8日（金）　伊藤聡子講演会", href: `${UP}/2024/03/20240308.pdf` },
  { date: "2023-09-26", title: "12月1日（金）「決算書から会社の実態を把握する５つのポイント」・「税務調査」研修会", href: `${UP}/2023/09/kessansho20231201.pdf` },
  { date: "2023-09-26", title: "11月13日（月）「簡単にスマホで確定申告」e-Tax研修会", href: `${UP}/2023/09/kantan-smartphon20231113.pdf` },
  { date: "2023-09-26", title: "11月7日（火）「改正電子帳簿保存法」実務研修会", href: `${UP}/2023/09/denshichobo20231107.pdf` },
  { date: "2023-09-14", title: "10月6日（金）爆笑会（出演： 蝶花楼桃花　師匠）", href: `${UP}/2023/09/20230914.pdf` },
  { date: "2023-04-11", title: "4月・5月　インボイス制度説明会（本庄税務署主催）", href: `${UP}/2023/04/invoice.pdf` },
  { date: "2022-11-21", title: "12月9日（金）やさしい決算書読み方研修会", href: `${UP}/2022/11/20221209.pdf` },
  { date: "2022-11-09", title: "11月17日（木）午後3時と午後4時の2回　e-Tax研修会（確定申告をスマホで）", href: `${UP}/2022/11/20221117e-tax.pdf` },
  { date: "2022-10-21", title: "11月7日　インボイス実務研修会", href: `${UP}/2022/10/20221107invoice.pdf` },
  { date: "2022-07-21", title: "10月4日　爆笑会（桂宮治独演会）", href: `${UP}/2022/07/20221004.pdf` },
  { date: "2022-07-21", title: "9月13日　藻谷浩介氏　公開講演会 「進化する里山資本主義」", href: `${UP}/2022/07/20220913.pdf` },
  { date: "2022-07-21", title: "8月29日　本庄垂統塾「地域銀行の実情を知り融資の交渉に活かす」", href: `${UP}/2022/07/20220829.pdf` },
  { date: "2021-10-29", title: "11月12日　本庄垂統塾「コロナ禍における資金繰り管理の実践的手法について」", href: `${UP}/2021/10/cfm.pdf` },
  { date: "2021-10-29", title: "11月10日　確定申告をパソコンやスマホで演習「ｅ－Ｔａｘ研修会」", href: `${UP}/2021/10/E-TAX3.pdf` },
  { date: "2021-05-14", title: "オンラインセミナー 講師 気象予報士 天達武史 氏 [PDF/1MB]", href: `${UP}/2021/05/aig-elive20210617.pdf` },
  { date: "2020-11-30", title: "12月1日　一般公開講座（社会貢献事業）　講談　宝井琴梅　師匠 [PDF/198KB]", href: `${UP}/2020/11/20201201news.pdf` },
  { date: "2020-10-28", title: "１１月１２日　本庄垂統塾『非常時事態に備えたキャッシュフロー管理』", href: `${UP}/2020/10/cashflow202011.pdf` },
  { date: "2020-10-28", title: "１１月１８日　ｅ－Ｔａｘ研修会", href: `${UP}/2020/10/etax202011.pdf` },
  { date: "2020-10-28", title: "１２月１０日　第３回やさしい決算書の読み方研修会", href: `${UP}/2020/10/kesssansho202012.pdf` },
  { date: "2020-04-13", title: "新型コロナウイルス健康相談ダイヤル [PDF/186KB]", href: `${UP}/2020/04/covid19tel.pdf` },
  { date: "2019-10-09", title: "働き方改革研修会「ほっとけな勘違い5連発」[PDF/280KB]", href: `${UP}/2019/10/hatatrakikata201910.pdf` },
  { date: "2019-10-09", title: "本庄垂統塾研修会「キャッシュフローマネジメント手法講座」[PDF/558KB]", href: `${UP}/2019/10/suitoujyuku201910.pdf` },
  { date: "2019-10-09", title: "e-Tax研修会[PDF/515KB]", href: `${UP}/2019/10/eTax.pdf` },
  { date: "2019-10-09", title: "やさしい決算書の読み方研修会Ver.2「決算書はあなたの会社の健康診断書」[PDF/291KB]", href: `${UP}/2019/10/kessanKensyuVer2.pdf` },
  { date: "2019-05-16", title: "第7回定時総会議案書[PDF/1MB]", href: `${UP}/2019/05/dai7kaisoukaigiannsyo.pdf` },
  { date: "2019-05-16", title: "働き方改革研修会（有給５日？・残業時間？）[PDF/351KB]", href: `${UP}/2019/05/hatarakikata.pdf` },
  { date: "2019-05-16", title: "本庄垂統塾第一講座（事業継承）[PDF/396KB]", href: `${UP}/2019/05/dai1kouza.pdf` },
  { date: "2019-05-16", title: "消費税軽減税率説明会（５月１５日開催）[PDF/47KB]", href: `${UP}/2019/05/syouhizeikeigen.pdf` },
  { date: "2019-05-16", title: "決算期別説明会（5月20日開催）[PDF/15KB]", href: `${UP}/2019/05/kettusankibetu.pdf` },
  { date: "2018-12-03", title: "公務員倫理[PDF/2MB]", href: `${UP}/2018/12/20181203112021.pdf` },
  { date: "2018-11-22", title: "チャーリー西村　サイエンスショー[PDF/644KB]", href: `${UP}/2018/11/20181122.pdf` },
  { date: "2018-10-09", title: "やさしい決算書の読み方研修会 [PDF/355KB]", href: `${UP}/2018/10/yasashii_kessansyo.pdf` },
  { date: "2018-10-09", title: "建設産業の消費税率改正説明会 [PDF/689KB]", href: `${UP}/2018/11/3707f77c963f5308ccfeb2eee8e0e9b5.pdf` },
  { date: "2018-08-16", title: "財務戦略（銀行融資のためになる話）[PDF/2.76MB]", href: `${UP}/2018/08/aa9bbff381d6d4c41cc3148a5a71b340.pdf` },
  { date: "2018-08-16", title: "８月案内（決算期別研修会案内）[PDF/17.9KB]", href: `${UP}/2018/08/ffbdced50ed0b5ae5a78cc2bdb4fc981.pdf` },
  { date: "2018-07-18", title: "「北部ブロック租税教育事業」親子で楽しむ税と川の博物館 [PDF/2.66MB]", href: `${UP}/2018/07/20180718.pdf` },
  {
    date: "2018-06-27",
    title: "ホームページをリニューアルしました",
    slug: "20180627-137",
    body: ["ホームページをリニューアルしました。", "今後ともよろしくお願いいたします。"],
  },
  { date: "2018-06-26", title: "在職老齢年金の研修会の案内 [PDF/1.54MB]", href: `${UP}/2018/06/20180626.pdf` },
  { date: "2018-05-01", title: "事業承継税制の研修会の案内 [PDF/47KB]", href: `${UP}/2018/06/20180501_2.pdf` },
  { date: "2018-05-01", title: "第6回定時総会公開講演会 [PDF/204KB]", href: `${UP}/2018/06/20180501_1.pdf` },
  { date: "2014-09-30", title: "小冊子の頒布について[PDF/95KB]", href: `${UP}/2018/06/syousasshi.pdf` },
];

export function formatDate(d: string) {
  const [y, m, day] = d.split("-");
  return `${y}.${m}.${day}`;
}

/** 記事ページを持つお知らせのURL。PDFだけのものはPDFへ。 */
export function newsHref(n: NewsItem) {
  return n.slug ? `/news/${n.slug}` : n.href!;
}

export function newsByYear() {
  const map = new Map<string, NewsItem[]>();
  for (const n of news) {
    const y = n.date.slice(0, 4);
    if (!map.has(y)) map.set(y, []);
    map.get(y)!.push(n);
  }
  return [...map.entries()];
}
