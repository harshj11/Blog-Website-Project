const overlay = document.getElementById("overlay");
const hamburger = document.querySelector(".header__hamburger__menu");
const mobileLinks = document.querySelector(".header__mobile__links");

hamburger.addEventListener("click", () => {
    overlay.classList.toggle("active");
    mobileLinks.classList.toggle("active");    
    hamburger.classList.toggle("open");
});
