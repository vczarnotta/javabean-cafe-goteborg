const hamburger = document.getElementById("humberger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("open");
});
