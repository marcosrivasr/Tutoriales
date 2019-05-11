$(function(){
	var control = 0;
	var index = 0;
	var $galeria;
	var total;
	$("#trabajos-container a").on("click", function(){
		index = $(this).index();
		$("#colecciones-container").fadeIn();
		$("#colecciones-container .coleccion-container").hide();
		$("#colecciones-container .coleccion-container").eq(index).fadeIn();
		$("#colecciones-container .coleccion-container").eq(index).children().eq(0).children().hide();
		$("#colecciones-container .coleccion-container").eq(index).children().eq(0).children().eq(0).fadeIn();
		control = 0;
		$galeria = $("#" + $(this).attr("href"));
		total = $galeria.children().size();
		console.log("Total: " + total);
		console.log($galeria.html());
		return false;
	})

	$(".cerrar a").on("click", function(){
		$("#colecciones-container").fadeOut();
		return false;
	});

	$(".controles .anterior").on("click", function(){
		control--;
		if(control <0){
			control = 0;
		}
		return false;
	});

	$(".controles .siguiente").on("click", function(){
		control = (control + 1) % total;
		$galeria.children().hide();
		$galeria.children().eq(control).fadeIn();
		$galeria.children().eq(control).css("width", "400px");
		return false;
	});
});