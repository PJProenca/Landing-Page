function showMenu() {
	var ele = document.getElementById("menu-bar");
	var open = document.getElementById("menu-btn");
	var close = document.getElementById("close-btn");
		open.style.display = "none";	
		close.style.display = "block";
		ele.style.top ='70px';
		ele.style.opacity = '1';
}

 function hideMenu(){
	var ele = document.getElementById("menu-bar");
	var open = document.getElementById("menu-btn");
	var close = document.getElementById("close-btn");
		open.style.display = "block";	
		close.style.display = "none";
		ele.style.top ='-200px';
		ele.style.opacity = '0';
}