import type { Locale } from "@/lib/i18n";

/* Copy for Products, Fisqel, About and Contact. English defines the shape. */

const en = {
  products: {
    meta: {
      title: "Products — Fisqel and BizBrain by Lexoro Solutions",
      description: "Lexoro Solutions builds and runs Fisqel, AI accounting on WhatsApp for UAE SMEs, and BizBrain, the AI front desk for UAE clinics.",
    },
    hero: {
      eyebrow: "Products",
      title: "Software we build and run ourselves.",
      body: "Each product solves one hard problem for UAE businesses and works where owners and customers already are: WhatsApp.",
    },
    items: [
      {
        key: "fisqel",
        name: "Fisqel",
        tag: "AI accounting on WhatsApp",
        title: "The accountant that lives in your WhatsApp.",
        body: "Send a message or a photo of a receipt and Fisqel does the bookkeeping: the UAE tax invoice, the VAT, the double-entry ledger and a return that's ready to file.",
        points: ["Tax invoices with the right VAT, from a chat", "Receipts read, categorised and filed", "Real double-entry ledger and live dashboard", "Team expenses with one-tap approval"],
        audience: "For UAE SMEs: trading companies, contractors, clinics, restaurants and services firms.",
        link: "Explore Fisqel",
        href: "/products/fisqel",
        external: { label: "fisqel.com", href: "https://fisqel.com" },
      },
      {
        key: "bizbrain",
        name: "BizBrain",
        tag: "AI front desk for clinics",
        title: "The AI front desk for UAE clinics.",
        body: "BizBrain answers patients on the clinic's WhatsApp number, books and reschedules appointments, sends reminders and hands over to staff when a person is needed.",
        points: ["24/7 booking and rescheduling", "Automatic reminders before each visit", "Hand-off to staff with full context", "Doctor schedules across branches"],
        audience: "For clinics, dental practices and medical centres across the UAE.",
        link: "Explore BizBrain",
        href: "/products/bizbrain",
        external: { label: "Start free trial", href: "https://app.lexorosolutions.com/register" },
      },
    ],
    platform: {
      eyebrow: "One platform",
      title: "What every Lexoro product shares.",
      items: [
        { title: "Official WhatsApp Business Platform", body: "Built on Meta's platform, never on unofficial tools." },
        { title: "Arabic and English", body: "Natural conversation in both languages, switching to match each person." },
        { title: "UAE first", body: "Shaped by UAE tax rules, documents and the way business is done here." },
      ],
    },
    closing: { title: "Which one fits your business?", body: "Tell us what you do and we'll point you to the right product — or build what's missing." },
  },
  fisqel: {
    meta: {
      title: "Fisqel — AI accounting on WhatsApp for UAE SMEs | Lexoro Solutions",
      description: "Fisqel turns WhatsApp messages and receipt photos into UAE tax invoices, VAT-ready books and a real double-entry ledger. A Lexoro Solutions product.",
    },
    hero: {
      eyebrow: "Products · Fisqel",
      title: "The accountant that lives in your WhatsApp.",
      body: "Tell Fisqel what happened in plain words — or send a photo of the receipt. It creates the tax invoice, works out the VAT, records the entry in a real ledger and keeps your VAT return ready to file.",
      primary: "Start on fisqel.com",
      secondary: "See pricing",
      note: "Sign-up, pricing and support are on fisqel.com.",
    },
    chat: {
      name: "Fisqel",
      status: "online",
      messages: [
        { from: "in", text: "Invoice Gulf Trading 5,000 for consultancy", time: "10:24" },
        { from: "out", text: "Draft ready: Gulf Trading LLC — Consultancy AED 5,000 + VAT 5% AED 250 = AED 5,250", chips: ["Send", "Edit"], time: "10:24" },
        { from: "in", text: "Send", time: "10:25" },
        { from: "out", text: "Sent. INV-0142 delivered as PDF and posted to your ledger. VAT return updated.", time: "10:25" },
      ],
    },
    features: {
      eyebrow: "What it does",
      title: "Your bookkeeping, handled from a chat.",
      items: [
        { title: "Invoicing", body: "UAE tax invoices with TRN, bilingual titles and the right VAT, in templates branded with your logo, stamp and signature.", path: "/features/invoicing" },
        { title: "Expenses", body: "Snap any bill. Vendor, amount, date and VAT are read, the expense is categorised and input VAT recoverability is checked.", path: "/features/expenses" },
        { title: "VAT returns", body: "Every line classified as standard-rated, zero-rated or exempt as it happens, so the return is prepared continuously.", path: "/features/vat-returns" },
        { title: "Quotations and projects", body: "Send quotations, turn them into invoices and follow each project's income and costs.", path: "/features/quotations-projects" },
        { title: "Team", body: "Employees submit receipts from their own phones; you approve with one tap and Fisqel tracks who is owed what.", path: "/features/team" },
        { title: "Dashboard and answers", body: "Cash position, overdue invoices, VAT status and profit — and plain-language answers to questions about your own books.", path: "/product" },
      ],
      link: "Read more on fisqel.com",
    },
    how: {
      eyebrow: "How it works",
      title: "A message in, accounting out.",
      steps: [
        { title: "Send it", body: "A text, a voice note or a photo — whatever happened today." },
        { title: "Fisqel books it", body: "Invoice or expense, VAT treatment and journal entries, created for you." },
        { title: "You confirm", body: "Check the draft and approve with one tap." },
        { title: "Ready to file", body: "Your VAT position updates continuously, ready for the return." },
      ],
    },
    different: {
      eyebrow: "Why it's different",
      title: "Simple on top. Rigorous underneath.",
      items: [
        { title: "A conversation, not software", body: "No dashboards to learn for daily work. Owners keep their books the way they already run their business." },
        { title: "AI-native", body: "Designed around natural language, voice notes and photos from the start." },
        { title: "Made for the UAE", body: "VAT logic follows UAE Federal Decree-Law treatments, and tax invoices meet UAE requirements." },
        { title: "Real accounting", body: "Double-entry bookkeeping and proper liability tracking that would satisfy an accountant and the FTA." },
        { title: "Team-aware", body: "Several people can feed the books from their own numbers, with owner approval and balances tracked." },
      ],
    },
    accountants: {
      eyebrow: "For accounting firms",
      title: "Manage every client from one dashboard.",
      body: "Clients send their invoices and receipts on WhatsApp as they happen, so you stop chasing paperwork every quarter and review clean, classified books instead.",
      link: "Fisqel for accountants",
      path: "/accountants",
    },
    faq: [
      { q: "Is Fisqel a separate company?", a: "Fisqel is a product built and operated by Lexoro Solutions FZC." },
      { q: "Where do I sign up?", a: "On fisqel.com. Sign-up, pricing, support and the full feature guides all live there." },
      { q: "Can Lexoro also file my VAT return?", a: "Yes. Our team can file VAT and corporate tax returns from your Fisqel books." },
      { q: "Does it work in Arabic?", a: "Yes. Messages, voice notes and invoices work in Arabic and English." },
    ],
    closing: { title: "Run your books from WhatsApp.", body: "Start on fisqel.com, or ask us anything first.", primary: "Go to fisqel.com" },
  },
  about: {
    meta: {
      title: "About Lexoro Solutions — a UAE software company",
      description: "Lexoro Solutions FZC is a UAE software company in Ajman Free Zone, building AI-native products and providing accounting and tax services.",
    },
    hero: {
      eyebrow: "About us",
      title: "We build the software UAE businesses run on.",
      body: "Lexoro Solutions is a software company registered in Ajman Free Zone. We design, build and operate our own products, and back them with hands-on accounting, tax and engineering services.",
    },
    story: {
      eyebrow: "Why we exist",
      title: "Business here runs on WhatsApp. Software should too.",
      paragraphs: [
        "Most small and medium businesses in the UAE are stuck between three bad options: software built for accountants that takes training to use, a bookkeeper for work that is mostly repetitive, or spreadsheets that fall behind until the VAT deadline arrives.",
        "Meanwhile, the real work of the business — customers, suppliers, staff — already happens on WhatsApp. So that's where we build. Our products turn everyday messages into proper records: tax invoices, ledger entries, bookings and returns.",
        "And because software alone doesn't file a tax return, we do that too. One company, from the first receipt to the filed return.",
      ],
    },
    pillars: {
      eyebrow: "What we do",
      title: "Three kinds of work.",
      items: [
        { title: "Products", body: "Fisqel for accounting and BizBrain for clinics — software we build, run and support ourselves.", href: "/products" },
        { title: "Accounting and tax services", body: "VAT and corporate tax returns prepared and filed by our team, from books kept current all year.", href: "/solutions/tax-filing" },
        { title: "Custom software", body: "Dashboards, tracking systems, automation and WhatsApp assistants built for a specific business.", href: "/solutions/custom-software" },
      ],
    },
    principles: {
      eyebrow: "How we work",
      title: "What we hold ourselves to.",
      items: [
        { title: "Correct before clever", body: "Money and tax have to be right. Our products sit on real double-entry accounting and UAE tax rules." },
        { title: "Meet people where they are", body: "WhatsApp, Arabic and English, phone-first. Nobody should have to learn new software to keep their books." },
        { title: "Honest about what we do", body: "We tell you what a product does today, what it costs and what is better done by a person." },
        { title: "Stay after launch", body: "We run what we build, and keep improving it with the people who use it." },
      ],
    },
    company: {
      eyebrow: "Company details",
      title: "Lexoro Solutions FZC.",
      facts: [
        { label: "Legal name", value: "Lexoro Solutions FZC" },
        { label: "Registered office", value: "Office F1, C1 Building, Ajman Free Zone, UAE" },
        { label: "Products", value: "Fisqel, BizBrain" },
        { label: "Services", value: "Bookkeeping, VAT and corporate tax filing, custom software" },
      ],
    },
    closing: { title: "Let's work together.", body: "Whether you need software, a tax return filed or a system built, start with a message." },
  },
  contact: {
    meta: {
      title: "Contact Lexoro Solutions",
      description: "Talk to Lexoro Solutions about accounting software, VAT and corporate tax filing, WhatsApp automation or custom software. WhatsApp, phone and email.",
    },
    hero: {
      eyebrow: "Contact",
      title: "Talk to us.",
      body: "Tell us a little about your business and what you need. We reply by email or WhatsApp — whichever you prefer.",
    },
    formTitle: "Send us a message",
    details: {
      title: "Other ways to reach us",
      whatsapp: "WhatsApp",
      phone: "Phone",
      email: "Email",
      office: "Office",
    },
    support: {
      title: "Already a customer?",
      items: [
        { label: "Fisqel support", body: "Help, billing and account questions for Fisqel.", href: "https://fisqel.com/contact", link: "fisqel.com/contact" },
        { label: "BizBrain support", body: "Sign in to your clinic dashboard, or message us on WhatsApp.", href: "https://app.lexorosolutions.com/login", link: "Clinic sign-in" },
      ],
    },
  },
};

