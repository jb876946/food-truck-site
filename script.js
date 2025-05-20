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

// Open and close mobile nav
function openNav() {
  document.getElementById("mobileMenu").style.height = "100%";
}

function closeNav() {
  document.getElementById("mobileMenu").style.height = "0%";
}

// mobile nav toggle begins
document.getElementById('menu-toggle').addEventListener('click', () => {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
});
// mobile nav toggle ends
