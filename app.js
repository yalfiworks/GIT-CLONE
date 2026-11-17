const root = document.documentElement;
const status = document.querySelector('[data-status]');
const themeButtons = document.querySelectorAll('[data-theme-toggle]');

function setTheme(theme, announce = false) {
  const isDark = theme === 'dark';
  root.dataset.theme = isDark ? 'dark' : 'light';
  themeButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(isDark));
    const label = button.querySelector('[data-theme-label]');
    if (label) label.textContent = isDark ? 'Light mode' : 'Dark mode';
  });
  if (announce) status.textContent = `${isDark ? 'Dark' : 'Light'} mode enabled.`;
}

const savedTheme = localStorage.getItem('northstar-theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
setTheme(savedTheme || preferredTheme);

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('northstar-theme', nextTheme);
    setTheme(nextTheme, true);
  });
});

document.querySelector('[data-current-year]').textContent = String(new Date().getFullYear());

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

document.querySelectorAll('.mobile-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = link.closest('details');
    if (menu) menu.open = false;
  });
});
