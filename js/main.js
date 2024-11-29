import { renderPages } from './pages.js';
import { showPage } from './navigation.js';

// Initialize pages
renderPages();

// Export showPage function for global use
window.showPage = showPage;