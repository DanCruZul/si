export function Card({ children, className = '' }) {
  return `
    <div class="card ${className}">
      ${children}
    </div>
  `;
}

export function CardImage({ src, alt, className = '' }) {
  return `
    <div class="card-image-container ${className}">
      <img 
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"
        data-src="${src}" 
        alt="${alt}"
        class="lazy-image"
        loading="lazy"
      >
    </div>
  `;
}

export function CardContent({ children, className = '' }) {
  return `
    <div class="card-content ${className}">
      ${children}
    </div>
  `;
}