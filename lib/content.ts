// サイト内の文言・数字・PDFリンクはすべてここに集約しています。
// 現行サイト（https://www.honjohojinkai.jp/）の掲載内容をそのまま移植。
// 原文の明らかな誤字のみ修正しています（例：「制度がが」→「制度が」）。

const UP = "https://www.honjohojinkai.jp/wp-content/uploads";

export const site = {
  name: "公益社団法人 本庄法人会",
  shortName: "本庄法人会",
  url: "https://www.honjohojinkai.jp",
  description:
    "公益社団法人 本庄法人会（埼玉県本庄市）のホームページ。本庄市・児玉郡（美里町・神川町・上里町）の経営者が、税の知識と経営の力を学び合う団体です。活動案内、入会案内、福利厚生制度、情報公開を掲載しています。",
  address: "埼玉県本庄市朝日町三丁目1番35号（本庄商工会議所会館2階）",
  postal: "367-0031",
  tel: "0495-21-1065",
  telHref: "tel:0495211065",
  fax: "0495-22-7898",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2275.7350569080904!2d139.18957128415022!3d36.23037420443012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ec2c5088fb7f1%3A0x4814390e2c069782!2z77yI56S-77yJ5pys5bqE5rOV5Lq65Lya!5e0!3m2!1sja!2sjp!4v1529306167064",
  mapLink: "https://maps.google.com/?q=36.23037420443012,139.18957128415022",
  geo: { lat: 36.23037420443012, lng: 139.18957128415022 },
};

export const nav = [
  { href: "/about", label: "法人会とは" },
  { href: "/activity", label: "活動案内" },
  { href: "/welfare", label: "会員特典" },
  { href: "/join", label: "入会案内" },
  { href: "/news", label: "お知らせ" },
  { href: "/disclosure", label: "情報公開" },
];

export const footerNav = [
  { href: "/contact", label: "お問い合わせ" },
  { href: "/links", label: "リンク集" },
  { href: "/privacy", label: "個人情報保護方針" },
];

/* ───────── トップ ───────── */

export const hero = {
  lines: ["税を学び、", "経営を磨き、", "地域とつながる。"],
  lead: "本庄市・児玉郡の経営者が集う「良き経営者の団体」。企業規模・業種を問わず、どんな企業も会員になれます。",
};

export const stats = [
  { value: "858", unit: "社", label: "会員企業数", note: "令和6年3月末" },
  { value: "441", unit: "会", label: "全国の法人会", note: "41都道県の全国組織" },
  { value: "1,900", unit: "名", label: "年間の研修・事業参加", note: "令和6年度 延べ人数" },
  { value: "6,000", unit: "円〜", label: "年会費", note: "資本金500万円未満" },
];

export const merits = [
  {
    no: "01",
    title: "税と経営を、無料で学べる",
    body: "決算期別説明会、e-Tax研修会、やさしい決算書の読み方、本庄垂統塾など。年間40回を超える研修で、実務に効く知識が身につきます。",
  },
  {
    no: "02",
    title: "会社と社員を、守る備え",
    body: "経営者大型総合保障制度、がん保険・医療保険制度など、会員企業だけの割安な保障制度を利用できます。",
  },
  {
    no: "03",
    title: "地域の経営者と、つながる",
    body: "5つの支部、青年部会・女性部会で、異業種の経営者と顔の見える関係をつくれます。",
  },
  {
    no: "04",
    title: "最新の税制情報が、届く",
    body: "会報誌「ほうじんナウ」、全法連機関紙「ほうじん」（年4回）、税制改正のあらまし速報版を全会員にお届けします。",
  },
];

