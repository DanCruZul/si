import { renderYouTubeBenefits } from '../components/youtube/YouTubeBenefits.js';
import { renderYouTubeEducational } from '../components/youtube/YouTubeEducational.js';
import { renderYouTuberPhenomenon } from '../components/youtube/YouTuberPhenomenon.js';

export const youtubePageContent = `
  <div id="youtube" class="page">
    <a href="#" onclick="showPage('home')" class="back-btn">
      <i class="fas fa-arrow-left"></i> Volver al inicio
    </a>
    
    <div class="page-header">
      <h1>YouTube en <span class="gradient-text">Educación</span></h1>
      <p>Una plataforma de video que ofrece innumerables recursos educativos</p>
    </div>

    <div class="page-content">
      ${renderYouTubeBenefits()}
      ${renderYouTubeEducational()}
      ${renderYouTuberPhenomenon()}
    </div>
  </div>
`;