export default function collapseNav() {
  const mainNav = document.querySelector('#mainNav');
  if (mainNav.classList.contains('show')) {
    mainNav.classList.remove('show');
  }
}
