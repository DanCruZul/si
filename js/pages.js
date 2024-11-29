import { homePageContent } from './pages/home.js';
import { blogsPageContent } from './pages/blogs.js';
import { podcastsPageContent } from './pages/podcasts.js';
import { rssPageContent } from './pages/rss.js';
import { youtubePageContent } from './pages/youtube.js';
import { onedrivePageContent } from './pages/onedrive.js';

export function renderPages() {
  const pagesContainer = document.getElementById('pages-container');
  
  // Render all pages
  pagesContainer.innerHTML = `
    ${homePageContent}
    ${blogsPageContent}
    ${podcastsPageContent}
    ${rssPageContent}
    ${youtubePageContent}
    ${onedrivePageContent}
  `;
}