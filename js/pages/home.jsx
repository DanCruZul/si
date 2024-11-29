import { renderHero } from '../components/Hero.js';
import { renderToolsGrid } from '../components/ToolsGrid.jsx';
import { renderSynthesis } from '../components/Synthesis.js';
import { renderConceptualMap } from '../components/ConceptualMap.js';
import { toolsData } from '../data/toolsData.js';

export const homePageContent = (
  `<div id="home" class="page active">
    ${renderHero()}
    ${renderToolsGrid(toolsData)}
    ${renderSynthesis()}
    ${renderConceptualMap()}
  </div>`
);