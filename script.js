(() => {
  const nav = document.querySelector('.nav');
  const menuBtn = document.querySelector('.nav__menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  // Nav scroll state
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  const toggle = (open) => {
    const isOpen = open ?? mobileMenu.hasAttribute('hidden');
    if (isOpen) {
      mobileMenu.removeAttribute('hidden');
      menuBtn.classList.add('is-open');
      menuBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.setAttribute('hidden', '');
      menuBtn.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  };
  menuBtn.addEventListener('click', () => toggle());
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggle(false)));
})();
