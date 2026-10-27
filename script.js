const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
function setMenu(open) {
  nav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = open ? "×" : "☰";
}
menuToggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
document.querySelectorAll(".nav a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach((section) => observer.observe(section));

document.getElementById("year").textContent = new Date().getFullYear();
