export function renderPodcastOverview() {
  return `
    <div class="content-section" data-aos="fade-up">
      <h2>Podcasts en la Educación</h2>
      <p>Los podcasts educativos son recursos auditivos que permiten un aprendizaje flexible y adaptado a diferentes estilos de aprendizaje.</p>
      
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/bCtFIM80oJE" allowfullscreen></iframe>
      </div>

      <div class="learning-styles-grid">
        <div class="style-card">
          <i class="fas fa-headphones"></i>
          <h3>Auditivo</h3>
          <p>Ideal para estudiantes que aprenden mejor escuchando y procesando información verbal.</p>
        </div>
        <div class="style-card">
          <i class="fas fa-clock"></i>
          <h3>Flexible</h3>
          <p>Permite aprender mientras realizas otras actividades o te desplazas.</p>
        </div>
        <div class="style-card">
          <i class="fas fa-mobile-alt"></i>
          <h3>Móvil</h3>
          <p>Accesible desde cualquier dispositivo, en cualquier momento y lugar.</p>
        </div>
      </div>
    </div>
  `;
}