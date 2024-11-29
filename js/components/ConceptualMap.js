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
            <div class="map-branch">
              <div class="connection-line"></div>
              <div class="map-node">
                <i class="fas fa-blog"></i>
                <span>Blogs</span>
                <div class="sub-nodes">
                  <div class="sub-node">
                    <span class="sub-node-dot"></span>
                    Escritura
                  </div>
                  <div class="sub-node">
                    <span class="sub-node-dot"></span>
                    Reflexión
                  </div>
                  <div class="sub-node">
                    <span class="sub-node-dot"></span>
                    Portfolio
                  </div>
                </div>
              </div>
            </div>
            <div class="map-branch">
              <div class="connection-line"></div>
              <div class="map-node">
                <i class="fas fa-podcast"></i>
                <span>Podcasts</span>
                <div class="sub-nodes">
                  <div class="sub-node">
                    <span class="sub-node-dot"></span>
                    Audio
                  </div>
                  <div class="sub-node">
                    <span class="sub-node-dot"></span>
                    Movilidad
                  </div>
                  <div class="sub-node">
                    <span class="sub-node-dot"></span>
                    Accesibilidad
                  </div>
                </div>
              </div>
            </div>
            <div class="map-branch">
              <div class="connection-line"></div>
              <div class="map-node">
                <i class="fas fa-rss"></i>
                <span>RSS</span>
                <div class="sub-nodes">
                  <div class="sub-node">
                    <span class="sub-node-dot"></span>
                    Actualización
                  </div>
                  <div class="sub-node">
                    <span class="sub-node-dot"></span>
                    Organización
                  </div>
                  <div class="sub-node">
                    <span class="sub-node-dot"></span>
                    Filtrado
                  </div>
                </div>
              </div>
            </div>
            <div class="map-branch">
              <div class="connection-line"></div>
              <div class="map-node">
                <i class="fab fa-youtube"></i>
                <span>YouTube</span>
                <div class="sub-nodes">
                  <div class="sub-node">
                    <span class="sub-node-dot"></span>
                    Visual
                  </div>
                  <div class="sub-node">
                    <span class="sub-node-dot"></span>
                    Interactivo
                  </div>
                  <div class="sub-node">
                    <span class="sub-node-dot"></span>
                    Multimedia
                  </div>
                </div>
              </div>
            </div>
            <div class="map-branch">
              <div class="connection-line"></div>
              <div class="map-node">
                <i class="fas fa-cloud"></i>
                <span>OneDrive</span>
                <div class="sub-nodes">
                  <div class="sub-node">
                    <span class="sub-node-dot"></span>
                    Almacenamiento
                  </div>
                  <div class="sub-node">
                    <span class="sub-node-dot"></span>
                    Colaboración
                  </div>
                  <div class="sub-node">
                    <span class="sub-node-dot"></span>
                    Sincronización
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}