/** 会員特典 商店街（モール案）：3つの通りに店舗を並べる */
export const mall = [
  {
    street: "保障通り",
    kana: "ほしょう",
    desc: "もしもの時に、会社と人を守る",
    shops: [
      { noren: "保", name: "経営者大型総合保障制度", body: "生命保険と損害保険がセット。経営者・従業員の万一に備え、事業を止めない。", href: "/welfare#company" },
      { noren: "労", name: "アットワークハイパー任意労災", body: "政府労災の上乗せ。定額＋賠償の「ダブル補償」。", href: "/welfare#company" },
      { noren: "癌", name: "がん保険・医療保険制度", body: "会員企業は集団取扱料率の割安な保険料が適用。", href: "/welfare#personal" },
      { noren: "貸", name: "法人会専用 貸倒保証制度", body: "与信管理は万全ですか？売掛金の焦げ付きに備える。", href: "/contact" },
    ],
  },
  {
    street: "学び通り",
    kana: "まなび",
    desc: "税と経営の知識を、実務に",
    shops: [
      { noren: "税", name: "決算期別説明会・税務研修会", body: "決算前に押さえるポイントを税務署の方から直接。", href: "/activity#training" },
      { noren: "塾", name: "本庄垂統塾", body: "資金繰り・売上戦略・事業承継。経営者のための実践講座。", href: "/activity#training" },
      { noren: "電", name: "e-Tax研修会", body: "確定申告をパソコン・スマホで。演習形式で安心。", href: "/activity#training" },
      { noren: "報", name: "会報誌「ほうじんナウ」", body: "地域と税の情報を年2回。バックナンバーもPDFで。", href: "/activity#hojinnow" },
    ],
  },
  {
    street: "交流通り",
    kana: "こうりゅう",
    desc: "地域の経営者と、顔の見える関係を",
    shops: [
      { noren: "笑", name: "爆笑会・公開講演会", body: "林家正蔵、桂宮治、滝川鯉昇ほか。会員はもちろん地域の方も。", href: "/activity#report" },
      { noren: "支", name: "5つの支部活動", body: "本庄・児玉・上里・神川・美里。事業報告会・交流会・日帰り研修。", href: "/activity#branch" },
      { noren: "青", name: "青年部会", body: "租税教室の講師、本庄垂統塾の運営。次代の経営者の場。", href: "/activity#tax-school" },
      { noren: "女", name: "女性部会", body: "税に関する絵はがきコンクール、定額減税研修会など。", href: "/activity#tax-school" },
    ],
  },
];

export const activityCards = [
  { title: "研修事業", body: "決算期別研修会・e-Tax研修会・本庄垂統塾・コーチング研修会など、一般公開の講座を年間41回。", stat: "41回 / 1,900名", href: "/activity#training" },
  { title: "社会貢献事業", body: "林家正蔵師匠の爆笑会をグローバルソフトウェア本庄文化ホールで開催。499名が来場。", stat: "499名来場", href: "/activity#report" },
  { title: "租税教育", body: "青年部会が小学校で租税教室、女性部会が税に関する絵はがきコンクール（24校・864作品）。", stat: "864作品", href: "/activity#tax-school" },
  { title: "税制提言", body: "税制改正の要望を、会長・支部長が一市三町の市長・町長・議長へ直接手渡し。", stat: "1市3町へ", href: "/activity#report" },
];

export const awards = [
  "会員の税務研修参加率 105.3%（全国29位・関信局3位）で全国大会にて表彰（令和6年度）",
  "累積収入保険料のアップ率 全国1位で全国大会にて表彰（令和6年度）",
];

export const steps = [
  { no: "STEP 1", title: "お問い合わせ", body: "お電話（0495-21-1065）で事務局へ。ご不明点はなんでもどうぞ。" },
  { no: "STEP 2", title: "申込書の記入", body: "入会申込書・口座振替依頼書をダウンロードしてご記入ください。" },
  { no: "STEP 3", title: "提出", body: "記入した申込書を事務局（本庄商工会議所会館2階）へご提出ください。" },
  { no: "STEP 4", title: "入会", body: "研修会のご案内や会報誌「ほうじんナウ」が届きます。会員特典もご利用いただけます。" },
];

/* ───────── 法人会とは ───────── */

