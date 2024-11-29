export function initializeAnimations() {
  AOS.init({
    duration: 600,
    once: true,
    offset: 50,
    disable: window.innerWidth < 768
  });
}