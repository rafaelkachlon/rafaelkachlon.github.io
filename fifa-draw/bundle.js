angular
    .module('root', ['app'
    ])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/app');
    }]);
angular
    .module('components', [
        'menu',
        'simpleDraw',
        'byLevelDraw',
        'help',
        'about',
        'result'
    ]);
angular
    .module('app', [
        'templates',
        'components',
        'ngAnimate',
        'ui.router'
    ])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        // $urlRouterProvider.otherwise('/menu');
        $stateProvider
            .state('app', {
                url: '/app',
                component: 'app',
                redirectTo: 'menu'
            });
    }]);
angular
    .module('about', [
        'ui.router'
    ])
    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state('about', {
            url: '/about',
            component: 'about'
        });
    }]);
angular
    .module('byLevelDraw', [
        'ui.router'
    ])
    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state('byLevelDraw', {
            url: '/byLevelDraw',
            component: 'byLevelDraw'
        });
    }]);
angular
    .module('help', [
        'ui.router'
    ])
    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state('help', {
            url: '/help',
            component: 'help'
        });
    }]);
angular
    .module('menu', [
        'ui.router'
    ])
    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state('menu', {
            url: '/menu',
            component: 'fifaMenu'
        });
    }]);
angular
    .module('result', [
        'ui.router'
    ])
    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state('result', {
            url: '/result',
            component: 'result'
        });
    }]);
angular
    .module('simpleDraw', [
        'ui.router'
    ])
    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state('simpleDraw', {
            url: '/simpleDraw',
            component: 'simpleDraw'
        });
    }]);
angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./root.component.html','<div style="transform: scale(1); transform-origin: 0px 0px 0px;">\r\n    <div class="mobile-emulator">\r\n        <div id="frame-emulator" class="frame-emulator frame-scroller">\r\n            <div class="root">\r\n                <img src="./assets/images/logo.png" class="logo">\r\n                <ui-view></ui-view>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>');
$templateCache.put('./app.component.html','<div class="app">\r\n    <div ui-view></div>\r\n</div>');
$templateCache.put('./back-button.component.html','<button type="submit" class="back-btn heb" ng-click="vm.Back()">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button>');
$templateCache.put('./by-level-draw.component.html','<div class="text-center by-level-draw">\r\n  <div class="blur-bg more-opacity">\r\n    <h1 class="heb">{{vm.name}}</h1>\r\n    <p class="heb hm-players hm-players-levels">\u05DB\u05DE\u05D4 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD? <span>(4-20)</span></p>\r\n    <hr />\r\n    <form name="myForm" ng-submit="vm.Submit()">\r\n      <div class="heb">\u05DE\u05E7\u05E6\u05D5\u05E2\u05E0\u05D9\u05DD:</div>\r\n      <div class="inputButtons">\r\n        <div ng-click="vm.AddOnePro()" class="inputButtonsChild inputButtons"><span class="glyphicon glyphicon-plus plusMinus"></span></div>\r\n        <input ng-model="vm.CountPro" class="inputButtonsChild countInput heb" type="text" readonly required />\r\n        <div ng-click="vm.RemoveOnePro()" class="inputButtonsChild inputButtons"><span class="glyphicon glyphicon-minus plusMinus"></span></div>\r\n      </div>\r\n      <div class="heb">\u05D7\u05D5\u05D1\u05D1\u05E0\u05D9\u05DD:</div>\r\n      <div class="inputButtons">\r\n        <div ng-click="vm.AddOneAmateur()" class="inputButtonsChild inputButtons"><span class="glyphicon glyphicon-plus plusMinus"></span></div>\r\n        <input ng-model="vm.CountAmateur" class="inputButtonsChild countInput heb" type="text" readonly required />\r\n        <div ng-click="vm.RemoveOneAmateur()" class="inputButtonsChild inputButtons"><span class="glyphicon glyphicon-minus plusMinus"></span></div>\r\n      </div>\r\n      <input class="confirm-btn heb" type="submit" value="\u05D0\u05E9\u05E8" />\r\n      <div ng-show="vm.isInvalid" class="alert alert-danger">\u05D0\u05E0\u05D0 \u05D1\u05D7\u05E8 \u05DE\u05E1\u05E4\u05E8 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD (\u05DC\u05E4\u05D7\u05D5\u05EA 2 \u05DE\u05DB\u05DC \u05E7\u05D1\u05D5\u05E6\u05D4)</div>\r\n    </form>\r\n\r\n    <div class="namesInputs">\r\n      <p class="who-plays heb" ng-show="vm.ShowButton">\u05DE\u05D9 \u05DE\u05E9\u05D7\u05E7?</p>\r\n      <hr ng-show="vm.ShowButton" />\r\n      <div ng-show="vm.showPlayersError" class="alert alert-danger">\u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05E9\u05DE\u05D5\u05EA \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD</div>\r\n      <form>\r\n        <p class="heb" ng-show="vm.IsValid">\u05DE\u05E7\u05E6\u05D5\u05E2\u05E0\u05D9\u05DD</p>\r\n        <input class="playerInput" type="text" ng-model="p.name" ng-repeat="p in vm.PlayersPro" value="p.name" placeholder="\u05E9\u05D7\u05E7\u05DF {{$index+1}}"\r\n          required />\r\n        <br />\r\n        <p class="heb" ng-show="vm.IsValid">\u05D7\u05D5\u05D1\u05D1\u05E0\u05D9\u05DD</p>\r\n        <input class="playerInput" type="text" ng-model="p.name" ng-repeat="p in vm.PlayersAmateur" value="p.name" placeholder="\u05E9\u05D7\u05E7\u05DF {{$index+1}}"\r\n          required />\r\n        <br />\r\n        <input type="submit" class="confirm-btn heb draw" ng-show="vm.ShowButton" ng-click="vm.Shuffle()" value="\u05D4\u05D2\u05E8\u05DC">\r\n      </form>\r\n    </div>\r\n    <back-button></back-button>\r\n  </div>\r\n</div>');
$templateCache.put('./about.component.html','<div class="text-center about heb">\r\n    <div class="blur-bg more-opacity">\r\n        <div class="header about-header">{{vm.name}}</div>\r\n        <p>\u05DB\u05DF, \u05D2\u05DD \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05E4\u05D9\u05E4\u05D0.</p>\r\n        <p>\u05D5\u05DB\u05DF, \u05D2\u05DD \u05D2\u05DD \u05DC\u05E0\u05D5 \u05E7\u05E8\u05D4 \u05E9\u05D9\u05E9\u05D1\u05E0\u05D5 \u05DB\u05DC \u05D4\u05D7\u05D1\u05E8\u05D9\u05DD \u05D5\u05D4\u05EA\u05D5\u05D5\u05DB\u05D7\u05E0\u05D5 \u05D3\u05E7\u05D5\u05EA \u05D0\u05E8\u05D5\u05DB\u05D5\u05EA \u05DE\u05D9 \u05E0\u05D2\u05D3 \u05DE\u05D9 \u05D5\u05D0\u05D9\u05DA \u05DC\u05D7\u05DC\u05E7 \u05D6\u05D5\u05D2\u05D5\u05EA.</p>\r\n        <p>\u05D5\u05DB\u05DF, \u05D2\u05DD \u05D0\u05E0\u05D7\u05E0\u05D5 \u05D1\u05E1\u05D5\u05E3 \u05D4\u05E1\u05EA\u05D5\u05D1\u05D1\u05E0\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E0\u05D9\u05D9\u05E8 \u05D5\u05E2\u05D8 \u05D5\u05D4\u05EA\u05D7\u05DC\u05E0\u05D5 \u05DB\u05DE\u05D5 \u05D1\u05E9\u05E0\u05D5\u05EA \u05D480 \u05DC\u05DB\u05EA\u05D5\u05D1 \u05E9\u05DE\u05D5\u05EA \u05D5\u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DC\u05E7\u05E8\u05D5\u05E2 \u05E4\u05EA\u05E7\u05D9\u05DD \u05D5\u05DC\u05D4\u05D2\u05E8\u05D9\u05DC \u05DE\u05DB\u05D5\u05D1\u05E2.</p>\r\n        <p>\u05DC\u05E0\u05D5 \u05DC\u05E7\u05D7 \u05D1\u05E1\u05D1\u05D9\u05D1\u05D5\u05EA \u05D4\u05E9\u05E2\u05D4 \u05E2\u05D3 \u05E9\u05D4\u05EA\u05D7\u05DC\u05E0\u05D5 \u05DC\u05E9\u05D7\u05E7, \u05D5\u05DC\u05DB\u05DD?</p>\r\n        <p>\u05D1\u05D3\u05D9\u05D5\u05E7 \u05D1\u05E9\u05D1\u05D9\u05DC \u05E9\u05DC\u05D0 \u05D9\u05E7\u05E8\u05D5 \u05DC\u05DB\u05DD \u05D4\u05E0\u05E1\u05D9\u05DD \u05D5\u05D4\u05E0\u05E4\u05DC\u05D0\u05D5\u05EA \u05D9\u05E6\u05E8\u05EA\u05D9 \u05D0\u05EA \u05D4\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05D4\u05E4\u05E9\u05D5\u05D8\u05D4 \u05D4\u05D6\u05D5.</p>\r\n        <p>\u05DC\u05D0 \u05E2\u05D5\u05D3 \u05E9\u05E2\u05D4 \u05E2\u05D3 \u05E9\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D7\u05E7, \u05D4\u05DB\u05DC \u05E8\u05E5 \u05DE\u05D4\u05E8 \u05DE\u05D0\u05D5\u05D3.</p>\r\n        <p>\u05D1\u05EA\u05E7\u05D5\u05D5\u05D4 \u05E9\u05EA\u05DE\u05E6\u05D0\u05D5 \u05D0\u05EA \u05D4\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05DE\u05D5\u05E2\u05D9\u05DC\u05D4.</p>\r\n        <p>\u05E8\u05E4\u05D0\u05DC</p>\r\n    </div>\r\n    <back-button></back-button>\r\n</div>');
$templateCache.put('./help.component.html','<div class="text-center help heb">\r\n  <h1 class="header">{{vm.name}}</h1>\r\n\r\n  <div class="button" ng-click="vm.simpleShow = !vm.simpleShow">\u05D4\u05D2\u05E8\u05DC\u05D4 \u05E8\u05D2\u05D9\u05DC\u05D4</div>\r\n  <div class="simple-draw-help" ng-init="vm.simpleShow = false" ng-show="vm.simpleShow">\r\n    <div class="help-cont center-block">\r\n      <p>1. \u05D1\u05D7\u05E8 \u05DE\u05E1\u05E4\u05E8 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D1\u05D8\u05D5\u05E8\u05E0\u05D9\u05E8 \u05D5\u05DC\u05D7\u05E5 "\u05D0\u05E9\u05E8"</p>\r\n      <img class="help-pic" src="./assets/images/sd1.jpg" alt="">\r\n    </div>\r\n    <div class="help-cont center-block">\r\n      <p>2. \u05D4\u05DB\u05E0\u05E1 \u05D0\u05EA \u05E9\u05DE\u05D5\u05EA \u05D4\u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D5\u05DC\u05D7\u05E5 "\u05D4\u05D2\u05E8\u05DC"</p>\r\n      <img class="help-pic" src="./assets/images/sd2.jpg" alt="">\r\n    </div>\r\n    <div class="help-cont center-block results">\r\n      <p>3. \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D4\u05D6\u05D5\u05D2\u05D5\u05EA \u05D9\u05D5\u05E4\u05D9\u05E2\u05D5 \u05D1\u05D6\u05D5 \u05D0\u05D7\u05E8 \u05D6\u05D5. \u05D4\u05EA\u05D7\u05D9\u05DC\u05D5 \u05DC\u05E9\u05D7\u05E7.</p>\r\n      <img class="help-pic" src="./assets/images/sd3.jpg" alt="">\r\n    </div>\r\n  </div>\r\n\r\n  <div class="button" ng-click="vm.byLevelShow = !vm.byLevelShow">\u05D4\u05D2\u05E8\u05DC\u05D4 \u05DC\u05E4\u05D9 \u05E8\u05DE\u05D4</div>\r\n  <div class="by-level-draw-help" ng-init="vm.byLevelShow = false" ng-show="vm.byLevelShow">\r\n    <div class="help-cont center-block by-level">\r\n      <p>1. \u05D1\u05D7\u05E8 \u05DE\u05E1\u05E4\u05E8 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D1\u05D8\u05D5\u05E8\u05E0\u05D9\u05E8, \u05DB\u05DE\u05D5\u05EA \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05DE\u05E7\u05E6\u05D5\u05E2\u05E0\u05D9\u05DD \u05D5\u05DB\u05DE\u05D5\u05EA \u05D7\u05D5\u05D1\u05D1\u05E0\u05D9\u05DD \u05D5\u05DC\u05D7\u05E5 "\u05D0\u05E9\u05E8"</p>\r\n      <img class="help-pic" src="./assets/images/bl1.jpg" alt="">\r\n    </div>\r\n    <div class="help-cont center-block by-level bl2">\r\n      <p>2. \u05D4\u05DB\u05E0\u05E1 \u05D0\u05EA \u05E9\u05DE\u05D5\u05EA \u05D4\u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05DC\u05E4\u05D9 \u05E8\u05DE\u05D4 \u05DB\u05DA \u05E9\u05DE\u05E7\u05E6\u05D5\u05E2\u05DF \u05DC\u05D0 \u05D9\u05D5\u05D2\u05E8\u05DC \u05E2\u05DD \u05DE\u05E7\u05E6\u05D5\u05E2\u05DF \u05D5\u05D7\u05D5\u05D1\u05D1\u05DF \u05DC\u05D0 \u05D9\u05D5\u05D2\u05E8\u05DC \u05E2\u05DD \u05D7\u05D5\u05D1\u05D1\u05DF \u05D5\u05DC\u05D7\u05E5 "\u05D4\u05D2\u05E8\u05DC"</p>\r\n      <img class="help-pic" src="./assets/images/bl2.jpg" alt="">\r\n    </div>\r\n    <div class="help-cont center-block results">\r\n      <p>3. \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D4\u05D6\u05D5\u05D2\u05D5\u05EA \u05D9\u05D5\u05E4\u05D9\u05E2\u05D5 \u05D1\u05D6\u05D5 \u05D0\u05D7\u05E8 \u05D6\u05D5, \u05DE\u05E7\u05E6\u05D5\u05E2\u05DF \u05E2\u05DD \u05D7\u05D5\u05D1\u05D1\u05DF \u05D1\u05DB\u05DC \u05E7\u05D1\u05D5\u05E6\u05D4. \u05D4\u05EA\u05D7\u05D9\u05DC\u05D5 \u05DC\u05E9\u05D7\u05E7.</p>\r\n      <img class="help-pic" src="./assets/images/bl3.jpg" alt="">\r\n    </div>\r\n  </div>\r\n  <back-button></back-button>\r\n</div>');
$templateCache.put('./menu.component.html','<div class="text-center menu">\r\n    <div class="header menu-header">{{vm.name}}</div>\r\n    <div class="blur-bg bg-main">\r\n        <div class="menu-btn firstBtn heb" ng-click="vm.GoToSimpleDraw()">\u05D4\u05D2\u05E8\u05DC\u05D4 \u05E8\u05D2\u05D9\u05DC\u05D4</div>\r\n        <div class="menu-btn heb" ng-click="vm.GoToByLevelDraw()">\u05D4\u05D2\u05E8\u05DC\u05D4 \u05DC\u05E4\u05D9 \u05E8\u05DE\u05D4</div>\r\n        <div class="menu-btn heb" ng-click="vm.GoToHelp()">\u05E2\u05D6\u05E8\u05D4</div>\r\n        <div class="menu-btn heb" ng-click="vm.GoToAbout()">\u05D0\u05D5\u05D3\u05D5\u05EA</div>\r\n    </div>\r\n</div>');
$templateCache.put('./result.component.html','<div class="text-center result">\r\n    <div class="blur-bg more-opacity">\r\n        <div class="header heb">{{vm.name}}</div>\r\n        <div class="namesInputs">\r\n            <div ng-repeat="r in vm.couples" class="couples" style="-webkit-transition-delay:{{$index*1000}}ms">\r\n                <span ng-show="r.second ==null" class="glyphicon glyphicon-thumbs-down"></span>\r\n                <div class="name">{{r.first}}</div>\r\n                <div ng-show="r.second !=null" class="seperator">|</div>\r\n                <div ng-show="r.second !=null" class="name">{{r.second}}</div>\r\n                <span ng-show="r.second ==null" class="glyphicon glyphicon-thumbs-down"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <back-button></back-button>\r\n</div>');
$templateCache.put('./simple-draw.component.html','<div class="text-center simple-draw ">\r\n    <div class="blur-bg">\r\n        <p class="hmplayers heb">\u05DB\u05DE\u05D4 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD? <span>(4-20)</span></p>\r\n        <hr />\r\n\r\n        <form name="myForm" ng-submit="vm.Submit()">\r\n            <div class="inputButtons">\r\n                <div ng-click="vm.AddOne()" class="inputButtonsChild inputButtons"><span class="glyphicon glyphicon-plus plusMinus"></span></div>\r\n                <input ng-model="vm.Count" class="inputButtonsChild countInput heb" type="text" readonly required />\r\n                <div ng-click="vm.RemoveOne()" class="inputButtonsChild inputButtons"><span class="glyphicon glyphicon-minus plusMinus"></span></div>\r\n            </div>\r\n            <input class="confirm-btn heb" type="submit" value="\u05D0\u05E9\u05E8" />\r\n            <div ng-show="vm.isInvalid" class="alert alert-danger">\u05D0\u05E0\u05D0 \u05D1\u05D7\u05E8 \u05DE\u05E1\u05E4\u05E8 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD (\u05DC\u05E4\u05D7\u05D5\u05EA 4)</div>\r\n        </form>\r\n        <div class="namesInputs">\r\n            <p class="whoplays heb" ng-show="vm.ShowButton">\u05DE\u05D9 \u05DE\u05E9\u05D7\u05E7?</p>\r\n            <hr ng-show="vm.ShowButton" />\r\n            <div ng-show="vm.showPlayersError" class="alert alert-danger">\u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05E9\u05DE\u05D5\u05EA \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD</div>\r\n            <form>\r\n                <input class="playerInput" type="text" ng-model="p.name" ng-repeat="p in vm.Players" value="p.name" placeholder="\u05E9\u05D7\u05E7\u05DF {{$index+1}}"\r\n                    required />\r\n                <br />\r\n                <input type="submit" class="confirm-btn heb draw" ng-show="vm.ShowButton" ng-click="vm.Shuffle()" value="\u05D4\u05D2\u05E8\u05DC">\r\n            </form>\r\n        </div>\r\n        <back-button></back-button>\r\n    </div>\r\n\r\n</div>');}]);
angular
    .module('root')
    .component('root', {
        templateUrl: './root.component.html',
        controller: rootController,
        controllerAs: 'vm',
        bindings: {
            Binding: '=',
        },
    });

