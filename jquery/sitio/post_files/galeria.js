	var control = 0;
	var i=0;
	var lon;
	var link1 = document.createElement("a");
	var link2 = document.createElement("a");
	var link3 = document.createElement("a");
	var contador_div = document.createElement("div");
	var botones_div = document.createElement("div");
	var imagenes;
	link1.id = "anterior";
	link2.id = "siguiente";
	link3.id = "Normal";
	contador_div.id = "contador";
	botones_div.id = "botones";
	//link1.href = "javascript: (0)";
	//link2.href = "javascript: (0)";
	//link3.href = "javascript: (0)";
	link1.innerHTML = "Anterior";
	link2.innerHTML = "Siguiente";
	link3.innerHTML = "Ver Normal";
	

$(document).ready(function(){
	imagenes = $("#galeria img");
	lon = $("#galeria img").length;
	
	$("#galeria img").attr('width','500');
	$("#galeria").append(contador_div);
	$("#galeria").append(botones_div);
	$("#botones").append(link1);
	$("#botones").append(link2);
	//$("#botones").append(link3);
	$("#galeria img").hide();
	$("#galeria h5").addClass("link");
	$("#galeria h5").hide();
	$("#galeria img:first").show();
	$("#galeria h5:first").show();
	
	
	
	$("#contador").html((i+1) + " de " + lon + " imagenes");
	
	/*$("#Normal").click(function(){
			$(".imagen").show();
			$("#galeria").css('backgroundColor','#fff');
			$("#anterior").hide();
			$("#siguiente").hide();
			
			
	});*/
		
	$("#siguiente").click(function(){
			if((i+1)== lon){
			}else{
				$("#galeria img").eq(i).hide();
				$("#galeria h5").eq(i).hide();
				i++;
				$("#galeria img").eq(i).fadeIn();
				$("#galeria h5").eq(i).fadeIn();
			}
		$("#contador").html((i+1) + " de " + lon + " imagenes");
	});
	
	$("#anterior").click(function(){
		if((i-1) < 0){
			//alert("FIN");
		}else{
			$("#siguiente").removeClass("unable");
			$("#galeria img").eq(i).hide();
			$("#galeria h5").eq(i).hide();
			i--;
			$("#galeria img").eq(i).fadeIn();
			$("#galeria h5").eq(i).fadeIn();
		}
		$("#contador").html((i+1) + " de " + lon + " imagenes");
	});
	
});