export const about = {
  catch: "正しい税知識と経営の力を養う「良き経営者の団体」それが法人会です。",
  wishes: ["税に自信を持ち、積極的経営をめざしたい・・・・・。", "先へ先へと時代を読める目を持ちたい・・・・・。"],
  paragraphs: [
    "経営者の皆様が、自らの視野を広げ、一層社会の繁栄をめざすとき、健全な経営に役立つ税知識と経営の力を身につけられるようお手伝いするのが法人会です。",
    "法人会は41都道県に441の会を持つ全国組織の経営者の団体です。企業規模、業種を問わず、どんな企業も法人会の会員になれます。法人会への入会、それは繁栄への道を一歩前進することです。",
  ],
  note: "※商工会議所、商工会、農協、本庄税務署、本庄税理士会の方々には法人会運営並びに事業への協力をしていただいております。",
  recruit:
    "法人会は41都道県４４０単位会を持つ全国組織の経営者の団体です。企業規模、業種を問わず、どんな企業も法人会の会員になれます。法人会への入会、それは繁栄への道を一歩前進することです。",
  offices: [
    { name: "（公社）本庄法人会", address: "本庄市朝日町三丁目1番35号", building: "本庄商工会議所会館2階", tel: "0495-21-1065" },
    { name: "本庄支部", address: "本庄市朝日町三丁目1番35号", building: "本庄商工会議所会館2階", tel: "0495-21-1065" },
    { name: "児玉支部", address: "本庄市児玉町児玉325-5", building: "児玉商工会館内", tel: "0495-72-1556" },
    { name: "上里支部", address: "上里町七本木925-6", building: "上里町商工会館内", tel: "0495-33-0520" },
    { name: "神川支部", address: "神川町植竹900-4", building: "神川町商工会館内", tel: "0495-77-3181" },
    { name: "美里支部", address: "美里町木部323-3", building: "美里町商工会館内", tel: "0495-76-0144" },
  ],
  membershipYears: ["令和2年3月末", "令和3年3月末", "令和4年3月末", "令和5年3月末", "令和6年3月末"],
  membership: [
    { branch: "本庄", counts: [470, 465, 455, 461, 464], diff: "3" },
    { branch: "児玉", counts: [136, 132, 129, 128, 129], diff: "1" },
    { branch: "上里", counts: [132, 131, 128, 131, 132], diff: "1" },
    { branch: "神川", counts: [73, 75, 72, 68, 70], diff: "2" },
    { branch: "美里", counts: [58, 59, 59, 63, 63], diff: "–" },
    { branch: "合計", counts: [869, 862, 843, 851, 858], diff: "7" },
  ],
  meritTree: [
    "税制改正 要望運動",
    "決算期別説明会・新設法人説明会・税制説明会",
    "共済制度 経営者大型保障制度",
    "共済制度 がん保険制度",
    "講演会開催 各支部毎に",
    "ほうじんナウ発行・ほうじん配布・税制改正速報配布",
    "社会貢献運動 落語鑑賞会・笑点（参加メンバー）",
    "社員研修会（マナー研修）",
    "法人会サポートローン 申込受付",
    "埼玉県の法人会 インターネットバンキングのご紹介",
  ],
};

/* ───────── 活動案内（令和6年度） ───────── */

