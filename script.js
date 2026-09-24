const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const mobile = document.querySelector('.mobile-nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

toggle?.addEventListener('click', () => {
  const open = mobile.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  mobile.setAttribute('aria-hidden', String(!open));
});

document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mobile.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    mobile.setAttribute('aria-hidden', 'true');
  });
});
