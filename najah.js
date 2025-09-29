document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("humberger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    menu.classList.toggle("open");
  });
});
