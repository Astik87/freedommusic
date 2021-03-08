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
	let color = e.target.style.color;
	let display = e.target.firstChild.style.display;

	if((color == "" || color == "rgb(255, 255, 255)") && (display == "none" || display == "")) e.target.style.color = "#f23050"
	else if ((display == "none" || display == "") && color == "rgb(242, 48, 80)")  e.target.firstChild.style.display = "block"
	else {e.target.style.color = "#fff"; e.target.firstChild.style.display = "none" }

});

let pause = document.getElementById("pause");
let play = document.getElementById("play");

play.addEventListener("click", (e) => {
	e.target.style.opacity = "0";
	e.target.style.zIndex = '0';
	pause.style.opacity = '1';
	pause.style.zIndex = '1';
});

pause.addEventListener("click", (e) => {
	e.target.style.opacity = "0";
	e.target.style.zIndex = '0';
	play.style.opacity = '1';
	play.style.zIndex = '1';
});

let random = document.getElementById("random");

random.addEventListener("click", (e) => {
	let color = e.target.style.color;
	if (color == "rgb(255, 255, 255)" || color == "") e.target.style.color = "#f23050"
	else e.target.style.color = "#fff";
});

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