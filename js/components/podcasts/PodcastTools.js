export function renderPodcastTools() {
  return `
    <div class="content-section" data-aos="fade-up">
      <h2>Herramientas de Podcasting</h2>
      <div class="tools-comparison">
        <div class="tool-category">
          <h3><i class="fas fa-microphone"></i> Grabación</h3>
          <ul class="tool-list">
            <li>
              <span class="tool-name">Audacity</span>
              <span class="tool-description">Editor de audio gratuito y de código abierto</span>
            </li>
            <li>
              <span class="tool-name">Anchor</span>
              <span class="tool-description">Plataforma gratuita para crear y distribuir podcasts</span>
            </li>
            <li>
              <span class="tool-name">Zencastr</span>
              <span class="tool-description">Grabación remota de alta calidad</span>
            </li>
          </ul>
        </div>
        
        <div class="tool-category">
          <h3><i class="fas fa-broadcast-tower"></i> Distribución</h3>
          <ul class="tool-list">
            <li>
              <span class="tool-name">Spotify</span>
              <span class="tool-description">Plataforma líder en streaming de audio</span>
            </li>
            <li>
              <span class="tool-name">Apple Podcasts</span>
              <span class="tool-description">Directorio principal para usuarios de iOS</span>
            </li>
            <li>
              <span class="tool-name">Google Podcasts</span>
              <span class="tool-description">Integración con el ecosistema Google</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `;
}