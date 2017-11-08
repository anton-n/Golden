$(function() {

	//Smooth scroll to the pages block
	$('.header-menu__link').on('click', function(e){
		e.preventDefault();

		var currentBlock = $(this).attr('href'),
		currentBlockOffset = $(currentBlock).offset().top;

		$('html, body').animate({
			scrollTop: currentBlockOffset
		}, 500);
	});


	//Fixed header when scroll
	var headerH =$('#js-home').height();
	var navH = $("#header").innerHeight();

	$(document).on('scroll', function(){

		var documentScroll = $(this).scrollTop();

		if(documentScroll > headerH - navH) {
			$("#header").addClass("fixed-top-line");
			$('#js-home').css({
				'paddingTop': navH
			});
		} else {
			$('#header').removeClass('fixed-top-line');
			$("#js-home").removeAttr("style");
		}
	});
});