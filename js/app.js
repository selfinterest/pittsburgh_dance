/*
 * The main module. Right now, it loads ui.bootstrap, dance.services, and dance.directives
 */
var app = angular.module("dance", ["ui.bootstrap", "dance.services", "dance.directives"])
    /*
     * Configuration block. This gets executed as soon as the module is loaded. So it can't do anything but setup work, since other modules may not be loaded yet.
     * It uses $routeProvider and $locationProvider to set up application routing.
     */
    .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    //$locationProvider.html5Mode(true); <-- this provides better URLs, but requires server/backend reconfiguration
    $locationProvider.hashPrefix("!");
    $routeProvider
        .when("/", {            //If root URL, we redirect to events
            redirectTo: "/events"
        })
        .when("/events", {      //We load the events.html template. This will update the view and initialize the EventsCtrl controller
            templateUrl: "templates/events.html",
            controller: "EventsCtrl"
        })
        .when("/account", {
            templateUrl: "templates/account.html",
            controller: "AccountCtrl"
        })
        .when("/contact", {
            templateUrl: "templates/contact.html",
            controller: "ContactCtrl"
        })
        .when("/register", {
            templateUrl: "templates/register.html",
            controller: "RegisterCtrl"
        })
}])
    /**
     *  This is a run block. It gets executed when the application is fully loaded.
     *  Right now, it sets up a watch on $location.path(). If the path changes, it updates the menu.
     *  It uses menuService, $location service, and $rootScope to set the watch.
     */
    .run(["menuService", "$location", "$rootScope", function(menuService, $location, $rootScope){
    //watch for URL changes
    $rootScope.$watch(function(){ return $location.path()}, function(path){
        path = "#!" + path;     //this adds the right prefix, to match up with menu link entries
        $.each(menuService.items, function(x, item){    //this is probably inefficient
            if(item.link == path){      //then the current path ("/#/events") etc. corresponds to the menu link, so activate
                menuService.items[x].active = true;
            } else {
                menuService.items[x].active = false;
            }
        })
    })
}]);