export const homePageContent = `
  <div id="home" class="page active">
    <section class="hero" data-aos="fade-up">
      <h1>Herramientas Educativas <span class="gradient-text">Colaborativas</span></h1>
      <p>Descubre un nuevo mundo de posibilidades para el aprendizaje digital y la colaboración educativa</p>
      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Collaborative Education" class="hero-image">
    </section>
    
    <div class="tools-grid">
      <a href="#" class="tool-card" onclick="showPage('blogs')" data-aos="fade-up" data-aos-delay="100">
        <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643" alt="Blog Writing">
        <div class="tool-card-content">
          <div class="tool-icon"><i class="fas fa-blog"></i></div>
          <h3>Blogs Educativos</h3>
          <ul class="feature-list">
            <li><i class="fas fa-check"></i> Desarrollo de escritura</li>
            <li><i class="fas fa-check"></i> Pensamiento crítico</li>
            <li><i class="fas fa-check"></i> Portafolio digital</li>
          </ul>
        </div>
      </a>

      <a href="#" class="tool-card" onclick="showPage('podcasts')" data-aos="fade-up" data-aos-delay="200">
        <img src="https://images.unsplash.com/photo-1589903308904-1010c2294adc" alt="Podcast Recording">
        <div class="tool-card-content">
          <div class="tool-icon"><i class="fas fa-podcast"></i></div>
          <h3>Podcasts</h3>
          <ul class="feature-list">
            <li><i class="fas fa-check"></i> Aprendizaje flexible</li>
            <li><i class="fas fa-check"></i> Escucha activa</li>
            <li><i class="fas fa-check"></i> Contenido experto</li>
          </ul>
        </div>
      </a>

      <a href="#" class="tool-card" onclick="showPage('rss')" data-aos="fade-up" data-aos-delay="300">
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" alt="RSS Feed">
        <div class="tool-card-content">
          <div class="tool-icon"><i class="fas fa-rss"></i></div>
          <h3>RSS</h3>
          <ul class="feature-list">
            <li><i class="fas fa-check"></i> Gestión de información</li>
            <li><i class="fas fa-check"></i> Actualización automática</li>
            <li><i class="fas fa-check"></i> Curación de contenido</li>
          </ul>
        </div>
      </a>

      <a href="#" class="tool-card" onclick="showPage('youtube')" data-aos="fade-up" data-aos-delay="400">
        <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0" alt="YouTube Education">
        <div class="tool-card-content">
          <div class="tool-icon"><i class="fab fa-youtube"></i></div>
          <h3>YouTube</h3>
          <ul class="feature-list">
            <li><i class="fas fa-check"></i> Tutoriales visuales</li>
            <li><i class="fas fa-check"></i> Contenido multilingüe</li>
            <li><i class="fas fa-check"></i> Aprendizaje interactivo</li>
          </ul>
        </div>
      </a>

      <a href="#" class="tool-card" onclick="showPage('onedrive')" data-aos="fade-up" data-aos-delay="500">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" alt="Cloud Storage">
        <div class="tool-card-content">
          <div class="tool-icon"><i class="fas fa-cloud"></i></div>
          <h3>OneDrive</h3>
          <ul class="feature-list">
            <li><i class="fas fa-check"></i> Almacenamiento seguro</li>
            <li><i class="fas fa-check"></i> Colaboración en tiempo real</li>
            <li><i class="fas fa-check"></i> Integración Office</li>
          </ul>
        </div>
      </a>
    </div>
  </div>
`;