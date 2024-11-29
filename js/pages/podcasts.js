export const podcastsPageContent = `
  <div id="podcasts" class="page">
    <a href="#" onclick="showPage('home')" class="back-btn">
      <i class="fas fa-arrow-left"></i> Volver al inicio
    </a>
    
    <div class="page-header">
      <h1>Podcasts <span class="gradient-text">Educativos</span></h1>
      <p>Contenido de audio que permite el aprendizaje flexible y móvil</p>
    </div>

    <div class="page-content">
      <div class="content-section" data-aos="fade-up">
        <h2>¿Qué son los Podcasts Educativos?</h2>
        <p>Los podcasts educativos son contenidos de audio que permiten el aprendizaje flexible y móvil. Son herramientas ideales para el aprendizaje auditivo y la optimización del tiempo.</p>
        
        <div class="video-container">
          <iframe src="https://www.youtube.com/embed/8IPV2oSz8m4" allowfullscreen></iframe>
        </div>
      </div>

      <div class="two-column-grid" data-aos="fade-up" data-aos-delay="100">
        <div class="content-section">
          <h3><i class="fas fa-plus-circle"></i> Ventajas</h3>
          <ul class="feature-list">
            <li><i class="fas fa-check"></i> Aprendizaje en cualquier momento</li>
            <li><i class="fas fa-check"></i> Desarrollo de escucha activa</li>
            <li><i class="fas fa-check"></i> Acceso a expertos globales</li>
          </ul>
        </div>
        
        <div class="content-section">
          <h3><i class="fas fa-minus-circle"></i> Desventajas</h3>
          <ul class="feature-list">
            <li><i class="fas fa-exclamation"></i> Requiere conexión a internet</li>
            <li><i class="fas fa-exclamation"></i> Limitación visual</li>
            <li><i class="fas fa-exclamation"></i> Calidad variable</li>
          </ul>
        </div>
      </div>

      <div class="content-section" data-aos="fade-up" data-aos-delay="200">
        <h3>Impacto en el Rol Estudiantil</h3>
        <img src="https://images.unsplash.com/photo-1589903308904-1010c2294adc" alt="Podcast Impact" class="image-feature" loading="lazy">
        <ul class="feature-list">
          <li><i class="fas fa-star"></i> Optimización del tiempo de estudio</li>
          <li><i class="fas fa-star"></i> Acceso a diferentes perspectivas</li>
          <li><i class="fas fa-star"></i> Mejora de habilidades auditivas</li>
        </ul>
      </div>
    </div>
  </div>
`;