export type PagesCopy = typeof en;

const ar: PagesCopy = {
  products: {
    meta: {
      title: "المنتجات — Fisqel وBizBrain من ليكسورو سوليوشنز",
      description: "تبني ليكسورو سوليوشنز وتشغّل Fisqel للمحاسبة الذكية عبر واتساب للمنشآت في الإمارات، وBizBrain مكتب الاستقبال الذكي لعيادات الإمارات.",
    },
    hero: {
      eyebrow: "المنتجات",
      title: "برمجيات نبنيها ونشغّلها بأنفسنا.",
      body: "كل منتج يحلّ مشكلة صعبة واحدة للأعمال في الإمارات، ويعمل حيث يوجد أصحاب الأعمال والعملاء أصلًا: واتساب.",
    },
    items: [
      {
        key: "fisqel",
        name: "Fisqel",
        tag: "محاسبة ذكية على واتساب",
        title: "المحاسب الذي يعيش في واتساب.",
        body: "أرسل رسالة أو صورة إيصال، ويتولى Fisqel مسك الدفاتر: الفاتورة الضريبية الإماراتية، والضريبة، ودفتر القيد المزدوج، وإقرار جاهز للتقديم.",
        points: ["فواتير ضريبية بالضريبة الصحيحة من محادثة", "إيصالات تُقرأ وتُصنَّف وتُحفظ", "دفتر قيد مزدوج حقيقي ولوحة مباشرة", "مصروفات الفريق بموافقة بلمسة واحدة"],
        audience: "للمنشآت في الإمارات: الشركات التجارية، والمقاولون، والعيادات، والمطاعم، وشركات الخدمات.",
        link: "استكشف Fisqel",
        href: "/products/fisqel",
        external: { label: "fisqel.com", href: "https://fisqel.com/ar" },
      },
      {
        key: "bizbrain",
        name: "BizBrain",
        tag: "مكتب استقبال ذكي للعيادات",
        title: "مكتب الاستقبال الذكي لعيادات الإمارات.",
        body: "يرد BizBrain على المرضى عبر رقم واتساب العيادة، ويحجز المواعيد ويعيد جدولتها، ويرسل التذكيرات، ويحوّل إلى الطاقم حين يلزم شخص.",
        points: ["حجز وإعادة جدولة على مدار الساعة", "تذكيرات تلقائية قبل كل زيارة", "تحويل إلى الطاقم مع السياق الكامل", "جداول الأطباء عبر الفروع"],
        audience: "للعيادات وعيادات الأسنان والمراكز الطبية في الإمارات.",
        link: "استكشف BizBrain",
        href: "/products/bizbrain",
        external: { label: "ابدأ التجربة المجانية", href: "https://app.lexorosolutions.com/register" },
      },
    ],
    platform: {
      eyebrow: "منصة واحدة",
      title: "ما تشترك فيه كل منتجات ليكسورو.",
      items: [
        { title: "منصة واتساب للأعمال الرسمية", body: "مبنية على منصة ميتا، لا على أدوات غير رسمية." },
        { title: "العربية والإنجليزية", body: "محادثة طبيعية باللغتين، تتبدّل لتناسب كل شخص." },
        { title: "الإمارات أولًا", body: "مصمَّمة وفق قواعد الضرائب والمستندات وطريقة العمل في الإمارات." },
      ],
    },
    closing: { title: "أيّها يناسب عملك؟", body: "أخبرنا بما تعمل، وسنرشدك إلى المنتج المناسب — أو نبني ما ينقصك." },
  },
  fisqel: {
    meta: {
      title: "Fisqel — محاسبة ذكية على واتساب للمنشآت في الإمارات | ليكسورو سوليوشنز",
      description: "يحوّل Fisqel رسائل واتساب وصور الإيصالات إلى فواتير ضريبية إماراتية ودفاتر جاهزة للضريبة ودفتر قيد مزدوج حقيقي. أحد منتجات ليكسورو سوليوشنز.",
    },
    hero: {
      eyebrow: "المنتجات · Fisqel",
      title: "المحاسب الذي يعيش في واتساب.",
      body: "أخبر Fisqel بما حدث بكلمات بسيطة — أو أرسل صورة الإيصال. ينشئ الفاتورة الضريبية، ويحسب الضريبة، ويسجّل القيد في دفتر حقيقي، ويُبقي إقرارك الضريبي جاهزًا للتقديم.",
      primary: "ابدأ على fisqel.com",
      secondary: "الأسعار",
      note: "التسجيل والأسعار والدعم على fisqel.com.",
    },
    chat: {
      name: "Fisqel",
      status: "متصل",
      messages: [
        { from: "in", text: "فاتورة لشركة الخليج التجارية 5,000 استشارات", time: "10:24" },
        { from: "out", text: "المسودة جاهزة: شركة الخليج التجارية — استشارات 5,000 د.إ + ضريبة 5% 250 د.إ = 5,250 د.إ", chips: ["إرسال", "تعديل"], time: "10:24" },
        { from: "in", text: "إرسال", time: "10:25" },
        { from: "out", text: "تم الإرسال. الفاتورة INV-0142 أُرسلت بصيغة PDF ورُحّلت إلى دفترك. تحدّث الإقرار الضريبي.", time: "10:25" },
      ],
    },
    features: {
      eyebrow: "ماذا يفعل",
      title: "مسك دفاترك، من محادثة.",
      items: [
        { title: "الفوترة", body: "فواتير ضريبية إماراتية برقم التسجيل وعناوين ثنائية اللغة والضريبة الصحيحة، بقوالب تحمل شعارك وختمك وتوقيعك.", path: "/features/invoicing" },
        { title: "المصروفات", body: "صوّر أي فاتورة. يُقرأ المورّد والمبلغ والتاريخ والضريبة، ويُصنَّف المصروف، ويُتحقق من قابلية استرداد ضريبة المدخلات.", path: "/features/expenses" },
        { title: "الإقرارات الضريبية", body: "كل بند يُصنَّف كخاضع للنسبة الأساسية أو الصفرية أو معفى لحظة حدوثه، فيُعدّ الإقرار باستمرار.", path: "/features/vat-returns" },
        { title: "عروض الأسعار والمشاريع", body: "أرسل عروض الأسعار، وحوّلها إلى فواتير، وتابع إيرادات كل مشروع وتكاليفه.", path: "/features/quotations-projects" },
        { title: "الفريق", body: "يرسل الموظفون الإيصالات من هواتفهم، وتوافق بلمسة، ويتابع Fisqel المستحق لكل شخص.", path: "/features/team" },
        { title: "لوحة وإجابات", body: "المركز النقدي، والفواتير المتأخرة، ووضع الضريبة، والربح — وإجابات بلغة بسيطة عن دفاترك.", path: "/product" },
      ],
      link: "اقرأ المزيد على fisqel.com",
    },
    how: {
      eyebrow: "كيف يعمل",
      title: "رسالة تدخل، ومحاسبة تخرج.",
      steps: [
        { title: "أرسلها", body: "نص أو رسالة صوتية أو صورة — أيًّا كان ما حدث اليوم." },
        { title: "Fisqel يقيّدها", body: "فاتورة أو مصروف، ومعالجة ضريبية، وقيود يومية تُنشأ لك." },
        { title: "تؤكد", body: "راجع المسودة ووافق بلمسة واحدة." },
        { title: "جاهز للتقديم", body: "يتحدّث وضعك الضريبي باستمرار، جاهزًا للإقرار." },
      ],
    },
    different: {
      eyebrow: "ما الذي يميّزه",
      title: "بسيط في الواجهة. دقيق في الأساس.",
      items: [
        { title: "محادثة، لا برنامج", body: "لا لوحات تتعلّمها للعمل اليومي. يمسك أصحاب الأعمال دفاترهم كما يديرون أعمالهم أصلًا." },
        { title: "قائم على الذكاء الاصطناعي", body: "مصمَّم منذ البداية حول اللغة الطبيعية والرسائل الصوتية والصور." },
        { title: "مصنوع للإمارات", body: "منطق الضريبة يتبع معالجات المرسوم بقانون اتحادي، والفواتير تستوفي متطلبات الإمارات." },
        { title: "محاسبة حقيقية", body: "قيد مزدوج ومتابعة صحيحة للالتزامات ترضي المحاسب والهيئة." },
        { title: "يعرف الفريق", body: "يستطيع عدة أشخاص تغذية الدفاتر من أرقامهم، بموافقة المالك ومتابعة الأرصدة." },
      ],
    },
    accountants: {
      eyebrow: "لمكاتب المحاسبة",
      title: "أدر كل عملائك من لوحة واحدة.",
      body: "يرسل العملاء فواتيرهم وإيصالاتهم على واتساب لحظة حدوثها، فتتوقف عن ملاحقة الأوراق كل ربع سنة وتراجع دفاتر نظيفة ومصنّفة.",
      link: "Fisqel للمحاسبين",
      path: "/accountants",
    },
    faq: [
      { q: "هل Fisqel شركة منفصلة؟", a: "Fisqel منتج تبنيه وتشغّله ليكسورو سوليوشنز م.م.ح." },
      { q: "أين أسجّل؟", a: "على fisqel.com. التسجيل والأسعار والدعم وأدلة المزايا كلها هناك." },
      { q: "هل تقدّم ليكسورو إقراري الضريبي أيضًا؟", a: "نعم. يستطيع فريقنا تقديم إقرارات ضريبة القيمة المضافة وضريبة الشركات من دفاترك في Fisqel." },
      { q: "هل يعمل بالعربية؟", a: "نعم. الرسائل والرسائل الصوتية والفواتير تعمل بالعربية والإنجليزية." },
    ],
    closing: { title: "أدر دفاترك من واتساب.", body: "ابدأ على fisqel.com، أو اسألنا أولًا عن أي شيء.", primary: "اذهب إلى fisqel.com" },
  },
  about: {
    meta: {
      title: "عن ليكسورو سوليوشنز — شركة برمجيات إماراتية",
      description: "ليكسورو سوليوشنز م.م.ح شركة برمجيات إماراتية في المنطقة الحرة بعجمان، تبني منتجات قائمة على الذكاء الاصطناعي وتقدّم خدمات محاسبية وضريبية.",
    },
    hero: {
      eyebrow: "من نحن",
      title: "نبني البرمجيات التي تعتمد عليها أعمال الإمارات.",
      body: "ليكسورو سوليوشنز شركة برمجيات مسجّلة في المنطقة الحرة بعجمان. نصمّم منتجاتنا ونبنيها ونشغّلها، وندعمها بخدمات محاسبية وضريبية وهندسية عملية.",
    },
    story: {
      eyebrow: "لماذا نحن هنا",
      title: "الأعمال هنا تعمل على واتساب. وينبغي للبرمجيات أن تفعل كذلك.",
      paragraphs: [
        "معظم المنشآت الصغيرة والمتوسطة في الإمارات عالقة بين ثلاثة خيارات سيئة: برامج مصمَّمة للمحاسبين تحتاج تدريبًا، أو محاسب لعمل متكرر في معظمه، أو جداول تتأخر حتى يحين موعد الإقرار الضريبي.",
        "وفي الوقت نفسه، يجري العمل الحقيقي — مع العملاء والموردين والموظفين — على واتساب أصلًا. لذلك نبني هناك. منتجاتنا تحوّل الرسائل اليومية إلى سجلات صحيحة: فواتير ضريبية، وقيود، وحجوزات، وإقرارات.",
        "ولأن البرمجيات وحدها لا تقدّم إقرارًا ضريبيًا، نقوم بذلك أيضًا. شركة واحدة، من أول إيصال حتى الإقرار المقدَّم.",
      ],
    },
    pillars: {
      eyebrow: "ما نقوم به",
      title: "ثلاثة أنواع من العمل.",
      items: [
        { title: "المنتجات", body: "Fisqel للمحاسبة وBizBrain للعيادات — برمجيات نبنيها ونشغّلها وندعمها بأنفسنا.", href: "/products" },
        { title: "خدمات المحاسبة والضرائب", body: "إقرارات ضريبة القيمة المضافة وضريبة الشركات يُعدّها فريقنا ويقدّمها، من دفاتر محدَّثة طوال العام.", href: "/solutions/tax-filing" },
        { title: "برمجيات مخصّصة", body: "لوحات تحكم وأنظمة تتبّع وأتمتة ومساعدو واتساب مبنية لعمل بعينه.", href: "/solutions/custom-software" },
      ],
    },
    principles: {
      eyebrow: "طريقة عملنا",
      title: "ما نلزم أنفسنا به.",
      items: [
        { title: "الصحة قبل البراعة", body: "المال والضرائب يجب أن تكون صحيحة. منتجاتنا قائمة على قيد مزدوج حقيقي وقواعد الضرائب في الإمارات." },
        { title: "نلقى الناس حيث هم", body: "واتساب، والعربية والإنجليزية، والهاتف أولًا. لا ينبغي لأحد أن يتعلم برنامجًا جديدًا ليمسك دفاتره." },
        { title: "الصدق فيما نقدّمه", body: "نخبرك بما يفعله المنتج اليوم، وكم يكلّف، وما الذي يُنجَز أفضل على يد شخص." },
        { title: "نبقى بعد الإطلاق", body: "نشغّل ما نبنيه، ونواصل تحسينه مع من يستخدمونه." },
      ],
    },
    company: {
      eyebrow: "بيانات الشركة",
      title: "ليكسورو سوليوشنز م.م.ح.",
      facts: [
        { label: "الاسم القانوني", value: "ليكسورو سوليوشنز م.م.ح" },
        { label: "المكتب المسجّل", value: "مكتب F1، مبنى C1، المنطقة الحرة بعجمان، الإمارات" },
        { label: "المنتجات", value: "Fisqel، BizBrain" },
        { label: "الخدمات", value: "مسك الدفاتر، وتقديم الإقرارات الضريبية، والبرمجيات المخصّصة" },
      ],
    },
    closing: { title: "لنعمل معًا.", body: "سواء احتجت برمجيات أو تقديم إقرار ضريبي أو بناء نظام، ابدأ برسالة." },
  },
  contact: {
    meta: {
      title: "تواصل مع ليكسورو سوليوشنز",
      description: "تحدّث مع ليكسورو سوليوشنز عن برامج المحاسبة، أو إقرارات ضريبة القيمة المضافة وضريبة الشركات، أو أتمتة واتساب، أو البرمجيات المخصّصة.",
    },
    hero: {
      eyebrow: "تواصل",
      title: "تحدّث معنا.",
      body: "أخبرنا قليلًا عن عملك وما تحتاجه. نرد بالبريد الإلكتروني أو عبر واتساب — كما تفضّل.",
    },
    formTitle: "أرسل لنا رسالة",
    details: {
      title: "طرق أخرى للتواصل",
      whatsapp: "واتساب",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      office: "المكتب",
    },
    support: {
      title: "عميل لدينا؟",
      items: [
        { label: "دعم Fisqel", body: "المساعدة والفوترة وأسئلة الحساب في Fisqel.", href: "https://fisqel.com/ar/contact", link: "fisqel.com/contact" },
        { label: "دعم BizBrain", body: "سجّل الدخول إلى لوحة عيادتك، أو راسلنا على واتساب.", href: "https://app.lexorosolutions.com/login", link: "دخول العيادات" },
      ],
    },
  },
};

export const getPages = (locale: Locale): PagesCopy => (locale === "ar" ? ar : en);

/** A link into fisqel.com, in the visitor's language. */
export const fisqelUrl = (locale: Locale, path = "") => `https://fisqel.com${locale === "ar" ? "/ar" : ""}${path}`;
