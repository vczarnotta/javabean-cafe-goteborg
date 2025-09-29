
// get #hamburger element 
const hamburger = document.getElementById("hamburger")

// get #menu element
const menu = document.getElementById("menu");

const page = document.body;

// when #hamburger is clicked, add/remove class "open" on id #menu
hamburger.addEventListener("click", () => {
    menu.classList.toggle("open");
    page.classList.toggle("blue-background");
});