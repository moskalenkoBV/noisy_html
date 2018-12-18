$(document).ready(function() {
	var stickyElem = document.querySelector('.stickyElem');
	var params = {};
	var box = stickyElem.getBoundingClientRect();

	var styles


	params.elemHeight = box.height;
	params.windowHeight = window.innerHeight;
	params.initialOffset = box.top;

	params.mode = params.elemHeight > params.windowHeight ? 1 : 0;

	var box = stickyElem.getBoundingClientRect();
	window.addEventListener('scroll', function() {

	});
});