function rootController() {
    var vm = this;
}

angular
    .module('app')
    .component('app', {
        templateUrl: './app.component.html',
        controller: appController,
        controllerAs: 'vm',
    });

function appController() {
    var vm = this;
}

angular
    .module('components')
    .component('about', {
        templateUrl: './about.component.html',
        controller: aboutController,
        controllerAs: 'vm'
    });
aboutController.$inject = ['$state'];
function aboutController($state) {
    var vm = this;
    vm.name = "אודות";
    vm.Back = function () {
        $state.go('menu');
    };
}

angular
    .module('components')
    .component('byLevelDraw', {
        templateUrl: './by-level-draw.component.html',
        controller: byLevelDrawController,
        controllerAs: 'vm',
        bindings: {
            Binding: '=',
        },
    });

byLevelDrawController.$inject = ['$state', 'resultService'];

function byLevelDrawController($state, resultService) {
    var vm = this;
    vm.name = "הגרל בין רמות";
    vm.CountPro = 0;
    vm.CountAmateur = 0;
    vm.PlayersPro = null;
    vm.PlayersAmateur = null;


    vm.AddOnePro = function () {
        if (vm.CountPro == 0) {
            vm.CountPro = 2;
        }
        else if (vm.CountPro < 10) {
            vm.CountPro++;
        }
    };

    vm.RemoveOnePro = function () {
        if (vm.CountPro > 2) {
            vm.CountPro--;
        }
    };

    vm.AddOneAmateur = function () {
        if (vm.CountAmateur == 0) {
            vm.CountAmateur = 2;
        }
        else if (vm.CountAmateur < 10) {
            vm.CountAmateur++;
        }
    };

    vm.RemoveOneAmateur = function () {
        if (vm.CountAmateur > 2) {
            vm.CountAmateur--;
        }
    };

    vm.Submit = function () {
        if (vm.CountPro != 0 && vm.CountAmateur != 0) {
            this.isInvalid = false;

            vm.PlayersPro = new Array(parseInt(vm.CountPro));
            vm.PlayersAmateur = new Array(parseInt(vm.CountAmateur));
            for (var i = 0; i < vm.PlayersPro.length; i++) {
                vm.PlayersPro[i] = { name: "" };
            }
            for (i = 0; i < vm.PlayersAmateur.length; i++) {
                vm.PlayersAmateur[i] = { name: "" };
            }
            vm.ShowButton = true;
            vm.IsValid = true;
        }
        else {
            vm.isInvalid = true;
        }
    };

    vm.Shuffle = function () {

        var counterPro = 0;
        var counterAmateur = 0;
        if (vm.PlayersPro && vm.PlayersAmateur) {
            for (var i = 0; i < vm.PlayersPro.length; i++) {
                if (vm.PlayersPro[i].name != "") {
                    counterPro++;
                }
            }
            for (i = 0; i < vm.PlayersAmateur.length; i++) {
                if (vm.PlayersAmateur[i].name != "") {
                    counterAmateur++;
                }
            }
        }
        if (counterPro == vm.PlayersPro.length && counterAmateur == vm.PlayersAmateur.length) {

            resultService.emptyResults();
            var arrPro = vm.randomizeResults(vm.PlayersPro);
            var arrAmateur = vm.randomizeResults(vm.PlayersAmateur);
            while (arrPro.length != 0 || arrAmateur.length != 0) {
                var couple = {};
                if (arrPro.length == 1 || arrAmateur.length == 1) {

                    if (arrPro.length == 1 && arrAmateur.length == 1) {

                        couple = {};
                        couple.first = arrPro[arrPro.length - 1].name;
                        couple.second = arrAmateur[arrAmateur.length - 1].name;
                        resultService.pushResult(couple);
                        arrPro.pop();
                        arrAmateur.pop();
                    }

                    else if (arrPro.length <= 1 && arrAmateur.length == 0) {
                        couple = {};
                        couple.first = arrPro[arrPro.length - 1].name;
                        couple.second = null;
                        resultService.pushResult(couple);
                        arrPro.pop();
                    }
                    else if (arrPro.length == 0 && arrAmateur.length <= 1) {
                        couple = {};
                        couple.first = arrAmateur[arrAmateur.length - 1].name;
                        couple.second = null;
                        resultService.pushResult(couple);
                        arrAmateur.pop();
                    }
                    else if (arrPro.length > 1 && arrAmateur.length == 1) {
                        couple = {};
                        couple.first = arrPro[arrPro.length - 1].name;
                        couple.second = arrAmateur[arrAmateur.length - 1].name;
                        resultService.pushResult(couple);
                        arrPro.pop();
                        arrAmateur.pop();
                    }
                    else if (arrPro.length == 1 && arrAmateur.length > 1) {
                        couple = {};
                        couple.first = arrPro[arrPro.length - 1].name;
                        couple.second = arrAmateur[arrAmateur.length - 1].name;
                        resultService.pushResult(couple);
                        arrPro.pop();
                        arrAmateur.pop();
                    }
                }
                else {
                    if (arrPro.length > 0 && arrAmateur.length > 0) {
                        couple = {};
                        couple.first = arrPro[arrPro.length - 1].name;
                        couple.second = arrAmateur[arrAmateur.length - 1].name;
                        resultService.pushResult(couple);
                        arrPro.pop();
                        arrAmateur.pop();
                    }
                    else {
                        if (arrPro.length == 0) {
                            if (arrAmateur.length > 1) {
                                couple = {};
                                couple.first = arrAmateur[arrAmateur.length - 1].name;
                                couple.second = arrAmateur[arrAmateur.length - 2].name;
                                resultService.pushResult(couple);
                                arrAmateur.pop();
                                arrAmateur.pop();
                            }
                            else {
                                couple = {};
                                couple.first = arrAmateur[arrAmateur.length - 1].name;
                                couple.second = null;
                                resultService.pushResult(couple);
                                arrAmateur.pop();
                            }
                        }
                        else if (arrAmateur.length == 0) {
                            if (arrPro.length > 1) {
                                couple = {};
                                couple.first = arrPro[arrPro.length - 1].name;
                                couple.second = arrPro[arrPro.length - 2].name;
                                resultService.pushResult(couple);
                                arrPro.pop();
                                arrPro.pop();
                            }
                            else {
                                Scouple = {};
                                couple.first = arrPro[arrPro.length - 1].name;
                                couple.second = null;
                                resultService.pushResult(couple);
                                arrPro.pop();
                            }
                        }
                    }

                }
            }
            $state.go('result');
        }
        else {
            vm.showPlayersError = true;
        }
    };

    vm.randomizeResults = function (array) {

        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };
}

