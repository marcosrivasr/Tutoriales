$(function(){
	jQuery.fn.acordeon = function(options){

		this.each(function(){
			var $acordeon = $(this);
			var n         = $acordeon.children().size();
			$acordeon.children().on("click", function(){
				$tab = $(this);
				
				//revisamos si damos clic a la misma tab que está
				// abierta
				if($tab.hasClass("tab-activa")){
					$tab.children().eq(1).slideUp();
					$(".tab-activa").removeClass("tab-activa");
					return false;
				}
				//removemos la clase
				$(".tab-activa").removeClass("tab-activa");
				
				// entonces cerramos los demás tabs
				for(var i=0; i< n; i++){
					$acordeon.children().eq(i).children().eq(1).slideUp();
				}
				$tab.children().eq(1).slideDown();
				$tab.addClass("tab-activa");

			});
		});
	}
});