var	OpenMap = document.querySelector(".contact-map-js");
var CloseMap = document.querySelector(".map-close");
var PopupMap = document.querySelector(".modal-map");

OpenMap.addEventListener("click", function(event) {
	event.preventDefault();
	PopupMap.classList.add("map-show");
}
);

CloseMap.addEventListener("click", function(event) {
	event.preventDefault();
	PopupMap.classList.remove("map-show");
}
);


var OpenInfo = document.querySelector(".info-js");
var CloseInfo = document.querySelector(".modal-write-close");
var PopupInfo = document.querySelector(".modal-write");

OpenInfo.addEventListener("click", function(event) {
	event.preventDefault();
	PopupInfo.classList.add("show-info");
}
);

CloseInfo.addEventListener("click", function(event) {
	event.preventDefault();
	PopupInfo.classList.remove("show-info");
}
);