export const activity = {
  year: "令和6年度",
  overview:
    "令和6年度の本庄法人会は、5月27日に第12回定時総会を開催、そして公益社団法人として公開講演会・研修会など一般の方にもご参加いただける事業を実施しました。特に定額減税制度が令和6年6月からスタートするに合わせ、制度の周知に始まり、実務内容の研修を実施いたしました。また、社会貢献事業としては林家正蔵師匠の爆笑会を実施、更に新規事業としてサイバーセキュリティセミナーを開催しました。租税教室では女性部会が第9回税に関する絵はがきコンクールを実施し秋平小学校の福田裕子さんの作品が県内3位に入賞、展示は上里町役場・神川町役場、美里町中央公民館、本庄市役所で行いました。青年部会では小学校や商工祭において租税教室を開催、また県連主催の租税教育事業を主管し651名の参加のもとで税金の仕組みとサイエンスショーを実施しました。",
  table1: [
    { kind: "新規", name: "サイバーセキュリティセミナー", times: "1", people: "70" },
    { kind: "新規", name: "定額減税研修会", times: "3", people: "51" },
    { kind: "新規", name: "コーチング研修会", times: "1", people: "51" },
    { kind: "新規", name: "チャーリー西村サイエンスショー", times: "1", people: "651" },
    { kind: "継続", name: "本庄垂統塾", times: "2", people: "41" },
    { kind: "継続", name: "やさしい決算書の読み方研修会Ver４", times: "1", people: "25" },
    { kind: "継続", name: "ｅ－Ｔａｘ研修会", times: "1", people: "13" },
    { kind: "継続", name: "決算期別研修会", times: "6", people: "42" },
    { kind: "継続", name: "社会貢献事業爆笑会", times: "1", people: "499" },
    { kind: "継続", name: "租税教室", times: "6", people: "250" },
    { kind: "継続", name: "支部税務研修会", times: "3", people: "45" },
    { kind: "", name: "委員会・部会", times: "15", people: "162" },
  ],
  table1Total: { times: "41", people: "1,900" },
  table1Note: "（表１の研修会は一般公開講座となっております）",
  table2: [
    { branch: "本庄", prev: "461社", corp: "453社", indiv: "11名", total: "464社" },
    { branch: "児玉", prev: "126", corp: "123", indiv: "6", total: "129" },
    { branch: "上里", prev: "131", corp: "131", indiv: "1", total: "132" },
    { branch: "神川", prev: "68", corp: "69", indiv: "1", total: "70" },
    { branch: "美里", prev: "63", corp: "62", indiv: "1", total: "63" },
    { branch: "合計", prev: "851", corp: "838", indiv: "20", total: "858" },
  ],
  reports: [
    {
      title: "1．組織の強化について",
      body: "本年も組織委員を中心に関係諸団体各位のご協力により加入勧奨を実施した結果、埼玉りそな銀行、群馬銀行、武蔵野銀行、埼玉信用組合等の金融団や提携損保の大同生命保険㈱、AIG損害保険㈱、また役員の紹介における加入勧奨で21事業所が新規加入しました。廃業等の退会が少なく前年度より7名純増の結果となりました。",
    },
    {
      title: "2．研修活動について",
      body: "法人会活動の中心である研修活動は、新規に女性部会・支部で定額減税制度の研修会を開催、また研修委員会では阿久根謙司氏を講師にコーチング研修会を開催しました。継続事業ではやさしい決算書の読み方研修会のシリーズで「税務調査」をテーマに開催、青年部会では「本庄垂統塾」の講師に埼玉県法人会連合会垂統塾塾長の斎藤安正氏を招聘し、「中小零細企業の採るべき攻めの売上増強戦略」「成長戦略における資金調達と投資戦略」をテーマに研修、税制委員会では確定申告を電子申告で行えるようにｅ－Ｔａｘ研修会を11月に実施しました。令和6年度には、全国大会の席上で会員の税務に関する研修参加率105.3％（全国29位、関信局3位）で表彰されました。",
    },
    {
      title: "3．広報活動について",
      body: "当会の広報誌「ほうじんナウ」の内容については、公益にあった魅力ある会報作りを目指し、今年で創刊102号は6委員会と5支部、女性部会・青年部会の活動を中心に紹介、103号では女性部会・青年部会の租税教育事業や研修会報告、地域情報として「ふるさと納税返礼品」を掲載、広報紙として会員に必要な情報を提供する記事や児玉郡市の地域情報を検討する会議を7回開催、2回の会報を発行いたしました。なお、一般の方にも見ていただけるようにHPに掲載、各機関窓口にも置いていただきました。また、全法連発行の｢ほうじん｣機関紙を年4回全会員に配布、更に「令和6年度税制改正のあらまし速報版」を配布致しました。",
    },
    {
      title: "4．厚生関係について",
      body: "厚生委員会が中心となり、会員の福利厚生の充実と会の財政基盤の確立に資するため、会員及び役員各位のご理解とご協力により①役員加入率（県内2位の84％）、②青年部会（県内2位の450％）・③女性部会（県内2位の200％）の各部門において目標を達成しました。\n令和6年度全国大会の席上で累積収入保険料のアップ率全国1位で表彰されました。",
    },
    {
      title: "5．税制について",
      body: "全国一斉に実施する令和7年度税制改正に関する要望活動を、本庄法人会としては11月18日・29日に会長、支部長、税制委員が提言書を持参し一市三町を訪問、市長、町長、議長へ直接手渡し要望活動を行った。税制委員会では継続事業としてｅ－Ｔａｘ研修会を実施して確定申告の電子申請の推進、併せてｅ－Ｔａｘパンフレットを2万4千部作成して会員事業所を始め商工会議所会員・商工会会員にも配布、更に児玉郡市の自治会や区長会を通じて全世帯に回覧・配布をお願いして周知を行った。",
    },
    {
      title: "6．地域社会貢献運動について",
      body: "グローバルソフトウェア本庄文化ホールで10月13日に林家正蔵師匠の爆笑会を開催しました。また、爆笑会開催に先立ち税務行政の電子化における今後について説明を本庄税務署田中正昭統括国税調査官で実施、会員への周知を行った。",
    },
    {
      title: "7．租税教室活動について",
      body: "女性部会では「第9回税に関する絵はがきコンクール」を実施し管内全小学校の24校から864作品が出品されました。また、青年部会会員が管内の小学校４校を訪問し、小学6年生を対象に租税教室を実施するための学校を訪問、また、児玉商工祭、美里町商工まつりの開催に併せて紙芝居による租税教室活動を行った。",
    },
  ],
  taxSchool: [
    { date: "6月13日", place: "上里町立賀美小学校", teacher: "宮田博史", count: "34名" },
    { date: "7月2日", place: "本庄市立本庄西小学校", teacher: "柴崎　篤・温井康宏", count: "39名" },
    { date: "7月9日", place: "上里町立長幡小学校", teacher: "福嶋利彦", count: "28名" },
    { date: "7月17日", place: "上里町立七本木小学校", teacher: "逸見　猛・坂本和義", count: "52名" },
  ],
  taxSchoolTotal: "153名",
  taxSchoolNote: "（青年部会会員が講師）",
  kamishibai: [
    { date: "10月20日", place: "児玉商工会：競進社駐車場", teacher: "坂本和義・永尾和也", count: "45名" },
    { date: "11月4日", place: "美里町商工まつり：JA埼玉ひびきの美里支店駐車場", teacher: "福嶋利彦・逸見猛・櫻井祐治", count: "52名" },
  ],
  branchTitle: "8．支部活動について",
  branchLead: "支部活動では事業報告会や研修と会員交流事業を中心に実施しました。",
  branch: [
    { date: "6月4日", what: "児玉支部事業報告会", place: "児玉商工会館", detail: "議案1.令和5年度事業報告並びに収支決算報告承認の件\n議案2.令和6年度事業計画（案）並びに収支予算（案）承認の件", count: "15" },
    { date: "6月4日", what: "児玉支部公開税務研修会", place: "児玉商工会館", detail: "講師：本庄税務署法人課税部門統括国税調査官　傳川貴子氏\nテーマ「定額減税制度について」", count: "14" },
    { date: "6月5日", what: "美里支部公開税務研修会", place: "美里町商工会館", detail: "講師：本庄税務署法人課税部門上席国税調査官　嶋田友行氏\nテーマ「定額減税説明会」", count: "12" },
    { date: "7月12日", what: "神川支部事業報告会", place: "こい家", detail: "議案1.令和5年度収支決算報告承認の件\n議案2.令和6年度事業計画並びに収支予算承認の件", count: "17" },
    { date: "7月18日", what: "上里支部事業報告会", place: "小菊", detail: "議案1.令和5年度収支決算報告承認の件\n議案2.令和5年度事業計画並びに収支予算", count: "24" },
    { date: "7月18日", what: "上里支部税務研修会", place: "小菊", detail: "講師：渋沢栄一記念館専任講師：塚田　充　氏\nテーマ：「論語とソロバン」", count: "24" },
    { date: "8月6日", what: "本庄支部事業報告会", place: "グローバルソフトウェア\n本庄文化ホール", detail: "議案1.令和4年度事業報告並びに収支決算報告\n議案2.令和5年度事業計画（案）並びに収支予算（案）承認の件", count: "21" },
    { date: "8月6日", what: "本庄支部演奏会", place: "グローバルソフトウェア\n本庄文化ホール", detail: "ジャズ演奏会\n出演：江尻雅江　氏・鈴木　伸　氏・川浦幸雄　氏・鈴木国泰　氏", count: "21" },
    { date: "11月27日", what: "本庄支部日帰り研修と会員交流事業", place: "宝徳寺・田母沢御用邸", detail: "", count: "12" },
    { date: "1月20日", what: "児玉支部賀詞交歓会・親睦事業", place: "どさん娘　児玉店", detail: "フルート演奏", count: "22" },
    { date: "1月22日", what: "神川支部賀詞交歓会", place: "埼玉国際ゴルフクラブ", detail: "", count: "28" },
    { date: "2月24日", what: "本庄支部新春交流会", place: "伊香保温泉\n千明仁泉亭", detail: "", count: "12" },
    { date: "3月14日", what: "本庄支部研修会", place: "昭和西川羽毛製造㈱本庄第２工場", detail: "", count: "9" },
  ],
};

