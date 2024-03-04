function showMenu() {
	var ele = document.getElementById("menu-bar");
	if (ele.className ==='is-visible'){
		ele.classList.remove("is-visible");
	}else{
		ele.classList.add("is-visible");
	}
}
