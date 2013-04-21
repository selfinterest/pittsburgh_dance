<!DOCTYPE html>
<html ng-app="dance">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="fragment" content="!">
        <link rel="stylesheet" type="text/css" href="components/bootstrap/css/bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css" href="components/bootstrap/css/bootstrap-responsive.min.css"/>
        <link rel="stylesheet" type="text/css" href="css/custom.css"/>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.1.4/angular.min.js"></script>
        <script src="components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
    </head>
    <body global-events>
    <div class="navbar" ng-controller="NavCtrl">
        <div class="navbar-inner">
            <a class="brand" href="#">USA Dance - Pittsburgh Chapter #3007</a>
            <ul class="nav">
                <li ng-repeat="item in menu.items" ng-class="{active: item.active}"><a ng-href="{{item.link}}">{{item.text}}</a></li>
            </ul>
            <form class="navbar-form right-side">
                <button class="btn btn-primary login" ng-model="login.showLogin" ng-show="!login.loggedIn" btn-checkbox btn-checkbox-true="true" btn-checkbox-false="false"><i class="icon-user"></i> Login</button>
                <button class="btn btn-primary login" ng-show="login.loggedIn" ng-click="login.logout()"><i class="icon-user"></i> Logout</button>
            </form>
        </div>
    </div>
    <div class="container-fluid" id="container">
        <div ng-controller="LoginCtrl" ng-switch on="login.showLogin" ng-animate="'fade'" class="login-overlay login" ng-cloak>
            <div ng-switch-when="true" class="arrow_box">
                <login-box></login-box>
            </div>
        </div>
        <div class="content" ng-view ng-animate="{enter: 'view-enter', leave: 'view-leave'}">
            Test
        </div>
        <div class="footer">
            <p>2012 TCW Consulting</p>
        </div>
    </div>
    </div>
    <script src="js/app.js"></script>
    <script src="js/controllers/TicketCtrl.js"></script>
    <script src="js/controllers/NavCtrl.js"></script>
    <script src="js/controllers/LoginCtrl.js"></script>
    <script src="js/controllers/EventsCtrl.js"></script>
    <script src="js/controllers/AccountCtrl.js"></script>
    <script src="js/controllers/ContactCtrl.js"></script>
    <script src="js/controllers/RegisterCtrl.js"></script>
    <script src="js/services/services.js"></script>
    <script src="js/directives/loginBox.js"></script>
    <script src="js/directives.js"></script>
    </body>
</html>

