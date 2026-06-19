/* ============================================================
   LEXORO v3 — i18n (English ⇄ Arabic, with RTL)
   Translates by walking text nodes; SVGs & structure preserved.
   Persists choice in localStorage. Exposes window.setLang(lang).
   ============================================================ */
(function () {
  'use strict';

  // English fragment  ->  Arabic
  const AR = {
    // nav
    "Products": "المنتجات",
    "How it works": "كيف يعمل",
    "Features": "المميزات",
    "Industries": "القطاعات",
    "Pricing": "الأسعار",
    "Live demo": "تجربة مباشرة",
    "Sign in": "تسجيل الدخول",
    "Book a demo": "احجز عرضًا",
    // hero
    "Trusted by": "موثوق من",
    "UAE clinics & SMEs": "عيادة ومنشأة في الإمارات",
    "WhatsApp AI that runs your": "ذكاء اصطناعي على واتساب يدير",
    "front desk": "مكتب الاستقبال",
    "and your": "و",
    "back office.": "العمليات الخلفية.",
    "Lexoro Solutions builds WhatsApp-first AI agents that book appointments, answer customers and keep the books — purpose-built for businesses across the UAE.":
      "تبني ليكسورو وكلاء ذكاء اصطناعي على واتساب يحجزون المواعيد، ويجيبون العملاء، ويمسكون الحسابات — مصمَّمة خصيصًا للأعمال في جميع أنحاء الإمارات.",
    "Explore products": "استكشف المنتجات",
    "Official Meta WhatsApp API": "واجهة واتساب الرسمية من ميتا",
    "Arabic & English": "العربية والإنجليزية",
    // dashboard
    "Lexoro Dashboard": "لوحة تحكم ليكسورو",
    "Live": "مباشر",
    "Bookings today": "حجوزات اليوم",
    "Resolved by AI": "حُلَّت بالذكاء الاصطناعي",
    "18% vs last week": "+18% عن الأسبوع الماضي",
    "6% this month": "+6% هذا الشهر",
    "Bookings this week": "حجوزات هذا الأسبوع",
    "Live conversations": "محادثات مباشرة",
    "View all": "عرض الكل",
    "Thursday 11:30 works great": "الخميس 11:30 مناسب تمامًا",
    "Logged AED 4,200 expense": "تم تسجيل مصروف 4,200 د.إ",
    "Do you accept Daman insurance?": "هل تقبلون تأمين ضمان؟",
    "Booked": "تم الحجز",
    "Team": "الفريق",
    "New booking · Thu 11:30 AM": "حجز جديد · الخميس 11:30 ص",
    "now": "الآن",
    // marquee
    "Powering conversations for forward-thinking businesses across the GCC":
      "نُشغّل المحادثات لأعمال طموحة في جميع أنحاء الخليج",
    // products
    "The Lexoro suite": "منظومة ليكسورو",
    "One engine. A growing family of products.": "محرك واحد. وعائلة منتجات تتوسّع باستمرار.",
    "Every Lexoro product runs on the same secure, bilingual WhatsApp platform — and connects to the tools your team already uses.":
      "كل منتج من ليكسورو يعمل على منصة واتساب واحدة آمنة وثنائية اللغة — ويتصل بالأدوات التي يستخدمها فريقك بالفعل.",
    "Booked · Thu 11:30": "تم الحجز · الخميس 11:30",
    "Synced to calendar": "مُزامن مع التقويم",
    "Lexoro Clinics": "ليكسورو للعيادات",
    "Your front desk, on WhatsApp 24/7": "مكتب استقبالك على واتساب 24/7",
    "An AI receptionist that books, reschedules and reminds patients — then hands off to your staff the moment a human is needed.":
      "موظف استقبال ذكي يحجز ويعيد الجدولة ويُذكّر المرضى — ثم يحوّل المحادثة لفريقك لحظة الحاجة إلى تدخل بشري.",
    "24/7 booking, rescheduling & reminders": "حجز وإعادة جدولة وتذكير على مدار الساعة",
    "Seamless human hand-off with full context": "تحويل سلس للفريق مع السياق الكامل",
    "Live management dashboard & calendar sync": "لوحة إدارة مباشرة ومزامنة مع التقويم",
    "Explore Lexoro Clinics": "استكشف ليكسورو للعيادات",
    "AED 4,200 logged": "تم تسجيل 4,200 د.إ",
    "VAT-ready": "جاهز لضريبة القيمة المضافة",
    "Hisab": "حساب",
    "Bookkeeping as easy as a text": "مسك الدفاتر بسهولة إرسال رسالة",
    "SMEs log income, expenses and invoices straight from WhatsApp. Hisab keeps the books clean and VAT-ready — with a dashboard for the full picture.":
      "تُسجّل المنشآت الصغيرة الدخل والمصروفات والفواتير مباشرة من واتساب. يحافظ «حساب» على دفاتر نظيفة وجاهزة للضريبة — مع لوحة تعرض الصورة كاملة.",
    "Log expenses & invoices by chat or photo": "سجّل المصروفات والفواتير بالمحادثة أو الصورة",
    "UAE VAT-ready reports in one tap": "تقارير ضريبية إماراتية جاهزة بنقرة واحدة",
    "Real-time cash-flow dashboard": "لوحة تدفق نقدي لحظية",
    "Explore Hisab": "استكشف حساب",
    "More Lexoro products are on the way.": "المزيد من منتجات ليكسورو في الطريق.",
    "We're building the WhatsApp operating layer for business — one workflow at a time.":
      "نبني طبقة تشغيل الأعمال على واتساب — سير عمل تلو الآخر.",
    "Get early access": "احصل على وصول مبكر",
    // how it works
    "From hello to handled": "من التحية إلى الإنجاز",
    "How Lexoro works on WhatsApp": "كيف تعمل ليكسورو على واتساب",
    "No app to install. Customers message the number they already trust — Lexoro does the rest.":
      "لا تطبيق للتثبيت. يراسل العملاء الرقم الذي يثقون به — وتتولى ليكسورو الباقي.",
    "Customer messages": "العميل يراسل",
    "A patient or client sends a WhatsApp to book, ask or pay — in Arabic or English.":
      "يرسل المريض أو العميل رسالة واتساب للحجز أو الاستفسار أو الدفع — بالعربية أو الإنجليزية.",
    "AI understands & acts": "الذكاء الاصطناعي يفهم ويتصرف",
    "Lexoro's agent reads intent, checks your calendar or books, and replies instantly.":
      "يقرأ وكيل ليكسورو القصد، ويتحقق من تقويمك أو يحجز، ويرد فورًا.",
    "Human hand-off": "التحويل للفريق",
    "Anything sensitive routes to your team — with the full conversation attached.":
      "يُحوَّل كل أمر حساس إلى فريقك — مع إرفاق المحادثة كاملة.",
    "You see everything": "ترى كل شيء",
    "Every booking, message and metric lands in one clean dashboard for your team.":
      "كل حجز ورسالة ومؤشر يصل إلى لوحة واحدة نظيفة لفريقك.",
    // features
    "Why teams choose Lexoro": "لماذا تختار الفرق ليكسورو",
    "Enterprise-grade AI, without the overhead.": "ذكاء اصطناعي بمستوى المؤسسات، دون التعقيد.",
    "Replies in seconds": "ردود في ثوانٍ",
    "No queues, no hold music. Customers get accurate answers the moment they reach out — any hour, any day.":
      "لا طوابير ولا انتظار. يحصل العملاء على إجابات دقيقة فور تواصلهم — في أي ساعة وأي يوم.",
    "Secure & compliant": "آمن ومتوافق",
    "Built on the official Meta WhatsApp Business API with data handling aligned to UAE regulations.":
      "مبني على واجهة واتساب للأعمال الرسمية من ميتا، مع معالجة بيانات متوافقة مع أنظمة الإمارات.",
    "Human hand-off, built in": "تحويل بشري مدمج",
    "AI handles the routine; your team steps in for the rest — with seamless, context-rich handovers.":
      "يتولى الذكاء الاصطناعي الروتين، ويتدخل فريقك في الباقي — بتحويلات سلسة وغنية بالسياق.",
    "Connects to your tools": "يتصل بأدواتك",
    "Calendars, CRMs, payment links and accounting — Lexoro plugs into the stack you already run on.":
      "التقاويم وأنظمة العملاء وروابط الدفع والمحاسبة — تتكامل ليكسورو مع منظومتك الحالية.",
    "Arabic & English native": "عربية وإنجليزية أصيلة",
    "Fluent, natural conversation in both languages — switching effortlessly to match each customer.":
      "محادثة طبيعية وطليقة باللغتين — تتبدّل بسلاسة لتناسب كل عميل.",
    "Dashboards that decide": "لوحات تساعدك على القرار",
    "See bookings, revenue and response times at a glance — and act on what's working in real time.":
      "تابع الحجوزات والإيرادات وأوقات الاستجابة بلمحة — وتصرّف بناءً على الأفضل لحظيًا.",
    // burst
    "The intelligence layer": "طبقة الذكاء",
    "One model. Every conversation,": "نموذج واحد. كل محادثة،",
    "understood in milliseconds.": "تُفهَم في أجزاء من الثانية.",
    "Lexoro reads intent, language and context across every message — then routes, replies, books and logs automatically. Thousands of conversations fan out from a single engine, tuned for Arabic and English alike.":
      "تقرأ ليكسورو القصد واللغة والسياق في كل رسالة — ثم تُوجّه وترد وتحجز وتُسجّل تلقائيًا. آلاف المحادثات تنطلق من محرك واحد، مضبوط للعربية والإنجليزية على حد سواء.",
    "languages & dialects": "لغة ولهجة",
    "median response": "متوسط الاستجابة",
    "resolved without a human": "تُحَل دون تدخل بشري",
    // showcase
    "See it in action": "شاهدها وهي تعمل",
    "A whole front desk, inside one chat.": "مكتب استقبال كامل، داخل محادثة واحدة.",
    "Watch a real booking unfold — Lexoro understands, offers slots, confirms, and knows exactly when to bring in a human.":
      "تابع حجزًا حقيقيًا يتم — تفهم ليكسورو، وتعرض المواعيد، وتؤكد، وتعرف تمامًا متى تُشرك إنسانًا.",
    "Understands the request": "تفهم الطلب",
    "Natural language in Arabic or English, no menus or keywords.":
      "لغة طبيعية بالعربية أو الإنجليزية، دون قوائم أو كلمات مفتاحية.",
    "Books and confirms instantly": "تحجز وتؤكد فورًا",
    "Live calendar availability, reminders scheduled automatically.":
      "توافر مباشر في التقويم، وتذكيرات تُجدوَل تلقائيًا.",
    "Hands off when it matters": "تُحوّل عند الحاجة",
    "Insurance, billing or anything sensitive routes straight to your team.":
      "التأمين أو الفوترة أو أي أمر حساس يُحوَّل مباشرة إلى فريقك.",
    "See a live demo": "شاهد عرضًا مباشرًا",
    "Bright Smile Clinic": "عيادة برايت سمايل",
    "Lexoro AI · online": "ذكاء ليكسورو · متصل",
    "Type a message…": "اكتب رسالة…",
    // live playground
    "Live · powered by real AI": "مباشر · مدعوم بذكاء اصطناعي حقيقي",
    "Don't take our word for it.": "لا تأخذ كلامنا فقط.",
    "Talk to Lexoro yourself.": "تحدّث مع ليكسورو بنفسك.",
    "This is the actual assistant — not a recording. Ask it to book a dental visit, quote a cleaning, or message it in Arabic. It answers in real time, exactly like it would on your customers' WhatsApp.":
      "هذا هو المساعد الحقيقي — وليس تسجيلًا. اطلب منه حجز موعد أسنان، أو سعر تنظيف، أو راسله بالعربية. يجيب فورًا، تمامًا كما سيفعل على واتساب عملائك.",
    "Try asking:": "جرّب أن تسأل:",
    "I need a dental cleaning this week": "أحتاج تنظيف أسنان هذا الأسبوع",
    "How much is teeth whitening?": "كم سعر تبييض الأسنان؟",
    "Do you open on Fridays?": "هل تفتحون يوم الجمعة؟",
    "Responses are generated live and may vary. No data is stored.":
      "تُولَّد الردود مباشرة وقد تختلف. لا يتم تخزين أي بيانات.",
    // industries
    "Industries we serve": "القطاعات التي نخدمها",
    "Built for the businesses that run on WhatsApp.": "مصممة للأعمال التي تدار عبر واتساب.",
    "Clinics & Dental": "العيادات والأسنان",
    "Bookings, reminders, triage": "حجوزات، تذكيرات، فرز",
    "Retail & Trading": "التجزئة والتجارة",
    "Orders, support, invoicing": "طلبات، دعم، فوترة",
    "Salons & Spas": "الصالونات والمنتجعات",
    "Appointments, packages": "مواعيد، باقات",
    "SMEs & Freelancers": "المنشآت الصغيرة والمستقلون",
    "Accounting with Hisab": "محاسبة مع حساب",
    "Real Estate": "العقارات",
    "Lead capture, viewings": "جذب العملاء، المعاينات",
    "Clinic Groups & Chains": "مجموعات وسلاسل العيادات",
    "Multi-branch routing": "توجيه متعدد الفروع",
    // stats
    "of chats resolved by AI": "من المحادثات تُحَل بالذكاء الاصطناعي",
    "average time to book": "متوسط زمن الحجز",
    "always-on coverage": "تغطية دائمة",
    "more booked appointments": "ضعف عدد المواعيد المحجوزة",
    // testimonials
    "\"Our front desk used to miss calls all day. Now Lexoro books patients on WhatsApp before we've even opened. No-shows dropped and bookings went up.\"":
      "«كان مكتب الاستقبال يفوّت المكالمات طوال اليوم. الآن تحجز ليكسورو المرضى على واتساب قبل أن نفتح حتى. قلّ التغيّب وارتفعت الحجوزات.»",
    "Dr. Rana Al-Hashimi": "د. رنا الهاشمي",
    "Bright Smile Clinic · Dubai": "عيادة برايت سمايل · دبي",
    "\"With Hisab I just message my expenses as I go. At month-end my VAT report is ready. It replaced three spreadsheets and a lot of stress.\"":
      "«مع «حساب» أرسل مصروفاتي أولًا بأول. وفي نهاية الشهر يكون تقرير الضريبة جاهزًا. استبدل ثلاثة جداول وكثيرًا من التوتر.»",
    "Yousef Khan": "يوسف خان",
    "Bayan Traders · Sharjah": "بيان للتجارة · الشارقة",
    "\"The hand-off is what sold us. The AI handles the routine, and the moment a patient needs a person, my team picks up right where it left off.\"":
      "«التحويل هو ما أقنعنا. يتولى الذكاء الاصطناعي الروتين، ولحظة احتياج المريض لشخص، يكمل فريقي من حيث توقف تمامًا.»",
    "Sara Mansour": "سارة منصور",
    "NoorCare Group · Abu Dhabi": "مجموعة نوركير · أبوظبي",
    // calculator
    "Run the numbers": "احسب الأرقام",
    "See what Lexoro saves you every month.": "اكتشف ما توفّره لك ليكسورو كل شهر.",
    "WhatsApp conversations / day": "محادثات واتساب / يوميًا",
    "Avg. handling time each": "متوسط زمن معالجة كل محادثة",
    "Team cost per hour": "تكلفة الفريق في الساعة",
    "Resolved by AI, no human needed": "تُحَل بالذكاء الاصطناعي دون تدخل بشري",
    "Saved every month": "التوفير الشهري",
    "Staff hours freed": "ساعات عمل موفّرة",
    "Conversations handled": "محادثات تمت معالجتها",
    "After-hours messages caught": "رسائل خارج الدوام التُقطت",
    "Start saving with Lexoro": "ابدأ التوفير مع ليكسورو",
    // pricing
    "Simple, transparent pricing": "أسعار بسيطة وشفافة",
    "Start small. Scale when you're ready.": "ابدأ صغيرًا. وتوسّع حين تكون جاهزًا.",
    "Plans in AED, billed monthly. No setup fees — cancel anytime.":
      "الباقات بالدرهم، تُحتسب شهريًا. لا رسوم إعداد — ألغِ في أي وقت.",
    "Starter": "البداية",
    "For a single clinic or small business getting started.": "لعيادة واحدة أو منشأة صغيرة في انطلاقتها.",
    "1 WhatsApp number": "رقم واتساب واحد",
    "Up to 500 conversations / mo": "حتى 500 محادثة / شهريًا",
    "Core AI + dashboard": "ذكاء اصطناعي أساسي + لوحة تحكم",
    "Email support": "دعم عبر البريد",
    "Get started": "ابدأ الآن",
    "Most popular": "الأكثر شيوعًا",
    "Growth": "النمو",
    "For busy clinics and SMEs that live on WhatsApp.": "للعيادات والمنشآت المزدحمة التي تعيش على واتساب.",
    "Up to 3 numbers / branches": "حتى 3 أرقام / فروع",
    "Unlimited conversations": "محادثات غير محدودة",
    "Human hand-off + team inbox": "تحويل بشري + صندوق وارد للفريق",
    "Integrations & priority support": "تكاملات ودعم بأولوية",
    "Enterprise": "المؤسسات",
    "For groups, chains and custom workflows.": "للمجموعات والسلاسل وسير العمل المخصص.",
    "Custom": "حسب الطلب",
    "Unlimited numbers & branches": "أرقام وفروع غير محدودة",
    "Custom AI workflows": "سير عمل ذكاء اصطناعي مخصص",
    "Dedicated success manager": "مدير نجاح مخصص",
    "SLA & onboarding": "اتفاقية مستوى خدمة وتهيئة",
    "Talk to sales": "تحدّث مع المبيعات",
    "/mo": " /شهر",
    // about
    "Our mission": "مهمتنا",
    "We're building the WhatsApp operating layer for business.": "نبني طبقة تشغيل الأعمال على واتساب.",
    "Billions of conversations happen on WhatsApp every day — but most businesses still answer them by hand. Lexoro turns those conversations into automated, intelligent workflows, built for the way the UAE actually works.":
      "تجري مليارات المحادثات على واتساب يوميًا — لكن معظم الأعمال لا تزال تجيبها يدويًا. تحوّل ليكسورو تلك المحادثات إلى سير عمل آلي وذكي، مبني على طريقة عمل الإمارات فعليًا.",
    "UAE-first, GCC-ready": "الإمارات أولًا، وجاهزة للخليج",
    "Bilingual, locally compliant, and tuned for how business is done across the Gulf.":
      "ثنائية اللغة، متوافقة محليًا، ومضبوطة لطريقة العمل في الخليج.",
    "A platform, not a point tool": "منصة، لا أداة منفردة",
    "Clinics and Hisab are just the start — every product runs on one Lexoro engine.":
      "العيادات و«حساب» مجرد بداية — كل منتج يعمل على محرك ليكسورو واحد.",
    "Outcomes over features": "النتائج قبل المميزات",
    "We measure success in booked appointments, hours saved and cleaner books.":
      "نقيس النجاح بالمواعيد المحجوزة والساعات الموفّرة والدفاتر الأنظف.",
    "Live conversation graph": "رسم بياني حي للمحادثات",
    "Drag to explore": "اسحب للاستكشاف",
    // CTA
    "Ready to put WhatsApp to work?": "جاهز لتشغيل واتساب لصالحك؟",
    "Book a 20-minute demo and we'll show Lexoro running live on your business — bookings, hand-off and dashboard included.":
      "احجز عرضًا مدته 20 دقيقة وسنريك ليكسورو تعمل مباشرة على عملك — الحجوزات والتحويل ولوحة التحكم.",
    "Chat on WhatsApp": "تحدّث على واتساب",
    // footer
    "WhatsApp-first AI automation for clinics and SMEs across the UAE and GCC.":
      "أتمتة بالذكاء الاصطناعي تعتمد واتساب أولًا، للعيادات والمنشآت في الإمارات والخليج.",
    "Your work email": "بريد عملك",
    "Company": "الشركة",
    "Resources": "مصادر",
    "Early access": "وصول مبكر",
    "About": "عن ليكسورو",
    "Contact": "تواصل معنا",
    "Help center": "مركز المساعدة",
    "Privacy": "الخصوصية",
    "Terms": "الشروط",
    "© 2026 Lexoro Solutions. Built in the UAE.": "© 2026 ليكسورو سوليوشنز. صُنع في الإمارات.",
    "Help center": "مركز المساعدة"
  };

  // containers whose text is dynamic — never translate inside these
  const SKIP_IDS = ['chat', 'live-chat', 'fx-bg', 'fx-burst', 'fx-globe', 'tweaks-root'];
  const SKIP_TAGS = { SCRIPT: 1, STYLE: 1, CANVAS: 1, NOSCRIPT: 1, svg: 1, SVG: 1 };

  let collected = null; // [{node, en}]
  function collect() {
    collected = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        const t = n.nodeValue;
        if (!t || !t.trim()) return NodeFilter.FILTER_REJECT;
        let p = n.parentNode;
        while (p && p !== document.body) {
          if (p.id && SKIP_IDS.indexOf(p.id) > -1) return NodeFilter.FILTER_REJECT;
          if (SKIP_TAGS[p.tagName] || SKIP_TAGS[p.nodeName]) return NodeFilter.FILTER_REJECT;
          if (p.classList && p.classList.contains('marquee-track')) return NodeFilter.FILTER_REJECT;
          p = p.parentNode;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let node;
    while ((node = walker.nextNode())) {
      collected.push({ node, en: node.nodeValue });
    }
  }

  function apply(lang) {
    if (!collected) collect();
    const toAr = lang === 'ar';
    collected.forEach(({ node, en }) => {
      const trimmed = en.trim();
      if (toAr) {
        const ar = AR[trimmed];
        if (ar) node.nodeValue = en.replace(trimmed, ar);
      } else {
        node.nodeValue = en; // restore original
      }
    });
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', toAr ? 'rtl' : 'ltr');
    html.classList.toggle('is-ar', toAr);
    document.querySelectorAll('[data-lang-btn]').forEach(b => {
      b.textContent = toAr ? 'EN' : 'ع';
      b.setAttribute('aria-label', toAr ? 'Switch to English' : 'التبديل إلى العربية');
    });
    try { localStorage.setItem('lexoro-lang', lang); } catch (e) {}
  }

  window.setLang = apply;
  window.toggleLang = function () {
    const cur = document.documentElement.getAttribute('lang') === 'ar' ? 'ar' : 'en';
    apply(cur === 'ar' ? 'en' : 'ar');
  };

  function boot() {
    let saved = 'en';
    try { saved = localStorage.getItem('lexoro-lang') || 'en'; } catch (e) {}
    collect();
    if (saved === 'ar') apply('ar');
    document.querySelectorAll('[data-lang-btn]').forEach(b => {
      b.addEventListener('click', window.toggleLang);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
