export function renderYouTubeEducational() {
  return `
    <div class="content-section" data-aos="fade-up">
      <h2>Impacto Educativo</h2>
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/videoseries?list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8" allowfullscreen></iframe>
      </div>
      <div class="impact-grid">
        <div class="impact-item">
          <i class="fas fa-graduation-cap"></i>
          <h3>Educación Formal</h3>
          <p>Complemento para clases presenciales y cursos en línea.</p>
        </div>
        <div class="impact-item">
          <i class="fas fa-users"></i>
          <h3>Comunidad Educativa</h3>
          <p>Interacción entre estudiantes y educadores globalmente.</p>
        </div>
      </div>
    </div>
  `;
}