/* ───────── 写真・会報誌（旧サイドバー） ───────── */

export const sidePhotos = {
  caption: "滝川鯉昇爆笑会（美里支部）",
  images: ["/images/legacy/bakusyokai1.webp", "/images/legacy/bakusyokai2.webp"],
};

export const hojinNow = [
  { no: 105, href: `${UP}/2026/06/hojinnow-105.pdf`, size: "4MB" },
  { no: 104, href: `${UP}/2026/05/hojinnow-104.pdf`, size: "6MB" },
  { no: 103, href: `${UP}/2025/05/hojinnow-103.pdf`, size: "5MB" },
  { no: 102, href: `${UP}/2024/10/hojinnow-102.pdf`, size: "5MB" },
  { no: 101, href: `${UP}/2024/05/hojinnow-101.pdf`, size: "3MB" },
  { no: 100, href: `${UP}/2024/05/hojinnow-100.pdf`, size: "7MB" },
  { no: 99, href: `${UP}/2023/03/hojinnow-99.pdf`, size: "5.93MB" },
  { no: 98, href: `${UP}/2023/01/hojinnow-98.pdf`, size: "4MB" },
  { no: 97, href: `${UP}/2022/02/hojinnow-97.pdf`, size: "13MB" },
  { no: 96, href: `${UP}/2022/02/hojinnow-96.pdf`, size: "5MB" },
  { no: 95, href: `${UP}/2020/10/hojinnow-95.pdf`, size: "7MB" },
  { no: 94, href: `${UP}/2020/06/hojinnow-94.pdf`, size: "10MB" },
  { no: 93, href: `${UP}/2020/01/hojinnow-93.pdf`, size: "12MB" },
  { no: 92, href: `${UP}/2019/09/hojinnow-92.pdf`, size: "10MB" },
  { no: 91, href: `${UP}/2019/05/hojinnow-91.pdf`, size: "4.09MB" },
];

