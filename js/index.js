function showMenu() {
	var ele = document.getElementById("menu-bar");
	var btn = document.getElementById("menu-btn ");
	if (btn.className !=='is-active'){
		ele.style.top ='70px';
		ele.style.opacity = '1';
		btn.classList.add("is-active");
	}
	if (btn.className ==='is-active'){
		ele.style.top ='-200px';
		ele.style.opacity = '0';
		btn.classList.remove("is-active");
	}
}
