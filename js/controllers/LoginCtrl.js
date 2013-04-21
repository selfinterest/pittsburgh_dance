/**
 * Created with JetBrains PhpStorm.
 * User: terrence
 * Date: 4/20/13
 * Time: 3:10 AM
 * To change this template use File | Settings | File Templates.
 */
app.controller("LoginCtrl", ["$scope", "loginService", function($scope, loginService){
    $scope.login = loginService;

    $scope.doLogin = function(){
        console.log("Performing login.");
        console.log("User is: "+$scope.user);
        if($scope.user == "Terrence"){
            $scope.login.loggedIn = true;       //log the user in
            $scope.login.showLogin = false;     //hide the login box
        } else {
            $scope.login.invalid = true;        //Invalid login. Show feedback.
        }
    }

    $scope.$watch("login.showLogin", function(newVal, oldVal){
        if(newVal == false){
            $scope.login.invalid = false;
        }
    })
}])