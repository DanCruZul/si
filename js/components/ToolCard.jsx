import { showPage } from '../navigation.js';

export function renderToolCard({ title, image, icon, features, pageId }) {
  return (
    `<a href="#" class="tool-card" onclick="showPage('${pageId}')">
      <div class="tool-card-image-container">
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"
          data-src="${image}" 
          alt="${title}"
          class="lazy-image"
          loading="lazy"
        />
      </div>
      <div class="tool-card-content">
        <div class="tool-icon"><i class="${icon}"></i></div>
        <h3>${title}</h3>
        <ul class="feature-list">
          ${features.map(feature => 
            `<li><i class="fas fa-check"></i> ${feature}</li>`
          ).join('')}
        </ul>
      </div>
    </a>`
  );
}