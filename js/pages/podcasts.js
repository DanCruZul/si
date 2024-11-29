import { renderPodcastOverview } from '../components/podcasts/PodcastOverview.js';
import { renderPodcastTools } from '../components/podcasts/PodcastTools.js';
import { renderPodcastApplications } from '../components/podcasts/PodcastApplications.js';

export const podcastsPageContent = `
  <div id="podcasts" class="page">
    <div class="page-content">
      <a href="#" onclick="showPage('home')" class="back-btn">
        <i class="fas fa-arrow-left"></i> Volver al inicio
      </a>
      
      <div class="page-header">
        <h1>Podcasts <span class="gradient-text">Educativos</span></h1>
        <p>Contenido de audio que permite el aprendizaje flexible y móvil</p>
      </div>

      ${renderPodcastOverview()}
      ${renderPodcastTools()}
      ${renderPodcastApplications()}

      <div class="content-section" data-aos="fade-up">
        <h2>Beneficios para el Aprendizaje</h2>
        <div class="benefits-grid">
          <div class="benefit-item">
            <i class="fas fa-brain"></i>
            <h3>Comprensión Auditiva</h3>
            <p>Mejora las habilidades de escucha activa y comprensión oral.</p>
          </div>
          <div class="benefit-item">
            <i class="fas fa-clock"></i>
            <h3>Gestión del Tiempo</h3>
            <p>Permite aprovechar momentos de desplazamiento o actividades rutinarias.</p>
          </div>
          <div class="benefit-item">
            <i class="fas fa-users"></i>
            <h3>Aprendizaje Social</h3>
            <p>Facilita la discusión y el intercambio de ideas sobre el contenido.</p>
          </div>
          <div class="benefit-item">
            <i class="fas fa-laptop"></i>
            <h3>Accesibilidad</h3>
            <p>Contenido disponible en cualquier momento y lugar.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;