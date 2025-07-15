window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero-flower').forEach(flower => {
    flower.classList.add('spin-on-load');
    flower.addEventListener('animationend', () => {
      flower.classList.remove('spin-on-load');
    }, { once: true });
  });
});
