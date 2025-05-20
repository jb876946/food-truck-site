// shrink navbar on scroll begins
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
});
// shrink navbar on scroll ends

// mobile nav toggle begins
document.getElementById('menu-toggle').addEventListener('click', () => {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
});
// mobile nav toggle ends
