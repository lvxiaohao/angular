angular.module("carList", [])
    .config(["$routeProvider", function($routeProvider) {
        $routeProvider
            .when("/list", {templateUrl:"list.html", controller : CarListController})
            .when("/view/:name", {templateUrl:"view.html", controller : CarViewController})
            .otherwise({redirectTo : 'index.html'});
    }]);

// 车辆列表控制器
var CarListController = function($scope, $http) {
    $http.get("data/cars.json").success(function(data) {
        $scope.cars = data;
    });
};

// 车辆查看控制器
var CarViewController = function($scope, $routeParams) {
    $scope.name = $routeParams.name;
};


CarListController.$inject=["$scope", "$http"];
CarViewController.$inject=["$scope", "$routeParams"];