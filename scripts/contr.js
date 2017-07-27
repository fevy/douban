angular.module("navD",[])
.controller("cjbbb",["$scope",function($scope){
	$scope.nav=[	
		{"a":"#/today","b":"icon-home","c":"今日一刻"},
		// {"a":"../views/today.html","b":"icon-home","c":"今日一刻"},
		{"a":"#/older","b":"icon-file-empty","c":"往期内容"},
		// {"a":"../views/older.html","b":"icon-file-empty","c":"往期内容"},
		{"a":"#/author","b":"icon-pencil","c":"热门作者"},
		// {"a":"../views/author.html","b":"icon-pencil","c":"热门作者"},
		{"a":"#/category","b":"icon-menu","c":"栏目浏览"},
		// {"a":"../views/category.html","b":"icon-menu","c":"栏目浏览"},
		{"a":"#/favourite","b":"icon-heart","c":"我的喜欢"},
		// {"a":"../views/favourite.html","b":"icon-heart","c":"我的喜欢"},
		{"a":"#/settings","b":"icon-cog","c":"设置"}
		// {"a":"../views/settings.html","b":"icon-cog","c":"设置"}
	]	
}])
.controller("contr01",["$scope","$rootScope","$filter","$http",function($scope,$rootScope,$filter,$http){
	$rootScope.title = "今日一刻";
	$rootScope.index = 0;
	$rootScope.loaded = false;
	var now = $filter("date")(new Date(),"yyyy-MM-dd");
	// $rootScope.
	$http({
		url:"./api/01.php",
		params:{"now":now}
	}).then(function(data){
		$rootScope.loaded = true;
		console.log(data.data);
		$scope.datas = data.data;
	})
}])
.controller("contr02",["$scope","$rootScope","$http",function($scope,$rootScope,$http){
	$rootScope.title = "往期回顾";
	$rootScope.index = 1;
	$rootScope.loaded = false;
	$http({
		url:"./api/02.php"
	}).then(function(data){
		$rootScope.loaded = true;
		console.log(data.data);
		$scope.datas = data.data;
	})
}])
.controller("contr03",["$scope","$rootScope","$http",function($scope,$rootScope,$http){
	$rootScope.title = "热门作者";
	$rootScope.index = 2;
	$rootScope.loaded = false;
	$http({
		url:"./api/03.php"
	}).then(function(data){
		$rootScope.loaded = true;
		console.log(data.data);
		$scope.datas = data.data;
	})
}])
.controller("contr04",["$scope","$rootScope","$http",function($scope,$rootScope,$http){
	$rootScope.title = "栏目浏览";
	$rootScope.index = 3;
	$rootScope.loaded = false;
	$http({
		url:"./api/04.php"
	}).then(function(data){
		$rootScope.loaded = true;
		console.log(data.data);
		$scope.datas = data.data;
	})
}])
