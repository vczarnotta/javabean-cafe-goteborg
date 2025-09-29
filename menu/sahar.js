// Select the button and menu
const hamburger = document.getElementById('humberger');
const menu = document.getElementById('meny');

// Toggle menu on click
hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});