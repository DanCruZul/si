export function renderToolCard({ title, image, icon, features, pageId }) {
  return `
    <a href="#" class="tool-card" onclick="showPage('${pageId}')" data-aos="fade-up">
      <div class="tool-card-image-container">
        <img data-src="${image}" alt="${title}" loading="lazy">
      </div>
      <div class="tool-card-content">
        <div class="tool-icon"><i class="${icon}"></i></div>
        <h3>${title}</h3>
        <ul class="feature-list">
          ${features.map(feature => `
            <li><i class="fas fa-check"></i> ${feature}</li>
          `).join('')}
        </ul>
      </div>
    </a>
  `;
}