/* ───────── 入会案内 ───────── */

export const fees = {
  regular: [
    { range: "500万円未満", fee: "6,000円" },
    { range: "500万円以上 ～ 1,000万円未満", fee: "10,000円" },
    { range: "1,000万円以上 ～ 2,000万円未満", fee: "15,000円" },
    { range: "2,000万円以上 ～ 5,000万円未満", fee: "18,000円" },
    { range: "5,000万円以上 ～ 1億円未満", fee: "20,000円" },
    { range: "1億円以上", fee: "25,000円" },
    { range: "特別法人（医療法人）", fee: "20,000円" },
    { range: "その他の特別法人（社会福祉・宗教・学校法人等）", fee: "10,000円" },
  ],
  supportingNote: "賛助会員は総会等の議決権はないものとする。",
  supporting: [
    { range: "本会の事業を賛助するために入会した法人、法人の支社、支店、営業所、工場等の事業所または個人", fee: "6,000円" },
    { range: "本庄法人会の正会員の系列会社", fee: "2,000円" },
  ],
  midYear:
    "事業年度の中途に入会した会員の当該事業年度の会費年額は、一律1,000円とし、翌年度以降会費規程第２条に規定する年額会費を納入する。",
  paymentLead: "会員はその事業年度分の会費を本会所定の方法により納付しなければならない。",
  payment: [
    {
      title: "1. 口座振替",
      body: "毎年、6月20日（休日の場合は翌営業日）に届出の金融機関の口座より口座振替により納付する。",
      banks:
        "埼玉りそな銀行、武蔵野銀行、足利銀行、群馬銀行、東和銀行、埼玉県信用金庫、埼玉信用組合、しののめ信用金庫、埼玉ひびきの農協の本支店",
    },
    { title: "2. 振込納付", body: "毎年6月に会員宛に送付する振込依頼書により、金融機関からの振込により納付する。" },
    { title: "3. 持参", body: "事務局へ直接持参し納付する。" },
  ],
};

export const forms = [
  { label: "入会申込書", href: `${UP}/2024/11/moushikomi.pdf`, primary: true },
  { label: "口座振替依頼書", href: `${UP}/2025/05/furikomi.pdf`, primary: true },
  { label: "青年部会入会申込書と口座振替依頼書", href: `${UP}/2025/05/moushikomi_seinen.pdf` },
  { label: "女性部会入会申込書", href: `${UP}/2020/05/moushikomi_josei.pdf` },
];

/* ───────── 福利厚生制度 ───────── */

