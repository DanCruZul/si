export function initializeAnimations() {
  AOS.init({
    duration: 400,
    once: true,
    offset: 100,
    disable: window.innerWidth < 768,
    throttleDelay: 99,
    debounceDelay: 50
  });
}

export function setupScrollOptimization() {
  // Optimize scroll performance
  let ticking = false;
  let lastKnownScrollPosition = 0;

  window.addEventListener('scroll', () => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        // Optimize animations during scroll
        document.body.style.willChange = 'transform';
        ticking = false;
      });

      ticking = true;
    }
  }, { passive: true });

  // Reset will-change after scroll ends
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      document.body.style.willChange = 'auto';
    }, 150);
  }, { passive: true });
}