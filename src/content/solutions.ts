import type { Locale } from "@/lib/i18n";

/* The four solution pages. English defines the shape; Arabic must match it. */

type Item = { title: string; body: string };
export type Solution = {
  slug: string;
  name: string;
  summary: string;
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; body: string; primary: string };
  included: { eyebrow: string; title: string; body: string; items: Item[] };
  facts?: { eyebrow: string; title: string; items: { label: string; value: string }[] };
  process: { eyebrow: string; title: string; steps: Item[] };
  audience: { eyebrow: string; title: string; items: string[] };
  product?: { key: string; eyebrow: string; title: string; body: string; link: string; href: string; external?: { label: string; href: string } };
  faq: { q: string; a: string }[];
  form: { title: string; body: string; interest: number };
};

export type SolutionsIndex = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; body: string };
  why: { eyebrow: string; title: string; items: Item[] };
  closing: { title: string; body: string };
};

const en: Solution[] = [
  {
    slug: "accounting-software",
    name: "Accounting software",
    summary: "Invoices, receipts and payments recorded from WhatsApp, in a real double-entry ledger that stays VAT-ready.",
    meta: {
      title: "Accounting software for UAE businesses — Lexoro Solutions",
      description: "WhatsApp-first accounting for UAE SMEs: tax invoices, expense capture, a real double-entry ledger and VAT-ready books, built by Lexoro Solutions.",
    },
    hero: {
      eyebrow: "Solutions · Accounting software",
      title: "Accounting that keeps itself up to date.",
      body: "Most small businesses fall behind on their books because the software is hard to use. Ours runs from WhatsApp, so invoices, receipts and payments are recorded the day they happen — and the books are always ready for VAT.",
      primary: "Start on fisqel.com",
    },
    included: {
      eyebrow: "What's included",
      title: "Everything a bookkeeper does every week.",
      body: "Behind a simple chat sits proper accounting that would stand up to an accountant's review.",
      items: [
        { title: "UAE tax invoices", body: "Describe the sale in a message. You get a compliant tax invoice with your TRN, bilingual titles and the right VAT, as a branded PDF with your logo, stamp and signature." },
        { title: "Expense capture", body: "Send a photo of any receipt. The vendor, amount, date and VAT are read, the expense is categorised, and the image is filed with the entry." },
        { title: "Real double-entry ledger", body: "Every transaction is posted as proper journal entries — including what you owe employees who paid for expenses themselves." },
        { title: "VAT-ready all year", body: "Each line is classified as standard-rated, zero-rated or exempt as it happens, so the VAT return is prepared continuously, not rebuilt at the deadline." },
        { title: "Dashboard and reports", body: "Cash position, money in and out, outstanding and overdue invoices, expense breakdown, VAT status and profit — from live figures." },
        { title: "Your team, your approval", body: "Staff send receipts from their own phones. You approve with one tap, and balances owed to each person are tracked." },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "Running in a day, not a quarter.",
      steps: [
        { title: "Set up", body: "Your company details, TRN, invoice template and team numbers are set up once." },
        { title: "Work from WhatsApp", body: "Send sales, receipts and payments as they happen — by text, voice note or photo." },
        { title: "Review on the dashboard", body: "Check figures, reports and VAT position whenever you sit down with them." },
        { title: "File", body: "Your VAT return comes from the same books — filed by you, your accountant or our team." },
      ],
    },
    audience: {
      eyebrow: "Who it's for",
      title: "Built for receipt-heavy businesses.",
      items: ["Trading companies", "Technical services and contractors", "Clinics and medical centres", "Restaurants and cafés", "Professional services firms", "Accounting firms with many clients"],
    },
    product: {
      key: "fisqel",
      eyebrow: "Delivered through Fisqel",
      title: "This solution is our product, Fisqel.",
      body: "Fisqel is the WhatsApp-first accounting platform we build and run. Its full feature list, pricing and sign-up live on fisqel.com.",
      link: "Explore Fisqel",
      href: "/products/fisqel",
      external: { label: "See pricing on fisqel.com", href: "https://fisqel.com/pricing" },
    },
    faq: [
      { q: "Do I need to know accounting?", a: "No. You describe what happened in plain words; the double-entry bookkeeping, VAT treatment and filing happen behind it." },
      { q: "Is it real accounting or just a log of numbers?", a: "Real accounting: a double-entry ledger with journal entries, liability and cash accounts, ready for an accountant's review." },
      { q: "Can my accountant use it too?", a: "Yes. Accountants can see the same books, and accounting firms can manage all their clients from one dashboard." },
      { q: "Does it work in Arabic?", a: "Yes. Messages, voice notes and invoices work in Arabic and English." },
      { q: "How much does it cost?", a: "Current plans are published on fisqel.com/pricing." },
    ],
    form: { title: "Want a walkthrough first?", body: "Tell us about your business and we'll show you how your books would run.", interest: 0 },
  },
  {
    slug: "tax-filing",
    name: "VAT & corporate tax filing",
    summary: "We prepare and file your VAT and corporate tax returns from books kept current all year.",
    meta: {
      title: "VAT and corporate tax return filing in the UAE — Lexoro Solutions",
      description: "VAT return filing and corporate tax return filing for UAE businesses, prepared from reconciled books and filed with the Federal Tax Authority.",
    },
    hero: {
      eyebrow: "Solutions · VAT and corporate tax",
      title: "VAT and corporate tax returns, filed on time.",
      body: "We prepare and file VAT and corporate tax returns for UAE businesses, from books kept current all year — so filing day is a review, not a rescue.",
      primary: "Get a filing quote",
    },
    included: {
      eyebrow: "What we do",
      title: "From your records to the filed return.",
      body: "One team handles the reconciliation, the return and the follow-up, and keeps your records in order for any FTA query.",
      items: [
        { title: "VAT return filing", body: "Each tax period we reconcile sales and purchases, classify every line, work out output VAT and recoverable input VAT, and prepare the return for your approval before filing." },
        { title: "Corporate tax return filing", body: "Your annual corporate tax return, prepared from your financial statements with the adjustments the law requires, then filed after you approve it." },
        { title: "Catch-up bookkeeping", body: "If your books are behind, we bring them current first, so the return is built on figures you can stand behind." },
        { title: "Deadline tracking", body: "We track your tax periods and remind you well before each return is due." },
        { title: "Organised records", body: "Invoices, receipts and workings kept together for each return, ready if the FTA asks." },
        { title: "One point of contact", body: "The same team knows your business from one period to the next." },
      ],
    },
    facts: {
      eyebrow: "Key dates and rates",
      title: "The rules we file against.",
      items: [
        { label: "VAT standard rate", value: "5%" },
        { label: "VAT return due", value: "Within 28 days after each tax period ends" },
        { label: "Corporate tax rate", value: "0% up to AED 375,000 taxable income, 9% above" },
        { label: "Corporate tax return due", value: "Within 9 months after the financial year ends" },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "Four steps every period.",
      steps: [
        { title: "Share your records", body: "Sales and purchase invoices, receipts and bank statements — or give us access to Fisqel." },
        { title: "We reconcile and prepare", body: "We check the figures against the bank, classify each line and prepare the return." },
        { title: "You review and approve", body: "You see the numbers and our workings before anything is filed." },
        { title: "We file and confirm", body: "We file through the FTA's EmaraTax portal and send you the confirmation." },
      ],
    },
    audience: {
      eyebrow: "Who it's for",
      title: "Businesses that would rather not do this themselves.",
      items: ["VAT-registered SMEs", "Companies filing their first corporate tax return", "Free zone and mainland companies", "Businesses behind on their bookkeeping", "Owners who want one team for books and tax"],
    },
    product: {
      key: "fisqel",
      eyebrow: "Faster with Fisqel",
      title: "Clean books all year make filing simple.",
      body: "Clients who keep their books in Fisqel have every line classified as it happens, so their VAT return is mostly ready before the period ends. Fisqel is optional — we can work from your existing records.",
      link: "Explore Fisqel",
      href: "/products/fisqel",
    },
    faq: [
      { q: "Do I have to use Fisqel?", a: "No. We can work from your current software, spreadsheets or paper records. Fisqel simply makes each period faster." },
      { q: "How is it priced?", a: "We quote per company, based on your volume of transactions and how often you file. Send us a message for a quote." },
      { q: "What do you need from me?", a: "Your TRN, access or authorisation for EmaraTax, your sales and purchase records, and bank statements for the period." },
      { q: "Do you handle free zone companies?", a: "Yes. Corporate tax applies to free zone companies too, and we file for them." },
      { q: "Can you help if a deadline has passed?", a: "Yes. Contact us as soon as possible — the sooner the return is filed, the smaller the penalties tend to be." },
    ],
    form: { title: "Get a filing quote.", body: "Tell us your company, how you file today and roughly how many invoices you handle each month.", interest: 1 },
  },
  {
    slug: "whatsapp-automation",
    name: "WhatsApp automation",
    summary: "AI assistants on the official WhatsApp Business Platform that answer, book and hand over to your team.",
    meta: {
      title: "WhatsApp automation and AI assistants for UAE businesses — Lexoro Solutions",
      description: "AI assistants built on the official WhatsApp Business Platform: answer customers, take bookings and requests, and hand over to your team, in Arabic and English.",
    },
    hero: {
      eyebrow: "Solutions · WhatsApp automation",
      title: "AI assistants that work your WhatsApp.",
      body: "Your customers already message you on WhatsApp. We build assistants on the official WhatsApp Business Platform that answer them, take bookings and requests, and bring in your team when a person is needed — in Arabic and English.",
      primary: "Talk about your use case",
    },
    included: {
      eyebrow: "What we build",
      title: "A front line that never closes.",
      body: "Built on the same platform behind our own products.",
      items: [
        { title: "Official platform setup", body: "Your number connected to Meta's WhatsApp Business Platform, with business verification and approved message templates." },
        { title: "Natural conversations", body: "The assistant understands free-text messages in Arabic and English, and replies in the customer's language." },
        { title: "Bookings and requests", body: "Appointments, orders, quotes and enquiries captured and written into your calendar or systems." },
        { title: "Human hand-off", body: "When a conversation needs a person, it moves to your team with the full history attached." },
        { title: "Reminders and follow-ups", body: "Confirmations, reminders and follow-ups sent automatically, within Meta's messaging rules." },
        { title: "Dashboard", body: "Every conversation and outcome in one place, so you can see what customers ask and what gets resolved." },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "From first call to live assistant.",
      steps: [
        { title: "Discover", body: "We learn what customers ask you today and what a good answer looks like." },
        { title: "Design the conversation", body: "We agree what the assistant handles alone and when it hands over." },
        { title: "Build and connect", body: "We set up the platform, build the assistant and connect it to your tools." },
        { title: "Launch and improve", body: "We go live, watch real conversations and keep tuning the answers." },
      ],
    },
    audience: {
      eyebrow: "Who it's for",
      title: "Teams answering the same questions every day.",
      items: ["Clinics and medical centres", "Service businesses taking bookings", "Real estate brokers", "Retail and trading companies", "Any business with a busy WhatsApp number"],
    },
    product: {
      key: "bizbrain",
      eyebrow: "Ready-made for clinics",
      title: "For clinics, it already exists: BizBrain.",
      body: "BizBrain is our AI front desk for UAE clinics — bookings, reminders and hand-off on the clinic's WhatsApp, ready to start with a free trial.",
      link: "Explore BizBrain",
      href: "/products/bizbrain",
    },
    faq: [
      { q: "Is this the official WhatsApp API?", a: "Yes. Everything we build runs on Meta's WhatsApp Business Platform, never on unofficial tools that risk your number being banned." },
      { q: "Can I keep my current number?", a: "Usually, yes. We check your number and explain the options before anything is moved." },
      { q: "Who pays WhatsApp messaging fees?", a: "Meta charges its own fees for some messages, billed separately from our work. We'll explain what to expect for your volume." },
      { q: "How long does it take?", a: "It depends on how much the assistant should do and what it connects to. We give you a plan and timeline after the first call." },
    ],
    form: { title: "Tell us what your customers ask.", body: "Share what your team answers on WhatsApp today and we'll suggest what an assistant could handle.", interest: 3 },
  },
  {
    slug: "custom-software",
    name: "Custom software",
    summary: "Dashboards, tracking systems and workflows built around the way your business already works.",
    meta: {
      title: "Custom software development in the UAE — Lexoro Solutions",
      description: "Custom dashboards, tracking systems, workflow automation and integrations for UAE businesses, built by the team behind Fisqel and BizBrain.",
    },
    hero: {
      eyebrow: "Solutions · Custom software",
      title: "Software built around how you work.",
      body: "When off-the-shelf tools don't fit, we design and build internal systems — dashboards, tracking, workflows and integrations — with the same engineering behind our own products.",
      primary: "Start a conversation",
    },
    included: {
      eyebrow: "What we build",
      title: "Systems that replace the spreadsheets.",
      body: "Web apps that work on desktop and phone, hosted and supported by us.",
      items: [
        { title: "Operations dashboards", body: "One screen for the numbers your team checks every morning, from live data." },
        { title: "Tracking systems", body: "Follow assets, shipments, jobs or orders across sites, with status, timelines and history." },
        { title: "Workflow automation", body: "Approvals, documents and notifications that move on their own instead of by email chains." },
        { title: "Integrations", body: "Connect WhatsApp, accounting, calendars and the tools you already use, so data is entered once." },
        { title: "Documents and records", body: "Generate quotations, invoices, delivery notes and reports from the data in your system." },
        { title: "Hosting and support", body: "We run the system after launch and keep improving it as your business changes." },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "Built in phases you can see.",
      steps: [
        { title: "Discovery", body: "We map how the work happens today and what the system must do." },
        { title: "Plan and quote", body: "You get a phased plan with a clear scope and price for each phase." },
        { title: "Build with demos", body: "We build in short phases and show you working software along the way." },
        { title: "Launch and support", body: "We launch, train your team and stay on to support and extend it." },
      ],
    },
    audience: {
      eyebrow: "Who it's for",
      title: "Businesses that have outgrown spreadsheets.",
      items: ["Logistics and shipping companies", "Construction and technical services", "Trading groups with several companies", "Operations teams tracking work across sites", "Any business with a process no product fits"],
    },
    faq: [
      { q: "How is a project priced?", a: "We quote each phase after discovery. Work usually starts with a deposit, with the balance tied to milestones." },
      { q: "Can you build on what we already have?", a: "Yes. We can connect to your existing tools and data rather than replacing everything at once." },
      { q: "Who looks after the system after launch?", a: "We do. We host it, fix issues and keep developing it with you." },
      { q: "Will it work on phones?", a: "Yes. Everything we build works in the browser on desktop and phone." },
    ],
    form: { title: "Describe what you need.", body: "A few lines about the problem is enough. We'll come back with questions and next steps.", interest: 5 },
  },
];

const ar: Solution[] = [
  {
    slug: "accounting-software",
    name: "برنامج المحاسبة",
    summary: "الفواتير والإيصالات والمدفوعات تُسجَّل من واتساب في دفتر قيد مزدوج حقيقي يبقى جاهزًا للضريبة.",
    meta: {
      title: "برنامج محاسبة للأعمال في الإمارات — ليكسورو سوليوشنز",
      description: "محاسبة عبر واتساب للمنشآت الصغيرة والمتوسطة في الإمارات: فواتير ضريبية، والتقاط المصروفات، ودفتر قيد مزدوج، ودفاتر جاهزة للضريبة.",
    },
    hero: {
      eyebrow: "الحلول · برنامج المحاسبة",
      title: "محاسبة تُحدّث نفسها بنفسها.",
      body: "تتأخر معظم الأعمال الصغيرة في دفاترها لأن البرامج صعبة الاستخدام. برنامجنا يعمل من واتساب، فتُسجَّل الفواتير والإيصالات والمدفوعات يوم حدوثها — وتبقى الدفاتر جاهزة للضريبة دائمًا.",
      primary: "ابدأ على fisqel.com",
    },
    included: {
      eyebrow: "ما الذي يشمله",
      title: "كل ما يفعله المحاسب كل أسبوع.",
      body: "خلف محادثة بسيطة محاسبة حقيقية تصمد أمام مراجعة المحاسب.",
      items: [
        { title: "فواتير ضريبية إماراتية", body: "صف عملية البيع في رسالة، فتحصل على فاتورة ضريبية متوافقة برقم التسجيل الضريبي وعناوين ثنائية اللغة وضريبة صحيحة، بملف PDF يحمل شعارك وختمك وتوقيعك." },
        { title: "التقاط المصروفات", body: "أرسل صورة أي إيصال، فيُقرأ المورّد والمبلغ والتاريخ والضريبة، ويُصنَّف المصروف، وتُحفظ الصورة مع القيد." },
        { title: "دفتر قيد مزدوج حقيقي", body: "كل معاملة تُرحَّل كقيود يومية صحيحة — بما فيها ما تدين به للموظفين الذين دفعوا مصروفات من جيوبهم." },
        { title: "جاهزية ضريبية طوال العام", body: "يُصنَّف كل بند كخاضع للنسبة الأساسية أو الصفرية أو معفى لحظة حدوثه، فيُعدّ الإقرار باستمرار بدل إعادة بنائه عند الموعد." },
        { title: "لوحة تحكم وتقارير", body: "المركز النقدي، والداخل والخارج، والفواتير المستحقة والمتأخرة، وتوزيع المصروفات، ووضع الضريبة والربح — من أرقام حيّة." },
        { title: "فريقك وموافقتك", body: "يرسل الموظفون الإيصالات من هواتفهم، وتوافق بلمسة واحدة، وتُتابَع المبالغ المستحقة لكل شخص." },
      ],
    },
    process: {
      eyebrow: "كيف يعمل",
      title: "يعمل خلال يوم، لا خلال ربع سنة.",
      steps: [
        { title: "الإعداد", body: "تُضبط بيانات شركتك ورقم التسجيل الضريبي وقالب الفاتورة وأرقام الفريق مرة واحدة." },
        { title: "اعمل من واتساب", body: "أرسل المبيعات والإيصالات والمدفوعات لحظة حدوثها — نصًا أو رسالة صوتية أو صورة." },
        { title: "راجع على اللوحة", body: "تحقّق من الأرقام والتقارير ووضع الضريبة متى جلست إليها." },
        { title: "قدّم الإقرار", body: "إقرارك الضريبي يخرج من الدفاتر نفسها — تقدّمه أنت أو محاسبك أو فريقنا." },
      ],
    },
    audience: {
      eyebrow: "لمن هو",
      title: "مبني للأعمال الكثيرة الإيصالات.",
      items: ["الشركات التجارية", "الخدمات الفنية والمقاولون", "العيادات والمراكز الطبية", "المطاعم والمقاهي", "شركات الخدمات المهنية", "مكاتب المحاسبة ذات العملاء المتعددين"],
    },
    product: {
      key: "fisqel",
      eyebrow: "يُقدَّم عبر Fisqel",
      title: "هذا الحل هو منتجنا Fisqel.",
      body: "Fisqel منصة المحاسبة عبر واتساب التي نبنيها ونشغّلها. قائمة مزاياها الكاملة وأسعارها والتسجيل فيها على fisqel.com.",
      link: "استكشف Fisqel",
      href: "/products/fisqel",
      external: { label: "الأسعار على fisqel.com", href: "https://fisqel.com/ar/pricing" },
    },
    faq: [
      { q: "هل أحتاج إلى معرفة بالمحاسبة؟", a: "لا. تصف ما حدث بكلمات بسيطة، ويتم القيد المزدوج والمعالجة الضريبية والتقديم في الخلفية." },
      { q: "هل هي محاسبة حقيقية أم مجرد سجل أرقام؟", a: "محاسبة حقيقية: دفتر قيد مزدوج بقيود يومية وحسابات التزامات ونقد، جاهز لمراجعة المحاسب." },
      { q: "هل يستطيع محاسبي استخدامه؟", a: "نعم. يرى المحاسبون الدفاتر نفسها، وتستطيع مكاتب المحاسبة إدارة كل عملائها من لوحة واحدة." },
      { q: "هل يعمل بالعربية؟", a: "نعم. الرسائل والرسائل الصوتية والفواتير تعمل بالعربية والإنجليزية." },
      { q: "كم التكلفة؟", a: "الباقات الحالية منشورة على fisqel.com/pricing." },
    ],
    form: { title: "تريد جولة تعريفية أولًا؟", body: "أخبرنا عن عملك وسنريك كيف ستعمل دفاترك.", interest: 0 },
  },
  {
    slug: "tax-filing",
    name: "إقرارات ضريبة القيمة المضافة والشركات",
    summary: "نُعدّ إقراراتك ونقدّمها من دفاتر محدَّثة طوال العام.",
    meta: {
      title: "تقديم إقرارات ضريبة القيمة المضافة وضريبة الشركات في الإمارات — ليكسورو سوليوشنز",
      description: "إعداد وتقديم إقرارات ضريبة القيمة المضافة وضريبة الشركات للأعمال في الإمارات، من دفاتر مطابَقة، إلى الهيئة الاتحادية للضرائب.",
    },
    hero: {
      eyebrow: "الحلول · ضريبة القيمة المضافة وضريبة الشركات",
      title: "إقراراتك الضريبية، مقدَّمة في موعدها.",
      body: "نُعدّ إقرارات ضريبة القيمة المضافة وضريبة الشركات ونقدّمها للأعمال في الإمارات، من دفاتر محدَّثة طوال العام — فيصبح يوم التقديم مراجعة لا عملية إنقاذ.",
      primary: "اطلب عرض سعر للتقديم",
    },
    included: {
      eyebrow: "ما نقوم به",
      title: "من سجلاتك إلى الإقرار المقدَّم.",
      body: "فريق واحد يتولى المطابقة والإقرار والمتابعة، ويُبقي سجلاتك مرتبة لأي استفسار من الهيئة.",
      items: [
        { title: "تقديم إقرار ضريبة القيمة المضافة", body: "في كل فترة ضريبية نطابق المبيعات والمشتريات، ونصنّف كل بند، ونحسب ضريبة المخرجات وضريبة المدخلات القابلة للاسترداد، ونُعدّ الإقرار لموافقتك قبل التقديم." },
        { title: "تقديم إقرار ضريبة الشركات", body: "إقرارك السنوي لضريبة الشركات، يُعدّ من قوائمك المالية مع التعديلات التي يتطلبها القانون، ثم يُقدَّم بعد موافقتك." },
        { title: "استكمال الدفاتر المتأخرة", body: "إن كانت دفاترك متأخرة، نحدّثها أولًا ليُبنى الإقرار على أرقام موثوقة." },
        { title: "متابعة المواعيد", body: "نتابع فتراتك الضريبية ونذكّرك قبل موعد كل إقرار بوقت كافٍ." },
        { title: "سجلات منظّمة", body: "الفواتير والإيصالات وأوراق العمل محفوظة معًا لكل إقرار، جاهزة إن طلبتها الهيئة." },
        { title: "جهة تواصل واحدة", body: "الفريق نفسه يعرف عملك من فترة إلى أخرى." },
      ],
    },
    facts: {
      eyebrow: "مواعيد ونسب أساسية",
      title: "القواعد التي نقدّم وفقها.",
      items: [
        { label: "النسبة الأساسية لضريبة القيمة المضافة", value: "5%" },
        { label: "موعد إقرار ضريبة القيمة المضافة", value: "خلال 28 يومًا بعد نهاية كل فترة ضريبية" },
        { label: "نسبة ضريبة الشركات", value: "0% حتى 375,000 درهم من الدخل الخاضع للضريبة، و9% لما يزيد" },
        { label: "موعد إقرار ضريبة الشركات", value: "خلال 9 أشهر بعد نهاية السنة المالية" },
      ],
    },
    process: {
      eyebrow: "كيف يعمل",
      title: "أربع خطوات في كل فترة.",
      steps: [
        { title: "شارك سجلاتك", body: "فواتير المبيعات والمشتريات والإيصالات وكشوف الحساب — أو امنحنا الوصول إلى Fisqel." },
        { title: "نطابق ونُعدّ", body: "نطابق الأرقام مع البنك، ونصنّف كل بند، ونُعدّ الإقرار." },
        { title: "تراجع وتوافق", body: "ترى الأرقام وأوراق عملنا قبل تقديم أي شيء." },
        { title: "نقدّم ونؤكد", body: "نقدّم عبر منصة إمارات تاكس التابعة للهيئة ونرسل لك التأكيد." },
      ],
    },
    audience: {
      eyebrow: "لمن هي",
      title: "للأعمال التي تفضّل ألا تتولى ذلك بنفسها.",
      items: ["المنشآت المسجّلة في ضريبة القيمة المضافة", "الشركات التي تقدّم أول إقرار لضريبة الشركات", "شركات المناطق الحرة والبر الرئيسي", "الأعمال المتأخرة في دفاترها", "أصحاب الأعمال الذين يريدون فريقًا واحدًا للدفاتر والضرائب"],
    },
    product: {
      key: "fisqel",
      eyebrow: "أسرع مع Fisqel",
      title: "دفاتر نظيفة طوال العام تجعل التقديم بسيطًا.",
      body: "العملاء الذين يمسكون دفاترهم في Fisqel يُصنَّف كل بند لديهم لحظة حدوثه، فيكون إقرارهم جاهزًا في معظمه قبل نهاية الفترة. استخدام Fisqel اختياري — يمكننا العمل من سجلاتك الحالية.",
      link: "استكشف Fisqel",
      href: "/products/fisqel",
    },
    faq: [
      { q: "هل يجب أن أستخدم Fisqel؟", a: "لا. يمكننا العمل من برنامجك الحالي أو جداولك أو سجلاتك الورقية. Fisqel يجعل كل فترة أسرع فحسب." },
      { q: "كيف يُحدَّد السعر؟", a: "نقدّم عرض سعر لكل شركة بحسب حجم معاملاتها وعدد مرات التقديم. راسلنا لعرض السعر." },
      { q: "ماذا تحتاجون مني؟", a: "رقم التسجيل الضريبي، والوصول إلى إمارات تاكس أو تفويضنا، وسجلات المبيعات والمشتريات، وكشوف الحساب للفترة." },
      { q: "هل تتعاملون مع شركات المناطق الحرة؟", a: "نعم. ضريبة الشركات تسري على شركات المناطق الحرة أيضًا، ونقدّم إقراراتها." },
      { q: "هل يمكنكم المساعدة إن فات الموعد؟", a: "نعم. تواصل معنا بأسرع وقت — فكلما قُدّم الإقرار أبكر قلّت الغرامات عادة." },
    ],
    form: { title: "اطلب عرض سعر للتقديم.", body: "أخبرنا عن شركتك وطريقة تقديمك الحالية وعدد الفواتير الشهرية تقريبًا.", interest: 1 },
  },
  {
    slug: "whatsapp-automation",
    name: "أتمتة واتساب",
    summary: "مساعدون أذكياء على منصة واتساب للأعمال الرسمية يردّون ويحجزون ويحوّلون إلى فريقك.",
    meta: {
      title: "أتمتة واتساب ومساعدون أذكياء للأعمال في الإمارات — ليكسورو سوليوشنز",
      description: "مساعدون أذكياء على منصة واتساب للأعمال الرسمية: يردّون على العملاء، ويستقبلون الحجوزات والطلبات، ويحوّلون إلى فريقك، بالعربية والإنجليزية.",
    },
    hero: {
      eyebrow: "الحلول · أتمتة واتساب",
      title: "مساعدون أذكياء يديرون واتساب أعمالك.",
      body: "عملاؤك يراسلونك على واتساب أصلًا. نبني مساعدين على منصة واتساب للأعمال الرسمية يردّون عليهم، ويستقبلون الحجوزات والطلبات، ويُدخلون فريقك حين يلزم شخص — بالعربية والإنجليزية.",
      primary: "حدّثنا عن احتياجك",
    },
    included: {
      eyebrow: "ما نبنيه",
      title: "خط أمامي لا يُغلق أبدًا.",
      body: "مبني على المنصة نفسها التي تقوم عليها منتجاتنا.",
      items: [
        { title: "إعداد المنصة الرسمية", body: "ربط رقمك بمنصة واتساب للأعمال من ميتا، مع توثيق النشاط التجاري وقوالب رسائل معتمدة." },
        { title: "محادثات طبيعية", body: "يفهم المساعد الرسائل الحرة بالعربية والإنجليزية، ويرد بلغة العميل." },
        { title: "الحجوزات والطلبات", body: "المواعيد والطلبات وعروض الأسعار والاستفسارات تُسجَّل في تقويمك أو أنظمتك." },
        { title: "التحويل إلى الفريق", body: "حين تحتاج المحادثة إلى شخص، تنتقل إلى فريقك بتاريخها الكامل." },
        { title: "التذكيرات والمتابعة", body: "تأكيدات وتذكيرات ومتابعات تُرسَل تلقائيًا، ضمن قواعد ميتا للمراسلة." },
        { title: "لوحة تحكم", body: "كل المحادثات ونتائجها في مكان واحد، لترى ما يسأله العملاء وما يُحَل." },
      ],
    },
    process: {
      eyebrow: "طريقة عملنا",
      title: "من أول مكالمة إلى مساعد يعمل.",
      steps: [
        { title: "الاكتشاف", body: "نتعرّف على ما يسألك عنه العملاء اليوم وما هي الإجابة الجيدة." },
        { title: "تصميم المحادثة", body: "نتفق على ما يتولاه المساعد وحده ومتى يحوّل." },
        { title: "البناء والربط", body: "نُعدّ المنصة، ونبني المساعد، ونربطه بأدواتك." },
        { title: "الإطلاق والتحسين", body: "نطلقه، ونتابع المحادثات الحقيقية، ونواصل تحسين الإجابات." },
      ],
    },
    audience: {
      eyebrow: "لمن هي",
      title: "للفرق التي تجيب الأسئلة نفسها كل يوم.",
      items: ["العيادات والمراكز الطبية", "أعمال الخدمات التي تستقبل الحجوزات", "وسطاء العقارات", "شركات التجزئة والتجارة", "أي عمل لديه رقم واتساب مزدحم"],
    },
    product: {
      key: "bizbrain",
      eyebrow: "جاهز للعيادات",
      title: "للعيادات، الحل موجود: BizBrain.",
      body: "BizBrain مكتب الاستقبال الذكي لعيادات الإمارات — حجوزات وتذكيرات وتحويل إلى الفريق على واتساب العيادة، مع تجربة مجانية.",
      link: "استكشف BizBrain",
      href: "/products/bizbrain",
    },
    faq: [
      { q: "هل هذه واجهة واتساب الرسمية؟", a: "نعم. كل ما نبنيه يعمل على منصة واتساب للأعمال من ميتا، لا على أدوات غير رسمية قد تعرّض رقمك للحظر." },
      { q: "هل أحتفظ برقمي الحالي؟", a: "غالبًا نعم. نفحص رقمك ونشرح الخيارات قبل نقل أي شيء." },
      { q: "من يدفع رسوم رسائل واتساب؟", a: "تفرض ميتا رسومها على بعض الرسائل، وتُحصَّل منفصلة عن عملنا. سنوضح ما تتوقعه بحسب حجمك." },
      { q: "كم يستغرق ذلك؟", a: "يعتمد على ما سيقوم به المساعد وما يرتبط به. نقدّم لك خطة وجدولًا زمنيًا بعد المكالمة الأولى." },
    ],
    form: { title: "أخبرنا بما يسأله عملاؤك.", body: "شاركنا ما يجيب عنه فريقك على واتساب اليوم، وسنقترح ما يمكن للمساعد تولّيه.", interest: 3 },
  },
  {
    slug: "custom-software",
    name: "برمجيات مخصّصة",
    summary: "لوحات تحكم وأنظمة تتبّع وسير عمل مبنية حول طريقة عمل شركتك.",
    meta: {
      title: "تطوير برمجيات مخصّصة في الإمارات — ليكسورو سوليوشنز",
      description: "لوحات تحكم مخصّصة وأنظمة تتبّع وأتمتة سير العمل والتكاملات للأعمال في الإمارات، من الفريق الذي بنى Fisqel وBizBrain.",
    },
    hero: {
      eyebrow: "الحلول · برمجيات مخصّصة",
      title: "برمجيات مبنية حول طريقة عملك.",
      body: "حين لا تناسبك الأدوات الجاهزة، نصمّم ونبني أنظمة داخلية — لوحات تحكم وتتبّع وسير عمل وتكاملات — بالهندسة نفسها التي تقوم عليها منتجاتنا.",
      primary: "ابدأ المحادثة",
    },
    included: {
      eyebrow: "ما نبنيه",
      title: "أنظمة تحلّ محل الجداول.",
      body: "تطبيقات ويب تعمل على الكمبيوتر والهاتف، نستضيفها وندعمها.",
      items: [
        { title: "لوحات تحكم تشغيلية", body: "شاشة واحدة للأرقام التي يراجعها فريقك كل صباح، من بيانات حيّة." },
        { title: "أنظمة تتبّع", body: "تابع الأصول أو الشحنات أو الأعمال أو الطلبات عبر المواقع، بالحالة والجدول الزمني والسجل." },
        { title: "أتمتة سير العمل", body: "موافقات ومستندات وإشعارات تتحرك تلقائيًا بدل سلاسل البريد الإلكتروني." },
        { title: "التكاملات", body: "اربط واتساب والمحاسبة والتقاويم وأدواتك الحالية، لتُدخَل البيانات مرة واحدة." },
        { title: "المستندات والسجلات", body: "أنشئ عروض الأسعار والفواتير وإشعارات التسليم والتقارير من بيانات نظامك." },
        { title: "الاستضافة والدعم", body: "نشغّل النظام بعد الإطلاق ونواصل تطويره مع تغيّر عملك." },
      ],
    },
    process: {
      eyebrow: "طريقة عملنا",
      title: "نبني على مراحل تراها بنفسك.",
      steps: [
        { title: "الاكتشاف", body: "نرسم كيف يجري العمل اليوم وما يجب أن يفعله النظام." },
        { title: "الخطة والسعر", body: "تحصل على خطة مرحلية بنطاق وسعر واضحين لكل مرحلة." },
        { title: "البناء مع العروض", body: "نبني على مراحل قصيرة ونريك برمجيات تعمل على طول الطريق." },
        { title: "الإطلاق والدعم", body: "نطلق النظام، وندرّب فريقك، ونبقى معك للدعم والتوسعة." },
      ],
    },
    audience: {
      eyebrow: "لمن هي",
      title: "للأعمال التي تجاوزت الجداول.",
      items: ["شركات اللوجستيات والشحن", "المقاولات والخدمات الفنية", "المجموعات التجارية متعددة الشركات", "فرق العمليات التي تتابع العمل عبر المواقع", "أي عمل لديه إجراء لا يناسبه منتج جاهز"],
    },
    faq: [
      { q: "كيف يُسعَّر المشروع؟", a: "نسعّر كل مرحلة بعد الاكتشاف. يبدأ العمل عادة بدفعة مقدمة، ويرتبط الباقي بمراحل الإنجاز." },
      { q: "هل يمكنكم البناء على ما لدينا؟", a: "نعم. يمكننا الربط بأدواتك وبياناتك الحالية بدل استبدال كل شيء دفعة واحدة." },
      { q: "من يعتني بالنظام بعد الإطلاق؟", a: "نحن. نستضيفه، ونعالج المشكلات، ونواصل تطويره معك." },
      { q: "هل يعمل على الهواتف؟", a: "نعم. كل ما نبنيه يعمل في المتصفح على الكمبيوتر والهاتف." },
    ],
    form: { title: "صف ما تحتاجه.", body: "بضعة أسطر عن المشكلة تكفي. سنعود إليك بأسئلة والخطوات التالية.", interest: 5 },
  },
];

const indexEn: SolutionsIndex = {
  meta: {
    title: "Software and accounting solutions — Lexoro Solutions",
    description: "Accounting software, VAT and corporate tax filing, WhatsApp automation and custom software for UAE businesses.",
  },
  hero: {
    eyebrow: "Solutions",
    title: "What we do for UAE businesses.",
    body: "Some of our work is software you use every day; some is work our team does for you. Most clients use both: the software keeps the books, and we file the returns.",
  },
  why: {
    eyebrow: "Why one company",
    title: "Software and service that share the same books.",
    items: [
      { title: "No hand-offs", body: "The team that files your return knows the software your books live in." },
      { title: "Built for UAE rules", body: "VAT categories, tax invoices and filing deadlines are built in, not bolted on." },
      { title: "WhatsApp first", body: "Daily work happens in the app you already use, in Arabic or English." },
    ],
  },
  closing: { title: "Not sure where to start?", body: "Tell us how your business runs today and we'll suggest the simplest next step." },
};

const indexAr: SolutionsIndex = {
  meta: {
    title: "حلول برمجية ومحاسبية — ليكسورو سوليوشنز",
    description: "برنامج محاسبة، وتقديم إقرارات ضريبة القيمة المضافة وضريبة الشركات، وأتمتة واتساب، وبرمجيات مخصّصة للأعمال في الإمارات.",
  },
  hero: {
    eyebrow: "الحلول",
    title: "ما نقدّمه للأعمال في الإمارات.",
    body: "بعض عملنا برمجيات تستخدمها كل يوم، وبعضه عمل يقوم به فريقنا عنك. ومعظم العملاء يستخدمون الاثنين: البرمجيات تمسك الدفاتر، ونحن نقدّم الإقرارات.",
  },
  why: {
    eyebrow: "لماذا شركة واحدة",
    title: "برمجيات وخدمة تشتركان في الدفاتر نفسها.",
    items: [
      { title: "بلا تسليم بين جهات", body: "الفريق الذي يقدّم إقرارك يعرف البرنامج الذي تعيش فيه دفاترك." },
      { title: "مبنية لقواعد الإمارات", body: "فئات الضريبة والفواتير الضريبية ومواعيد التقديم جزء أصيل منها." },
      { title: "واتساب أولًا", body: "العمل اليومي في التطبيق الذي تستخدمه أصلًا، بالعربية أو الإنجليزية." },
    ],
  },
  closing: { title: "لست متأكدًا من أين تبدأ؟", body: "أخبرنا كيف يسير عملك اليوم وسنقترح أبسط خطوة تالية." },
};

export const getSolutions = (locale: Locale) => (locale === "ar" ? ar : en);
export const getSolution = (locale: Locale, slug: string) => getSolutions(locale).find((s) => s.slug === slug);
export const getSolutionsIndex = (locale: Locale) => (locale === "ar" ? indexAr : indexEn);
export const solutionSlugs = en.map((s) => s.slug);
