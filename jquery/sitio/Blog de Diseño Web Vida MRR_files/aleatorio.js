function aleatorio(){
		var dia = Math.round(Math.random()*30);
		var mes = Math.round(Math.random()*(12-1)+1);
		var ano = Math.round(Math.random()*(2011-2009)+2009);
			if(dia<10){
				dia = "0" + dia;
			}
			if(mes<10){
				mes = "0" + mes;
			}
		var todo ="http://www.vidamrr.com/" + ano + "_" + mes + "_" + dia + "_archive.html";
		window.location = todo;
		
}

function sabado(){
	if(window.location.indexOf("html",0)>0){
		alert("a");
	}else{
		alert("b");
	}
}
sabado();