

$(function(){

	var mayus   = new RegExp("^(?=.*[A-Z].*[A-Z].*[A-Z])");
	var special = new RegExp("^(?=.*[!@#$%&*].*[!@#$%&*].*[!@#$%&*])");
	var numbers = new RegExp("^(?=.*[0-9])");
	var lower   = new RegExp("^(?=.*[a-z])");
	var len     = new RegExp("^(?=.{8,})");

	var regExp    = [mayus, special, numbers, lower, len];
	var elementos = [$("#mayus"),$("#special"),$("#numbers"),$("#lower"),$("#len")];

	$("#password").on("keyup", function(){
		var pass = $("#password").val();
		var check = 0;

		for(var i = 0; i < 5; i++){
			if(regExp[i].test(pass)){
				elementos[i].hide();
				check++;
			}else{
				elementos[i].show();
			}
		}

		if(check >= 0 && check <=2){
			$("#mensaje").text("Muy insegura").css("color", "red");
		}else if(check >=3 && check <=4){
			$("#mensaje").text("Poco segura").css("color", "orange");
		}else if(check == 5){
			$("#mensaje").text("Muy segura").css("color", "green");
		}

		if(mayus.test(pass) && special.test(pass) && numbers.test(pass) && lower.test(pass) && len.test(pass)){
			$("#mensaje").text("Segura").css("color", "green");
		}else{
			$("#mensaje").text("Insegura").css("color", "red");
		}
	});


});