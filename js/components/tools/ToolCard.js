import { Card, CardImage, CardContent } from '../ui/Card.js';
import { Icon } from '../ui/Icon.js';

export function renderToolCard({ title, image, icon, features, pageId }) {
  const featuresList = features.map(feature => `
    <li class="feature-item">
      ${Icon({ name: 'fas fa-check', className: 'feature-icon' })}
      <span>${feature}</span>
    </li>
  `).join('');

  return `
    <a href="#" class="tool-card" onclick="showPage('${pageId}')">
      ${CardImage({ src: image, alt: title, className: 'tool-card-image' })}
      ${CardContent({
        children: `
          <div class="tool-icon">${Icon({ name: icon })}</div>
          <h3 class="tool-title">${title}</h3>
          <ul class="feature-list">
            ${featuresList}
          </ul>
        `
      })}
    </a>
  `;
}