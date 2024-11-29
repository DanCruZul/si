export const rssPageContent = `
  <div id="rss" class="page">
    <a href="#" onclick="showPage('home')" class="back-btn">
      <i class="fas fa-arrow-left"></i> Volver al inicio
    </a>
    
    <div class="page-header">
      <h1>RSS en <span class="gradient-text">Educación</span></h1>
      <p>Mantente actualizado con múltiples fuentes de información de manera eficiente</p>
    </div>

    <div class="page-content">
      <div class="content-section" data-aos="fade-up">
        <h2>¿Qué es RSS?</h2>
        <p>RSS (Really Simple Syndication) es una herramienta que permite mantenerse actualizado con múltiples fuentes de información de manera eficiente y automatizada.</p>
        
        <div class="video-container">
          <iframe src="https://www.youtube.com/embed/6HNUqDL-pI8" allowfullscreen></iframe>
        </div>
      </div>

      <div class="two-column-grid" data-aos="fade-up" data-aos-delay="100">
        <div class="content-section">
          <h3><i class="fas fa-plus-circle"></i> Ventajas</h3>
          <ul class="feature-list">
            <li><i class="fas fa-check"></i> Centralización de información</li>
            <li><i class="fas fa-check"></i> Ahorro de tiempo</li>
            <li><i class="fas fa-check"></i> Actualización automática</li>
          </ul>
        </div>
        
        <div class="content-section">
          <h3><i class="fas fa-minus-circle"></i> Desventajas</h3>
          <ul class="feature-list">
            <li><i class="fas fa-exclamation"></i> Curva de aprendizaje inicial</li>
            <li><i class="fas fa-exclamation"></i> Configuración necesaria</li>
            <li><i class="fas fa-exclamation"></i> Dependencia de feeds</li>
          </ul>
        </div>
      </div>

      <div class="content-section" data-aos="fade-up" data-aos-delay="200">
        <h3>Impacto en el Rol Estudiantil</h3>
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" alt="RSS Impact" class="image-feature" loading="lazy">
        <ul class="feature-list">
          <li><i class="fas fa-star"></i> Gestión eficiente de recursos</li>
          <li><i class="fas fa-star"></i> Actualización constante</li>
          <li><i class="fas fa-star"></i> Organización de fuentes</li>
        </ul>
      </div>
    </div>
  </div>
`;