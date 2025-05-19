// Optional dropdown JS if you want to support mobile clicks
document.querySelectorAll(".dropdown > a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const dropdown = e.target.nextElementSibling;
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });
});
