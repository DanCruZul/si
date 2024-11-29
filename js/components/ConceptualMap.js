import { renderMapNode } from './map/MapNode.js';
import { TOOLS_DATA } from '../data/conceptualMapData.js';

export function renderConceptualMap() {
  return `
    <section class="conceptual-map">
      <h2 class="section-title" data-aos="fade-up">Mapa Conceptual</h2>
      <div class="map-container">
        <div class="map-center">
          <div class="main-node" data-aos="zoom-in">
            <i class="fas fa-tools"></i>
            <span>Herramientas Educativas Colaborativas</span>
          </div>
          <div class="map-connections">
            ${TOOLS_DATA.map((tool, index) => `
              <div data-aos="fade-up" data-aos-delay="${150 + (index * 50)}">
                ${renderMapNode(tool)}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}