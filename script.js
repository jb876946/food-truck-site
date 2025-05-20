// shrink navbar on scroll begins
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("shrink", window.scrollY > 80);
});
// shrink navbar on scroll ends

// function and close mobile nav begins
function openNav() {
  document.getElementById("mobileMenu").style.height = "100%";
}

function closeNav() {
  document.getElementById("mobileMenu").style.height = "0%";
}
// function and close mobile nav ends
