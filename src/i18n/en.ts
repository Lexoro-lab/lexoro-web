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
  },
  nav: {
    label: "Main",
    home: "Lexoro Solutions home",
    items: [
      { label: "Products", href: "/#products" },
      { label: "Accounting", href: "/#accounting" },
      { label: "BizBrain", href: "/bizbrain" },
      { label: "Company", href: "/#company" },
    ],
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "العربية",
    languageLabel: "Read this page in Arabic",
  },
  footer: {
    tagline: "Software and accounting solutions for UAE businesses.",
    columns: [
      {
        title: "Products",
        links: [
          { label: "Fisqel", href: "https://fisqel.com" },
          { label: "BizBrain", href: "/bizbrain" },
          { label: "BizBrain pricing", href: "/bizbrain#pricing" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Bookkeeping", href: "/#accounting" },
          { label: "VAT return filing", href: "/#accounting" },
          { label: "Corporate tax filing", href: "/#accounting" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/#company" },
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
          link: "Visit fisqel.com",
          href: "https://fisqel.com",
        },
        {
          key: "bizbrain",
          tag: "Clinics",
          name: "BizBrain",
          title: "The AI front desk for UAE clinics.",
          body: "An AI receptionist on the clinic's WhatsApp that books, reschedules and reminds patients around the clock, then hands over to staff when a person is needed.",
          points: ["Bookings, rescheduling and reminders, 24/7", "Hand-off to your team with full context", "Doctor schedules and a live dashboard"],
          link: "Explore BizBrain",
          href: "/bizbrain",
        },
      ],
    },
    accounting: {
      eyebrow: "Accounting solutions",
      title: "From the first receipt to the filed return.",
      body: "Software keeps the books current every day. Our team turns them into returns filed with the Federal Tax Authority.",
      items: [
        { title: "Bookkeeping", body: "Invoices, receipts and payments recorded as they happen, in a real double-entry ledger." },
        { title: "VAT return filing", body: "We prepare and file your VAT return, with every line classified as standard-rated, zero-rated or exempt." },
        { title: "Corporate tax filing", body: "Your annual UAE corporate tax return, prepared and filed from clean, reconciled books." },
        { title: "Reporting", body: "Cash position, receivables and VAT status on one screen, in plain language." },
      ],
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
    },
    closing: {
      title: "Let's talk about your business.",
      body: "Software, bookkeeping or tax filing — tell us what you need and we'll point you to the right solution.",
    },
  },
  bizbrain: {
    hero: {
      eyebrow: "BizBrain · for clinics",
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
