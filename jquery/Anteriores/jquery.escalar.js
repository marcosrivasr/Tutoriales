
$(function(){
	jQuery.fn.escalar = function(){
		this.each(function(){
			$(this).prepend("<input type='range' min='100' max='800' /><br />");
			$(this).children().eq(0).on("change", function(){
				$(this).parent().children().eq(2).attr("width", $(this).val())
			});
		});
	}
});