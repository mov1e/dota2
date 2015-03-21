var dotaController={};
dotaController.info = function($scope){
}
dotaController.noobs = function($scope){
}

dotaController.heroes = function($scope,$http){
	$scope.Heroes=[];
	$scope.saveHero=function(){
		$http.post('/api/createHero',{
			heroName: $scope.heroName,
			heroTypeofattack: $scope.heroTypeofattack,
			heroRole: $scope.heroRole,
			heroAttributes: $scope.heroAttributes,
			heroAbilities: $scope.heroAbilities,
			heroBio: $scope.heroBio
		}).success(function(data){
			if(data) $scope.Heroes.push(data);
		});
	}
	$http.get('/api/getHeroes')
	.success(function(data){
		console.log(data);
		$scope.Heroes=data;
	});
}

dotaController.items = function($scope,$http){
	$scope.Items=[];
	$scope.saveItem=function(){
		$http.post('/api/createItem',{
			itemName: $scope.itemName,
			itemPrice: $scope.itemPrice,
			itemFunction: $scope.itemFunction,
			itemDuration: $scope.itemDuration,
			itemManacost: $scope.itemManacost,
			itemRecharge: $scope.itemRecharge,
			itemDescription: $scope.itemDescription
		}).success(function(data){
			if(data) $scope.Items.push(data);
		});
	}
	$http.get('/api/getItems')
	.success(function(data){
		console.log(data);
		$scope.Items=data;
	});
}


dotaController.guides = function($scope,$http){
	$http.get('/api/getHeroes')
	.success(function(data){
		console.log(data);
		$scope.Heroes=data;
	});

	$http.get('/api/getItems')
	.success(function(data){
		console.log(data);
		$scope.Items=data;
	});
}
dotaController.news = function($scope){
}
dotaController.video = function($scope){
}
dotaController.meme = function($scope){
}



angular.module('dota',['ui.router'])

.controller(dotaController)

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider
	.otherwise("/info");
	
	$stateProvider.state('info', {
		url: "/info",
		controller: "info",
		templateUrl: "public/html/info.html"
	}).state('noobs', {
		url: "/noobs",
		controller: "noobs",
		templateUrl: "public/html/noobs.html"
	}).state('heroes', {
		url: "/heroes",
		controller: "heroes",
		templateUrl: "public/html/heroes.html"
	}).state('items', {
		url: "/items",
		controller: "items",
		templateUrl: "public/html/items.html"
	}).state('guides', {
		url: "/guides",
		controller: "guides",
		templateUrl: "public/html/guides.html"
	}).state('news', {
		url: "/news",
		controller: "news",
		templateUrl: "public/html/news.html"
	}).state('video', {
		url: "/video",
		controller: "video",
		templateUrl: "public/html/video.html"
	}).state('meme', {
		url: "/meme",
		controller: "meme",
		templateUrl: "public/html/meme.html"
	});

	$locationProvider.html5Mode(false);
});