export const welfare = {
  company: {
    title: "企業のための保障制度",
    sub: "もしものときの企業防衛",
    main: {
      name: "経営者大型総合保障制度",
      body: "経営者や従業員が在職中に病気や事故により、死亡や入院などの事態に遭われた場合、企業を守り、事業が滞りなく継続できるよう、生命保険と損害保険がセットになった法人会会員のための制度です。",
      companies: [
        { name: "大同生命保険株式会社", tel: "0120-789-501" },
        { name: "AIG損害保険株式会社", tel: "0120-321-564" },
      ],
    },
    needsTitle: "ニーズにあわせた保障内容",
    needs: [
      { title: "経営者・従業員の万一の保障", body: "死亡退職金・弔慰金・借入金返済資金の準備、当面の運転資金、人材補充・育成資金の確保" },
      { title: "経営者・従業員の生存中の備え", body: "生存退職金の準備（解約払戻金を活用）" },
      { title: "政府労災保険の上乗せ補償制度", plan: "アットワークハイパー任意労災", body: "定額＋賠償の「ダブル補償」で、働く人と企業経営を労働災害から守ります。保険料は売上高と事業種類から算出するシンプルな加入方式です。" },
      { title: "万一の「個人情報」漏洩対策", plan: "個人情報漏洩対策プラン", body: "個人情報の漏洩に幅広く対応し、賠償金補償だけでなく、危機管理にコンサルティングサービスの提供など全方位的にサポートします。" },
      { title: "多大な地震災害に備える", plan: "地震対策プラン", body: "地震・噴火により生じる火災や倒壊等に備えて、建物の修復や什器設備の修理・再購入資金が準備できるプランです。" },
    ],
    needsCompanies: [{ name: "AIG保険会社", tel: "0120-992-475" }],
  },
  personal: {
    title: "個人のための保障制度",
    cancer: {
      title: "がん保険制度・医療保険制度",
      lead: "会員企業の皆様は、集団取扱料率の割安な保険料が適用となります。",
      items: [
        { title: "法人会 がん保険制度", body: "診断・治療時はもちろん、その後の回復もサポートする「がん保険」" },
        { title: "法人会 医療保険制度", body: "お手軽な保険料で、病気やケガを一生涯保障する「医療保険」" },
      ],
    },
    ways: {
      title: "個人のための福利厚生制度",
      lead: "まずは働き盛りの万一に備えて「死亡保障」を準備。将来、ニーズの変化にあわせて「死亡保障」「医療保障」「介護年金」「年金」の4つの保障に変更できます。",
      name: "法人会WAYS",
      catch: "未来の自分が決める保険",
      note: "（法人会終身保険、法人会定期保険もあります）",
    },
    companies: [{ name: "アフラック生命保険株式会社", tel: "0120-876-505" }],
  },
};

/* ───────── 情報公開 ───────── */

export const disclosure = {
  docs: [
    { label: "本庄法人会定款", href: `${UP}/2018/06/01_teikan.pdf` },
    { label: "役員名簿（令和5年6月現在）", href: `${UP}/2023/06/meibo.pdf` },
    { label: "令和7年度事業報告", href: `${UP}/2026/04/disclosure1.pdf` },
    { label: "正味財産増減計算書", href: `${UP}/2026/04/disclosure2.pdf` },
  ],
  balanceSheets: [
    { label: "令和7年度", href: `${UP}/2026/04/disclosure3.pdf` },
    { label: "令和6年度", href: `${UP}/2025/05/disclosure-bs-R6.pdf` },
    { label: "令和5年度", href: `${UP}/2024/05/disclosure-bs-R5.pdf` },
    { label: "令和4年度", href: `${UP}/2023/06/disclosure-bs-R4.pdf` },
    { label: "令和3年度", href: `${UP}/2022/06/disclosure3.pdf` },
    { label: "令和2年度", href: `${UP}/2022/10/disclosure-bs-R2.pdf` },
    { label: "令和元年度", href: `${UP}/2022/10/disclosure-bs-R1.pdf` },
    { label: "平成30年度", href: `${UP}/2022/10/disclosure-bs-H30.pdf` },
    { label: "平成29年度", href: `${UP}/2022/10/disclosure-bs-H29.pdf` },
  ],
  docsAfter: [
    { label: "財産目録", href: `${UP}/2026/04/disclosure4.pdf` },
    { label: "令和8年度事業計画", href: `${UP}/2026/04/disclosure5.pdf` },
    { label: "収支予算書（損益計算ベース）", href: `${UP}/2026/04/disclosure6.pdf` },
    { label: "監査報告書", href: `${UP}/2026/04/disclosure7.pdf` },
  ],
};

/* ───────── リンク集 ───────── */

export const links = [
  { label: "国税庁", href: "http://www.nta.go.jp/" },
  { label: "国税電子申告・納税システム「e-tax」", href: "http://www.e-tax.nta.go.jp/" },
  { label: "全国法人会総連合", href: "http://www.zenkokuhojinkai.or.jp/index.asp" },
  { label: "全国各地の法人会", href: "http://www.zenkokuhojinkai.or.jp/kai/frame_japan.htm" },
  { label: "埼玉県法人会連合会", href: "http://www.saitamakenhoren.net/" },
  { label: "大同生命", href: "https://www.daido-life.co.jp/" },
  { label: "AIG 保険", href: "https://www.aig.co.jp/sonpo" },
  { label: "Aflac", href: "http://www.aflac.co.jp/" },
];

/**
 * 和風メニューバナー（public/images/menu/）。色で4グループ。
 * todo: true は飛び先を事務局に要確認（旧リンク切れ・URL不明のため仮の飛び先）。
 */
