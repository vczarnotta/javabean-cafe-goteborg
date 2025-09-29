
// get #hamburger element 
const hamburger = document.getElementById("hamburger")

// get #menu element
const menu = document.getElementById("menu");


// when hamburger is clicked, add/remove class "open"
hamburger.addEventListener("click", () => {
    menu.classList.toggle("open");
});