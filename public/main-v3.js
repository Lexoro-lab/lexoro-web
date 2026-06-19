/* ============================================================
   LEXORO SOLUTIONS v3 — GSAP scroll + chat demo
   ============================================================ */

/* ---------- sticky nav ---------- */
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 16);
onScroll();
window.addEventListener('scroll', onScroll, { passive:true });

/* ---------- scroll progress bar ---------- */
const bar = document.querySelector('.scroll-progress');
if (bar){
  const upd = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
  };
  upd(); window.addEventListener('scroll', upd, { passive:true });
  window.addEventListener('resize', upd);
}

/* ---------- count-up helper ---------- */
const animateCount = (el) => {
  if (el.dataset.done) return; el.dataset.done = '1';
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const dur = 1300, start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

/* ---------- GSAP reveals / parallax / counters ---------- */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function fallbackReveal(){
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  document.querySelectorAll('[data-count]').forEach(animateCount);
}

if (reduce || !window.gsap || !window.ScrollTrigger){
  fallbackReveal();
} else {
  document.body.classList.add('fx-on');
  const gsap = window.gsap;
  gsap.registerPlugin(window.ScrollTrigger);
  const EASE = 'power3.out';

  // batched fade-up reveals, grouped so each cluster staggers in
  gsap.set('.reveal', { opacity:0, y:22 });
  window.ScrollTrigger.batch('.reveal', {
    start: 'top 88%',
    onEnter: (els) => gsap.to(els, { opacity:1, y:0, duration:.8, ease:EASE, stagger:.09, overwrite:true }),
    once: true
  });

  // hero gets a confident on-load entrance (overrides batch for these)
  const heroEls = ['.hero .trust', '.hero h1', '.hero-sub', '.hero-cta', '.hero-meta'];
  gsap.set(heroEls, { opacity:0, y:26 });
  gsap.set('.hero-art', { opacity:0, y:30, scale:.97 });
  const tl = gsap.timeline({ defaults:{ ease:EASE } });
  tl.to(heroEls, { opacity:1, y:0, duration:.9, stagger:.1 }, .15)
    .to('.hero-art', { opacity:1, y:0, scale:1, duration:1.1 }, .25);

  // parallax on art panels (image drifts within its frame)
  gsap.to('.about-vis img', {
    yPercent:10, ease:'none',
    scrollTrigger:{ trigger:'.about-vis', start:'top bottom', end:'bottom top', scrub:true }
  });

  // counters on scroll
  document.querySelectorAll('[data-count]').forEach(el=>{
    window.ScrollTrigger.create({ trigger:el, start:'top 85%', once:true, onEnter:()=>animateCount(el) });
  });

  // refresh once images/fonts settle
  window.addEventListener('load', ()=> window.ScrollTrigger.refresh());
}

/* ---------- animated WhatsApp thread ---------- */
const chat = document.getElementById('chat');
const chatScript = [
  { type:'in',  text:"Hi 👋 I'd like to book a dental cleaning this week.", time:'10:24' },
  { type:'typing', dur:1100 },
  { type:'out', text:"Of course! Here's what's open at Bright Smile Clinic 🦷", chips:['Wed 3:00 PM','Thu 11:30 AM','Fri 5:15 PM'], time:'10:24' },
  { type:'in',  text:"Thursday 11:30 works great.", time:'10:25' },
  { type:'typing', dur:1000 },
  { type:'out', text:"Booked ✅ Thursday 11:30 AM with Dr. Rana. I'll send a reminder the day before.", time:'10:25' },
  { type:'in',  text:"Do you accept Daman insurance?", time:'10:26' },
  { type:'typing', dur:900 },
  { type:'out', text:"We do! Connecting you with our team to confirm your coverage 👩‍⚕️", time:'10:26' },
];
const esc = (s) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function bubble(item){
  const div = document.createElement('div');
  div.className = 'bub ' + item.type;
  let html = esc(item.text);
  if (item.chips) html += '<div class="chips">' + item.chips.map(c => `<span class="chip">${esc(c)}</span>`).join('') + '</div>';
  html += `<span class="t">${item.time} ${item.type==='out' ? '✓✓' : ''}</span>`;
  div.innerHTML = html;
  return div;
}
function typingEl(){
  const d = document.createElement('div');
  d.className = 'typing'; d.innerHTML = '<span></span><span></span><span></span>';
  return d;
}
let idx = 0;
function step(){
  if (idx >= chatScript.length){ setTimeout(() => { chat.innerHTML=''; idx=0; step(); }, 3800); return; }
  const item = chatScript[idx];
  if (item.type === 'typing'){
    const t = typingEl(); chat.appendChild(t); chat.scrollTop = chat.scrollHeight;
    setTimeout(() => { t.remove(); idx++; step(); }, item.dur);
  } else {
    chat.appendChild(bubble(item)); chat.scrollTop = chat.scrollHeight; idx++;
    setTimeout(step, item.type === 'in' ? 900 : 1500);
  }
}
let chatStarted = false;
const chatIO = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting && !chatStarted){ chatStarted = true; step(); } });
}, { threshold:0.3 });
if (chat) chatIO.observe(chat);
