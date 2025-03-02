// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section-transition').forEach(el => observer.observe(el));

// Touch feedback handler
document.addEventListener('touchstart', (e) => {
  if (e.target.closest('.tap-feedback')) {
    e.target.classList.add('tap-active');
  }
});

document.addEventListener('touchend', (e) => {
  document.querySelectorAll('.tap-active').forEach(el => {
    el.classList.remove('tap-active');
  });
});