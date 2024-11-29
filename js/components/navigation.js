// Navigation component
export function renderNavigation() {
  const nav = document.createElement('nav');
  nav.className = 'nav-menu';
  
  nav.innerHTML = `
    <ul>
      <li><a href="#" onclick="showPage('home')">Inicio</a></li>
      <li><a href="#" onclick="showPage('blogs')">Blogs</a></li>
      <li><a href="#" onclick="showPage('podcasts')">Podcasts</a></li>
      <li><a href="#" onclick="showPage('rss')">RSS</a></li>
      <li><a href="#" onclick="showPage('youtube')">YouTube</a></li>
      <li><a href="#" onclick="showPage('onedrive')">OneDrive</a></li>
    </ul>
  `;
  
  document.body.insertBefore(nav, document.body.firstChild);
}