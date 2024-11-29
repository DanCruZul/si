export function renderPodcastApplications() {
  return `
    <div class="content-section" data-aos="fade-up">
      <h2>Aplicaciones Educativas</h2>
      <div class="applications-grid">
        <div class="application-card">
          <img src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618" alt="Idiomas" class="application-image">
          <div class="application-content">
            <h3>Aprendizaje de Idiomas</h3>
            <p>Mejora la comprensión auditiva y pronunciación a través de podcasts en diferentes idiomas.</p>
          </div>
        </div>
        
        <div class="application-card">
          <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173" alt="Clases" class="application-image">
          <div class="application-content">
            <h3>Clases Invertidas</h3>
            <p>Los estudiantes escuchan las lecciones antes de clase para aprovechar mejor el tiempo presencial.</p>
          </div>
        </div>
        
        <div class="application-card">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" alt="Proyectos" class="application-image">
          <div class="application-content">
            <h3>Proyectos Estudiantiles</h3>
            <p>Creación de podcasts como proyectos para desarrollar habilidades de comunicación.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}