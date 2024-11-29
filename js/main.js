import { renderPages } from './pages.js';
import { showPage } from './navigation.js';
import { initializeAnimations } from './utils/animations.js';
import { renderNavigation } from './components/navigation.js';
import 'aos/dist/aos.css';

// Initialize navigation
renderNavigation();

// Initialize pages
renderPages();

// Initialize animations
initializeAnimations();

// Export showPage function for global use
window.showPage = showPage;