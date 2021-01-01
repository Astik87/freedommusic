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