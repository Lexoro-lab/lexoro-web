/** Real company details. Every link and address reads from here. */
export const site = {
  name: "Lexoro Solutions",
  legalName: "Lexoro Solutions FZC",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://lexorosolutions.com",
  whatsapp: "971525049747",
  whatsappDisplay: "+971 52 504 9747",
  email: "info@lexorosolutions.com",
  app: {
    register: "https://app.lexorosolutions.com/register",
    login: "https://app.lexorosolutions.com/login",
  },
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
