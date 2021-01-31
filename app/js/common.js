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

/* Range */
let range = document.querySelectorAll(".range input");

function rangeInput(e) {
	let prog = e.target.value;
	let span = e.target.nextSibling;
	span.style.width = `${prog}%`;
}

range.forEach((e) => {
	e.addEventListener("input", rangeInput);
});

/* Play */

let repeat = document.getElementById("repeat");

repeat.addEventListener("click", (e) => {
	let display = e.target.firstChild.style.display;
	if(display == "none") e.target.firstChild.style.display = "block"
	else  e.target.firstChild.style.display = "none";
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener(`resize`, event => {
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