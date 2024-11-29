import { renderToolCard } from './ToolCard.jsx';

export function renderToolsGrid(tools) {
  return (
    `<div class="tools-grid">
      ${tools.map((tool, index) => 
        `<div 
          data-aos="fade-up" 
          data-aos-delay="${index * 100}" 
          data-aos-anchor-placement="top-bottom"
        >
          ${renderToolCard(tool)}
        </div>`
      ).join('')}
    </div>`
  );
}