export type MenuBanner = { id: string; label: string; href: string; todo?: boolean };

export const menuBanners: { group: string; color: "ai" | "shu" | "kin" | "midori"; items: MenuBanner[] }[] = [
  {
    group: "国税の手続き",
    color: "ai",
    items: [
      { id: "kakutei", label: "確定申告", href: "https://www.nta.go.jp/taxes/shiraberu/shinkoku/tokushu/index.htm" },
      { id: "nencho", label: "年末調整", href: "https://www.nta.go.jp/users/gensen/nencho/index.htm" },
      { id: "gensen", label: "源泉所得税", href: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/gensen.htm" },
      { id: "etax", label: "e-Tax", href: "https://www.e-tax.nta.go.jp/" },
      { id: "invoice", label: "インボイス制度", href: "https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice.htm" },
      { id: "denshichobo", label: "電子帳簿保存法", href: "https://www.nta.go.jp/law/joho-zeikaishaku/sonota/jirei/index.htm" },
      { id: "hojinzei", label: "法人税の申告", href: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/hojin/hojin.htm" },
      { id: "tetsuzuki", label: "各種手続き一覧", href: "https://www.nta.go.jp/taxes/tetsuzuki/shinsei/index.htm" },
    ],
  },
  {
    group: "法人会",
    color: "shu",
    items: [
      { id: "about", label: "法人会とは", href: "/about" },
      { id: "join", label: "入会のご案内", href: "/join" },
      { id: "zenhoren", label: "全国法人会総連合", href: "https://www.zenkokuhojinkai.or.jp/" },
      { id: "kanshinetsu", label: "関東信越法人会連合会", href: "https://www.zenkokuhojinkai.or.jp/links/index.html", todo: true },
      { id: "matching", label: "ビジネス・マッチング", href: "https://houjinkai-reg.abmp.jp/?utm_source=partner&utm_medium=houjinkai&utm_campaign=honjoweb" },
      { id: "seinen", label: "青年部会", href: "/activity#tax-school" },
      { id: "josei", label: "女性部会", href: "/activity#tax-school" },
    ],
  },
  {
    group: "保障・経営支援",
    color: "kin",
    items: [
      { id: "kashidaore", label: "貸倒保証制度", href: "/contact", todo: true },
      { id: "gandock", label: "がんドック検診", href: "/contact", todo: true },
      { id: "welfare", label: "福利厚生制度", href: "/welfare" },
      { id: "keiei", label: "経営支援情報", href: "https://www.chusho.meti.go.jp/", todo: true },
      { id: "seminar", label: "セミナー・研修会", href: "/news" },
      { id: "member-service", label: "会員向けサービス", href: "/welfare" },
    ],
  },
  {
    group: "地域",
    color: "midori",
    items: [
      { id: "chiho-college", label: "地方創生カレッジ", href: "https://chihousousei-college.jp/_home.html" },
      { id: "chiiki", label: "地域活性化の取組み", href: "https://www.chisou.go.jp/tiiki/tiikisaisei/kigyou_furusato.html", todo: true },
      { id: "honjo", label: "本庄の魅力", href: "https://www.city.honjo.lg.jp/", todo: true },
    ],
  },
];

/** 旧トップのバナーのうち、メニューバナーに無いもの（リンク切れは除外済み） */
export const otherLinks = [
  { label: "国税庁の取組紹介", href: "https://www.nta.go.jp/about/introduction/torikumi/week/index.htm" },
  { label: "年末調整 電子化で業務効率化", href: "https://www.nta.go.jp/users/gensen/nenmatsu/nencho.htm" },
  { label: "ダイレクト納付利用手続マニュアル", href: "https://www.nta.go.jp/taxes/nozei/nofu/pdf/24100030_direct_manual.pdf" },
  { label: "「給与所得の源泉徴収票」はe-Taxで！", href: "https://www.nta.go.jp/taxes/tetsuzuki/mynumberinfo/kyuyogensenjoho-jigyousyapage.htm" },
  { label: "自主点検チェックシート", href: "http://tax-compliance.brain-server2.net/compliance/units/" },
  { label: "法人会ってどんな団体？ 紹介映像", href: "https://tv-player.ap1.admint.biz/5b330c0235f1a/player/1df1364d2f584befaa67de2e513ef875?site_id=5b330c0235f1a" },
  { label: "esod-neo 認証（要確認）", href: "https://www.esod-neo.com/client_certify.php?id=21PjEvJSpRo.k" },
];
