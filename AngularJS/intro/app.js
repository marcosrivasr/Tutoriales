var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	
	.when("/productos",{
		templateUrl: "productos.html",
		controller: "controlador"
	});
});

app.controller("controlador", function($scope){

});