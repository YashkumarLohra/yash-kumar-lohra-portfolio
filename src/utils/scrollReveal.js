export function initScrollReveal() {
  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        
        // Unobserve after revealing to keep it visible
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Small timeout to allow DOM to render before observing
  setTimeout(() => {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
  }, 100);
}