angular
    .module('components')
    .component('help', {
        templateUrl: './help.component.html',
        controller: helpController,
        controllerAs: 'vm',
        bindings: {
            Binding: '=',
        },
    });

function helpController() {
    var vm = this;
    vm.name = "עזרה";
}

angular
    .module('menu')
    .component('fifaMenu', {
        templateUrl: './menu.component.html',
        controller: menuController,
        controllerAs: 'vm',
        bindings: {
            Binding: '=',
        },
    });
menuController.$inject = ['$state'];
function menuController($state) {
    var vm = this;
    vm.name = "מי נגד Me?";

    vm.GoToSimpleDraw = function () {
        $state.go('simpleDraw');
    };
    vm.GoToByLevelDraw = function () {
        $state.go('byLevelDraw');
    };
    vm.GoToHelp = function () {
        $state.go('help');
    };
    vm.GoToAbout = function () {
        $state.go('about');
    };
}

angular
    .module('components')
    .component('result', {
        templateUrl: './result.component.html',
        controller: resultController,
        controllerAs: 'vm'
    });

resultController.$inject = ['$state', 'resultService', '$timeout'];

function resultController($state, resultService, $timeout) {
    if (resultService.resultsAreNotEmpty() || true) {
        var vm = this;
        vm.name = "והרי תוצאות";
        vm.couples = [];

        vm.$onInit = function () {
            $timeout(function () {
                vm.couples = resultService.getResults();
                console.log(vm.couples);
            }, 1000);
        };
    }
    else {
        $state.go('menu');
    }
}

angular
    .module('result')
    .service('resultService', resultService);

resultService.$inject = ['$state'];

function resultService($state) {
    var results = [];

    function getResults() {
        return results;
    }
    function pushResult(result) {
        results.push(result);
    }

    function emptyResults() {
        results = [];
    }

    function resultsAreNotEmpty() {
        return results.length > 0;
    }

    return {
        getResults: getResults,
        pushResult: pushResult,
        emptyResults: emptyResults,
        resultsAreNotEmpty: resultsAreNotEmpty
    };
}
angular
    .module('components')
    .component('simpleDraw', {
        templateUrl: './simple-draw.component.html',
        controller: simpleDrawController,
        controllerAs: 'vm',
        bindings: {
            Binding: '=',
        },
    });

simpleDrawController.$inject = ['$state', 'resultService'];

function simpleDrawController($state, resultService) {
    var vm = this;
    vm.name = "הגרלה רגילה";
    vm.isInvalid = false;
    vm.Count = 0;
    vm.ShowButton = false;
    vm.showPlayersError = false;
    vm.Players = null;


    vm.Submit = function () {
        if (vm.Count != 0) {
            this.isInvalid = false;

            vm.Players = new Array(parseInt(vm.Count));
            for (var i = 0; i < vm.Players.length; i++) {
                vm.Players[i] = { name: "" };
            }
            vm.ShowButton = true;
        }
        else {
            vm.isInvalid = true;
        }
    };

    vm.AddOne = function () {
        if (vm.Count == 0) {
            vm.Count = 4;
        }
        else if (vm.Count < 20) {
            vm.Count++;
        }
    };

    vm.RemoveOne = function () {
        if (vm.Count > 4) {
            vm.Count--;
        }
    };

    vm.Shuffle = function () {

        var counter = 0;
        if (vm.Players) {
            //check if user inserted name for all players
            for (var i = 0; i < vm.Players.length; i++) {
                if (vm.Players[i].name != "") {
                    counter++;
                }
            }
        }
        if (counter == vm.Players.length) {

            resultService.emptyResults();
            var arr = vm.randomizeResults(vm.Players);
            while (arr.length != 0) {
                var couple = {};
                if (arr.length == 1) {
                    couple = {};
                    couple.first = arr[arr.length - 1].name;
                    couple.second = null;
                    resultService.pushResult(couple);
                    arr.pop();
                }
                else {
                    couple = {};
                    couple.first = arr[arr.length - 1].name;
                    couple.second = arr[arr.length - 2].name;
                    resultService.pushResult(couple);
                    arr.pop();
                    arr.pop();
                }
            }
            $state.go('result');
        }
        else {
            vm.showPlayersError = true;
        }
    };

    vm.randomizeResults = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
}

angular
    .module('app')
    .component('backButton', {
        templateUrl: './back-button.component.html',
        controller: backButtonController,
        controllerAs: 'vm'
    });
