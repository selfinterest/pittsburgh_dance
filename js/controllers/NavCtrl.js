app.controller("NavCtrl", ["$scope", "loginService", "menuService", function($scope, loginService, menuService){
    $scope.login = loginService;    //create a binding between the service and the controller.
    $scope.menu = menuService;
    // Assignments to objects are done by reference, not by value, so this works.


}])