/**
 * Sets up lazy loading for images using Intersection Observer
 * @returns {Function} Cleanup function to disconnect the observer
 */
export function setupLazyLoading() {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          loadImage(img, observer);
        }
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.1
  });

  // Observe all lazy images
  document.querySelectorAll('.lazy-image').forEach(img => {
    imageObserver.observe(img);
  });

  // Cleanup on page change
  return () => imageObserver.disconnect();
}

/**
 * Loads an image with a preloader
 * @param {HTMLImageElement} img - The image element to load
 * @param {IntersectionObserver} observer - The observer to unobserve the image
 */
function loadImage(img, observer) {
  const tempImage = new Image();
  
  tempImage.onload = () => {
    img.src = img.dataset.src;
    img.classList.add('loaded');
  };
  
  tempImage.src = img.dataset.src;
  img.removeAttribute('data-src');
  observer.unobserve(img);
}