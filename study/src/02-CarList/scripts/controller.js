var CarListController = function($scope, $http) {
    $http.get("data/cars.json").success(function(data) {
        $scope.cars = data;
    });
};
CarListController.$inject=["$scope", "$http"];