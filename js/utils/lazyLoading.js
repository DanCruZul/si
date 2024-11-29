// Lazy loading utility for images
export function setupLazyLoading() {
  if ('loading' in HTMLImageElement.prototype) {
    // Use native lazy loading if available
    document.querySelectorAll('[data-src]').forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  } else {
    // Fallback to Intersection Observer
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });

    document.querySelectorAll('[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Preload images for better performance
  window.addEventListener('load', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    if (images.length > 0) {
      requestIdleCallback(() => {
        images.forEach(img => {
          if (img.dataset.src) {
            const preloadLink = document.createElement('link');
            preloadLink.rel = 'preload';
            preloadLink.as = 'image';
            preloadLink.href = img.dataset.src;
            document.head.appendChild(preloadLink);
          }
        });
      });
    }
  });
}