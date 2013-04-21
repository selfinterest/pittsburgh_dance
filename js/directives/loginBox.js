angular.module("loginBoxDirective", [])
    .directive("loginBox", ["$compile", function ($compile) {
    var directive = {
        restrict:'E',
        scope:false,
        replace:true,
        templateUrl: "templates/loginBox.html",
        link: function(scope, element, attrs){
            scope.$watch("login.showLogin", function(){         //We set up a watch on login.showLogin.
                $(element).find("input")[0].focus();            //Put focus on the first text input, which should be the one for user name.
            })
        }
    };

    return directive;
}]) 
      