/* =========== TOGGLE MENU ========== */
const navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");
navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
	navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
	navMenu.classList.remove("show-menu");
});