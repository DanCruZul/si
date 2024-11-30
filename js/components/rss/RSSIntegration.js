export function renderRSSIntegration() {
  return `
    <div class="content-section" data-aos="fade-up">
      <h2>Integración con Herramientas Educativas</h2>
      <div class="integration-grid">
        <div class="integration-item">
          <div class="integration-image-container">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"
              data-src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a" 
              alt="LMS Integration" 
              class="integration-image"
            />
          </div>
          <div class="integration-content">
            <h3>Sistemas de Gestión de Aprendizaje</h3>
            <p>Integración con Moodle, Canvas y otras plataformas LMS.</p>
          </div>
        </div>
        <div class="integration-item">
          <div class="integration-image-container">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"
              data-src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" 
              alt="Research Tools" 
              class="integration-image"
            />
          </div>
          <div class="integration-content">
            <h3>Herramientas de Investigación</h3>
            <p>Conexión con gestores bibliográficos y bases de datos académicas.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}