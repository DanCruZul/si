export const homePageContent = `
  <div id="home" class="page active">
    <section class="hero">
      <h1>Herramientas Educativas <span class="gradient-text">Colaborativas</span></h1>
      <p>Descubre un nuevo mundo de posibilidades para el aprendizaje digital y la colaboración educativa</p>
    </section>
    
    <div class="tools-grid">
      <a href="#" class="tool-card" onclick="showPage('blogs')">
        <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643" alt="Blog Writing">
        <div class="tool-icon"><i class="fas fa-blog"></i></div>
        <h3>Blogs Educativos</h3>
        <ul class="feature-list">
          <li><i class="fas fa-check"></i> Desarrollo de escritura</li>
          <li><i class="fas fa-check"></i> Pensamiento crítico</li>
          <li><i class="fas fa-check"></i> Portafolio digital</li>
        </ul>
      </a>

      <a href="#" class="tool-card" onclick="showPage('podcasts')">
        <img src="https://images.unsplash.com/photo-1589903308904-1010c2294adc" alt="Podcast Recording">
        <div class="tool-icon"><i class="fas fa-podcast"></i></div>
        <h3>Podcasts</h3>
        <ul class="feature-list">
          <li><i class="fas fa-check"></i> Aprendizaje flexible</li>
          <li><i class="fas fa-check"></i> Escucha activa</li>
          <li><i class="fas fa-check"></i> Contenido experto</li>
        </ul>
      </a>

      <a href="#" class="tool-card" onclick="showPage('rss')">
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" alt="RSS Feed">
        <div class="tool-icon"><i class="fas fa-rss"></i></div>
        <h3>RSS</h3>
        <ul class="feature-list">
          <li><i class="fas fa-check"></i> Gestión de información</li>
          <li><i class="fas fa-check"></i> Actualización automática</li>
          <li><i class="fas fa-check"></i> Curación de contenido</li>
        </ul>
      </a>

      <a href="#" class="tool-card" onclick="showPage('youtube')">
        <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0" alt="YouTube Education">
        <div class="tool-icon"><i class="fab fa-youtube"></i></div>
        <h3>YouTube</h3>
        <ul class="feature-list">
          <li><i class="fas fa-check"></i> Tutoriales visuales</li>
          <li><i class="fas fa-check"></i> Contenido multilingüe</li>
          <li><i class="fas fa-check"></i> Aprendizaje interactivo</li>
        </ul>
      </a>

      <a href="#" class="tool-card" onclick="showPage('onedrive')">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" alt="Cloud Storage">
        <div class="tool-icon"><i class="fas fa-cloud"></i></div>
        <h3>OneDrive</h3>
        <ul class="feature-list">
          <li><i class="fas fa-check"></i> Almacenamiento seguro</li>
          <li><i class="fas fa-check"></i> Colaboración en tiempo real</li>
          <li><i class="fas fa-check"></i> Integración Office</li>
        </ul>
      </a>
    </div>
  </div>
`;