var app=angular.module("app",["ui.router","app.controller","app.controller1","app.controller2","app.controller3"]);

app.config(function ($stateProvider,$urlRouterProvider) {
	// body...
	$urlRouterProvider.otherwise("/tab/tab-all");
	$stateProvider
	.state("tab",{
		url:"/tab",
		templateUrl:"templates/tab.html"
	})
	.state("tab.all",{
		url:"/tab-all",
		templateUrl:"templates/tab-all.html",
		controller:"allCtrl"
	})
	.state("tab.territory",{
		url:"/tab-territory",
		templateUrl:"templates/tab-all.html",
		controller:"territoryCtrl"
	})
	.state("tab.abroad",{
		url:"/tab-abroad",
		templateUrl:"templates/tab-all.html",
		controller:"abroadCtrl"
	})
	.state("details",{
		url:"/details/:aa",
		 params:{questionId:null},
		templateUrl:"templates/details.html",
		controller:"detailsCtrl"
	})
})

