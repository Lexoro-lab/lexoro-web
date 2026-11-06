/*
 * English copy. This object also defines the dictionary's type: Arabic is
 * annotated `: Dict`, so the build fails if a key is missing there.
 * (No `as const` here, or Arabic strings stop assigning.)
 */
const en = {
  meta: {
    homeTitle: "Lexoro Solutions — Software and accounting solutions for UAE businesses",
    homeDescription:
      "Lexoro Solutions is a UAE software company building AI-native products for accounting and operations, with VAT and corporate tax filing services.",
    bizbrainTitle: "BizBrain — The AI front desk for UAE clinics, on WhatsApp",
    bizbrainDescription:
      "BizBrain books, reschedules and reminds patients on your clinic's WhatsApp, around the clock, in Arabic and English. A Lexoro Solutions product.",
  },
  common: {
    talk: "Talk to us",
    whatsapp: "Chat on WhatsApp",
    whatsappPrefill: "Hello Lexoro, I'd like to know more.",
    email: "Email us",
    contact: "Contact us",
    learnMore: "Learn more",
    faq: "Questions",
    faqTitle: "Common questions.",
    taxNote: "General information, checked November 2026. Not tax advice.",
  },
  form: {
    name: "Your name",
    company: "Company",
    email: "Email",
    phone: "Phone or WhatsApp",
    interest: "What do you need?",
    message: "Message",
    messagePlaceholder: "Tell us a little about your business and what you need.",
    optional: "optional",
    interests: [
      "Accounting software (Fisqel)",
      "VAT return filing",
      "Corporate tax filing",
      "WhatsApp automation",
      "BizBrain for clinics",
      "Custom software",
      "Something else",
    ],
    submit: "Send message",
    sending: "Sending…",
    sentTitle: "Thank you — your message is with us.",
    sentBody: "We'll reply by email or WhatsApp. If it's urgent, message us on WhatsApp now.",
    failTitle: "We couldn't send that from here.",
    failBody: "Your message is still below. Send it on WhatsApp or by email instead — it's already written for you.",
    viaWhatsapp: "Send on WhatsApp",
    viaEmail: "Send by email",
    invalid: "Please add your name, a valid email and a message.",
    privacy: "We use your details only to reply to you. See our privacy policy.",
    orWhatsapp: "Prefer WhatsApp?",
  },
  nav: {
    label: "Main",
    home: "Lexoro Solutions home",
    groups: [
      {
        label: "Solutions",
        href: "/solutions",
        children: [
          { label: "Accounting software", note: "Books kept from WhatsApp", href: "/solutions/accounting-software" },
          { label: "VAT & corporate tax filing", note: "Returns prepared and filed", href: "/solutions/tax-filing" },
          { label: "WhatsApp automation", note: "AI assistants for your business", href: "/solutions/whatsapp-automation" },
          { label: "Custom software", note: "Systems built around your work", href: "/solutions/custom-software" },
        ],
      },
      {
        label: "Products",
        href: "/products",
        children: [
          { label: "Fisqel", note: "AI accounting on WhatsApp", href: "/products/fisqel" },
          { label: "BizBrain", note: "AI front desk for clinics", href: "/products/bizbrain" },
        ],
      },
      { label: "About", href: "/about", children: [] },
      { label: "Contact", href: "/contact", children: [] },
    ],
    overview: "Overview",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "العربية",
    languageLabel: "Read this page in Arabic",
  },
  footer: {
    tagline: "Software and accounting solutions for UAE businesses.",
    columns: [
      {
        title: "Solutions",
        links: [
          { label: "Accounting software", href: "/solutions/accounting-software" },
          { label: "VAT & corporate tax filing", href: "/solutions/tax-filing" },
          { label: "WhatsApp automation", href: "/solutions/whatsapp-automation" },
          { label: "Custom software", href: "/solutions/custom-software" },
        ],
      },
      {
        title: "Products",
        links: [
          { label: "Fisqel", href: "/products/fisqel" },
          { label: "BizBrain", href: "/products/bizbrain" },
          { label: "fisqel.com", href: "https://fisqel.com" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          { label: "Data deletion", href: "/data-deletion" },
        ],
      },
    ],
    contactTitle: "Talk to us",
    address: "Office F1, C1 Building, Ajman Free Zone, UAE",
    rights: "Lexoro Solutions FZC",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
  },
  home: {
    hero: {
      eyebrow: "Software company · UAE",
      title: "Software that keeps UAE businesses running.",
      body: "We build AI-native products for accounting and everyday operations — and our team files the VAT and corporate tax returns behind them.",
      primary: "See our products",
      note: "Arabic and English · Built for UAE tax rules",
    },
    stage: {
      company: "Lexoro Solutions FZC",
      place: "Ajman Free Zone, UAE",
      rows: [
        { name: "Fisqel", kind: "Product", line: "AI accounting on WhatsApp", meta: "fisqel.com" },
        { name: "BizBrain", kind: "Product", line: "AI front desk for clinics", meta: "WhatsApp" },
        { name: "Tax services", kind: "Service", line: "VAT and corporate tax filing", meta: "FTA" },
      ],
      foot: "One team. One platform.",
      live: "Live",
    },
    products: {
      eyebrow: "Products",
      title: "Two products. One job each.",
      body: "We build software for one hard problem at a time, and put it where owners already work: WhatsApp.",
      items: [
        {
          key: "fisqel",
          tag: "Accounting",
          name: "Fisqel",
          title: "The accountant that lives in your WhatsApp.",
          body: "Send a message or a photo of a receipt. Fisqel writes the UAE tax invoice, applies the right VAT and keeps a real double-entry ledger ready for the return.",
          points: ["Tax invoices and expenses from a chat", "Every line classified by FTA VAT rules", "Live dashboard, reports and cash position"],
          link: "Explore Fisqel",
          href: "/products/fisqel",
        },
        {
          key: "bizbrain",
          tag: "Clinics",
          name: "BizBrain",
          title: "The AI front desk for UAE clinics.",
          body: "An AI receptionist on the clinic's WhatsApp that books, reschedules and reminds patients around the clock, then hands over to staff when a person is needed.",
          points: ["Bookings, rescheduling and reminders, 24/7", "Hand-off to your team with full context", "Doctor schedules and a live dashboard"],
          link: "Explore BizBrain",
          href: "/products/bizbrain",
        },
      ],
    },
    solutions: {
      eyebrow: "Solutions",
      title: "Software and accounting, under one roof.",
      body: "Four ways we help UAE businesses. Start with one; most clients end up using two.",
      items: [
        { title: "Accounting software", body: "Invoices, receipts and payments recorded from WhatsApp, in a real double-entry ledger that stays VAT-ready.", href: "/solutions/accounting-software" },
        { title: "VAT & corporate tax filing", body: "We prepare and file your VAT and corporate tax returns from books kept current all year.", href: "/solutions/tax-filing" },
        { title: "WhatsApp automation", body: "AI assistants on the official WhatsApp Business Platform that answer, book and hand over to your team.", href: "/solutions/whatsapp-automation" },
        { title: "Custom software", body: "Dashboards, tracking systems and workflows built around the way your business already works.", href: "/solutions/custom-software" },
      ],
      link: "All solutions",
      cta: "Get a filing quote",
    },
    approach: {
      eyebrow: "How we work",
      title: "Built the way business is done here.",
      items: [
        { title: "Made for UAE tax", body: "VAT logic follows the UAE Federal Decree-Law. Tax invoices carry the TRN, bilingual titles and correct VAT display." },
        { title: "WhatsApp first", body: "Owners and customers use the app they already have. No new software to learn for daily work." },
        { title: "Arabic and English", body: "Every product speaks both languages naturally and switches to match each person." },
        { title: "Real accounting underneath", body: "A simple conversation on top, genuine double-entry bookkeeping below, ready for an accountant's review." },
        { title: "Secure by design", body: "Built on the official Meta WhatsApp Business Platform, with data handling aligned to UAE regulations." },
        { title: "Software plus people", body: "When you need more than software, our team does the filing. One company, one point of contact." },
      ],
    },
    company: {
      eyebrow: "Company",
      title: "A UAE software company.",
      body: "Lexoro Solutions designs, builds and runs its own software for UAE businesses, and backs it with hands-on accounting and tax services.",
      facts: [
        { label: "Legal name", value: "Lexoro Solutions FZC" },
        { label: "Registered", value: "Ajman Free Zone, UAE" },
        { label: "Products", value: "Fisqel, BizBrain" },
        { label: "Services", value: "Bookkeeping, VAT and corporate tax filing" },
      ],
      link: "About Lexoro",
    },
    closing: {
      title: "Let's talk about your business.",
      body: "Software, bookkeeping or tax filing — tell us what you need and we'll point you to the right solution.",
    },
  },
  bizbrain: {
    hero: {
      eyebrow: "Products · BizBrain",
      title: "Your clinic's front desk, on WhatsApp.",
      body: "BizBrain answers patients on your WhatsApp number, books and reschedules appointments, and sends reminders — day and night, in Arabic and English.",
      primary: "Start free trial",
      secondary: "Sign in",
      note: "7-day free trial · No credit card required",
    },
    chat: {
      name: "Bright Smile Clinic",
      status: "online",
      messages: [
        { from: "in", text: "Hi, I'd like a dental cleaning this week.", time: "10:24" },
        { from: "out", text: "Of course. These times are open:", chips: ["Wed 3:00 PM", "Thu 11:30 AM", "Fri 5:15 PM"], time: "10:24" },
        { from: "in", text: "Thursday 11:30 works.", time: "10:25" },
        { from: "out", text: "Booked for Thursday 11:30 AM. I'll remind you the day before.", time: "10:25" },
      ],
    },
    features: {
      eyebrow: "What it does",
      title: "Everything the front desk repeats, handled.",
      items: [
        { title: "WhatsApp booking", body: "Patients message your number. BizBrain reads the request, checks doctor availability and confirms a slot." },
        { title: "Arabic and English", body: "It detects the patient's language and replies fluently, with no setup." },
        { title: "Automatic reminders", body: "Reminders go out before each appointment, so fewer patients forget." },
        { title: "Human hand-off", body: "When a patient needs a person, the conversation moves to your team with its full history." },
        { title: "Schedule manager", body: "A calendar per doctor and per branch, updated in real time." },
        { title: "Multi-branch", body: "Run several branches from one dashboard: separate calendars, one assistant." },
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "From message to booking in three steps.",
      steps: [
        { title: "The patient messages", body: "Any message to your WhatsApp number, in Arabic or English." },
        { title: "BizBrain books it", body: "It asks the right questions, finds a free slot and confirms the appointment." },
        { title: "Confirmed and reminded", body: "The patient gets a confirmation, then reminders before the visit." },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "One plan. Everything included.",
      body: "Prices in AED. No setup fees. Cancel anytime.",
      monthly: "Monthly",
      yearly: "Yearly",
      save: "Save 17%",
      plan: "BizBrain",
      planBody: "Your AI receptionist on WhatsApp, with every feature.",
      perMonth: "/month",
      billedYearly: "Billed AED 2,990 a year — two months free",
      features: [
        "Unlimited patient bookings",
        "AI WhatsApp reception",
        "Reminders and confirmations",
        "Doctor scheduling",
        "Real-time dashboard",
        "Arabic and English",
        "Staff hand-off",
      ],
      cta: "Start 7-day free trial",
    },
    faq: [
      { q: "Does BizBrain use the official WhatsApp API?", a: "Yes. It runs on Meta's WhatsApp Business Platform, connected to your clinic's own number." },
      { q: "What happens when a patient needs a person?", a: "BizBrain flags the conversation and hands it to your team with the full history, so nobody has to ask the patient to repeat themselves." },
      { q: "Can it handle several doctors and branches?", a: "Yes. Each doctor and branch has its own calendar, and one assistant books across all of them." },
      { q: "Does it give medical advice?", a: "No. BizBrain is a booking and communication tool. Clinical questions are passed to your staff." },
      { q: "Are WhatsApp messaging fees included?", a: "The plan covers BizBrain. Meta may charge its own WhatsApp messaging fees, billed separately by Meta." },
    ],
    closing: {
      title: "Give your front desk the night off.",
      body: "Seven days free. Set up in minutes on your clinic's WhatsApp number.",
    },
  },
  legal: {
    eyebrow: "Legal",
    updated: "Last updated",
  },
};

export type Dict = typeof en;
export default en;
