import { renderToolCard } from './ToolCard.js';

export function renderToolsGrid(tools) {
  const toolCards = tools.map((tool, index) => `
    <div 
      class="tool-grid-item"
      data-aos="fade-up" 
      data-aos-delay="${index * 100}" 
      data-aos-anchor-placement="top-bottom"
    >
      ${renderToolCard(tool)}
    </div>
  `).join('');

  return `
    <div class="tools-grid">
      ${toolCards}
    </div>
  `;
}