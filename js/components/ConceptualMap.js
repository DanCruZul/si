import { renderMapNode } from './map/MapNode.js';
import { TOOLS_DATA } from '../data/conceptualMapData.js';

export function renderConceptualMap() {
  return `
    <section class="conceptual-map" data-aos="fade-up">
      <h2 class="section-title">Mapa Conceptual</h2>
      <div class="map-container">
        <div class="map-center">
          <div class="map-node main-node">
            <i class="fas fa-tools"></i>
            <span>Herramientas Educativas Colaborativas</span>
          </div>
          <div class="map-connections">
            ${TOOLS_DATA.map(tool => renderMapNode(tool)).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}