backButtonController.$inject = ['$state'];
function backButtonController($state) {
    var vm = this;
    vm.Back = function () {
        $state.go('menu');
    };
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb290Lm1vZHVsZS5qcyIsImFwcC9jb21wb25lbnRzL2NvbXBvbmVudHMubW9kdWxlLmpzIiwiYXBwL2NvbW1vbi9hcHAubW9kdWxlLmpzIiwiYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQubW9kdWxlLmpzIiwiYXBwL2NvbXBvbmVudHMvYnktbGV2ZWwtZHJhdy9ieS1sZXZlbC1kcmF3Lm1vZHVsZS5qcyIsImFwcC9jb21wb25lbnRzL2hlbHAvaGVscC5tb2R1bGUuanMiLCJhcHAvY29tcG9uZW50cy9tZW51L21lbnUubW9kdWxlLmpzIiwiYXBwL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHQubW9kdWxlLmpzIiwiYXBwL2NvbXBvbmVudHMvc2ltcGxlLWRyYXcvc2ltcGxlLWRyYXcubW9kdWxlLmpzIiwidGVtcGxhdGVzLmpzIiwiYXBwL3Jvb3QuY29tcG9uZW50LmpzIiwiYXBwL2NvbW1vbi9hcHAuY29tcG9uZW50LmpzIiwiYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmpzIiwiYXBwL2NvbXBvbmVudHMvYnktbGV2ZWwtZHJhdy9ieS1sZXZlbC1kcmF3LmNvbXBvbmVudC5qcyIsImFwcC9jb21wb25lbnRzL2hlbHAvaGVscC5jb21wb25lbnQuanMiLCJhcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmpzIiwiYXBwL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHQuY29tcG9uZW50LmpzIiwiYXBwL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHQuc2VydmljZS5qcyIsImFwcC9jb21wb25lbnRzL3NpbXBsZS1kcmF3L3NpbXBsZS1kcmF3LmNvbXBvbmVudC5qcyIsImFwcC9jb21tb24vYmFjay1idXR0b24vYmFjay1idXR0b24uY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdyb290JywgWydhcHAnXHJcbiAgICBdKVxyXG4gICAgLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAnKTtcclxuICAgIH0pOyIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMnLCBbXHJcbiAgICAgICAgJ21lbnUnLFxyXG4gICAgICAgICdzaW1wbGVEcmF3JyxcclxuICAgICAgICAnYnlMZXZlbERyYXcnLFxyXG4gICAgICAgICdoZWxwJyxcclxuICAgICAgICAnYWJvdXQnLFxyXG4gICAgICAgICdyZXN1bHQnXHJcbiAgICBdKTsiLCJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdhcHAnLCBbXHJcbiAgICAgICAgJ3RlbXBsYXRlcycsXHJcbiAgICAgICAgJ2NvbXBvbmVudHMnLFxyXG4gICAgICAgICduZ0FuaW1hdGUnLFxyXG4gICAgICAgICd1aS5yb3V0ZXInXHJcbiAgICBdKVxyXG4gICAgLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgICAgIC8vICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9tZW51Jyk7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgLnN0YXRlKCdhcHAnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBwJyxcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogJ2FwcCcsXHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdFRvOiAnbWVudSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTsiLCJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdhYm91dCcsIFtcclxuICAgICAgICAndWkucm91dGVyJ1xyXG4gICAgXSlcclxuICAgIC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2Fib3V0Jywge1xyXG4gICAgICAgICAgICB1cmw6ICcvYWJvdXQnLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6ICdhYm91dCdcclxuICAgICAgICB9KTtcclxuICAgIH0pOyIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2J5TGV2ZWxEcmF3JywgW1xyXG4gICAgICAgICd1aS5yb3V0ZXInXHJcbiAgICBdKVxyXG4gICAgLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnYnlMZXZlbERyYXcnLCB7XHJcbiAgICAgICAgICAgIHVybDogJy9ieUxldmVsRHJhdycsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ2J5TGV2ZWxEcmF3J1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnaGVscCcsIFtcclxuICAgICAgICAndWkucm91dGVyJ1xyXG4gICAgXSlcclxuICAgIC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2hlbHAnLCB7XHJcbiAgICAgICAgICAgIHVybDogJy9oZWxwJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiAnaGVscCdcclxuICAgICAgICB9KTtcclxuICAgIH0pOyIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ21lbnUnLCBbXHJcbiAgICAgICAgJ3VpLnJvdXRlcidcclxuICAgIF0pXHJcbiAgICAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdtZW51Jywge1xyXG4gICAgICAgICAgICB1cmw6ICcvbWVudScsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ2ZpZmFNZW51J1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgncmVzdWx0JywgW1xyXG4gICAgICAgICd1aS5yb3V0ZXInXHJcbiAgICBdKVxyXG4gICAgLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgncmVzdWx0Jywge1xyXG4gICAgICAgICAgICB1cmw6ICcvcmVzdWx0JyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiAncmVzdWx0J1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnc2ltcGxlRHJhdycsIFtcclxuICAgICAgICAndWkucm91dGVyJ1xyXG4gICAgXSlcclxuICAgIC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ3NpbXBsZURyYXcnLCB7XHJcbiAgICAgICAgICAgIHVybDogJy9zaW1wbGVEcmF3JyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiAnc2ltcGxlRHJhdydcclxuICAgICAgICB9KTtcclxuICAgIH0pOyIsImFuZ3VsYXIubW9kdWxlKCd0ZW1wbGF0ZXMnLCBbXSkucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dCgnLi9yb290LmNvbXBvbmVudC5odG1sJywnPGRpdiBzdHlsZT1cInRyYW5zZm9ybTogc2NhbGUoMSk7IHRyYW5zZm9ybS1vcmlnaW46IDBweCAwcHggMHB4O1wiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVwibW9iaWxlLWVtdWxhdG9yXCI+XFxyXFxuICAgICAgICA8ZGl2IGlkPVwiZnJhbWUtZW11bGF0b3JcIiBjbGFzcz1cImZyYW1lLWVtdWxhdG9yIGZyYW1lLXNjcm9sbGVyXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvb3RcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIiBjbGFzcz1cImxvZ29cIj5cXHJcXG4gICAgICAgICAgICAgICAgPHVpLXZpZXc+PC91aS12aWV3PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PicpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KCcuL2FwcC5jb21wb25lbnQuaHRtbCcsJzxkaXYgY2xhc3M9XCJhcHBcIj5cXHJcXG4gICAgPGRpdiB1aS12aWV3PjwvZGl2PlxcclxcbjwvZGl2PicpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KCcuL2JhY2stYnV0dG9uLmNvbXBvbmVudC5odG1sJywnPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJiYWNrLWJ0biBoZWJcIiBuZy1jbGljaz1cInZtLkJhY2soKVwiPlxcdTA1RDdcXHUwNUQ2XFx1MDVFOFxcdTA1RDQgXFx1MDVEQ1xcdTA1RUFcXHUwNUU0XFx1MDVFOFxcdTA1RDlcXHUwNUQ4PC9idXR0b24+Jyk7XG4kdGVtcGxhdGVDYWNoZS5wdXQoJy4vYnktbGV2ZWwtZHJhdy5jb21wb25lbnQuaHRtbCcsJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBieS1sZXZlbC1kcmF3XCI+XFxyXFxuICA8ZGl2IGNsYXNzPVwiYmx1ci1iZyBtb3JlLW9wYWNpdHlcIj5cXHJcXG4gICAgPGgxIGNsYXNzPVwiaGViXCI+e3t2bS5uYW1lfX08L2gxPlxcclxcbiAgICA8cCBjbGFzcz1cImhlYiBobS1wbGF5ZXJzIGhtLXBsYXllcnMtbGV2ZWxzXCI+XFx1MDVEQlxcdTA1REVcXHUwNUQ0IFxcdTA1RTlcXHUwNUQ3XFx1MDVFN1xcdTA1RTBcXHUwNUQ5XFx1MDVERD8gPHNwYW4+KDQtMjApPC9zcGFuPjwvcD5cXHJcXG4gICAgPGhyIC8+XFxyXFxuICAgIDxmb3JtIG5hbWU9XCJteUZvcm1cIiBuZy1zdWJtaXQ9XCJ2bS5TdWJtaXQoKVwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XCJoZWJcIj5cXHUwNURFXFx1MDVFN1xcdTA1RTZcXHUwNUQ1XFx1MDVFMlxcdTA1RTBcXHUwNUQ5XFx1MDVERDo8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRCdXR0b25zXCI+XFxyXFxuICAgICAgICA8ZGl2IG5nLWNsaWNrPVwidm0uQWRkT25lUHJvKClcIiBjbGFzcz1cImlucHV0QnV0dG9uc0NoaWxkIGlucHV0QnV0dG9uc1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzIHBsdXNNaW51c1wiPjwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgIDxpbnB1dCBuZy1tb2RlbD1cInZtLkNvdW50UHJvXCIgY2xhc3M9XCJpbnB1dEJ1dHRvbnNDaGlsZCBjb3VudElucHV0IGhlYlwiIHR5cGU9XCJ0ZXh0XCIgcmVhZG9ubHkgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgIDxkaXYgbmctY2xpY2s9XCJ2bS5SZW1vdmVPbmVQcm8oKVwiIGNsYXNzPVwiaW5wdXRCdXR0b25zQ2hpbGQgaW5wdXRCdXR0b25zXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW1pbnVzIHBsdXNNaW51c1wiPjwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVwiaGViXCI+XFx1MDVEN1xcdTA1RDVcXHUwNUQxXFx1MDVEMVxcdTA1RTBcXHUwNUQ5XFx1MDVERDo8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRCdXR0b25zXCI+XFxyXFxuICAgICAgICA8ZGl2IG5nLWNsaWNrPVwidm0uQWRkT25lQW1hdGV1cigpXCIgY2xhc3M9XCJpbnB1dEJ1dHRvbnNDaGlsZCBpbnB1dEJ1dHRvbnNcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1cyBwbHVzTWludXNcIj48L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICA8aW5wdXQgbmctbW9kZWw9XCJ2bS5Db3VudEFtYXRldXJcIiBjbGFzcz1cImlucHV0QnV0dG9uc0NoaWxkIGNvdW50SW5wdXQgaGViXCIgdHlwZT1cInRleHRcIiByZWFkb25seSByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgPGRpdiBuZy1jbGljaz1cInZtLlJlbW92ZU9uZUFtYXRldXIoKVwiIGNsYXNzPVwiaW5wdXRCdXR0b25zQ2hpbGQgaW5wdXRCdXR0b25zXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW1pbnVzIHBsdXNNaW51c1wiPjwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8aW5wdXQgY2xhc3M9XCJjb25maXJtLWJ0biBoZWJcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJcXHUwNUQwXFx1MDVFOVxcdTA1RThcIiAvPlxcclxcbiAgICAgIDxkaXYgbmctc2hvdz1cInZtLmlzSW52YWxpZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XFx1MDVEMFxcdTA1RTBcXHUwNUQwIFxcdTA1RDFcXHUwNUQ3XFx1MDVFOCBcXHUwNURFXFx1MDVFMVxcdTA1RTRcXHUwNUU4IFxcdTA1RTlcXHUwNUQ3XFx1MDVFN1xcdTA1RTBcXHUwNUQ5XFx1MDVERCAoXFx1MDVEQ1xcdTA1RTRcXHUwNUQ3XFx1MDVENVxcdTA1RUEgMiBcXHUwNURFXFx1MDVEQlxcdTA1REMgXFx1MDVFN1xcdTA1RDFcXHUwNUQ1XFx1MDVFNlxcdTA1RDQpPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cIm5hbWVzSW5wdXRzXCI+XFxyXFxuICAgICAgPHAgY2xhc3M9XCJ3aG8tcGxheXMgaGViXCIgbmctc2hvdz1cInZtLlNob3dCdXR0b25cIj5cXHUwNURFXFx1MDVEOSBcXHUwNURFXFx1MDVFOVxcdTA1RDdcXHUwNUU3PzwvcD5cXHJcXG4gICAgICA8aHIgbmctc2hvdz1cInZtLlNob3dCdXR0b25cIiAvPlxcclxcbiAgICAgIDxkaXYgbmctc2hvdz1cInZtLnNob3dQbGF5ZXJzRXJyb3JcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxcdTA1RDdcXHUwNUQ1XFx1MDVEMVxcdTA1RDQgXFx1MDVEQ1xcdTA1RDRcXHUwNURCXFx1MDVFMFxcdTA1RDlcXHUwNUUxIFxcdTA1RTlcXHUwNURFXFx1MDVENVxcdTA1RUEgXFx1MDVFOVxcdTA1RDdcXHUwNUU3XFx1MDVFMFxcdTA1RDlcXHUwNUREPC9kaXY+XFxyXFxuICAgICAgPGZvcm0+XFxyXFxuICAgICAgICA8cCBjbGFzcz1cImhlYlwiIG5nLXNob3c9XCJ2bS5Jc1ZhbGlkXCI+XFx1MDVERVxcdTA1RTdcXHUwNUU2XFx1MDVENVxcdTA1RTJcXHUwNUUwXFx1MDVEOVxcdTA1REQ8L3A+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJwbGF5ZXJJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmctbW9kZWw9XCJwLm5hbWVcIiBuZy1yZXBlYXQ9XCJwIGluIHZtLlBsYXllcnNQcm9cIiB2YWx1ZT1cInAubmFtZVwiIHBsYWNlaG9sZGVyPVwiXFx1MDVFOVxcdTA1RDdcXHUwNUU3XFx1MDVERiB7eyRpbmRleCsxfX1cIlxcclxcbiAgICAgICAgICByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgPGJyIC8+XFxyXFxuICAgICAgICA8cCBjbGFzcz1cImhlYlwiIG5nLXNob3c9XCJ2bS5Jc1ZhbGlkXCI+XFx1MDVEN1xcdTA1RDVcXHUwNUQxXFx1MDVEMVxcdTA1RTBcXHUwNUQ5XFx1MDVERDwvcD5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInBsYXllcklucHV0XCIgdHlwZT1cInRleHRcIiBuZy1tb2RlbD1cInAubmFtZVwiIG5nLXJlcGVhdD1cInAgaW4gdm0uUGxheWVyc0FtYXRldXJcIiB2YWx1ZT1cInAubmFtZVwiIHBsYWNlaG9sZGVyPVwiXFx1MDVFOVxcdTA1RDdcXHUwNUU3XFx1MDVERiB7eyRpbmRleCsxfX1cIlxcclxcbiAgICAgICAgICByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgPGJyIC8+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiY29uZmlybS1idG4gaGViIGRyYXdcIiBuZy1zaG93PVwidm0uU2hvd0J1dHRvblwiIG5nLWNsaWNrPVwidm0uU2h1ZmZsZSgpXCIgdmFsdWU9XCJcXHUwNUQ0XFx1MDVEMlxcdTA1RThcXHUwNURDXCI+XFxyXFxuICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJhY2stYnV0dG9uPjwvYmFjay1idXR0b24+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj4nKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dCgnLi9hYm91dC5jb21wb25lbnQuaHRtbCcsJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBhYm91dCBoZWJcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImJsdXItYmcgbW9yZS1vcGFjaXR5XCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIGFib3V0LWhlYWRlclwiPnt7dm0ubmFtZX19PC9kaXY+XFxyXFxuICAgICAgICA8cD5cXHUwNURCXFx1MDVERiwgXFx1MDVEMlxcdTA1REQgXFx1MDVEMFxcdTA1RTBcXHUwNUQ3XFx1MDVFMFxcdTA1RDUgXFx1MDVERVxcdTA1RTlcXHUwNUQ3XFx1MDVFN1xcdTA1RDlcXHUwNUREIFxcdTA1RTRcXHUwNUQ5XFx1MDVFNFxcdTA1RDAuPC9wPlxcclxcbiAgICAgICAgPHA+XFx1MDVENVxcdTA1REJcXHUwNURGLCBcXHUwNUQyXFx1MDVERCBcXHUwNUQyXFx1MDVERCBcXHUwNURDXFx1MDVFMFxcdTA1RDUgXFx1MDVFN1xcdTA1RThcXHUwNUQ0IFxcdTA1RTlcXHUwNUQ5XFx1MDVFOVxcdTA1RDFcXHUwNUUwXFx1MDVENSBcXHUwNURCXFx1MDVEQyBcXHUwNUQ0XFx1MDVEN1xcdTA1RDFcXHUwNUU4XFx1MDVEOVxcdTA1REQgXFx1MDVENVxcdTA1RDRcXHUwNUVBXFx1MDVENVxcdTA1RDVcXHUwNURCXFx1MDVEN1xcdTA1RTBcXHUwNUQ1IFxcdTA1RDNcXHUwNUU3XFx1MDVENVxcdTA1RUEgXFx1MDVEMFxcdTA1RThcXHUwNUQ1XFx1MDVEQlxcdTA1RDVcXHUwNUVBIFxcdTA1REVcXHUwNUQ5IFxcdTA1RTBcXHUwNUQyXFx1MDVEMyBcXHUwNURFXFx1MDVEOSBcXHUwNUQ1XFx1MDVEMFxcdTA1RDlcXHUwNURBIFxcdTA1RENcXHUwNUQ3XFx1MDVEQ1xcdTA1RTcgXFx1MDVENlxcdTA1RDVcXHUwNUQyXFx1MDVENVxcdTA1RUEuPC9wPlxcclxcbiAgICAgICAgPHA+XFx1MDVENVxcdTA1REJcXHUwNURGLCBcXHUwNUQyXFx1MDVERCBcXHUwNUQwXFx1MDVFMFxcdTA1RDdcXHUwNUUwXFx1MDVENSBcXHUwNUQxXFx1MDVFMVxcdTA1RDVcXHUwNUUzIFxcdTA1RDRcXHUwNUUxXFx1MDVFQVxcdTA1RDVcXHUwNUQxXFx1MDVEMVxcdTA1RTBcXHUwNUQ1IFxcdTA1RENcXHUwNUQ3XFx1MDVFNFxcdTA1RTkgXFx1MDVFMFxcdTA1RDlcXHUwNUQ5XFx1MDVFOCBcXHUwNUQ1XFx1MDVFMlxcdTA1RDggXFx1MDVENVxcdTA1RDRcXHUwNUVBXFx1MDVEN1xcdTA1RENcXHUwNUUwXFx1MDVENSBcXHUwNURCXFx1MDVERVxcdTA1RDUgXFx1MDVEMVxcdTA1RTlcXHUwNUUwXFx1MDVENVxcdTA1RUEgXFx1MDVENDgwIFxcdTA1RENcXHUwNURCXFx1MDVFQVxcdTA1RDVcXHUwNUQxIFxcdTA1RTlcXHUwNURFXFx1MDVENVxcdTA1RUEgXFx1MDVENVxcdTA1RENcXHUwNUQ0XFx1MDVFQVxcdTA1RDdcXHUwNUQ5XFx1MDVEQyBcXHUwNURDXFx1MDVFN1xcdTA1RThcXHUwNUQ1XFx1MDVFMiBcXHUwNUU0XFx1MDVFQVxcdTA1RTdcXHUwNUQ5XFx1MDVERCBcXHUwNUQ1XFx1MDVEQ1xcdTA1RDRcXHUwNUQyXFx1MDVFOFxcdTA1RDlcXHUwNURDIFxcdTA1REVcXHUwNURCXFx1MDVENVxcdTA1RDFcXHUwNUUyLjwvcD5cXHJcXG4gICAgICAgIDxwPlxcdTA1RENcXHUwNUUwXFx1MDVENSBcXHUwNURDXFx1MDVFN1xcdTA1RDcgXFx1MDVEMVxcdTA1RTFcXHUwNUQxXFx1MDVEOVxcdTA1RDFcXHUwNUQ1XFx1MDVFQSBcXHUwNUQ0XFx1MDVFOVxcdTA1RTJcXHUwNUQ0IFxcdTA1RTJcXHUwNUQzIFxcdTA1RTlcXHUwNUQ0XFx1MDVFQVxcdTA1RDdcXHUwNURDXFx1MDVFMFxcdTA1RDUgXFx1MDVEQ1xcdTA1RTlcXHUwNUQ3XFx1MDVFNywgXFx1MDVENVxcdTA1RENcXHUwNURCXFx1MDVERD88L3A+XFxyXFxuICAgICAgICA8cD5cXHUwNUQxXFx1MDVEM1xcdTA1RDlcXHUwNUQ1XFx1MDVFNyBcXHUwNUQxXFx1MDVFOVxcdTA1RDFcXHUwNUQ5XFx1MDVEQyBcXHUwNUU5XFx1MDVEQ1xcdTA1RDAgXFx1MDVEOVxcdTA1RTdcXHUwNUU4XFx1MDVENSBcXHUwNURDXFx1MDVEQlxcdTA1REQgXFx1MDVENFxcdTA1RTBcXHUwNUUxXFx1MDVEOVxcdTA1REQgXFx1MDVENVxcdTA1RDRcXHUwNUUwXFx1MDVFNFxcdTA1RENcXHUwNUQwXFx1MDVENVxcdTA1RUEgXFx1MDVEOVxcdTA1RTZcXHUwNUU4XFx1MDVFQVxcdTA1RDkgXFx1MDVEMFxcdTA1RUEgXFx1MDVENFxcdTA1RDBcXHUwNUU0XFx1MDVEQ1xcdTA1RDlcXHUwNUU3XFx1MDVFNlxcdTA1RDlcXHUwNUQ0IFxcdTA1RDRcXHUwNUU0XFx1MDVFOVxcdTA1RDVcXHUwNUQ4XFx1MDVENCBcXHUwNUQ0XFx1MDVENlxcdTA1RDUuPC9wPlxcclxcbiAgICAgICAgPHA+XFx1MDVEQ1xcdTA1RDAgXFx1MDVFMlxcdTA1RDVcXHUwNUQzIFxcdTA1RTlcXHUwNUUyXFx1MDVENCBcXHUwNUUyXFx1MDVEMyBcXHUwNUU5XFx1MDVERVxcdTA1RUFcXHUwNUQ3XFx1MDVEOVxcdTA1RENcXHUwNUQ5XFx1MDVERCBcXHUwNURDXFx1MDVFOVxcdTA1RDdcXHUwNUU3LCBcXHUwNUQ0XFx1MDVEQlxcdTA1REMgXFx1MDVFOFxcdTA1RTUgXFx1MDVERVxcdTA1RDRcXHUwNUU4IFxcdTA1REVcXHUwNUQwXFx1MDVENVxcdTA1RDMuPC9wPlxcclxcbiAgICAgICAgPHA+XFx1MDVEMVxcdTA1RUFcXHUwNUU3XFx1MDVENVxcdTA1RDVcXHUwNUQ0IFxcdTA1RTlcXHUwNUVBXFx1MDVERVxcdTA1RTZcXHUwNUQwXFx1MDVENSBcXHUwNUQwXFx1MDVFQSBcXHUwNUQ0XFx1MDVEMFxcdTA1RTRcXHUwNURDXFx1MDVEOVxcdTA1RTdcXHUwNUU2XFx1MDVEOVxcdTA1RDQgXFx1MDVERVxcdTA1RDVcXHUwNUUyXFx1MDVEOVxcdTA1RENcXHUwNUQ0LjwvcD5cXHJcXG4gICAgICAgIDxwPlxcdTA1RThcXHUwNUU0XFx1MDVEMFxcdTA1REM8L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YmFjay1idXR0b24+PC9iYWNrLWJ1dHRvbj5cXHJcXG48L2Rpdj4nKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dCgnLi9oZWxwLmNvbXBvbmVudC5odG1sJywnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGhlbHAgaGViXCI+XFxyXFxuICA8aDEgY2xhc3M9XCJoZWFkZXJcIj57e3ZtLm5hbWV9fTwvaDE+XFxyXFxuXFxyXFxuICA8ZGl2IGNsYXNzPVwiYnV0dG9uXCIgbmctY2xpY2s9XCJ2bS5zaW1wbGVTaG93ID0gIXZtLnNpbXBsZVNob3dcIj5cXHUwNUQ0XFx1MDVEMlxcdTA1RThcXHUwNURDXFx1MDVENCBcXHUwNUU4XFx1MDVEMlxcdTA1RDlcXHUwNURDXFx1MDVENDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cInNpbXBsZS1kcmF3LWhlbHBcIiBuZy1pbml0PVwidm0uc2ltcGxlU2hvdyA9IGZhbHNlXCIgbmctc2hvdz1cInZtLnNpbXBsZVNob3dcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImhlbHAtY29udCBjZW50ZXItYmxvY2tcIj5cXHJcXG4gICAgICA8cD4xLiBcXHUwNUQxXFx1MDVEN1xcdTA1RTggXFx1MDVERVxcdTA1RTFcXHUwNUU0XFx1MDVFOCBcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQgXFx1MDVENFxcdTA1REVcXHUwNUU5XFx1MDVFQVxcdTA1RUFcXHUwNUU0XFx1MDVEOVxcdTA1REQgXFx1MDVEMVxcdTA1RDhcXHUwNUQ1XFx1MDVFOFxcdTA1RTBcXHUwNUQ5XFx1MDVFOCBcXHUwNUQ1XFx1MDVEQ1xcdTA1RDdcXHUwNUU1IFwiXFx1MDVEMFxcdTA1RTlcXHUwNUU4XCI8L3A+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cImhlbHAtcGljXCIgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL3NkMS5qcGdcIiBhbHQ9XCJcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJoZWxwLWNvbnQgY2VudGVyLWJsb2NrXCI+XFxyXFxuICAgICAgPHA+Mi4gXFx1MDVENFxcdTA1REJcXHUwNUUwXFx1MDVFMSBcXHUwNUQwXFx1MDVFQSBcXHUwNUU5XFx1MDVERVxcdTA1RDVcXHUwNUVBIFxcdTA1RDRcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQgXFx1MDVENFxcdTA1REVcXHUwNUU5XFx1MDVFQVxcdTA1RUFcXHUwNUU0XFx1MDVEOVxcdTA1REQgXFx1MDVENVxcdTA1RENcXHUwNUQ3XFx1MDVFNSBcIlxcdTA1RDRcXHUwNUQyXFx1MDVFOFxcdTA1RENcIjwvcD5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVwiaGVscC1waWNcIiBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvc2QyLmpwZ1wiIGFsdD1cIlwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImhlbHAtY29udCBjZW50ZXItYmxvY2sgcmVzdWx0c1wiPlxcclxcbiAgICAgIDxwPjMuIFxcdTA1RUFcXHUwNUQ1XFx1MDVFNlxcdTA1RDBcXHUwNUQ1XFx1MDVFQSBcXHUwNUQ0XFx1MDVENlxcdTA1RDVcXHUwNUQyXFx1MDVENVxcdTA1RUEgXFx1MDVEOVxcdTA1RDVcXHUwNUU0XFx1MDVEOVxcdTA1RTJcXHUwNUQ1IFxcdTA1RDFcXHUwNUQ2XFx1MDVENSBcXHUwNUQwXFx1MDVEN1xcdTA1RTggXFx1MDVENlxcdTA1RDUuIFxcdTA1RDRcXHUwNUVBXFx1MDVEN1xcdTA1RDlcXHUwNURDXFx1MDVENSBcXHUwNURDXFx1MDVFOVxcdTA1RDdcXHUwNUU3LjwvcD5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVwiaGVscC1waWNcIiBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvc2QzLmpwZ1wiIGFsdD1cIlwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiAgPGRpdiBjbGFzcz1cImJ1dHRvblwiIG5nLWNsaWNrPVwidm0uYnlMZXZlbFNob3cgPSAhdm0uYnlMZXZlbFNob3dcIj5cXHUwNUQ0XFx1MDVEMlxcdTA1RThcXHUwNURDXFx1MDVENCBcXHUwNURDXFx1MDVFNFxcdTA1RDkgXFx1MDVFOFxcdTA1REVcXHUwNUQ0PC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVwiYnktbGV2ZWwtZHJhdy1oZWxwXCIgbmctaW5pdD1cInZtLmJ5TGV2ZWxTaG93ID0gZmFsc2VcIiBuZy1zaG93PVwidm0uYnlMZXZlbFNob3dcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImhlbHAtY29udCBjZW50ZXItYmxvY2sgYnktbGV2ZWxcIj5cXHJcXG4gICAgICA8cD4xLiBcXHUwNUQxXFx1MDVEN1xcdTA1RTggXFx1MDVERVxcdTA1RTFcXHUwNUU0XFx1MDVFOCBcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQgXFx1MDVENFxcdTA1REVcXHUwNUU5XFx1MDVFQVxcdTA1RUFcXHUwNUU0XFx1MDVEOVxcdTA1REQgXFx1MDVEMVxcdTA1RDhcXHUwNUQ1XFx1MDVFOFxcdTA1RTBcXHUwNUQ5XFx1MDVFOCwgXFx1MDVEQlxcdTA1REVcXHUwNUQ1XFx1MDVFQSBcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQgXFx1MDVERVxcdTA1RTdcXHUwNUU2XFx1MDVENVxcdTA1RTJcXHUwNUUwXFx1MDVEOVxcdTA1REQgXFx1MDVENVxcdTA1REJcXHUwNURFXFx1MDVENVxcdTA1RUEgXFx1MDVEN1xcdTA1RDVcXHUwNUQxXFx1MDVEMVxcdTA1RTBcXHUwNUQ5XFx1MDVERCBcXHUwNUQ1XFx1MDVEQ1xcdTA1RDdcXHUwNUU1IFwiXFx1MDVEMFxcdTA1RTlcXHUwNUU4XCI8L3A+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cImhlbHAtcGljXCIgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL2JsMS5qcGdcIiBhbHQ9XCJcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJoZWxwLWNvbnQgY2VudGVyLWJsb2NrIGJ5LWxldmVsIGJsMlwiPlxcclxcbiAgICAgIDxwPjIuIFxcdTA1RDRcXHUwNURCXFx1MDVFMFxcdTA1RTEgXFx1MDVEMFxcdTA1RUEgXFx1MDVFOVxcdTA1REVcXHUwNUQ1XFx1MDVFQSBcXHUwNUQ0XFx1MDVFOVxcdTA1RDdcXHUwNUU3XFx1MDVFMFxcdTA1RDlcXHUwNUREIFxcdTA1RDRcXHUwNURFXFx1MDVFOVxcdTA1RUFcXHUwNUVBXFx1MDVFNFxcdTA1RDlcXHUwNUREIFxcdTA1RENcXHUwNUU0XFx1MDVEOSBcXHUwNUU4XFx1MDVERVxcdTA1RDQgXFx1MDVEQlxcdTA1REEgXFx1MDVFOVxcdTA1REVcXHUwNUU3XFx1MDVFNlxcdTA1RDVcXHUwNUUyXFx1MDVERiBcXHUwNURDXFx1MDVEMCBcXHUwNUQ5XFx1MDVENVxcdTA1RDJcXHUwNUU4XFx1MDVEQyBcXHUwNUUyXFx1MDVERCBcXHUwNURFXFx1MDVFN1xcdTA1RTZcXHUwNUQ1XFx1MDVFMlxcdTA1REYgXFx1MDVENVxcdTA1RDdcXHUwNUQ1XFx1MDVEMVxcdTA1RDFcXHUwNURGIFxcdTA1RENcXHUwNUQwIFxcdTA1RDlcXHUwNUQ1XFx1MDVEMlxcdTA1RThcXHUwNURDIFxcdTA1RTJcXHUwNUREIFxcdTA1RDdcXHUwNUQ1XFx1MDVEMVxcdTA1RDFcXHUwNURGIFxcdTA1RDVcXHUwNURDXFx1MDVEN1xcdTA1RTUgXCJcXHUwNUQ0XFx1MDVEMlxcdTA1RThcXHUwNURDXCI8L3A+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cImhlbHAtcGljXCIgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL2JsMi5qcGdcIiBhbHQ9XCJcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJoZWxwLWNvbnQgY2VudGVyLWJsb2NrIHJlc3VsdHNcIj5cXHJcXG4gICAgICA8cD4zLiBcXHUwNUVBXFx1MDVENVxcdTA1RTZcXHUwNUQwXFx1MDVENVxcdTA1RUEgXFx1MDVENFxcdTA1RDZcXHUwNUQ1XFx1MDVEMlxcdTA1RDVcXHUwNUVBIFxcdTA1RDlcXHUwNUQ1XFx1MDVFNFxcdTA1RDlcXHUwNUUyXFx1MDVENSBcXHUwNUQxXFx1MDVENlxcdTA1RDUgXFx1MDVEMFxcdTA1RDdcXHUwNUU4IFxcdTA1RDZcXHUwNUQ1LCBcXHUwNURFXFx1MDVFN1xcdTA1RTZcXHUwNUQ1XFx1MDVFMlxcdTA1REYgXFx1MDVFMlxcdTA1REQgXFx1MDVEN1xcdTA1RDVcXHUwNUQxXFx1MDVEMVxcdTA1REYgXFx1MDVEMVxcdTA1REJcXHUwNURDIFxcdTA1RTdcXHUwNUQxXFx1MDVENVxcdTA1RTZcXHUwNUQ0LiBcXHUwNUQ0XFx1MDVFQVxcdTA1RDdcXHUwNUQ5XFx1MDVEQ1xcdTA1RDUgXFx1MDVEQ1xcdTA1RTlcXHUwNUQ3XFx1MDVFNy48L3A+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cImhlbHAtcGljXCIgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL2JsMy5qcGdcIiBhbHQ9XCJcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxiYWNrLWJ1dHRvbj48L2JhY2stYnV0dG9uPlxcclxcbjwvZGl2PicpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KCcuL21lbnUuY29tcG9uZW50Lmh0bWwnLCc8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbWVudVwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIG1lbnUtaGVhZGVyXCI+e3t2bS5uYW1lfX08L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImJsdXItYmcgYmctbWFpblwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtYnRuIGZpcnN0QnRuIGhlYlwiIG5nLWNsaWNrPVwidm0uR29Ub1NpbXBsZURyYXcoKVwiPlxcdTA1RDRcXHUwNUQyXFx1MDVFOFxcdTA1RENcXHUwNUQ0IFxcdTA1RThcXHUwNUQyXFx1MDVEOVxcdTA1RENcXHUwNUQ0PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1idG4gaGViXCIgbmctY2xpY2s9XCJ2bS5Hb1RvQnlMZXZlbERyYXcoKVwiPlxcdTA1RDRcXHUwNUQyXFx1MDVFOFxcdTA1RENcXHUwNUQ0IFxcdTA1RENcXHUwNUU0XFx1MDVEOSBcXHUwNUU4XFx1MDVERVxcdTA1RDQ8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWJ0biBoZWJcIiBuZy1jbGljaz1cInZtLkdvVG9IZWxwKClcIj5cXHUwNUUyXFx1MDVENlxcdTA1RThcXHUwNUQ0PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1idG4gaGViXCIgbmctY2xpY2s9XCJ2bS5Hb1RvQWJvdXQoKVwiPlxcdTA1RDBcXHUwNUQ1XFx1MDVEM1xcdTA1RDVcXHUwNUVBPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PicpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KCcuL3Jlc3VsdC5jb21wb25lbnQuaHRtbCcsJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciByZXN1bHRcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImJsdXItYmcgbW9yZS1vcGFjaXR5XCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIGhlYlwiPnt7dm0ubmFtZX19PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZXNJbnB1dHNcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cInIgaW4gdm0uY291cGxlc1wiIGNsYXNzPVwiY291cGxlc1wiIHN0eWxlPVwiLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5Ont7JGluZGV4KjEwMDB9fW1zXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XCJyLnNlY29uZCA9PW51bGxcIiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLWRvd25cIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+e3tyLmZpcnN0fX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBuZy1zaG93PVwici5zZWNvbmQgIT1udWxsXCIgY2xhc3M9XCJzZXBlcmF0b3JcIj58PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgbmctc2hvdz1cInIuc2Vjb25kICE9bnVsbFwiIGNsYXNzPVwibmFtZVwiPnt7ci5zZWNvbmR9fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVwici5zZWNvbmQgPT1udWxsXCIgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy1kb3duXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YmFjay1idXR0b24+PC9iYWNrLWJ1dHRvbj5cXHJcXG48L2Rpdj4nKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dCgnLi9zaW1wbGUtZHJhdy5jb21wb25lbnQuaHRtbCcsJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBzaW1wbGUtZHJhdyBcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImJsdXItYmdcIj5cXHJcXG4gICAgICAgIDxwIGNsYXNzPVwiaG1wbGF5ZXJzIGhlYlwiPlxcdTA1REJcXHUwNURFXFx1MDVENCBcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQ/IDxzcGFuPig0LTIwKTwvc3Bhbj48L3A+XFxyXFxuICAgICAgICA8aHIgLz5cXHJcXG5cXHJcXG4gICAgICAgIDxmb3JtIG5hbWU9XCJteUZvcm1cIiBuZy1zdWJtaXQ9XCJ2bS5TdWJtaXQoKVwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dEJ1dHRvbnNcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBuZy1jbGljaz1cInZtLkFkZE9uZSgpXCIgY2xhc3M9XCJpbnB1dEJ1dHRvbnNDaGlsZCBpbnB1dEJ1dHRvbnNcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1cyBwbHVzTWludXNcIj48L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBuZy1tb2RlbD1cInZtLkNvdW50XCIgY2xhc3M9XCJpbnB1dEJ1dHRvbnNDaGlsZCBjb3VudElucHV0IGhlYlwiIHR5cGU9XCJ0ZXh0XCIgcmVhZG9ubHkgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBuZy1jbGljaz1cInZtLlJlbW92ZU9uZSgpXCIgY2xhc3M9XCJpbnB1dEJ1dHRvbnNDaGlsZCBpbnB1dEJ1dHRvbnNcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbWludXMgcGx1c01pbnVzXCI+PC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImNvbmZpcm0tYnRuIGhlYlwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlxcdTA1RDBcXHUwNUU5XFx1MDVFOFwiIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiBuZy1zaG93PVwidm0uaXNJbnZhbGlkXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cXHUwNUQwXFx1MDVFMFxcdTA1RDAgXFx1MDVEMVxcdTA1RDdcXHUwNUU4IFxcdTA1REVcXHUwNUUxXFx1MDVFNFxcdTA1RTggXFx1MDVFOVxcdTA1RDdcXHUwNUU3XFx1MDVFMFxcdTA1RDlcXHUwNUREIChcXHUwNURDXFx1MDVFNFxcdTA1RDdcXHUwNUQ1XFx1MDVFQSA0KTwvZGl2PlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVzSW5wdXRzXCI+XFxyXFxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ3aG9wbGF5cyBoZWJcIiBuZy1zaG93PVwidm0uU2hvd0J1dHRvblwiPlxcdTA1REVcXHUwNUQ5IFxcdTA1REVcXHUwNUU5XFx1MDVEN1xcdTA1RTc/PC9wPlxcclxcbiAgICAgICAgICAgIDxociBuZy1zaG93PVwidm0uU2hvd0J1dHRvblwiIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiBuZy1zaG93PVwidm0uc2hvd1BsYXllcnNFcnJvclwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XFx1MDVEN1xcdTA1RDVcXHUwNUQxXFx1MDVENCBcXHUwNURDXFx1MDVENFxcdTA1REJcXHUwNUUwXFx1MDVEOVxcdTA1RTEgXFx1MDVFOVxcdTA1REVcXHUwNUQ1XFx1MDVFQSBcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQ8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8Zm9ybT5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicGxheWVySW5wdXRcIiB0eXBlPVwidGV4dFwiIG5nLW1vZGVsPVwicC5uYW1lXCIgbmctcmVwZWF0PVwicCBpbiB2bS5QbGF5ZXJzXCIgdmFsdWU9XCJwLm5hbWVcIiBwbGFjZWhvbGRlcj1cIlxcdTA1RTlcXHUwNUQ3XFx1MDVFN1xcdTA1REYge3skaW5kZXgrMX19XCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgICAgIDxiciAvPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiY29uZmlybS1idG4gaGViIGRyYXdcIiBuZy1zaG93PVwidm0uU2hvd0J1dHRvblwiIG5nLWNsaWNrPVwidm0uU2h1ZmZsZSgpXCIgdmFsdWU9XCJcXHUwNUQ0XFx1MDVEMlxcdTA1RThcXHUwNURDXCI+XFxyXFxuICAgICAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8YmFjay1idXR0b24+PC9iYWNrLWJ1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+Jyk7fV0pOyIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3Jvb3QnKVxyXG4gICAgLmNvbXBvbmVudCgncm9vdCcsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vcm9vdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogcm9vdENvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgICAgIEJpbmRpbmc6ICc9JyxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG5mdW5jdGlvbiByb290Q29udHJvbGxlcigpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbn1cclxuIiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnYXBwJylcclxuICAgIC5jb21wb25lbnQoJ2FwcCcsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiBhcHBDb250cm9sbGVyLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgIH0pO1xyXG5cclxuZnVuY3Rpb24gYXBwQ29udHJvbGxlcigpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbn1cclxuIiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cycpXHJcbiAgICAuY29tcG9uZW50KCdhYm91dCcsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vYWJvdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IGFib3V0Q29udHJvbGxlcixcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgIH0pO1xyXG5hYm91dENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHN0YXRlJ107XHJcbmZ1bmN0aW9uIGFib3V0Q29udHJvbGxlcigkc3RhdGUpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICB2bS5uYW1lID0gXCLXkNeV15PXldeqXCI7XHJcbiAgICB2bS5CYWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbygnbWVudScpO1xyXG4gICAgfTtcclxufVxyXG4iLCJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzJylcclxuICAgIC5jb21wb25lbnQoJ2J5TGV2ZWxEcmF3Jywge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9ieS1sZXZlbC1kcmF3LmNvbXBvbmVudC5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiBieUxldmVsRHJhd0NvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgICAgIEJpbmRpbmc6ICc9JyxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG5ieUxldmVsRHJhd0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHN0YXRlJywgJ3Jlc3VsdFNlcnZpY2UnXTtcclxuXHJcbmZ1bmN0aW9uIGJ5TGV2ZWxEcmF3Q29udHJvbGxlcigkc3RhdGUsIHJlc3VsdFNlcnZpY2UpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICB2bS5uYW1lID0gXCLXlNeS16jXnCDXkdeZ158g16jXnteV16pcIjtcclxuICAgIHZtLkNvdW50UHJvID0gMDtcclxuICAgIHZtLkNvdW50QW1hdGV1ciA9IDA7XHJcbiAgICB2bS5QbGF5ZXJzUHJvID0gbnVsbDtcclxuICAgIHZtLlBsYXllcnNBbWF0ZXVyID0gbnVsbDtcclxuXHJcblxyXG4gICAgdm0uQWRkT25lUHJvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh2bS5Db3VudFBybyA9PSAwKSB7XHJcbiAgICAgICAgICAgIHZtLkNvdW50UHJvID0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodm0uQ291bnRQcm8gPCAxMCkge1xyXG4gICAgICAgICAgICB2bS5Db3VudFBybysrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdm0uUmVtb3ZlT25lUHJvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh2bS5Db3VudFBybyA+IDIpIHtcclxuICAgICAgICAgICAgdm0uQ291bnRQcm8tLTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZtLkFkZE9uZUFtYXRldXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHZtLkNvdW50QW1hdGV1ciA9PSAwKSB7XHJcbiAgICAgICAgICAgIHZtLkNvdW50QW1hdGV1ciA9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZtLkNvdW50QW1hdGV1ciA8IDEwKSB7XHJcbiAgICAgICAgICAgIHZtLkNvdW50QW1hdGV1cisrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdm0uUmVtb3ZlT25lQW1hdGV1ciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodm0uQ291bnRBbWF0ZXVyID4gMikge1xyXG4gICAgICAgICAgICB2bS5Db3VudEFtYXRldXItLTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZtLlN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodm0uQ291bnRQcm8gIT0gMCAmJiB2bS5Db3VudEFtYXRldXIgIT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzSW52YWxpZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdm0uUGxheWVyc1BybyA9IG5ldyBBcnJheShwYXJzZUludCh2bS5Db3VudFBybykpO1xyXG4gICAgICAgICAgICB2bS5QbGF5ZXJzQW1hdGV1ciA9IG5ldyBBcnJheShwYXJzZUludCh2bS5Db3VudEFtYXRldXIpKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bS5QbGF5ZXJzUHJvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2bS5QbGF5ZXJzUHJvW2ldID0geyBuYW1lOiBcIlwiIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHZtLlBsYXllcnNBbWF0ZXVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2bS5QbGF5ZXJzQW1hdGV1cltpXSA9IHsgbmFtZTogXCJcIiB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZtLlNob3dCdXR0b24gPSB0cnVlO1xyXG4gICAgICAgICAgICB2bS5Jc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZtLmlzSW52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2bS5TaHVmZmxlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgY291bnRlclBybyA9IDA7XHJcbiAgICAgICAgdmFyIGNvdW50ZXJBbWF0ZXVyID0gMDtcclxuICAgICAgICBpZiAodm0uUGxheWVyc1BybyAmJiB2bS5QbGF5ZXJzQW1hdGV1cikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLlBsYXllcnNQcm8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh2bS5QbGF5ZXJzUHJvW2ldLm5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQcm8rKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdm0uUGxheWVyc0FtYXRldXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh2bS5QbGF5ZXJzQW1hdGV1cltpXS5uYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyQW1hdGV1cisrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb3VudGVyUHJvID09IHZtLlBsYXllcnNQcm8ubGVuZ3RoICYmIGNvdW50ZXJBbWF0ZXVyID09IHZtLlBsYXllcnNBbWF0ZXVyLmxlbmd0aCkge1xyXG5cclxuICAgICAgICAgICAgcmVzdWx0U2VydmljZS5lbXB0eVJlc3VsdHMoKTtcclxuICAgICAgICAgICAgdmFyIGFyclBybyA9IHZtLnJhbmRvbWl6ZVJlc3VsdHModm0uUGxheWVyc1Bybyk7XHJcbiAgICAgICAgICAgIHZhciBhcnJBbWF0ZXVyID0gdm0ucmFuZG9taXplUmVzdWx0cyh2bS5QbGF5ZXJzQW1hdGV1cik7XHJcbiAgICAgICAgICAgIHdoaWxlIChhcnJQcm8ubGVuZ3RoICE9IDAgfHwgYXJyQW1hdGV1ci5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvdXBsZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyclByby5sZW5ndGggPT0gMSB8fCBhcnJBbWF0ZXVyLmxlbmd0aCA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJQcm8ubGVuZ3RoID09IDEgJiYgYXJyQW1hdGV1ci5sZW5ndGggPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZS5maXJzdCA9IGFyclByb1thcnJQcm8ubGVuZ3RoIC0gMV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLnNlY29uZCA9IGFyckFtYXRldXJbYXJyQW1hdGV1ci5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTZXJ2aWNlLnB1c2hSZXN1bHQoY291cGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyUHJvLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJBbWF0ZXVyLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYXJyUHJvLmxlbmd0aCA8PSAxICYmIGFyckFtYXRldXIubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZS5maXJzdCA9IGFyclByb1thcnJQcm8ubGVuZ3RoIC0gMV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLnNlY29uZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFNlcnZpY2UucHVzaFJlc3VsdChjb3VwbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJQcm8ucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFyclByby5sZW5ndGggPT0gMCAmJiBhcnJBbWF0ZXVyLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuZmlyc3QgPSBhcnJBbWF0ZXVyW2FyckFtYXRldXIubGVuZ3RoIC0gMV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLnNlY29uZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFNlcnZpY2UucHVzaFJlc3VsdChjb3VwbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJBbWF0ZXVyLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhcnJQcm8ubGVuZ3RoID4gMSAmJiBhcnJBbWF0ZXVyLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuZmlyc3QgPSBhcnJQcm9bYXJyUHJvLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZS5zZWNvbmQgPSBhcnJBbWF0ZXVyW2FyckFtYXRldXIubGVuZ3RoIC0gMV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U2VydmljZS5wdXNoUmVzdWx0KGNvdXBsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyclByby5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyQW1hdGV1ci5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYXJyUHJvLmxlbmd0aCA9PSAxICYmIGFyckFtYXRldXIubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLmZpcnN0ID0gYXJyUHJvW2FyclByby5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuc2Vjb25kID0gYXJyQW1hdGV1clthcnJBbWF0ZXVyLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFNlcnZpY2UucHVzaFJlc3VsdChjb3VwbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJQcm8ucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyckFtYXRldXIucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyclByby5sZW5ndGggPiAwICYmIGFyckFtYXRldXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLmZpcnN0ID0gYXJyUHJvW2FyclByby5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuc2Vjb25kID0gYXJyQW1hdGV1clthcnJBbWF0ZXVyLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFNlcnZpY2UucHVzaFJlc3VsdChjb3VwbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJQcm8ucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyckFtYXRldXIucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyUHJvLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyQW1hdGV1ci5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLmZpcnN0ID0gYXJyQW1hdGV1clthcnJBbWF0ZXVyLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLnNlY29uZCA9IGFyckFtYXRldXJbYXJyQW1hdGV1ci5sZW5ndGggLSAyXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFNlcnZpY2UucHVzaFJlc3VsdChjb3VwbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyckFtYXRldXIucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyQW1hdGV1ci5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZS5maXJzdCA9IGFyckFtYXRldXJbYXJyQW1hdGV1ci5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZS5zZWNvbmQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFNlcnZpY2UucHVzaFJlc3VsdChjb3VwbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyckFtYXRldXIucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYXJyQW1hdGV1ci5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyclByby5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLmZpcnN0ID0gYXJyUHJvW2FyclByby5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZS5zZWNvbmQgPSBhcnJQcm9bYXJyUHJvLmxlbmd0aCAtIDJdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U2VydmljZS5wdXNoUmVzdWx0KGNvdXBsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyUHJvLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclByby5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNjb3VwbGUgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuZmlyc3QgPSBhcnJQcm9bYXJyUHJvLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLnNlY29uZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U2VydmljZS5wdXNoUmVzdWx0KGNvdXBsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyUHJvLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ3Jlc3VsdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdm0uc2hvd1BsYXllcnNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2bS5yYW5kb21pemVSZXN1bHRzID0gZnVuY3Rpb24gKGFycmF5KSB7XHJcblxyXG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcclxuXHJcbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cclxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XHJcblxyXG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cclxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cclxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSBhcnJheVtjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICBhcnJheVtjdXJyZW50SW5kZXhdID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgICAgICBhcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH07XHJcbn1cclxuIiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cycpXHJcbiAgICAuY29tcG9uZW50KCdoZWxwJywge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9oZWxwLmNvbXBvbmVudC5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiBoZWxwQ29udHJvbGxlcixcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICAgICAgYmluZGluZ3M6IHtcclxuICAgICAgICAgICAgQmluZGluZzogJz0nLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbmZ1bmN0aW9uIGhlbHBDb250cm9sbGVyKCkge1xyXG4gICAgdmFyIHZtID0gdGhpcztcclxuICAgIHZtLm5hbWUgPSBcItei15bXqNeUXCI7XHJcbn1cclxuIiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnbWVudScpXHJcbiAgICAuY29tcG9uZW50KCdmaWZhTWVudScsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogbWVudUNvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgICAgIEJpbmRpbmc6ICc9JyxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbm1lbnVDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzdGF0ZSddO1xyXG5mdW5jdGlvbiBtZW51Q29udHJvbGxlcigkc3RhdGUpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICB2bS5uYW1lID0gXCLXnteZINeg15LXkyBNZT9cIjtcclxuXHJcbiAgICB2bS5Hb1RvU2ltcGxlRHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ3NpbXBsZURyYXcnKTtcclxuICAgIH07XHJcbiAgICB2bS5Hb1RvQnlMZXZlbERyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKCdieUxldmVsRHJhdycpO1xyXG4gICAgfTtcclxuICAgIHZtLkdvVG9IZWxwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbygnaGVscCcpO1xyXG4gICAgfTtcclxuICAgIHZtLkdvVG9BYm91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ2Fib3V0Jyk7XHJcbiAgICB9O1xyXG59XHJcbiIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMnKVxyXG4gICAgLmNvbXBvbmVudCgncmVzdWx0Jywge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9yZXN1bHQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IHJlc3VsdENvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICB9KTtcclxuXHJcbnJlc3VsdENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHN0YXRlJywgJ3Jlc3VsdFNlcnZpY2UnLCAnJHRpbWVvdXQnXTtcclxuXHJcbmZ1bmN0aW9uIHJlc3VsdENvbnRyb2xsZXIoJHN0YXRlLCByZXN1bHRTZXJ2aWNlLCAkdGltZW91dCkge1xyXG4gICAgaWYgKHJlc3VsdFNlcnZpY2UucmVzdWx0c0FyZU5vdEVtcHR5KCkgfHwgdHJ1ZSkge1xyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICAgICAgdm0ubmFtZSA9IFwi15XXlNeo15kg16rXldem15DXldeqXCI7XHJcbiAgICAgICAgdm0uY291cGxlcyA9IFtdO1xyXG5cclxuICAgICAgICB2bS4kb25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2bS5jb3VwbGVzID0gcmVzdWx0U2VydmljZS5nZXRSZXN1bHRzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2bS5jb3VwbGVzKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgICRzdGF0ZS5nbygnbWVudScpO1xyXG4gICAgfVxyXG59XHJcbiIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3Jlc3VsdCcpXHJcbiAgICAuc2VydmljZSgncmVzdWx0U2VydmljZScsIHJlc3VsdFNlcnZpY2UpO1xyXG5cclxucmVzdWx0U2VydmljZS4kaW5qZWN0ID0gWyckc3RhdGUnXTtcclxuXHJcbmZ1bmN0aW9uIHJlc3VsdFNlcnZpY2UoJHN0YXRlKSB7XHJcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJlc3VsdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwdXNoUmVzdWx0KHJlc3VsdCkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVtcHR5UmVzdWx0cygpIHtcclxuICAgICAgICByZXN1bHRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzdWx0c0FyZU5vdEVtcHR5KCkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHRzLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRSZXN1bHRzOiBnZXRSZXN1bHRzLFxyXG4gICAgICAgIHB1c2hSZXN1bHQ6IHB1c2hSZXN1bHQsXHJcbiAgICAgICAgZW1wdHlSZXN1bHRzOiBlbXB0eVJlc3VsdHMsXHJcbiAgICAgICAgcmVzdWx0c0FyZU5vdEVtcHR5OiByZXN1bHRzQXJlTm90RW1wdHlcclxuICAgIH07XHJcbn0iLCJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzJylcclxuICAgIC5jb21wb25lbnQoJ3NpbXBsZURyYXcnLCB7XHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3NpbXBsZS1kcmF3LmNvbXBvbmVudC5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiBzaW1wbGVEcmF3Q29udHJvbGxlcixcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICAgICAgYmluZGluZ3M6IHtcclxuICAgICAgICAgICAgQmluZGluZzogJz0nLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbnNpbXBsZURyYXdDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzdGF0ZScsICdyZXN1bHRTZXJ2aWNlJ107XHJcblxyXG5mdW5jdGlvbiBzaW1wbGVEcmF3Q29udHJvbGxlcigkc3RhdGUsIHJlc3VsdFNlcnZpY2UpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICB2bS5uYW1lID0gXCLXlNeS16jXnNeUINeo15LXmdec15RcIjtcclxuICAgIHZtLmlzSW52YWxpZCA9IGZhbHNlO1xyXG4gICAgdm0uQ291bnQgPSAwO1xyXG4gICAgdm0uU2hvd0J1dHRvbiA9IGZhbHNlO1xyXG4gICAgdm0uc2hvd1BsYXllcnNFcnJvciA9IGZhbHNlO1xyXG4gICAgdm0uUGxheWVycyA9IG51bGw7XHJcblxyXG5cclxuICAgIHZtLlN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodm0uQ291bnQgIT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzSW52YWxpZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdm0uUGxheWVycyA9IG5ldyBBcnJheShwYXJzZUludCh2bS5Db3VudCkpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLlBsYXllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZtLlBsYXllcnNbaV0gPSB7IG5hbWU6IFwiXCIgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2bS5TaG93QnV0dG9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZtLmlzSW52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2bS5BZGRPbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHZtLkNvdW50ID09IDApIHtcclxuICAgICAgICAgICAgdm0uQ291bnQgPSA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2bS5Db3VudCA8IDIwKSB7XHJcbiAgICAgICAgICAgIHZtLkNvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2bS5SZW1vdmVPbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHZtLkNvdW50ID4gNCkge1xyXG4gICAgICAgICAgICB2bS5Db3VudC0tO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdm0uU2h1ZmZsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIGlmICh2bS5QbGF5ZXJzKSB7XHJcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgdXNlciBpbnNlcnRlZCBuYW1lIGZvciBhbGwgcGxheWVyc1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLlBsYXllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh2bS5QbGF5ZXJzW2ldLm5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY291bnRlciA9PSB2bS5QbGF5ZXJzLmxlbmd0aCkge1xyXG5cclxuICAgICAgICAgICAgcmVzdWx0U2VydmljZS5lbXB0eVJlc3VsdHMoKTtcclxuICAgICAgICAgICAgdmFyIGFyciA9IHZtLnJhbmRvbWl6ZVJlc3VsdHModm0uUGxheWVycyk7XHJcbiAgICAgICAgICAgIHdoaWxlIChhcnIubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb3VwbGUgPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmIChhcnIubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VwbGUgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VwbGUuZmlyc3QgPSBhcnJbYXJyLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY291cGxlLnNlY29uZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0U2VydmljZS5wdXNoUmVzdWx0KGNvdXBsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291cGxlID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgY291cGxlLmZpcnN0ID0gYXJyW2Fyci5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdXBsZS5zZWNvbmQgPSBhcnJbYXJyLmxlbmd0aCAtIDJdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0U2VydmljZS5wdXNoUmVzdWx0KGNvdXBsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wb3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ3Jlc3VsdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdm0uc2hvd1BsYXllcnNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2bS5yYW5kb21pemVSZXN1bHRzID0gZnVuY3Rpb24gKGFycmF5KSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xyXG5cclxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxyXG4gICAgICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcclxuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXHJcbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XHJcblxyXG4gICAgICAgICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gYXJyYXlbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgYXJyYXlbY3VycmVudEluZGV4XSA9IGFycmF5W3JhbmRvbUluZGV4XTtcclxuICAgICAgICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH07XHJcbn1cclxuIiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnYXBwJylcclxuICAgIC5jb21wb25lbnQoJ2JhY2tCdXR0b24nLCB7XHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL2JhY2stYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiBiYWNrQnV0dG9uQ29udHJvbGxlcixcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgIH0pO1xyXG5iYWNrQnV0dG9uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc3RhdGUnXTtcclxuZnVuY3Rpb24gYmFja0J1dHRvbkNvbnRyb2xsZXIoJHN0YXRlKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgdm0uQmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ21lbnUnKTtcclxuICAgIH07XHJcbn1cclxuIl19
