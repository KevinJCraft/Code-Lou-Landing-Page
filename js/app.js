const toggle = document.querySelector("#menu-button");
const menu = document.querySelector(".menu");

function isHidden(el) {
	var style = window.getComputedStyle(el);
	return el.style.maxHeight === "100%";
}

menu.classList.add("hide");

toggle.addEventListener("click", () => {
	menu.classList.toggle("hide");
});
