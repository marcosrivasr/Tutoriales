$(document).ready(function(){
	
	$('.pantalla').append("<p><a class='boton'>Ver más grande</a></p>");
	$('.boton').click(function(){
		if($(this).text() == "Cerrar"){
			/* Mostramos todas las capas de videos */
			$('.pantalla').show();
			/* Regresamos el video a la normalidad */
						
	                $(this).closest("div").removeClass('completa');
			$(this).text("Ver más grande");
		}else{
			/* Ocultamos todas las capas de videos */
			$('.pantalla').hide();
			/* Mostramos el video actual */
			$(this).closest('div').show();
						                      
	                $(this).closest("div").addClass('completa');
			$(this).text("Cerrar");
		}
					
	});	
});
