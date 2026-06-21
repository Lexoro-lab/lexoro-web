/* ============================================================
   LEXORO v3 — INTERACTIVE SAVINGS CALCULATOR
   Sliders -> animated outputs (hours + AED saved by automation).
   ============================================================ */
(function () {
  'use strict';
  const root = document.getElementById('calc');
  if (!root) return;

  const AUTO = 0.83;       // share resolved without a human
  const fmt = (n) => Math.round(n).toLocaleString('en-US');

  const sliders = {
    msgs: root.querySelector('[data-s="msgs"]'),
    mins: root.querySelector('[data-s="mins"]'),
    cost: root.querySelector('[data-s="cost"]')
  };
  const vals = {
    msgs: root.querySelector('[data-v="msgs"]'),
    mins: root.querySelector('[data-v="mins"]'),
    cost: root.querySelector('[data-v="cost"]')
  };
  const out = {
    hours: root.querySelector('[data-o="hours"]'),
    aed: root.querySelector('[data-o="aed"]'),
    convos: root.querySelector('[data-o="convos"]'),
    after: root.querySelector('[data-o="after"]'),
    bar: root.querySelector('[data-o="bar"]')
  };

  const anim = {};
  function animateTo(key, el, target, suffix) {
    cancelAnimationFrame(anim[key]);
    const from = parseFloat(el.dataset.cur || '0');
    const start = performance.now(), dur = 650;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      const cur = from + (target - from) * e;
      el.textContent = fmt(cur) + (suffix || '');
      el.dataset.cur = cur;
      if (p < 1) anim[key] = requestAnimationFrame(tick);
    };
    anim[key] = requestAnimationFrame(tick);
  }

  function recalc() {
    const m = +sliders.msgs.value;   // conversations / day
    const t = +sliders.mins.value;   // minutes / conversation
    const c = +sliders.cost.value;   // AED / hour

    vals.msgs.textContent = fmt(m);
    vals.mins.textContent = t + ' min';
    vals.cost.textContent = 'AED ' + c;

    const hoursMonth = (m * (t / 60) * AUTO * 30);
    const aedMonth = hoursMonth * c;
    const convosMonth = m * 30;
    const afterHours = Math.round(m * 0.30 * 30);

    animateTo('hours', out.hours, hoursMonth, ' hrs');
    animateTo('aed', out.aed, aedMonth, '');
    animateTo('convos', out.convos, convosMonth, '');
    animateTo('after', out.after, afterHours, '');

    out.bar.style.width = Math.min(100, AUTO * 100) + '%';

    // reflect slider fill
    Object.values(sliders).forEach(s => {
      const pct = ((s.value - s.min) / (s.max - s.min)) * 100;
      s.style.setProperty('--fill', pct + '%');
    });
  }

  Object.values(sliders).forEach(s => s.addEventListener('input', recalc));

  let started = false;
  const io = new IntersectionObserver((en) => {
    en.forEach(e => { if (e.isIntersecting && !started) { started = true; recalc(); } });
  }, { threshold: 0.25 });
  io.observe(root);
  recalc();
})();
