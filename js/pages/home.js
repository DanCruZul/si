import { renderHero } from '../components/Hero.js';
import { renderToolCard } from '../components/ToolCard.js';
import { renderSynthesis } from '../components/Synthesis.js';
import { renderConceptualMap } from '../components/ConceptualMap.js';
import { toolsData } from '../data/toolsData.js';

export const homePageContent = `
  <div id="home" class="page active">
    ${renderHero()}
    
    <div class="tools-grid">
      ${toolsData.map(tool => renderToolCard(tool)).join('')}
    </div>

    ${renderSynthesis()}
    ${renderConceptualMap()}
  </div>
`;