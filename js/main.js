import { renderPages } from './pages.js';
import { showPage } from './navigation.js';
import { initializeAnimations, setupScrollOptimization } from './utils/animations.js';
import { setupLazyLoading } from './utils/lazyLoading.js';
import 'aos/dist/aos.css';

// Initialize pages
renderPages();

// Initialize optimizations
document.addEventListener('DOMContentLoaded', () => {
  initializeAnimations();
  setupScrollOptimization();
  setupLazyLoading();
});

// Export showPage function for global use
window.showPage = showPage;