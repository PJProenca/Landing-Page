/* Selectors */
const menuBtn = document.querySelector(".menu-btn");
const menuIcon = document.querySelector(".menu-btn i");
const menu = document.querySelector(".menu-bar");
const menuItem = document.querySelector(".menu-bar li");
const navMenuItem = document.querySelectorAll("nav ul li");
var itemPreviousSelected = null;

/* onClick functions */
menuBtn.onclick = function () {
	menu.classList.toggle("open");
	const isOpen = menu.classList.contains("open");
	menuIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

menuItem.onclick = function () {
	menu.classList.remove("open");
	menuIcon.classList = "fa-solid fa-bars";
};

navMenuItem.forEach((item) => {
	item.onclick = function () {
		if (itemPreviousSelected) {
			itemPreviousSelected.classList.remove("active");
		}
		item.classList.add("active");
		itemPreviousSelected = item;
	};
});
