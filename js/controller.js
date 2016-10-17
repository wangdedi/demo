angular.module("app.controller",[])
.controller("allCtrl",function ($scope) {
	$scope.datas=tourismData;
})
//
angular.module("app.controller1",[])
.controller("territoryCtrl",function ($scope) {
	$scope.datas=tourismData1;
})
angular.module("app.controller3",[])
.controller("abroadCtrl",function ($scope) {
	$scope.datas=tourismData1;
})
angular.module("app.controller2",[])
.controller("detailsCtrl",['$stateParams',function($stateParams){
    console.log($stateParams.questionId);
    
    alert(JSON.stringify($stateParams.questionId))
    alert($stateParams.questionId.id)
}])
