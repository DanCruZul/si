export function Icon({ name, className = '' }) {
  return `<i class="${name} ${className}"></i>`;
}

export function IconButton({ icon, className = '', onClick }) {
  return `
    <button class="icon-button ${className}" onclick="${onClick}">
      ${Icon({ name: icon })}
    </button>
  `;
}