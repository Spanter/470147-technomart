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
//var form = document.querySelector(".write-us");

OpenInfo.addEventListener("click", function(event) {
	event.preventDefault();
	PopupInfo.classList.add("show-info");
}
);

CloseInfo.addEventListener("click", function(event) {
	event.preventDefault();
	PopupInfo.classList.remove("show-info");
});


var OpenContent = document.querySelector(".js-click");
var ModalContent = document.querySelector(".modal-content");
var ModalClose = document.querySelector(".button-close");
var ModalContinue = document.querySelector(".continue-shopping");


OpenContent.addEventListener("click", function(event){
	event.preventDefault();
	ModalContent.classList.add("modal-show");
	});

ModalClose.addEventListener("click", function(event){
	event.preventDefault();
	ModalContent.classList.remove("modal-show");
});

ModalContinue.addEventListener("click", function(event){
	event.preventDefault();
	ModalContent.classList.remove("modal-show");
});

window.addEventListener("keydown", function(event){
	if (event.keyCode === 27){
		event.preventDefault();
		if (ModalContent.classList.contains("modal-show")){
			ModalContent.classList.remove("modal-show");
		}
	}
});



