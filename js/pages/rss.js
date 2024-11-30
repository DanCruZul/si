import { renderRSSBenefits } from '../components/rss/RSSBenefits.js';
import { renderRSSIntegration } from '../components/rss/RSSIntegration.js';
import { renderRSSUsageGuide } from '../components/rss/RSSUsageGuide.js';

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
          <iframe src="https://www.youtube.com/embed/tjXpxi4do1Q" allowfullscreen></iframe>
        </div>
      </div>

      ${renderRSSBenefits()}
      ${renderRSSIntegration()}
      ${renderRSSUsageGuide()}
    </div>
  </div>
`;