$(function(){
	jQuery.fn.scrollTo = function(options){
		var settings = jQuery.extend({
			padding: 0
		}, options);
		this.each(function(){
			var $section = $(this);
			var x = $section.offset().left - settings.padding;
			$("body, html").animate({
				scrollLeft : x
			}, 800);
		});
	}
});