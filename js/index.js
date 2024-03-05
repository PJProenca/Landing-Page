const menuBtn = document.querySelector(".menu-btn");
const menuIcon = document.querySelector(".menu-btn i");
const menu = document.querySelector(".menu-bar");
const menuItem = document.querySelector(".menu-bar li");

menuBtn.onclick = function () {
	menu.classList.toggle("open");
	const isOpen = menu.classList.contains("open");
	menuIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

menuItem.onclick = function () {
	menu.classList.remove("open");
	menuIcon.classList = "fa-solid fa-bars";
};
