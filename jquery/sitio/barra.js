$(document).on("ready", inicio);

function inicio(){
	var ancho = $(window).width();
	if(ancho >=320 && ancho <= 480){
		var etiquetas = $(".mini").eq(6).html();
		$("#barraMenu").css("height", 150);
		$("#barraMenu").html(etiquetas);
		$("#barraMenu").slideDown();
		
	}else{
		$("#barraLista a").mouseover(mostrarOpcion);
		cargar();	
	}
	
	
	 
}

function cargar(){
		$.getJSON("http://www.vidamrr.com/feeds/posts/default/-/sitios%20web?max-results=2&orderby=published&alt=json-in-script&callback=?",
        function(data){
          	var texto="";
			$.each(data.feed.entry, function(i,entry){
				
				texto += "<div class='mini_post'>";
          		texto += "<a href='" + entry.link[2].href + "'>";
          		texto += "<img src='" + entry.media$thumbnail.url + "' />";
          		texto += "<div>" +entry.title.$t + "</div></a>";
          		texto += "</div>";
          		$(".mini").eq(3).html(texto);
          	});          
       });

	 $.getJSON("http://www.vidamrr.com/feeds/posts/default/-/tutoriales?max-results=4&orderby=published&alt=json-in-script&callback=?",
        function(data){
          	var texto="";
			$.each(data.feed.entry, function(i,entry){
				
				
          		if(i>=2){
          			texto += "<div class='mini_post'>";
	          		texto += "<a href='" + entry.link[2].href + "'>";
	          		texto += "<img src='" + entry.media$thumbnail.url + "' />";
	          		texto += "<div>" +entry.title.$t + "</div></a>";
	          		texto += "</div>";
          		}
          		$(".mini").eq(1).html(texto);
          	});          
       });

	 $.getJSON("http://www.vidamrr.com/feeds/posts/default/-/jquery?max-results=2&orderby=published&alt=json-in-script&callback=?",
        function(data){
          	var texto="";
			$.each(data.feed.entry, function(i,entry){
				
				texto += "<div class='mini_post'>";
          		texto += "<a href='" + entry.link[2].href + "'>";
          		texto += "<img src='" + entry.media$thumbnail.url + "' />";
          		texto += "<div>" +entry.title.$t + "</div></a>";
          		texto += "</div>";
          		$(".mini").eq(4).html(texto);
          	});          
       });

	 $.getJSON("http://www.vidamrr.com/feeds/posts/default/-/css?max-results=6&orderby=published&alt=json-in-script&callback=?",
        function(data){
          	var texto="";
			$.each(data.feed.entry, function(i,entry){
				
				if(i>=4){
          			texto += "<div class='mini_post'>";
	          		texto += "<a href='" + entry.link[2].href + "'>";
	          		texto += "<img src='" + entry.media$thumbnail.url + "' />";
	          		texto += "<div>" +entry.title.$t + "</div></a>";
	          		texto += "</div>";
          		}
          		$(".mini").eq(5).html(texto);
          	});          
       });

       $.getJSON("http://www.vidamrr.com/feeds/posts/default/-/Photoshop?max-results=6&orderby=published&alt=json-in-script&callback=?",
        function(data){
          	var texto="";
			$.each(data.feed.entry, function(i,entry){
				
				if(i>=4){
          			texto += "<div class='mini_post'>";
	          		texto += "<a href='" + entry.link[2].href + "'>";
	          		texto += "<img src='" + entry.media$thumbnail.url + "' />";
	          		texto += "<div>" +entry.title.$t + "</div></a>";
	          		texto += "</div>";
          		}
          		$(".mini").eq(2).html(texto);
          	});          
       });		
	}

function mostrarOpcion(){	
	var n = $(this).attr("rel");
	var ancho=0;
	$(".inicio").removeClass("inicio");
	$("#barraLista a").removeClass("actual");
	$(".mini").hide();
	$(".mini").eq(n-1).show();

	$(this).addClass("actual");
	for(i=0; i<n; i++){

		ancho += $("#barraLista a").eq(i).width() + 23;
		//alert(ancho);
	}
	//$(".arrow_box").css("marginLeft", ($(this).width-50);
		$(".arrow_box").css("marginLeft", (ancho- $(this).width()/2)-16);
}

