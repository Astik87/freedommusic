/* Input */
let searchInput = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");
searchInput.addEventListener("focus", () => {
	searchBtn.style.border = "2px solid #000";
	searchBtn.childNodes[0].style.color = "#000";
});

searchInput.addEventListener("focusout", () => {
	searchBtn.style.border = "2px solid #fff";
	searchBtn.childNodes[0].style.color = "#fff";
	searchInput.value = "";
});

// let random = document.getElementById("random");

// random.addEventListener("click", (e) => {
// 	let color = e.target.style.color;
// 	if (color == "rgb(255, 255, 255)" || color == "") e.target.style.color = "#f23050"
// 	else e.target.style.color = "#fff";
// });

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener("resize", event => {
	vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}, false);

/* Menu */

let d_menu = document.getElementById("d_menu");
let sidebar = document.querySelector(".sidebar--left");

d_menu.addEventListener("click", () => {
	d_menu.classList.toggle("active");
	sidebar.classList.toggle("show");
});