export function renderBlogPlatforms() {
  return `
    <div class="content-section" data-aos="fade-up">
      <h2>Plataformas de Blogs Educativos</h2>
      <div class="platforms-grid">
        <div class="platform-card">
          <i class="fab fa-wordpress"></i>
          <h3>WordPress</h3>
          <p>Plataforma versátil con múltiples plugins educativos</p>
          <ul class="feature-list">
            <li><i class="fas fa-check"></i> Fácil de personalizar</li>
            <li><i class="fas fa-check"></i> Plugins educativos</li>
            <li><i class="fas fa-check"></i> Comunidad activa</li>
          </ul>
        </div>
        <div class="platform-card">
          <i class="fab fa-blogger-b"></i>
          <h3>Blogger</h3>
          <p>Solución gratuita integrada con Google Workspace</p>
          <ul class="feature-list">
            <li><i class="fas fa-check"></i> Integración Google</li>
            <li><i class="fas fa-check"></i> Fácil de usar</li>
            <li><i class="fas fa-check"></i> Sin costos</li>
          </ul>
        </div>
        <div class="platform-card">
          <i class="fab fa-medium"></i>
          <h3>Medium</h3>
          <p>Plataforma profesional con enfoque en la escritura</p>
          <ul class="feature-list">
            <li><i class="fas fa-check"></i> Diseño limpio</li>
            <li><i class="fas fa-check"></i> Alcance global</li>
            <li><i class="fas fa-check"></i> Estadísticas detalladas</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}