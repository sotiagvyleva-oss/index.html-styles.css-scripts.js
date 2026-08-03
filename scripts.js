const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const form = document.querySelector('#lead-form');
const email = document.querySelector('#email');
const message = document.querySelector('#form-message');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Открыть меню');
  });
});

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = email.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  message.textContent = '';
  message.style.position = 'static';

  if (!valid) {
    message.textContent = 'Введите корректный email.';
    message.style.color = '#c0392b';
    email.focus();
    return;
  }

  message.textContent = 'Спасибо, мы свяжемся.';
  message.style.color = '#1f7a3d';
  form.reset();
});
