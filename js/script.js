var carouselList = $('#carousel ul');
var indicator = $('.indicator li');

$(function() {
	var carouselList = $('#carousel ul');
	setInterval(changeSlide, 3000); 
	// var indicator = $('.indicators li:first');
	// $('indicator').addClass('.active');
	// var previous = $('.previous').on('click', slideToTheLeft);
	// var next = $('.next').on('click', changeSlide);
});

function changeSlide() {
	carouselList.animate({
		marginLeft: -400
	}, 500, moveFirstSlide);

};

function moveFirstSlide() {
	var firstItem = carouselList.find('li:first');
	var lastItem = carouselList.find('li:last');
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
};

// function slideToTheLeft() {
// 	carouselList.animate({
// 		marginLeft: 400
// 	}, 500, moveSlide);
// };

// function moveSlide() {
// 	var firstItem = carouselList.find('li:first');
// 	var lastItem = carouselList.find('li:last');
// 	firstItem.after(lastItem);
// 	carouselList.css({marginLeft:0});
// };

// function changeSlide() {
// 	carouselList.animate({
// 		marginLeft: -400
// 	}, 500, moveFirstSlide);
// 	$(this).removeClass('.active').next().addClass('.active');
// 	$('li.active').animate({
// 		transform: scale(1.5)
// 	}, 500);
// 	};
// ;