// shrink navbar on scroll begins

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('shrink', window.scrollY > 50%);
});
// shrink navbar on scroll ends

// toggle mobile menu begins
document.getElementById('mobile-toggle').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.add('show');
});

document.getElementById('close-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.remove('show');
});
