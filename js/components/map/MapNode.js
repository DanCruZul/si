export function renderMapNode({ icon, title, features }) {
  return `
    <div class="map-branch">
      <div class="connection-line"></div>
      <div class="map-node">
        <i class="${icon}"></i>
        <span>${title}</span>
        <div class="sub-nodes">
          ${features.map(feature => `
            <div class="sub-node">
              <span class="sub-node-dot"></span>
              ${feature}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}