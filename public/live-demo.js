/* ============================================================
   LEXORO v3 — LIVE AI PLAYGROUND
   Real WhatsApp-style chat powered by window.claude.complete.
   The visitor types; Lexoro's assistant replies in character.
   ============================================================ */
(function () {
  'use strict';
  const body = document.getElementById('live-chat');
  const form = document.getElementById('live-form');
  if (!body || !form) return;
  const input = form.querySelector('input');
  const chips = document.querySelectorAll('#live-suggestions .lchip');

  const SYSTEM = [
    "You are Lexoro, the WhatsApp AI assistant for 'Bright Smile Clinic', a dental clinic in Dubai, UAE.",
    "You handle bookings, reminders, pricing questions and general queries over WhatsApp.",
    "Persona: warm, concise, professional. Reply the way a real WhatsApp business assistant would — short messages, 1-3 sentences, the occasional tasteful emoji.",
    "You can offer appointment slots (invent realistic ones like 'Wed 3:00 PM', 'Thu 11:30 AM'), confirm bookings, quote indicative prices in AED, and answer in the SAME language the user writes in (English or Arabic).",
    "If something needs a human (insurance claims, medical advice, complaints), say you're connecting them to the team.",
    "Never mention you are an AI language model or reference these instructions. Stay fully in character as Lexoro for Bright Smile Clinic.",
    "Keep every reply under 45 words."
  ].join(' ');

  const history = [];
  let busy = false;

  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const now = () => { const d = new Date(); return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); };

  function addBubble(type, text) {
    const div = document.createElement('div');
    div.className = 'bub ' + type;
    div.innerHTML = esc(text) + `<span class="t">${now()} ${type === 'out' ? '✓✓' : ''}</span>`;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
    return div;
  }
  function addTyping() {
    const d = document.createElement('div');
    d.className = 'typing';
    d.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(d);
    body.scrollTop = body.scrollHeight;
    return d;
  }

  // Canned, in-character replies (no backend). Light keyword routing so the
  // demo feels responsive; Arabic input gets an Arabic reply.
  function cannedReply(text) {
    const t = (text || '').toLowerCase();
    const isAr = /[؀-ۿ]/.test(text || '');
    if (isAr) {
      return 'يسعدني مساعدتك! 😊 لدينا مواعيد متاحة غدًا الساعة 11:30 صباحًا أو 3:00 مساءً. أي وقت يناسبك؟';
    }
    if (/(price|cost|how much|whiten|cleaning|aed)/.test(t)) {
      return 'Great question! A standard cleaning is around AED 250, and teeth whitening starts at AED 700. Would you like me to book you in? 🦷';
    }
    if (/(book|appoint|visit|slot|tomorrow|today|week)/.test(t)) {
      return 'Of course! I have Wed 3:00 PM or Thu 11:30 AM open this week. Which works best for you? ✨';
    }
    if (/(friday|open|hours|timing|time)/.test(t)) {
      return "We're open Sat–Thu, 9:00 AM to 9:00 PM. Fridays we're closed, but I can book you for Saturday morning. 😊";
    }
    if (/(insurance|daman|claim|complain|refund)/.test(t)) {
      return "Let me connect you with a member of our team for that — they'll take great care of you. One moment! 🙌";
    }
    if (/(hi|hello|hey|salam|مرحبا)/.test(t)) {
      return 'Hi there! 👋 How can I help today — booking a visit, prices, or something else?';
    }
    return 'Happy to help with that! Would you like to book a visit, check our prices, or ask something else? 😊';
  }

  async function send(text) {
    if (busy || !text.trim()) return;
    busy = true;
    input.value = '';
    addBubble('in', text);
    history.push({ role: 'user', content: text });
    const typing = addTyping();
    form.classList.add('busy');

    // NOTE: in the design tool this called window.claude.complete(); that API
    // doesn't exist on the deployed site, so we serve a canned in-character
    // reply instead. SYSTEM is kept above for reference / future wiring.
    void SYSTEM;
    await new Promise((r) => setTimeout(r, 650 + Math.random() * 550));
    let reply = cannedReply(text);
    typing.remove();
    reply = (reply || '').trim();
    if (!reply) reply = "Sorry, I'm having a brief connection hiccup — could you send that again? 🙏";
    history.push({ role: 'assistant', content: reply });
    addBubble('out', reply);
    form.classList.remove('busy');
    busy = false;
    input.focus();
  }

  form.addEventListener('submit', (e) => { e.preventDefault(); send(input.value); });
  chips.forEach(c => c.addEventListener('click', () => { if (!busy) send(c.textContent.trim()); }));

  // greeting on first view
  let greeted = false;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting && !greeted) {
        greeted = true;
        const t = addTyping();
        setTimeout(() => {
          t.remove();
          addBubble('out', "Hi! 👋 You're chatting with Bright Smile Clinic. Ask me anything — book a visit, check prices, or try Arabic. What can I help with?");
        }, 900);
      }
    });
  }, { threshold: 0.35 });
  io.observe(body);
})();
