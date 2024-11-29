import { renderOnedriveFeatures } from '../components/onedrive/OnedriveFeatures.js';
import { renderOnedriveIntegration } from '../components/onedrive/OnedriveIntegration.js';

export const onedrivePageContent = `
  <div id="onedrive" class="page">
    <a href="#" onclick="showPage('home')" class="back-btn">
      <i class="fas fa-arrow-left"></i> Volver al inicio
    </a>
    
    <div class="page-header">
      <h1>OneDrive en <span class="gradient-text">Educación</span></h1>
      <p>Plataforma de almacenamiento en la nube que integra herramientas de productividad y colaboración</p>
    </div>

    <div class="page-content">
      ${renderOnedriveFeatures()}
      ${renderOnedriveIntegration()}
    </div>
  </div>
`;