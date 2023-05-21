const tab = document.querySelector(".nav-arrow");
const nav = document.querySelector("nav");
const closeXTop = document.querySelector(".close-x-top");
const closeXBottom = document.querySelector(".close-x-bottom");

tab.addEventListener("click", toggleNav);
closeXTop.addEventListener("click", toggleNav);
closeXBottom.addEventListener("click", toggleNav);

function toggleNav() {
  nav.classList.toggle("visible");
  nav.classList.toggle("hidden");
}