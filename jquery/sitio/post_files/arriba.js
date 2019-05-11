$(document).ready(function(){

	// hide #back-top first
	$("#barraInferior").hide();

	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > $(".info").offset().top) {
				if($(this).scrollTop() > $("#similiar").offset().top){
					$('#barraInferior').slideUp("fast");	
				}else{
					$('#barraInferior').slideDown("fast");	
				}
				
				
			} else {
//				$('#back-top').fadeOut();
				$('#barraInferior').slideUp("fast");
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});