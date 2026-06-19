/* ============================================================
   LEXORO v3 — theme toggle (light ⇄ dark/black)
   Sets data-theme on <html>, persists in localStorage.
   ============================================================ */
(function () {
  'use strict';
  const html = document.documentElement;

  function apply(theme) {
    if (theme === 'dark') html.setAttribute('data-theme', 'dark');
    else html.removeAttribute('data-theme');
    document.querySelectorAll('[data-theme-btn]').forEach(b => {
      b.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      b.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    });
    try { localStorage.setItem('lexoro-theme', theme); } catch (e) {}
  }

  window.setTheme = apply;
  window.toggleTheme = function () {
    apply(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  };

  function boot() {
    let saved = 'light';
    try { saved = localStorage.getItem('lexoro-theme') || 'light'; } catch (e) {}
    apply(saved);
    document.querySelectorAll('[data-theme-btn]').forEach(b => {
      b.addEventListener('click', window.toggleTheme);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
