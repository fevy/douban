
var menu = angular.module("bukx",["navD","ngRoute"]);
menu.run(["$rootScope",function($rootScope){
	$rootScope.x = false;
	// console.log($rootScope);
	$rootScope.toggle = function(){
		// console.log("point");
		var dds = document.querySelectorAll(".navs dd");
		$rootScope.x=!$rootScope.x
		for (var i = 0; i < dds.length; i++) {
			if ($rootScope.x) {
				dds[i].style.transform = "translate(0)";
				dds[i].style.transitionDuration = (i + 1) * 0.15 + 's';
				// dds[i].style.transitionDelay = "";
			}
		};	
	}
}])
menu.config(function($locationProvider){
	$locationProvider.hashPrefix("");
})
menu.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/today",{
		// template:"dfsdff",
		templateUrl:"./views/daytime.html",
		controller:"contr01"
	})
	.when("/older",{
		// template:"sakhf",
		templateUrl:"./views/daytime.html",
		controller:"contr02"
	})
	.when("/author",{
		templateUrl:"./views/author.html",
		// templateUrl:"./views/auth.html",
		controller:"contr03"
	})
	.when("/category",{
		// templateUrl:"./views/author.html",
		templateUrl:"./views/category.html",
		controller:"contr04"
	})
	.otherwise({
		redirectTo:"/today"
	})
}])
