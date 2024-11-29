import { renderPages } from './pages.js';
import { showPage } from './navigation.js';
import { initializeAnimations } from './utils/animations.js';
import 'aos/dist/aos.css';

// Initialize pages
renderPages();

// Initialize animations
initializeAnimations();

// Export showPage function for global use
window.showPage = showPage;