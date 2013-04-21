/**
 * This is the dance services module. It contains two services, both of them very simple.
 * In theory, each of these services could have gone into separate modules in their own files, but both are quite simple.
 * In more complicated projects, it is advisable to have one module per service.
 *
 * Both the menu and the login stuff could have been put inside controllers. However, the functionality is cross-cutting: it needs to be shared among
 * different controllers, and one way to do that is to use a service.
 */
angular.module('dance.services', [])
    .service('loginService', function (){
        var service = {};
        service.showLogin = false;      //default value.
        service.loggedIn = false;
        service.logout = function(){
            //This should actually contact the server to initiate logout, but we'll just reset the flag.
            service.loggedIn = false;
        }
        return service;
    })

    .service("menuService", function(){
        var service = {};
        service.items = [
            {
                text: "Events",
                link: "#!/events"
            },
            {
                text: "Account",
                link: "#!/account"
            },
            {
                text: "Contact",
                link: "#!/contact"
            },
            {
                text: "Register",
                link: "#!/register"
            }

        ];

        return service;
    })