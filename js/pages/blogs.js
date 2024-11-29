import { renderBlogPlatforms } from '../components/blogs/BlogPlatforms.js';
import { renderBlogComparison } from '../components/blogs/BlogComparison.js';
import { renderBlogExamples } from '../components/blogs/BlogExamples.js';

export const blogsPageContent = `
  <div id="blogs" class="page">
    <div class="page-content">
      <a href="#" onclick="showPage('home')" class="back-btn">
        <i class="fas fa-arrow-left"></i> Volver al inicio
      </a>
      
      <div class="page-header">
        <h1>Blogs <span class="gradient-text">Educativos</span></h1>
        <p>Espacios digitales para el desarrollo del pensamiento crítico y la expresión escrita</p>
      </div>

      <div class="content-section" data-aos="fade-up">
        <h2>¿Qué son los Blogs Educativos?</h2>
        <p>Los blogs educativos son espacios web que permiten la creación y publicación de contenido académico de forma cronológica. Son herramientas fundamentales para el desarrollo del pensamiento crítico y la expresión escrita.</p>
        
        <div class="video-container">
          <iframe src="https://www.youtube.com/embed/23xDn_K1uhE" allowfullscreen></iframe>
        </div>
      </div>

      ${renderBlogPlatforms()}
      ${renderBlogComparison()}
      ${renderBlogExamples()}

      <div class="content-section" data-aos="fade-up" data-aos-delay="200">
        <h3>Impacto en el Aprendizaje</h3>
        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" alt="Student Impact" class="image-feature" loading="lazy">
        <div class="impact-grid">
          <div class="impact-item">
            <i class="fas fa-pencil-alt"></i>
            <h4>Expresión Escrita</h4>
            <p>Desarrollo de habilidades de comunicación escrita y estilo personal.</p>
          </div>
          <div class="impact-item">
            <i class="fas fa-brain"></i>
            <h4>Pensamiento Crítico</h4>
            <p>Fomento del análisis, reflexión y argumentación.</p>
          </div>
          <div class="impact-item">
            <i class="fas fa-users"></i>
            <h4>Colaboración</h4>
            <p>Creación de comunidades de aprendizaje y retroalimentación entre pares.</p>
          </div>
          <div class="impact-item">
            <i class="fas fa-graduation-cap"></i>
            <h4>Portfolio Digital</h4>
            <p>Documentación del proceso de aprendizaje y logros académicos.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;