/* Selectors */
const menuBtn = document.querySelector(".menu-btn");
const menuIcon = document.querySelector(".menu-btn i");
const menu = document.querySelector(".menu-bar");
const menuItems = document.querySelectorAll(".menu-bar li a");
const navMenuItem = document.querySelectorAll("nav ul li");
var itemPreviousSelected = null;

/* onClick functions */
menuBtn.onclick = function () {
	menu.classList.toggle("open");
	const isOpen = menu.classList.contains("open");
	menuIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

menuItems.forEach((menuItem) => {
	menuItem.addEventListener("click", function (event) {
		event.preventDefault();
		const href = this.getAttribute("href");
		if (!href) return;
		menu.classList.remove("open");
		menuIcon.classList = "fa-solid fa-bars";

		setTimeout(() => {
			window.location.href = href;
		}, 100);
	});
});

navMenuItem.forEach((item) => {
	item.onclick = function () {
		if (itemPreviousSelected) {
			itemPreviousSelected.classList.remove("active");
		}
		item.classList.add("active");
		itemPreviousSelected = item;
	};
});

$('a[href^="#"]').on("click", function (event) {
	var target = $(this.getAttribute("href"));
	if (target.length) {
		event.preventDefault();
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: target.offset().top - 100,
				},
				100
			);
	}
});
