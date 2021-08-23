const navBtn = document.querySelector(".nav-btn");
const dropdownMenu = document.querySelector(".nav-links");
let navLinks = document.querySelectorAll(".nav-links li, .logo");


function navSlide() {
    // Toggle dropdown-menu and navigation button
    navBtn.addEventListener("click", () => {
        dropdownMenu.classList.toggle("dropdown");
        navBtn.classList.toggle("pressed");
    });
    
    // Close dropdown-menu when clicking on links, including the logo
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            dropdownMenu.classList.remove("dropdown");
            navBtn.classList.remove("pressed");
        });
    });
};

function app() {
    navSlide();
};

app();
