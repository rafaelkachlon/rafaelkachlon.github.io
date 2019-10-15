angular
    .module('root', ['app'
    ])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/app');
    }]);
angular
    .module('app', [
        'templates',
        'components',
        'ngAnimate',
        'ui.router',
        'ngCookies'
    ])
    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider
            .state('app', {
                url: '/app',
                component: 'app',
                redirectTo: 'menu'
            });
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
$templateCache.put('./menu.component.html','<div class="text-center menu">\r\n    <div class="header menu-header">{{vm.name}}</div>\r\n    <div class="blur-bg bg-main">\r\n        <div class="menu-btn firstBtn heb" ng-click="vm.GoToSimpleDraw()">\u05D4\u05D2\u05E8\u05DC\u05D4 \u05E8\u05D2\u05D9\u05DC\u05D4</div>\r\n        <div class="menu-btn heb" ng-click="vm.GoToByLevelDraw()">\u05D4\u05D2\u05E8\u05DC\u05D4 \u05DC\u05E4\u05D9 \u05E8\u05DE\u05D4</div>\r\n        <div class="menu-btn heb" ng-click="vm.GoToHelp()">\u05E2\u05D6\u05E8\u05D4</div>\r\n        <div class="menu-btn heb" ng-click="vm.GoToAbout()">\u05D0\u05D5\u05D3\u05D5\u05EA</div>\r\n    </div>\r\n</div>');
$templateCache.put('./help.component.html','<div class="text-center help heb">\r\n  <h1 class="header">{{vm.name}}</h1>\r\n\r\n  <div class="button" ng-click="vm.simpleShow = !vm.simpleShow">\u05D4\u05D2\u05E8\u05DC\u05D4 \u05E8\u05D2\u05D9\u05DC\u05D4</div>\r\n  <div class="simple-draw-help" ng-init="vm.simpleShow = false" ng-show="vm.simpleShow">\r\n    <div class="help-cont center-block">\r\n      <p>1. \u05D1\u05D7\u05E8 \u05DE\u05E1\u05E4\u05E8 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D1\u05D8\u05D5\u05E8\u05E0\u05D9\u05E8 \u05D5\u05DC\u05D7\u05E5 "\u05D0\u05E9\u05E8"</p>\r\n      <img class="help-pic" src="./assets/images/sd1.jpg" alt="">\r\n    </div>\r\n    <div class="help-cont center-block">\r\n      <p>2. \u05D4\u05DB\u05E0\u05E1 \u05D0\u05EA \u05E9\u05DE\u05D5\u05EA \u05D4\u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D5\u05DC\u05D7\u05E5 "\u05D4\u05D2\u05E8\u05DC"</p>\r\n      <img class="help-pic" src="./assets/images/sd2.jpg" alt="">\r\n    </div>\r\n    <div class="help-cont center-block results">\r\n      <p>3. \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D4\u05D6\u05D5\u05D2\u05D5\u05EA \u05D9\u05D5\u05E4\u05D9\u05E2\u05D5 \u05D1\u05D6\u05D5 \u05D0\u05D7\u05E8 \u05D6\u05D5. \u05D4\u05EA\u05D7\u05D9\u05DC\u05D5 \u05DC\u05E9\u05D7\u05E7.</p>\r\n      <img class="help-pic" src="./assets/images/sd3.jpg" alt="">\r\n    </div>\r\n  </div>\r\n\r\n  <div class="button" ng-click="vm.byLevelShow = !vm.byLevelShow">\u05D4\u05D2\u05E8\u05DC\u05D4 \u05DC\u05E4\u05D9 \u05E8\u05DE\u05D4</div>\r\n  <div class="by-level-draw-help" ng-init="vm.byLevelShow = false" ng-show="vm.byLevelShow">\r\n    <div class="help-cont center-block by-level">\r\n      <p>1. \u05D1\u05D7\u05E8 \u05DE\u05E1\u05E4\u05E8 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D1\u05D8\u05D5\u05E8\u05E0\u05D9\u05E8, \u05DB\u05DE\u05D5\u05EA \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05DE\u05E7\u05E6\u05D5\u05E2\u05E0\u05D9\u05DD \u05D5\u05DB\u05DE\u05D5\u05EA \u05D7\u05D5\u05D1\u05D1\u05E0\u05D9\u05DD \u05D5\u05DC\u05D7\u05E5 "\u05D0\u05E9\u05E8"</p>\r\n      <img class="help-pic" src="./assets/images/bl1.jpg" alt="">\r\n    </div>\r\n    <div class="help-cont center-block by-level bl2">\r\n      <p>2. \u05D4\u05DB\u05E0\u05E1 \u05D0\u05EA \u05E9\u05DE\u05D5\u05EA \u05D4\u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05DC\u05E4\u05D9 \u05E8\u05DE\u05D4 \u05DB\u05DA \u05E9\u05DE\u05E7\u05E6\u05D5\u05E2\u05DF \u05DC\u05D0 \u05D9\u05D5\u05D2\u05E8\u05DC \u05E2\u05DD \u05DE\u05E7\u05E6\u05D5\u05E2\u05DF \u05D5\u05D7\u05D5\u05D1\u05D1\u05DF \u05DC\u05D0 \u05D9\u05D5\u05D2\u05E8\u05DC \u05E2\u05DD \u05D7\u05D5\u05D1\u05D1\u05DF \u05D5\u05DC\u05D7\u05E5 "\u05D4\u05D2\u05E8\u05DC"</p>\r\n      <img class="help-pic" src="./assets/images/bl2.jpg" alt="">\r\n    </div>\r\n    <div class="help-cont center-block results">\r\n      <p>3. \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D4\u05D6\u05D5\u05D2\u05D5\u05EA \u05D9\u05D5\u05E4\u05D9\u05E2\u05D5 \u05D1\u05D6\u05D5 \u05D0\u05D7\u05E8 \u05D6\u05D5, \u05DE\u05E7\u05E6\u05D5\u05E2\u05DF \u05E2\u05DD \u05D7\u05D5\u05D1\u05D1\u05DF \u05D1\u05DB\u05DC \u05E7\u05D1\u05D5\u05E6\u05D4. \u05D4\u05EA\u05D7\u05D9\u05DC\u05D5 \u05DC\u05E9\u05D7\u05E7.</p>\r\n      <img class="help-pic" src="./assets/images/bl3.jpg" alt="">\r\n    </div>\r\n  </div>\r\n  <back-button></back-button>\r\n</div>');
$templateCache.put('./about.component.html','<div class="text-center about heb">\r\n    <div class="blur-bg more-opacity">\r\n        <div class="header about-header">{{vm.name}}</div>\r\n        <p>\u05DB\u05DF, \u05D2\u05DD \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05E4\u05D9\u05E4\u05D0.</p>\r\n        <p>\u05D5\u05DB\u05DF, \u05D2\u05DD \u05D2\u05DD \u05DC\u05E0\u05D5 \u05E7\u05E8\u05D4 \u05E9\u05D9\u05E9\u05D1\u05E0\u05D5 \u05DB\u05DC \u05D4\u05D7\u05D1\u05E8\u05D9\u05DD \u05D5\u05D4\u05EA\u05D5\u05D5\u05DB\u05D7\u05E0\u05D5 \u05D3\u05E7\u05D5\u05EA \u05D0\u05E8\u05D5\u05DB\u05D5\u05EA \u05DE\u05D9 \u05E0\u05D2\u05D3 \u05DE\u05D9 \u05D5\u05D0\u05D9\u05DA \u05DC\u05D7\u05DC\u05E7 \u05D6\u05D5\u05D2\u05D5\u05EA.</p>\r\n        <p>\u05D5\u05DB\u05DF, \u05D2\u05DD \u05D0\u05E0\u05D7\u05E0\u05D5 \u05D1\u05E1\u05D5\u05E3 \u05D4\u05E1\u05EA\u05D5\u05D1\u05D1\u05E0\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E0\u05D9\u05D9\u05E8 \u05D5\u05E2\u05D8 \u05D5\u05D4\u05EA\u05D7\u05DC\u05E0\u05D5 \u05DB\u05DE\u05D5 \u05D1\u05E9\u05E0\u05D5\u05EA \u05D480 \u05DC\u05DB\u05EA\u05D5\u05D1 \u05E9\u05DE\u05D5\u05EA \u05D5\u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DC\u05E7\u05E8\u05D5\u05E2 \u05E4\u05EA\u05E7\u05D9\u05DD \u05D5\u05DC\u05D4\u05D2\u05E8\u05D9\u05DC \u05DE\u05DB\u05D5\u05D1\u05E2.</p>\r\n        <p>\u05DC\u05E0\u05D5 \u05DC\u05E7\u05D7 \u05D1\u05E1\u05D1\u05D9\u05D1\u05D5\u05EA \u05D4\u05E9\u05E2\u05D4 \u05E2\u05D3 \u05E9\u05D4\u05EA\u05D7\u05DC\u05E0\u05D5 \u05DC\u05E9\u05D7\u05E7, \u05D5\u05DC\u05DB\u05DD?</p>\r\n        <p>\u05D1\u05D3\u05D9\u05D5\u05E7 \u05D1\u05E9\u05D1\u05D9\u05DC \u05E9\u05DC\u05D0 \u05D9\u05E7\u05E8\u05D5 \u05DC\u05DB\u05DD \u05D4\u05E0\u05E1\u05D9\u05DD \u05D5\u05D4\u05E0\u05E4\u05DC\u05D0\u05D5\u05EA \u05D9\u05E6\u05E8\u05EA\u05D9 \u05D0\u05EA \u05D4\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05D4\u05E4\u05E9\u05D5\u05D8\u05D4 \u05D4\u05D6\u05D5.</p>\r\n        <p>\u05DC\u05D0 \u05E2\u05D5\u05D3 \u05E9\u05E2\u05D4 \u05E2\u05D3 \u05E9\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D7\u05E7, \u05D4\u05DB\u05DC \u05E8\u05E5 \u05DE\u05D4\u05E8 \u05DE\u05D0\u05D5\u05D3.</p>\r\n        <p>\u05D1\u05EA\u05E7\u05D5\u05D5\u05D4 \u05E9\u05EA\u05DE\u05E6\u05D0\u05D5 \u05D0\u05EA \u05D4\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05DE\u05D5\u05E2\u05D9\u05DC\u05D4.</p>\r\n        <p>\u05E8\u05E4\u05D0\u05DC</p>\r\n    </div>\r\n    <back-button></back-button>\r\n</div>');
$templateCache.put('./by-level-draw.component.html','<div class="text-center by-level-draw">\r\n  <div class="blur-bg more-opacity">\r\n    <h1 class="heb">{{vm.name}}</h1>\r\n    <p class="heb hm-players hm-players-levels">\u05DB\u05DE\u05D4 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD? <span>(4-20)</span></p>\r\n    <hr />\r\n    <form name="myForm" ng-submit="vm.Submit()">\r\n      <div class="heb">\u05DE\u05E7\u05E6\u05D5\u05E2\u05E0\u05D9\u05DD:</div>\r\n      <div class="inputButtons">\r\n        <div ng-click="vm.AddOnePro()" class="inputButtonsChild inputButtons"><span class="glyphicon glyphicon-plus plusMinus"></span></div>\r\n        <input ng-model="vm.CountPro" class="inputButtonsChild countInput heb" type="text" readonly required />\r\n        <div ng-click="vm.RemoveOnePro()" class="inputButtonsChild inputButtons"><span class="glyphicon glyphicon-minus plusMinus"></span></div>\r\n      </div>\r\n      <div class="heb">\u05D7\u05D5\u05D1\u05D1\u05E0\u05D9\u05DD:</div>\r\n      <div class="inputButtons">\r\n        <div ng-click="vm.AddOneAmateur()" class="inputButtonsChild inputButtons"><span class="glyphicon glyphicon-plus plusMinus"></span></div>\r\n        <input ng-model="vm.CountAmateur" class="inputButtonsChild countInput heb" type="text" readonly required />\r\n        <div ng-click="vm.RemoveOneAmateur()" class="inputButtonsChild inputButtons"><span class="glyphicon glyphicon-minus plusMinus"></span></div>\r\n      </div>\r\n      <input class="confirm-btn heb" type="submit" value="\u05D0\u05E9\u05E8" />\r\n      <div ng-show="vm.isInvalid" class="alert alert-danger">\u05D0\u05E0\u05D0 \u05D1\u05D7\u05E8 \u05DE\u05E1\u05E4\u05E8 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD (\u05DC\u05E4\u05D7\u05D5\u05EA 2 \u05DE\u05DB\u05DC \u05E7\u05D1\u05D5\u05E6\u05D4)</div>\r\n    </form>\r\n\r\n    <div class="namesInputs">\r\n      <p class="who-plays heb" ng-show="vm.ShowButton">\u05DE\u05D9 \u05DE\u05E9\u05D7\u05E7?</p>\r\n      <hr ng-show="vm.ShowButton" />\r\n      <div ng-show="vm.showPlayersError" class="alert alert-danger">\u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05E9\u05DE\u05D5\u05EA \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD</div>\r\n      <form>\r\n        <p class="heb" ng-show="vm.IsValid">\u05DE\u05E7\u05E6\u05D5\u05E2\u05E0\u05D9\u05DD</p>\r\n        <input class="playerInput" type="text" ng-model="p.name" ng-repeat="p in vm.PlayersPro" value="p.name" placeholder="\u05E9\u05D7\u05E7\u05DF {{$index+1}}"\r\n          required />\r\n        <br />\r\n        <p class="heb" ng-show="vm.IsValid">\u05D7\u05D5\u05D1\u05D1\u05E0\u05D9\u05DD</p>\r\n        <input class="playerInput" type="text" ng-model="p.name" ng-repeat="p in vm.PlayersAmateur" value="p.name" placeholder="\u05E9\u05D7\u05E7\u05DF {{$index+1}}"\r\n          required />\r\n        <br />\r\n        <input type="submit" class="confirm-btn heb draw" ng-show="vm.ShowButton" ng-click="vm.Shuffle()" value="\u05D4\u05D2\u05E8\u05DC">\r\n      </form>\r\n    </div>\r\n    <back-button></back-button>\r\n  </div>\r\n</div>');
$templateCache.put('./result.component.html','<div class="text-center result">\r\n    <div class="blur-bg more-opacity">\r\n        <div class="header heb">{{vm.name}}</div>\r\n        <div class="namesInputs">\r\n            <div ng-repeat="r in vm.couples" class="couples" style="-webkit-transition-delay:{{$index*1000}}ms">\r\n                <span ng-show="r.second ==null" class="glyphicon glyphicon-thumbs-down"></span>\r\n                <div class="name">{{r.first}}</div>\r\n                <div ng-show="r.second !=null" class="seperator">|</div>\r\n                <div ng-show="r.second !=null" class="name">{{r.second}}</div>\r\n                <span ng-show="r.second ==null" class="glyphicon glyphicon-thumbs-down"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <back-button></back-button>\r\n</div>');
$templateCache.put('./simple-draw.component.html','<div class="text-center simple-draw ">\r\n    <div class="blur-bg">\r\n        <p class="hmplayers heb">\u05DB\u05DE\u05D4 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD? <span>(4-20)</span></p>\r\n        <hr />\r\n\r\n        <form name="myForm" ng-submit="vm.Submit()">\r\n            <div class="inputButtons">\r\n                <div ng-click="vm.AddOne()" class="inputButtonsChild inputButtons"><span\r\n                        class="glyphicon glyphicon-plus plusMinus"></span></div>\r\n                <input ng-model="vm.Count" class="inputButtonsChild countInput heb" type="text" readonly required />\r\n                <div ng-click="vm.RemoveOne()" class="inputButtonsChild inputButtons"><span\r\n                        class="glyphicon glyphicon-minus plusMinus"></span></div>\r\n            </div>\r\n            <input class="confirm-btn heb" type="submit" value="\u05D0\u05E9\u05E8" />\r\n            <div ng-show="vm.isInvalid" class="alert alert-danger">\u05D0\u05E0\u05D0 \u05D1\u05D7\u05E8 \u05DE\u05E1\u05E4\u05E8 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD (\u05DC\u05E4\u05D7\u05D5\u05EA 4)</div>\r\n        </form>\r\n        <div class="namesInputs">\r\n            <p class="whoplays heb" ng-show="vm.ShowButton">\u05DE\u05D9 \u05DE\u05E9\u05D7\u05E7?</p>\r\n            <hr ng-show="vm.ShowButton" />\r\n\r\n            <form name="vm.playersForm" novalidate>\r\n                <input class="playerInput" type="text" ng-model="p.name" ng-repeat="p in vm.Players"\r\n                    name="player{{$index}}" placeholder="\u05E9\u05D7\u05E7\u05DF {{$index+1}}" required\r\n                    ng-class="{\'error\':vm.playersForm.player{{$index}}.$invalid && vm.playersForm.player{{$index}}.$invalid  && vm.submitted}" />\r\n                <br />\r\n                <div ng-show="vm.playersForm.$invalid && vm.submitted" class="alert alert-danger">\u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05E9\u05DE\u05D5\u05EA\r\n                    \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD</div>\r\n                <input type="submit" class="confirm-btn heb draw" ng-show="vm.Players.length>0"\r\n                    ng-click="vm.Shuffle();vm.submitted = true" value="\u05D4\u05D2\u05E8\u05DC">\r\n            </form>\r\n        </div>\r\n        <back-button></back-button>\r\n    </div>\r\n\r\n</div>');}]);
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
    .component('result', {
        templateUrl: './result.component.html',
        controller: resultController,
        controllerAs: 'vm'
    });

resultController.$inject = ['$state', 'resultService', '$timeout'];

function resultController($state, resultService, $timeout) {
    if (resultService.resultsAreNotEmpty()) {
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

simpleDrawController.$inject = ['$state', 'resultService', '$cookies'];

function simpleDrawController($state, resultService, $cookies) {
    var vm = this;
    vm.name = "הגרלה רגילה";
    vm.isInvalid = false;
    vm.Count = $cookies.getObject('count') ? $cookies.getObject('count') : 0;
    vm.ShowButton = false;
    vm.showPlayersError = false;
    vm.Players = $cookies.getObject('players');


    vm.Submit = function () {
        if (vm.Count != 0) {
            this.isInvalid = false;
            $cookies.remove('count');
            $cookies.remove('players');
            vm.Players = new Array(parseInt(vm.Count));
            for (var i = 0; i < vm.Players.length; i++) {
                vm.Players[i] = { name: null };
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
        if (vm.playersForm.$valid) {
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
                $cookies.putObject('count', vm.Count);
                $cookies.putObject('players', vm.Players);
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

        }
        else {
            console.log('invalid');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb290Lm1vZHVsZS5qcyIsImFwcC9jb21tb24vYXBwLm1vZHVsZS5qcyIsImFwcC9jb21wb25lbnRzL2NvbXBvbmVudHMubW9kdWxlLmpzIiwiYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQubW9kdWxlLmpzIiwiYXBwL2NvbXBvbmVudHMvaGVscC9oZWxwLm1vZHVsZS5qcyIsImFwcC9jb21wb25lbnRzL21lbnUvbWVudS5tb2R1bGUuanMiLCJhcHAvY29tcG9uZW50cy9ieS1sZXZlbC1kcmF3L2J5LWxldmVsLWRyYXcubW9kdWxlLmpzIiwiYXBwL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHQubW9kdWxlLmpzIiwiYXBwL2NvbXBvbmVudHMvc2ltcGxlLWRyYXcvc2ltcGxlLWRyYXcubW9kdWxlLmpzIiwidGVtcGxhdGVzLmpzIiwiYXBwL3Jvb3QuY29tcG9uZW50LmpzIiwiYXBwL2NvbW1vbi9hcHAuY29tcG9uZW50LmpzIiwiYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmpzIiwiYXBwL2NvbW1vbi9iYWNrLWJ1dHRvbi9iYWNrLWJ1dHRvbi5jb21wb25lbnQuanMiLCJhcHAvY29tcG9uZW50cy9oZWxwL2hlbHAuY29tcG9uZW50LmpzIiwiYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5qcyIsImFwcC9jb21wb25lbnRzL2J5LWxldmVsLWRyYXcvYnktbGV2ZWwtZHJhdy5jb21wb25lbnQuanMiLCJhcHAvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdC5jb21wb25lbnQuanMiLCJhcHAvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdC5zZXJ2aWNlLmpzIiwiYXBwL2NvbXBvbmVudHMvc2ltcGxlLWRyYXcvc2ltcGxlLWRyYXcuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdyb290JywgWydhcHAnXHJcbiAgICBdKVxyXG4gICAgLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAnKTtcclxuICAgIH0pOyIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2FwcCcsIFtcclxuICAgICAgICAndGVtcGxhdGVzJyxcclxuICAgICAgICAnY29tcG9uZW50cycsXHJcbiAgICAgICAgJ25nQW5pbWF0ZScsXHJcbiAgICAgICAgJ3VpLnJvdXRlcicsXHJcbiAgICAgICAgJ25nQ29va2llcydcclxuICAgIF0pXHJcbiAgICAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwcCcsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICdhcHAnLFxyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3RUbzogJ21lbnUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7IiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cycsIFtcclxuICAgICAgICAnbWVudScsXHJcbiAgICAgICAgJ3NpbXBsZURyYXcnLFxyXG4gICAgICAgICdieUxldmVsRHJhdycsXHJcbiAgICAgICAgJ2hlbHAnLFxyXG4gICAgICAgICdhYm91dCcsXHJcbiAgICAgICAgJ3Jlc3VsdCdcclxuICAgIF0pOyIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2Fib3V0JywgW1xyXG4gICAgICAgICd1aS5yb3V0ZXInXHJcbiAgICBdKVxyXG4gICAgLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnYWJvdXQnLCB7XHJcbiAgICAgICAgICAgIHVybDogJy9hYm91dCcsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ2Fib3V0J1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnaGVscCcsIFtcclxuICAgICAgICAndWkucm91dGVyJ1xyXG4gICAgXSlcclxuICAgIC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2hlbHAnLCB7XHJcbiAgICAgICAgICAgIHVybDogJy9oZWxwJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiAnaGVscCdcclxuICAgICAgICB9KTtcclxuICAgIH0pOyIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ21lbnUnLCBbXHJcbiAgICAgICAgJ3VpLnJvdXRlcidcclxuICAgIF0pXHJcbiAgICAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdtZW51Jywge1xyXG4gICAgICAgICAgICB1cmw6ICcvbWVudScsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ2ZpZmFNZW51J1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnYnlMZXZlbERyYXcnLCBbXHJcbiAgICAgICAgJ3VpLnJvdXRlcidcclxuICAgIF0pXHJcbiAgICAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdieUxldmVsRHJhdycsIHtcclxuICAgICAgICAgICAgdXJsOiAnL2J5TGV2ZWxEcmF3JyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiAnYnlMZXZlbERyYXcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsiLCJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdyZXN1bHQnLCBbXHJcbiAgICAgICAgJ3VpLnJvdXRlcidcclxuICAgIF0pXHJcbiAgICAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdyZXN1bHQnLCB7XHJcbiAgICAgICAgICAgIHVybDogJy9yZXN1bHQnLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6ICdyZXN1bHQnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsiLCJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdzaW1wbGVEcmF3JywgW1xyXG4gICAgICAgICd1aS5yb3V0ZXInXHJcbiAgICBdKVxyXG4gICAgLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnc2ltcGxlRHJhdycsIHtcclxuICAgICAgICAgICAgdXJsOiAnL3NpbXBsZURyYXcnLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6ICdzaW1wbGVEcmF3J1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ3RlbXBsYXRlcycsIFtdKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KCcuL3Jvb3QuY29tcG9uZW50Lmh0bWwnLCc8ZGl2IHN0eWxlPVwidHJhbnNmb3JtOiBzY2FsZSgxKTsgdHJhbnNmb3JtLW9yaWdpbjogMHB4IDBweCAwcHg7XCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUtZW11bGF0b3JcIj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XCJmcmFtZS1lbXVsYXRvclwiIGNsYXNzPVwiZnJhbWUtZW11bGF0b3IgZnJhbWUtc2Nyb2xsZXJcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm9vdFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzPVwibG9nb1wiPlxcclxcbiAgICAgICAgICAgICAgICA8dWktdmlldz48L3VpLXZpZXc+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+Jyk7XG4kdGVtcGxhdGVDYWNoZS5wdXQoJy4vYXBwLmNvbXBvbmVudC5odG1sJywnPGRpdiBjbGFzcz1cImFwcFwiPlxcclxcbiAgICA8ZGl2IHVpLXZpZXc+PC9kaXY+XFxyXFxuPC9kaXY+Jyk7XG4kdGVtcGxhdGVDYWNoZS5wdXQoJy4vYmFjay1idXR0b24uY29tcG9uZW50Lmh0bWwnLCc8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJhY2stYnRuIGhlYlwiIG5nLWNsaWNrPVwidm0uQmFjaygpXCI+XFx1MDVEN1xcdTA1RDZcXHUwNUU4XFx1MDVENCBcXHUwNURDXFx1MDVFQVxcdTA1RTRcXHUwNUU4XFx1MDVEOVxcdTA1RDg8L2J1dHRvbj4nKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dCgnLi9tZW51LmNvbXBvbmVudC5odG1sJywnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG1lbnVcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlciBtZW51LWhlYWRlclwiPnt7dm0ubmFtZX19PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJibHVyLWJnIGJnLW1haW5cIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWJ0biBmaXJzdEJ0biBoZWJcIiBuZy1jbGljaz1cInZtLkdvVG9TaW1wbGVEcmF3KClcIj5cXHUwNUQ0XFx1MDVEMlxcdTA1RThcXHUwNURDXFx1MDVENCBcXHUwNUU4XFx1MDVEMlxcdTA1RDlcXHUwNURDXFx1MDVENDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtYnRuIGhlYlwiIG5nLWNsaWNrPVwidm0uR29Ub0J5TGV2ZWxEcmF3KClcIj5cXHUwNUQ0XFx1MDVEMlxcdTA1RThcXHUwNURDXFx1MDVENCBcXHUwNURDXFx1MDVFNFxcdTA1RDkgXFx1MDVFOFxcdTA1REVcXHUwNUQ0PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1idG4gaGViXCIgbmctY2xpY2s9XCJ2bS5Hb1RvSGVscCgpXCI+XFx1MDVFMlxcdTA1RDZcXHUwNUU4XFx1MDVENDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtYnRuIGhlYlwiIG5nLWNsaWNrPVwidm0uR29Ub0Fib3V0KClcIj5cXHUwNUQwXFx1MDVENVxcdTA1RDNcXHUwNUQ1XFx1MDVFQTwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj4nKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dCgnLi9oZWxwLmNvbXBvbmVudC5odG1sJywnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGhlbHAgaGViXCI+XFxyXFxuICA8aDEgY2xhc3M9XCJoZWFkZXJcIj57e3ZtLm5hbWV9fTwvaDE+XFxyXFxuXFxyXFxuICA8ZGl2IGNsYXNzPVwiYnV0dG9uXCIgbmctY2xpY2s9XCJ2bS5zaW1wbGVTaG93ID0gIXZtLnNpbXBsZVNob3dcIj5cXHUwNUQ0XFx1MDVEMlxcdTA1RThcXHUwNURDXFx1MDVENCBcXHUwNUU4XFx1MDVEMlxcdTA1RDlcXHUwNURDXFx1MDVENDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cInNpbXBsZS1kcmF3LWhlbHBcIiBuZy1pbml0PVwidm0uc2ltcGxlU2hvdyA9IGZhbHNlXCIgbmctc2hvdz1cInZtLnNpbXBsZVNob3dcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImhlbHAtY29udCBjZW50ZXItYmxvY2tcIj5cXHJcXG4gICAgICA8cD4xLiBcXHUwNUQxXFx1MDVEN1xcdTA1RTggXFx1MDVERVxcdTA1RTFcXHUwNUU0XFx1MDVFOCBcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQgXFx1MDVENFxcdTA1REVcXHUwNUU5XFx1MDVFQVxcdTA1RUFcXHUwNUU0XFx1MDVEOVxcdTA1REQgXFx1MDVEMVxcdTA1RDhcXHUwNUQ1XFx1MDVFOFxcdTA1RTBcXHUwNUQ5XFx1MDVFOCBcXHUwNUQ1XFx1MDVEQ1xcdTA1RDdcXHUwNUU1IFwiXFx1MDVEMFxcdTA1RTlcXHUwNUU4XCI8L3A+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cImhlbHAtcGljXCIgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL3NkMS5qcGdcIiBhbHQ9XCJcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJoZWxwLWNvbnQgY2VudGVyLWJsb2NrXCI+XFxyXFxuICAgICAgPHA+Mi4gXFx1MDVENFxcdTA1REJcXHUwNUUwXFx1MDVFMSBcXHUwNUQwXFx1MDVFQSBcXHUwNUU5XFx1MDVERVxcdTA1RDVcXHUwNUVBIFxcdTA1RDRcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQgXFx1MDVENFxcdTA1REVcXHUwNUU5XFx1MDVFQVxcdTA1RUFcXHUwNUU0XFx1MDVEOVxcdTA1REQgXFx1MDVENVxcdTA1RENcXHUwNUQ3XFx1MDVFNSBcIlxcdTA1RDRcXHUwNUQyXFx1MDVFOFxcdTA1RENcIjwvcD5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVwiaGVscC1waWNcIiBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvc2QyLmpwZ1wiIGFsdD1cIlwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImhlbHAtY29udCBjZW50ZXItYmxvY2sgcmVzdWx0c1wiPlxcclxcbiAgICAgIDxwPjMuIFxcdTA1RUFcXHUwNUQ1XFx1MDVFNlxcdTA1RDBcXHUwNUQ1XFx1MDVFQSBcXHUwNUQ0XFx1MDVENlxcdTA1RDVcXHUwNUQyXFx1MDVENVxcdTA1RUEgXFx1MDVEOVxcdTA1RDVcXHUwNUU0XFx1MDVEOVxcdTA1RTJcXHUwNUQ1IFxcdTA1RDFcXHUwNUQ2XFx1MDVENSBcXHUwNUQwXFx1MDVEN1xcdTA1RTggXFx1MDVENlxcdTA1RDUuIFxcdTA1RDRcXHUwNUVBXFx1MDVEN1xcdTA1RDlcXHUwNURDXFx1MDVENSBcXHUwNURDXFx1MDVFOVxcdTA1RDdcXHUwNUU3LjwvcD5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVwiaGVscC1waWNcIiBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvc2QzLmpwZ1wiIGFsdD1cIlwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiAgPGRpdiBjbGFzcz1cImJ1dHRvblwiIG5nLWNsaWNrPVwidm0uYnlMZXZlbFNob3cgPSAhdm0uYnlMZXZlbFNob3dcIj5cXHUwNUQ0XFx1MDVEMlxcdTA1RThcXHUwNURDXFx1MDVENCBcXHUwNURDXFx1MDVFNFxcdTA1RDkgXFx1MDVFOFxcdTA1REVcXHUwNUQ0PC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVwiYnktbGV2ZWwtZHJhdy1oZWxwXCIgbmctaW5pdD1cInZtLmJ5TGV2ZWxTaG93ID0gZmFsc2VcIiBuZy1zaG93PVwidm0uYnlMZXZlbFNob3dcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImhlbHAtY29udCBjZW50ZXItYmxvY2sgYnktbGV2ZWxcIj5cXHJcXG4gICAgICA8cD4xLiBcXHUwNUQxXFx1MDVEN1xcdTA1RTggXFx1MDVERVxcdTA1RTFcXHUwNUU0XFx1MDVFOCBcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQgXFx1MDVENFxcdTA1REVcXHUwNUU5XFx1MDVFQVxcdTA1RUFcXHUwNUU0XFx1MDVEOVxcdTA1REQgXFx1MDVEMVxcdTA1RDhcXHUwNUQ1XFx1MDVFOFxcdTA1RTBcXHUwNUQ5XFx1MDVFOCwgXFx1MDVEQlxcdTA1REVcXHUwNUQ1XFx1MDVFQSBcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQgXFx1MDVERVxcdTA1RTdcXHUwNUU2XFx1MDVENVxcdTA1RTJcXHUwNUUwXFx1MDVEOVxcdTA1REQgXFx1MDVENVxcdTA1REJcXHUwNURFXFx1MDVENVxcdTA1RUEgXFx1MDVEN1xcdTA1RDVcXHUwNUQxXFx1MDVEMVxcdTA1RTBcXHUwNUQ5XFx1MDVERCBcXHUwNUQ1XFx1MDVEQ1xcdTA1RDdcXHUwNUU1IFwiXFx1MDVEMFxcdTA1RTlcXHUwNUU4XCI8L3A+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cImhlbHAtcGljXCIgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL2JsMS5qcGdcIiBhbHQ9XCJcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJoZWxwLWNvbnQgY2VudGVyLWJsb2NrIGJ5LWxldmVsIGJsMlwiPlxcclxcbiAgICAgIDxwPjIuIFxcdTA1RDRcXHUwNURCXFx1MDVFMFxcdTA1RTEgXFx1MDVEMFxcdTA1RUEgXFx1MDVFOVxcdTA1REVcXHUwNUQ1XFx1MDVFQSBcXHUwNUQ0XFx1MDVFOVxcdTA1RDdcXHUwNUU3XFx1MDVFMFxcdTA1RDlcXHUwNUREIFxcdTA1RDRcXHUwNURFXFx1MDVFOVxcdTA1RUFcXHUwNUVBXFx1MDVFNFxcdTA1RDlcXHUwNUREIFxcdTA1RENcXHUwNUU0XFx1MDVEOSBcXHUwNUU4XFx1MDVERVxcdTA1RDQgXFx1MDVEQlxcdTA1REEgXFx1MDVFOVxcdTA1REVcXHUwNUU3XFx1MDVFNlxcdTA1RDVcXHUwNUUyXFx1MDVERiBcXHUwNURDXFx1MDVEMCBcXHUwNUQ5XFx1MDVENVxcdTA1RDJcXHUwNUU4XFx1MDVEQyBcXHUwNUUyXFx1MDVERCBcXHUwNURFXFx1MDVFN1xcdTA1RTZcXHUwNUQ1XFx1MDVFMlxcdTA1REYgXFx1MDVENVxcdTA1RDdcXHUwNUQ1XFx1MDVEMVxcdTA1RDFcXHUwNURGIFxcdTA1RENcXHUwNUQwIFxcdTA1RDlcXHUwNUQ1XFx1MDVEMlxcdTA1RThcXHUwNURDIFxcdTA1RTJcXHUwNUREIFxcdTA1RDdcXHUwNUQ1XFx1MDVEMVxcdTA1RDFcXHUwNURGIFxcdTA1RDVcXHUwNURDXFx1MDVEN1xcdTA1RTUgXCJcXHUwNUQ0XFx1MDVEMlxcdTA1RThcXHUwNURDXCI8L3A+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cImhlbHAtcGljXCIgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL2JsMi5qcGdcIiBhbHQ9XCJcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJoZWxwLWNvbnQgY2VudGVyLWJsb2NrIHJlc3VsdHNcIj5cXHJcXG4gICAgICA8cD4zLiBcXHUwNUVBXFx1MDVENVxcdTA1RTZcXHUwNUQwXFx1MDVENVxcdTA1RUEgXFx1MDVENFxcdTA1RDZcXHUwNUQ1XFx1MDVEMlxcdTA1RDVcXHUwNUVBIFxcdTA1RDlcXHUwNUQ1XFx1MDVFNFxcdTA1RDlcXHUwNUUyXFx1MDVENSBcXHUwNUQxXFx1MDVENlxcdTA1RDUgXFx1MDVEMFxcdTA1RDdcXHUwNUU4IFxcdTA1RDZcXHUwNUQ1LCBcXHUwNURFXFx1MDVFN1xcdTA1RTZcXHUwNUQ1XFx1MDVFMlxcdTA1REYgXFx1MDVFMlxcdTA1REQgXFx1MDVEN1xcdTA1RDVcXHUwNUQxXFx1MDVEMVxcdTA1REYgXFx1MDVEMVxcdTA1REJcXHUwNURDIFxcdTA1RTdcXHUwNUQxXFx1MDVENVxcdTA1RTZcXHUwNUQ0LiBcXHUwNUQ0XFx1MDVFQVxcdTA1RDdcXHUwNUQ5XFx1MDVEQ1xcdTA1RDUgXFx1MDVEQ1xcdTA1RTlcXHUwNUQ3XFx1MDVFNy48L3A+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cImhlbHAtcGljXCIgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL2JsMy5qcGdcIiBhbHQ9XCJcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxiYWNrLWJ1dHRvbj48L2JhY2stYnV0dG9uPlxcclxcbjwvZGl2PicpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KCcuL2Fib3V0LmNvbXBvbmVudC5odG1sJywnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGFib3V0IGhlYlwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVwiYmx1ci1iZyBtb3JlLW9wYWNpdHlcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgYWJvdXQtaGVhZGVyXCI+e3t2bS5uYW1lfX08L2Rpdj5cXHJcXG4gICAgICAgIDxwPlxcdTA1REJcXHUwNURGLCBcXHUwNUQyXFx1MDVERCBcXHUwNUQwXFx1MDVFMFxcdTA1RDdcXHUwNUUwXFx1MDVENSBcXHUwNURFXFx1MDVFOVxcdTA1RDdcXHUwNUU3XFx1MDVEOVxcdTA1REQgXFx1MDVFNFxcdTA1RDlcXHUwNUU0XFx1MDVEMC48L3A+XFxyXFxuICAgICAgICA8cD5cXHUwNUQ1XFx1MDVEQlxcdTA1REYsIFxcdTA1RDJcXHUwNUREIFxcdTA1RDJcXHUwNUREIFxcdTA1RENcXHUwNUUwXFx1MDVENSBcXHUwNUU3XFx1MDVFOFxcdTA1RDQgXFx1MDVFOVxcdTA1RDlcXHUwNUU5XFx1MDVEMVxcdTA1RTBcXHUwNUQ1IFxcdTA1REJcXHUwNURDIFxcdTA1RDRcXHUwNUQ3XFx1MDVEMVxcdTA1RThcXHUwNUQ5XFx1MDVERCBcXHUwNUQ1XFx1MDVENFxcdTA1RUFcXHUwNUQ1XFx1MDVENVxcdTA1REJcXHUwNUQ3XFx1MDVFMFxcdTA1RDUgXFx1MDVEM1xcdTA1RTdcXHUwNUQ1XFx1MDVFQSBcXHUwNUQwXFx1MDVFOFxcdTA1RDVcXHUwNURCXFx1MDVENVxcdTA1RUEgXFx1MDVERVxcdTA1RDkgXFx1MDVFMFxcdTA1RDJcXHUwNUQzIFxcdTA1REVcXHUwNUQ5IFxcdTA1RDVcXHUwNUQwXFx1MDVEOVxcdTA1REEgXFx1MDVEQ1xcdTA1RDdcXHUwNURDXFx1MDVFNyBcXHUwNUQ2XFx1MDVENVxcdTA1RDJcXHUwNUQ1XFx1MDVFQS48L3A+XFxyXFxuICAgICAgICA8cD5cXHUwNUQ1XFx1MDVEQlxcdTA1REYsIFxcdTA1RDJcXHUwNUREIFxcdTA1RDBcXHUwNUUwXFx1MDVEN1xcdTA1RTBcXHUwNUQ1IFxcdTA1RDFcXHUwNUUxXFx1MDVENVxcdTA1RTMgXFx1MDVENFxcdTA1RTFcXHUwNUVBXFx1MDVENVxcdTA1RDFcXHUwNUQxXFx1MDVFMFxcdTA1RDUgXFx1MDVEQ1xcdTA1RDdcXHUwNUU0XFx1MDVFOSBcXHUwNUUwXFx1MDVEOVxcdTA1RDlcXHUwNUU4IFxcdTA1RDVcXHUwNUUyXFx1MDVEOCBcXHUwNUQ1XFx1MDVENFxcdTA1RUFcXHUwNUQ3XFx1MDVEQ1xcdTA1RTBcXHUwNUQ1IFxcdTA1REJcXHUwNURFXFx1MDVENSBcXHUwNUQxXFx1MDVFOVxcdTA1RTBcXHUwNUQ1XFx1MDVFQSBcXHUwNUQ0ODAgXFx1MDVEQ1xcdTA1REJcXHUwNUVBXFx1MDVENVxcdTA1RDEgXFx1MDVFOVxcdTA1REVcXHUwNUQ1XFx1MDVFQSBcXHUwNUQ1XFx1MDVEQ1xcdTA1RDRcXHUwNUVBXFx1MDVEN1xcdTA1RDlcXHUwNURDIFxcdTA1RENcXHUwNUU3XFx1MDVFOFxcdTA1RDVcXHUwNUUyIFxcdTA1RTRcXHUwNUVBXFx1MDVFN1xcdTA1RDlcXHUwNUREIFxcdTA1RDVcXHUwNURDXFx1MDVENFxcdTA1RDJcXHUwNUU4XFx1MDVEOVxcdTA1REMgXFx1MDVERVxcdTA1REJcXHUwNUQ1XFx1MDVEMVxcdTA1RTIuPC9wPlxcclxcbiAgICAgICAgPHA+XFx1MDVEQ1xcdTA1RTBcXHUwNUQ1IFxcdTA1RENcXHUwNUU3XFx1MDVENyBcXHUwNUQxXFx1MDVFMVxcdTA1RDFcXHUwNUQ5XFx1MDVEMVxcdTA1RDVcXHUwNUVBIFxcdTA1RDRcXHUwNUU5XFx1MDVFMlxcdTA1RDQgXFx1MDVFMlxcdTA1RDMgXFx1MDVFOVxcdTA1RDRcXHUwNUVBXFx1MDVEN1xcdTA1RENcXHUwNUUwXFx1MDVENSBcXHUwNURDXFx1MDVFOVxcdTA1RDdcXHUwNUU3LCBcXHUwNUQ1XFx1MDVEQ1xcdTA1REJcXHUwNUREPzwvcD5cXHJcXG4gICAgICAgIDxwPlxcdTA1RDFcXHUwNUQzXFx1MDVEOVxcdTA1RDVcXHUwNUU3IFxcdTA1RDFcXHUwNUU5XFx1MDVEMVxcdTA1RDlcXHUwNURDIFxcdTA1RTlcXHUwNURDXFx1MDVEMCBcXHUwNUQ5XFx1MDVFN1xcdTA1RThcXHUwNUQ1IFxcdTA1RENcXHUwNURCXFx1MDVERCBcXHUwNUQ0XFx1MDVFMFxcdTA1RTFcXHUwNUQ5XFx1MDVERCBcXHUwNUQ1XFx1MDVENFxcdTA1RTBcXHUwNUU0XFx1MDVEQ1xcdTA1RDBcXHUwNUQ1XFx1MDVFQSBcXHUwNUQ5XFx1MDVFNlxcdTA1RThcXHUwNUVBXFx1MDVEOSBcXHUwNUQwXFx1MDVFQSBcXHUwNUQ0XFx1MDVEMFxcdTA1RTRcXHUwNURDXFx1MDVEOVxcdTA1RTdcXHUwNUU2XFx1MDVEOVxcdTA1RDQgXFx1MDVENFxcdTA1RTRcXHUwNUU5XFx1MDVENVxcdTA1RDhcXHUwNUQ0IFxcdTA1RDRcXHUwNUQ2XFx1MDVENS48L3A+XFxyXFxuICAgICAgICA8cD5cXHUwNURDXFx1MDVEMCBcXHUwNUUyXFx1MDVENVxcdTA1RDMgXFx1MDVFOVxcdTA1RTJcXHUwNUQ0IFxcdTA1RTJcXHUwNUQzIFxcdTA1RTlcXHUwNURFXFx1MDVFQVxcdTA1RDdcXHUwNUQ5XFx1MDVEQ1xcdTA1RDlcXHUwNUREIFxcdTA1RENcXHUwNUU5XFx1MDVEN1xcdTA1RTcsIFxcdTA1RDRcXHUwNURCXFx1MDVEQyBcXHUwNUU4XFx1MDVFNSBcXHUwNURFXFx1MDVENFxcdTA1RTggXFx1MDVERVxcdTA1RDBcXHUwNUQ1XFx1MDVEMy48L3A+XFxyXFxuICAgICAgICA8cD5cXHUwNUQxXFx1MDVFQVxcdTA1RTdcXHUwNUQ1XFx1MDVENVxcdTA1RDQgXFx1MDVFOVxcdTA1RUFcXHUwNURFXFx1MDVFNlxcdTA1RDBcXHUwNUQ1IFxcdTA1RDBcXHUwNUVBIFxcdTA1RDRcXHUwNUQwXFx1MDVFNFxcdTA1RENcXHUwNUQ5XFx1MDVFN1xcdTA1RTZcXHUwNUQ5XFx1MDVENCBcXHUwNURFXFx1MDVENVxcdTA1RTJcXHUwNUQ5XFx1MDVEQ1xcdTA1RDQuPC9wPlxcclxcbiAgICAgICAgPHA+XFx1MDVFOFxcdTA1RTRcXHUwNUQwXFx1MDVEQzwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxiYWNrLWJ1dHRvbj48L2JhY2stYnV0dG9uPlxcclxcbjwvZGl2PicpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KCcuL2J5LWxldmVsLWRyYXcuY29tcG9uZW50Lmh0bWwnLCc8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgYnktbGV2ZWwtZHJhd1wiPlxcclxcbiAgPGRpdiBjbGFzcz1cImJsdXItYmcgbW9yZS1vcGFjaXR5XCI+XFxyXFxuICAgIDxoMSBjbGFzcz1cImhlYlwiPnt7dm0ubmFtZX19PC9oMT5cXHJcXG4gICAgPHAgY2xhc3M9XCJoZWIgaG0tcGxheWVycyBobS1wbGF5ZXJzLWxldmVsc1wiPlxcdTA1REJcXHUwNURFXFx1MDVENCBcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQ/IDxzcGFuPig0LTIwKTwvc3Bhbj48L3A+XFxyXFxuICAgIDxociAvPlxcclxcbiAgICA8Zm9ybSBuYW1lPVwibXlGb3JtXCIgbmctc3VibWl0PVwidm0uU3VibWl0KClcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVwiaGViXCI+XFx1MDVERVxcdTA1RTdcXHUwNUU2XFx1MDVENVxcdTA1RTJcXHUwNUUwXFx1MDVEOVxcdTA1REQ6PC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0QnV0dG9uc1wiPlxcclxcbiAgICAgICAgPGRpdiBuZy1jbGljaz1cInZtLkFkZE9uZVBybygpXCIgY2xhc3M9XCJpbnB1dEJ1dHRvbnNDaGlsZCBpbnB1dEJ1dHRvbnNcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1cyBwbHVzTWludXNcIj48L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICA8aW5wdXQgbmctbW9kZWw9XCJ2bS5Db3VudFByb1wiIGNsYXNzPVwiaW5wdXRCdXR0b25zQ2hpbGQgY291bnRJbnB1dCBoZWJcIiB0eXBlPVwidGV4dFwiIHJlYWRvbmx5IHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICA8ZGl2IG5nLWNsaWNrPVwidm0uUmVtb3ZlT25lUHJvKClcIiBjbGFzcz1cImlucHV0QnV0dG9uc0NoaWxkIGlucHV0QnV0dG9uc1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1taW51cyBwbHVzTWludXNcIj48L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cImhlYlwiPlxcdTA1RDdcXHUwNUQ1XFx1MDVEMVxcdTA1RDFcXHUwNUUwXFx1MDVEOVxcdTA1REQ6PC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0QnV0dG9uc1wiPlxcclxcbiAgICAgICAgPGRpdiBuZy1jbGljaz1cInZtLkFkZE9uZUFtYXRldXIoKVwiIGNsYXNzPVwiaW5wdXRCdXR0b25zQ2hpbGQgaW5wdXRCdXR0b25zXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXMgcGx1c01pbnVzXCI+PC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgPGlucHV0IG5nLW1vZGVsPVwidm0uQ291bnRBbWF0ZXVyXCIgY2xhc3M9XCJpbnB1dEJ1dHRvbnNDaGlsZCBjb3VudElucHV0IGhlYlwiIHR5cGU9XCJ0ZXh0XCIgcmVhZG9ubHkgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgIDxkaXYgbmctY2xpY2s9XCJ2bS5SZW1vdmVPbmVBbWF0ZXVyKClcIiBjbGFzcz1cImlucHV0QnV0dG9uc0NoaWxkIGlucHV0QnV0dG9uc1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1taW51cyBwbHVzTWludXNcIj48L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGlucHV0IGNsYXNzPVwiY29uZmlybS1idG4gaGViXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiXFx1MDVEMFxcdTA1RTlcXHUwNUU4XCIgLz5cXHJcXG4gICAgICA8ZGl2IG5nLXNob3c9XCJ2bS5pc0ludmFsaWRcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxcdTA1RDBcXHUwNUUwXFx1MDVEMCBcXHUwNUQxXFx1MDVEN1xcdTA1RTggXFx1MDVERVxcdTA1RTFcXHUwNUU0XFx1MDVFOCBcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQgKFxcdTA1RENcXHUwNUU0XFx1MDVEN1xcdTA1RDVcXHUwNUVBIDIgXFx1MDVERVxcdTA1REJcXHUwNURDIFxcdTA1RTdcXHUwNUQxXFx1MDVENVxcdTA1RTZcXHUwNUQ0KTwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XCJuYW1lc0lucHV0c1wiPlxcclxcbiAgICAgIDxwIGNsYXNzPVwid2hvLXBsYXlzIGhlYlwiIG5nLXNob3c9XCJ2bS5TaG93QnV0dG9uXCI+XFx1MDVERVxcdTA1RDkgXFx1MDVERVxcdTA1RTlcXHUwNUQ3XFx1MDVFNz88L3A+XFxyXFxuICAgICAgPGhyIG5nLXNob3c9XCJ2bS5TaG93QnV0dG9uXCIgLz5cXHJcXG4gICAgICA8ZGl2IG5nLXNob3c9XCJ2bS5zaG93UGxheWVyc0Vycm9yXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cXHUwNUQ3XFx1MDVENVxcdTA1RDFcXHUwNUQ0IFxcdTA1RENcXHUwNUQ0XFx1MDVEQlxcdTA1RTBcXHUwNUQ5XFx1MDVFMSBcXHUwNUU5XFx1MDVERVxcdTA1RDVcXHUwNUVBIFxcdTA1RTlcXHUwNUQ3XFx1MDVFN1xcdTA1RTBcXHUwNUQ5XFx1MDVERDwvZGl2PlxcclxcbiAgICAgIDxmb3JtPlxcclxcbiAgICAgICAgPHAgY2xhc3M9XCJoZWJcIiBuZy1zaG93PVwidm0uSXNWYWxpZFwiPlxcdTA1REVcXHUwNUU3XFx1MDVFNlxcdTA1RDVcXHUwNUUyXFx1MDVFMFxcdTA1RDlcXHUwNUREPC9wPlxcclxcbiAgICAgICAgPGlucHV0IGNsYXNzPVwicGxheWVySW5wdXRcIiB0eXBlPVwidGV4dFwiIG5nLW1vZGVsPVwicC5uYW1lXCIgbmctcmVwZWF0PVwicCBpbiB2bS5QbGF5ZXJzUHJvXCIgdmFsdWU9XCJwLm5hbWVcIiBwbGFjZWhvbGRlcj1cIlxcdTA1RTlcXHUwNUQ3XFx1MDVFN1xcdTA1REYge3skaW5kZXgrMX19XCJcXHJcXG4gICAgICAgICAgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgIDxiciAvPlxcclxcbiAgICAgICAgPHAgY2xhc3M9XCJoZWJcIiBuZy1zaG93PVwidm0uSXNWYWxpZFwiPlxcdTA1RDdcXHUwNUQ1XFx1MDVEMVxcdTA1RDFcXHUwNUUwXFx1MDVEOVxcdTA1REQ8L3A+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJwbGF5ZXJJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmctbW9kZWw9XCJwLm5hbWVcIiBuZy1yZXBlYXQ9XCJwIGluIHZtLlBsYXllcnNBbWF0ZXVyXCIgdmFsdWU9XCJwLm5hbWVcIiBwbGFjZWhvbGRlcj1cIlxcdTA1RTlcXHUwNUQ3XFx1MDVFN1xcdTA1REYge3skaW5kZXgrMX19XCJcXHJcXG4gICAgICAgICAgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgIDxiciAvPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImNvbmZpcm0tYnRuIGhlYiBkcmF3XCIgbmctc2hvdz1cInZtLlNob3dCdXR0b25cIiBuZy1jbGljaz1cInZtLlNodWZmbGUoKVwiIHZhbHVlPVwiXFx1MDVENFxcdTA1RDJcXHUwNUU4XFx1MDVEQ1wiPlxcclxcbiAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxiYWNrLWJ1dHRvbj48L2JhY2stYnV0dG9uPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+Jyk7XG4kdGVtcGxhdGVDYWNoZS5wdXQoJy4vcmVzdWx0LmNvbXBvbmVudC5odG1sJywnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHJlc3VsdFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVwiYmx1ci1iZyBtb3JlLW9wYWNpdHlcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgaGViXCI+e3t2bS5uYW1lfX08L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lc0lucHV0c1wiPlxcclxcbiAgICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwiciBpbiB2bS5jb3VwbGVzXCIgY2xhc3M9XCJjb3VwbGVzXCIgc3R5bGU9XCItd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6e3skaW5kZXgqMTAwMH19bXNcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cInIuc2Vjb25kID09bnVsbFwiIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtZG93blwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj57e3IuZmlyc3R9fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IG5nLXNob3c9XCJyLnNlY29uZCAhPW51bGxcIiBjbGFzcz1cInNlcGVyYXRvclwiPnw8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBuZy1zaG93PVwici5zZWNvbmQgIT1udWxsXCIgY2xhc3M9XCJuYW1lXCI+e3tyLnNlY29uZH19PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XCJyLnNlY29uZCA9PW51bGxcIiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLWRvd25cIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxiYWNrLWJ1dHRvbj48L2JhY2stYnV0dG9uPlxcclxcbjwvZGl2PicpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KCcuL3NpbXBsZS1kcmF3LmNvbXBvbmVudC5odG1sJywnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHNpbXBsZS1kcmF3IFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVwiYmx1ci1iZ1wiPlxcclxcbiAgICAgICAgPHAgY2xhc3M9XCJobXBsYXllcnMgaGViXCI+XFx1MDVEQlxcdTA1REVcXHUwNUQ0IFxcdTA1RTlcXHUwNUQ3XFx1MDVFN1xcdTA1RTBcXHUwNUQ5XFx1MDVERD8gPHNwYW4+KDQtMjApPC9zcGFuPjwvcD5cXHJcXG4gICAgICAgIDxociAvPlxcclxcblxcclxcbiAgICAgICAgPGZvcm0gbmFtZT1cIm15Rm9ybVwiIG5nLXN1Ym1pdD1cInZtLlN1Ym1pdCgpXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0QnV0dG9uc1wiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IG5nLWNsaWNrPVwidm0uQWRkT25lKClcIiBjbGFzcz1cImlucHV0QnV0dG9uc0NoaWxkIGlucHV0QnV0dG9uc1wiPjxzcGFuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXMgcGx1c01pbnVzXCI+PC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmctbW9kZWw9XCJ2bS5Db3VudFwiIGNsYXNzPVwiaW5wdXRCdXR0b25zQ2hpbGQgY291bnRJbnB1dCBoZWJcIiB0eXBlPVwidGV4dFwiIHJlYWRvbmx5IHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgbmctY2xpY2s9XCJ2bS5SZW1vdmVPbmUoKVwiIGNsYXNzPVwiaW5wdXRCdXR0b25zQ2hpbGQgaW5wdXRCdXR0b25zXCI+PHNwYW5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbWludXMgcGx1c01pbnVzXCI+PC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImNvbmZpcm0tYnRuIGhlYlwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlxcdTA1RDBcXHUwNUU5XFx1MDVFOFwiIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiBuZy1zaG93PVwidm0uaXNJbnZhbGlkXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cXHUwNUQwXFx1MDVFMFxcdTA1RDAgXFx1MDVEMVxcdTA1RDdcXHUwNUU4IFxcdTA1REVcXHUwNUUxXFx1MDVFNFxcdTA1RTggXFx1MDVFOVxcdTA1RDdcXHUwNUU3XFx1MDVFMFxcdTA1RDlcXHUwNUREIChcXHUwNURDXFx1MDVFNFxcdTA1RDdcXHUwNUQ1XFx1MDVFQSA0KTwvZGl2PlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVzSW5wdXRzXCI+XFxyXFxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ3aG9wbGF5cyBoZWJcIiBuZy1zaG93PVwidm0uU2hvd0J1dHRvblwiPlxcdTA1REVcXHUwNUQ5IFxcdTA1REVcXHUwNUU5XFx1MDVEN1xcdTA1RTc/PC9wPlxcclxcbiAgICAgICAgICAgIDxociBuZy1zaG93PVwidm0uU2hvd0J1dHRvblwiIC8+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGZvcm0gbmFtZT1cInZtLnBsYXllcnNGb3JtXCIgbm92YWxpZGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicGxheWVySW5wdXRcIiB0eXBlPVwidGV4dFwiIG5nLW1vZGVsPVwicC5uYW1lXCIgbmctcmVwZWF0PVwicCBpbiB2bS5QbGF5ZXJzXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwbGF5ZXJ7eyRpbmRleH19XCIgcGxhY2Vob2xkZXI9XCJcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNURGIHt7JGluZGV4KzF9fVwiIHJlcXVpcmVkXFxyXFxuICAgICAgICAgICAgICAgICAgICBuZy1jbGFzcz1cIntcXCdlcnJvclxcJzp2bS5wbGF5ZXJzRm9ybS5wbGF5ZXJ7eyRpbmRleH19LiRpbnZhbGlkICYmIHZtLnBsYXllcnNGb3JtLnBsYXllcnt7JGluZGV4fX0uJGludmFsaWQgICYmIHZtLnN1Ym1pdHRlZH1cIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8YnIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBuZy1zaG93PVwidm0ucGxheWVyc0Zvcm0uJGludmFsaWQgJiYgdm0uc3VibWl0dGVkXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cXHUwNUQ3XFx1MDVENVxcdTA1RDFcXHUwNUQ0IFxcdTA1RENcXHUwNUQ0XFx1MDVEQlxcdTA1RTBcXHUwNUQ5XFx1MDVFMSBcXHUwNUU5XFx1MDVERVxcdTA1RDVcXHUwNUVBXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQ8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImNvbmZpcm0tYnRuIGhlYiBkcmF3XCIgbmctc2hvdz1cInZtLlBsYXllcnMubGVuZ3RoPjBcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XCJ2bS5TaHVmZmxlKCk7dm0uc3VibWl0dGVkID0gdHJ1ZVwiIHZhbHVlPVwiXFx1MDVENFxcdTA1RDJcXHUwNUU4XFx1MDVEQ1wiPlxcclxcbiAgICAgICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGJhY2stYnV0dG9uPjwvYmFjay1idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvZGl2PicpO31dKTsiLCJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdyb290JylcclxuICAgIC5jb21wb25lbnQoJ3Jvb3QnLCB7XHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3Jvb3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IHJvb3RDb250cm9sbGVyLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgICAgICBiaW5kaW5nczoge1xyXG4gICAgICAgICAgICBCaW5kaW5nOiAnPScsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuZnVuY3Rpb24gcm9vdENvbnRyb2xsZXIoKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG59XHJcbiIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2FwcCcpXHJcbiAgICAuY29tcG9uZW50KCdhcHAnLCB7XHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogYXBwQ29udHJvbGxlcixcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICB9KTtcclxuXHJcbmZ1bmN0aW9uIGFwcENvbnRyb2xsZXIoKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG59XHJcbiIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMnKVxyXG4gICAgLmNvbXBvbmVudCgnYWJvdXQnLCB7XHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL2Fib3V0LmNvbXBvbmVudC5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiBhYm91dENvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICB9KTtcclxuYWJvdXRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzdGF0ZSddO1xyXG5mdW5jdGlvbiBhYm91dENvbnRyb2xsZXIoJHN0YXRlKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgdm0ubmFtZSA9IFwi15DXldeT15XXqlwiO1xyXG4gICAgdm0uQmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ21lbnUnKTtcclxuICAgIH07XHJcbn1cclxuIiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnYXBwJylcclxuICAgIC5jb21wb25lbnQoJ2JhY2tCdXR0b24nLCB7XHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL2JhY2stYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiBiYWNrQnV0dG9uQ29udHJvbGxlcixcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgIH0pO1xyXG5iYWNrQnV0dG9uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc3RhdGUnXTtcclxuZnVuY3Rpb24gYmFja0J1dHRvbkNvbnRyb2xsZXIoJHN0YXRlKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgdm0uQmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ21lbnUnKTtcclxuICAgIH07XHJcbn1cclxuIiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cycpXHJcbiAgICAuY29tcG9uZW50KCdoZWxwJywge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9oZWxwLmNvbXBvbmVudC5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiBoZWxwQ29udHJvbGxlcixcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICAgICAgYmluZGluZ3M6IHtcclxuICAgICAgICAgICAgQmluZGluZzogJz0nLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbmZ1bmN0aW9uIGhlbHBDb250cm9sbGVyKCkge1xyXG4gICAgdmFyIHZtID0gdGhpcztcclxuICAgIHZtLm5hbWUgPSBcItei15bXqNeUXCI7XHJcbn1cclxuIiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnbWVudScpXHJcbiAgICAuY29tcG9uZW50KCdmaWZhTWVudScsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogbWVudUNvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgICAgIEJpbmRpbmc6ICc9JyxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbm1lbnVDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzdGF0ZSddO1xyXG5mdW5jdGlvbiBtZW51Q29udHJvbGxlcigkc3RhdGUpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICB2bS5uYW1lID0gXCLXnteZINeg15LXkyBNZT9cIjtcclxuXHJcbiAgICB2bS5Hb1RvU2ltcGxlRHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ3NpbXBsZURyYXcnKTtcclxuICAgIH07XHJcbiAgICB2bS5Hb1RvQnlMZXZlbERyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKCdieUxldmVsRHJhdycpO1xyXG4gICAgfTtcclxuICAgIHZtLkdvVG9IZWxwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbygnaGVscCcpO1xyXG4gICAgfTtcclxuICAgIHZtLkdvVG9BYm91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ2Fib3V0Jyk7XHJcbiAgICB9O1xyXG59XHJcbiIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMnKVxyXG4gICAgLmNvbXBvbmVudCgnYnlMZXZlbERyYXcnLCB7XHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL2J5LWxldmVsLWRyYXcuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IGJ5TGV2ZWxEcmF3Q29udHJvbGxlcixcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICAgICAgYmluZGluZ3M6IHtcclxuICAgICAgICAgICAgQmluZGluZzogJz0nLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbmJ5TGV2ZWxEcmF3Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc3RhdGUnLCAncmVzdWx0U2VydmljZSddO1xyXG5cclxuZnVuY3Rpb24gYnlMZXZlbERyYXdDb250cm9sbGVyKCRzdGF0ZSwgcmVzdWx0U2VydmljZSkge1xyXG4gICAgdmFyIHZtID0gdGhpcztcclxuICAgIHZtLm5hbWUgPSBcIteU15LXqNecINeR15nXnyDXqNee15XXqlwiO1xyXG4gICAgdm0uQ291bnRQcm8gPSAwO1xyXG4gICAgdm0uQ291bnRBbWF0ZXVyID0gMDtcclxuICAgIHZtLlBsYXllcnNQcm8gPSBudWxsO1xyXG4gICAgdm0uUGxheWVyc0FtYXRldXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICB2bS5BZGRPbmVQcm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHZtLkNvdW50UHJvID09IDApIHtcclxuICAgICAgICAgICAgdm0uQ291bnRQcm8gPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2bS5Db3VudFBybyA8IDEwKSB7XHJcbiAgICAgICAgICAgIHZtLkNvdW50UHJvKys7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2bS5SZW1vdmVPbmVQcm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHZtLkNvdW50UHJvID4gMikge1xyXG4gICAgICAgICAgICB2bS5Db3VudFByby0tO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdm0uQWRkT25lQW1hdGV1ciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodm0uQ291bnRBbWF0ZXVyID09IDApIHtcclxuICAgICAgICAgICAgdm0uQ291bnRBbWF0ZXVyID0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodm0uQ291bnRBbWF0ZXVyIDwgMTApIHtcclxuICAgICAgICAgICAgdm0uQ291bnRBbWF0ZXVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2bS5SZW1vdmVPbmVBbWF0ZXVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh2bS5Db3VudEFtYXRldXIgPiAyKSB7XHJcbiAgICAgICAgICAgIHZtLkNvdW50QW1hdGV1ci0tO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdm0uU3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh2bS5Db3VudFBybyAhPSAwICYmIHZtLkNvdW50QW1hdGV1ciAhPSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNJbnZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB2bS5QbGF5ZXJzUHJvID0gbmV3IEFycmF5KHBhcnNlSW50KHZtLkNvdW50UHJvKSk7XHJcbiAgICAgICAgICAgIHZtLlBsYXllcnNBbWF0ZXVyID0gbmV3IEFycmF5KHBhcnNlSW50KHZtLkNvdW50QW1hdGV1cikpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLlBsYXllcnNQcm8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZtLlBsYXllcnNQcm9baV0gPSB7IG5hbWU6IFwiXCIgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdm0uUGxheWVyc0FtYXRldXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZtLlBsYXllcnNBbWF0ZXVyW2ldID0geyBuYW1lOiBcIlwiIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdm0uU2hvd0J1dHRvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHZtLklzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdm0uaXNJbnZhbGlkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZtLlNodWZmbGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciBjb3VudGVyUHJvID0gMDtcclxuICAgICAgICB2YXIgY291bnRlckFtYXRldXIgPSAwO1xyXG4gICAgICAgIGlmICh2bS5QbGF5ZXJzUHJvICYmIHZtLlBsYXllcnNBbWF0ZXVyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uUGxheWVyc1Byby5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZtLlBsYXllcnNQcm9baV0ubmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBybysrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB2bS5QbGF5ZXJzQW1hdGV1ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZtLlBsYXllcnNBbWF0ZXVyW2ldLm5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJBbWF0ZXVyKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvdW50ZXJQcm8gPT0gdm0uUGxheWVyc1Byby5sZW5ndGggJiYgY291bnRlckFtYXRldXIgPT0gdm0uUGxheWVyc0FtYXRldXIubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICByZXN1bHRTZXJ2aWNlLmVtcHR5UmVzdWx0cygpO1xyXG4gICAgICAgICAgICB2YXIgYXJyUHJvID0gdm0ucmFuZG9taXplUmVzdWx0cyh2bS5QbGF5ZXJzUHJvKTtcclxuICAgICAgICAgICAgdmFyIGFyckFtYXRldXIgPSB2bS5yYW5kb21pemVSZXN1bHRzKHZtLlBsYXllcnNBbWF0ZXVyKTtcclxuICAgICAgICAgICAgd2hpbGUgKGFyclByby5sZW5ndGggIT0gMCB8fCBhcnJBbWF0ZXVyLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY291cGxlID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyUHJvLmxlbmd0aCA9PSAxIHx8IGFyckFtYXRldXIubGVuZ3RoID09IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyclByby5sZW5ndGggPT0gMSAmJiBhcnJBbWF0ZXVyLmxlbmd0aCA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLmZpcnN0ID0gYXJyUHJvW2FyclByby5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuc2Vjb25kID0gYXJyQW1hdGV1clthcnJBbWF0ZXVyLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFNlcnZpY2UucHVzaFJlc3VsdChjb3VwbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJQcm8ucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyckFtYXRldXIucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhcnJQcm8ubGVuZ3RoIDw9IDEgJiYgYXJyQW1hdGV1ci5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLmZpcnN0ID0gYXJyUHJvW2FyclByby5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuc2Vjb25kID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U2VydmljZS5wdXNoUmVzdWx0KGNvdXBsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyclByby5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYXJyUHJvLmxlbmd0aCA9PSAwICYmIGFyckFtYXRldXIubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZS5maXJzdCA9IGFyckFtYXRldXJbYXJyQW1hdGV1ci5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuc2Vjb25kID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U2VydmljZS5wdXNoUmVzdWx0KGNvdXBsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyckFtYXRldXIucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFyclByby5sZW5ndGggPiAxICYmIGFyckFtYXRldXIubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZS5maXJzdCA9IGFyclByb1thcnJQcm8ubGVuZ3RoIC0gMV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLnNlY29uZCA9IGFyckFtYXRldXJbYXJyQW1hdGV1ci5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTZXJ2aWNlLnB1c2hSZXN1bHQoY291cGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyUHJvLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJBbWF0ZXVyLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhcnJQcm8ubGVuZ3RoID09IDEgJiYgYXJyQW1hdGV1ci5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuZmlyc3QgPSBhcnJQcm9bYXJyUHJvLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZS5zZWNvbmQgPSBhcnJBbWF0ZXVyW2FyckFtYXRldXIubGVuZ3RoIC0gMV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U2VydmljZS5wdXNoUmVzdWx0KGNvdXBsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyclByby5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyQW1hdGV1ci5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyUHJvLmxlbmd0aCA+IDAgJiYgYXJyQW1hdGV1ci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuZmlyc3QgPSBhcnJQcm9bYXJyUHJvLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZS5zZWNvbmQgPSBhcnJBbWF0ZXVyW2FyckFtYXRldXIubGVuZ3RoIC0gMV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U2VydmljZS5wdXNoUmVzdWx0KGNvdXBsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyclByby5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyQW1hdGV1ci5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJQcm8ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJBbWF0ZXVyLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuZmlyc3QgPSBhcnJBbWF0ZXVyW2FyckFtYXRldXIubGVuZ3RoIC0gMV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuc2Vjb25kID0gYXJyQW1hdGV1clthcnJBbWF0ZXVyLmxlbmd0aCAtIDJdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U2VydmljZS5wdXNoUmVzdWx0KGNvdXBsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyQW1hdGV1ci5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJBbWF0ZXVyLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLmZpcnN0ID0gYXJyQW1hdGV1clthcnJBbWF0ZXVyLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLnNlY29uZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U2VydmljZS5wdXNoUmVzdWx0KGNvdXBsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyQW1hdGV1ci5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhcnJBbWF0ZXVyLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyUHJvLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuZmlyc3QgPSBhcnJQcm9bYXJyUHJvLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLnNlY29uZCA9IGFyclByb1thcnJQcm8ubGVuZ3RoIC0gMl0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTZXJ2aWNlLnB1c2hSZXN1bHQoY291cGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJQcm8ucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyUHJvLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2NvdXBsZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZS5maXJzdCA9IGFyclByb1thcnJQcm8ubGVuZ3RoIC0gMV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuc2Vjb25kID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTZXJ2aWNlLnB1c2hSZXN1bHQoY291cGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJQcm8ucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygncmVzdWx0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2bS5zaG93UGxheWVyc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZtLnJhbmRvbWl6ZVJlc3VsdHMgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xyXG5cclxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxyXG4gICAgICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxyXG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xyXG5cclxuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgICAgIGFycmF5W2N1cnJlbnRJbmRleF0gPSBhcnJheVtyYW5kb21JbmRleF07XHJcbiAgICAgICAgICAgIGFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfTtcclxufVxyXG4iLCJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzJylcclxuICAgIC5jb21wb25lbnQoJ3Jlc3VsdCcsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vcmVzdWx0LmNvbXBvbmVudC5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiByZXN1bHRDb250cm9sbGVyLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gICAgfSk7XHJcblxyXG5yZXN1bHRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzdGF0ZScsICdyZXN1bHRTZXJ2aWNlJywgJyR0aW1lb3V0J107XHJcblxyXG5mdW5jdGlvbiByZXN1bHRDb250cm9sbGVyKCRzdGF0ZSwgcmVzdWx0U2VydmljZSwgJHRpbWVvdXQpIHtcclxuICAgIGlmIChyZXN1bHRTZXJ2aWNlLnJlc3VsdHNBcmVOb3RFbXB0eSgpKSB7XHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICB2bS5uYW1lID0gXCLXldeU16jXmSDXqteV16bXkNeV16pcIjtcclxuICAgICAgICB2bS5jb3VwbGVzID0gW107XHJcblxyXG4gICAgICAgIHZtLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZtLmNvdXBsZXMgPSByZXN1bHRTZXJ2aWNlLmdldFJlc3VsdHMoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLmNvdXBsZXMpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKCdtZW51Jyk7XHJcbiAgICB9XHJcbn1cclxuIiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgncmVzdWx0JylcclxuICAgIC5zZXJ2aWNlKCdyZXN1bHRTZXJ2aWNlJywgcmVzdWx0U2VydmljZSk7XHJcblxyXG5yZXN1bHRTZXJ2aWNlLiRpbmplY3QgPSBbJyRzdGF0ZSddO1xyXG5cclxuZnVuY3Rpb24gcmVzdWx0U2VydmljZSgkc3RhdGUpIHtcclxuICAgIHZhciByZXN1bHRzID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UmVzdWx0cygpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHB1c2hSZXN1bHQocmVzdWx0KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZW1wdHlSZXN1bHRzKCkge1xyXG4gICAgICAgIHJlc3VsdHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXN1bHRzQXJlTm90RW1wdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFJlc3VsdHM6IGdldFJlc3VsdHMsXHJcbiAgICAgICAgcHVzaFJlc3VsdDogcHVzaFJlc3VsdCxcclxuICAgICAgICBlbXB0eVJlc3VsdHM6IGVtcHR5UmVzdWx0cyxcclxuICAgICAgICByZXN1bHRzQXJlTm90RW1wdHk6IHJlc3VsdHNBcmVOb3RFbXB0eVxyXG4gICAgfTtcclxufSIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMnKVxyXG4gICAgLmNvbXBvbmVudCgnc2ltcGxlRHJhdycsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vc2ltcGxlLWRyYXcuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IHNpbXBsZURyYXdDb250cm9sbGVyLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgICAgICBiaW5kaW5nczoge1xyXG4gICAgICAgICAgICBCaW5kaW5nOiAnPScsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuc2ltcGxlRHJhd0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHN0YXRlJywgJ3Jlc3VsdFNlcnZpY2UnLCAnJGNvb2tpZXMnXTtcclxuXHJcbmZ1bmN0aW9uIHNpbXBsZURyYXdDb250cm9sbGVyKCRzdGF0ZSwgcmVzdWx0U2VydmljZSwgJGNvb2tpZXMpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICB2bS5uYW1lID0gXCLXlNeS16jXnNeUINeo15LXmdec15RcIjtcclxuICAgIHZtLmlzSW52YWxpZCA9IGZhbHNlO1xyXG4gICAgdm0uQ291bnQgPSAkY29va2llcy5nZXRPYmplY3QoJ2NvdW50JykgPyAkY29va2llcy5nZXRPYmplY3QoJ2NvdW50JykgOiAwO1xyXG4gICAgdm0uU2hvd0J1dHRvbiA9IGZhbHNlO1xyXG4gICAgdm0uc2hvd1BsYXllcnNFcnJvciA9IGZhbHNlO1xyXG4gICAgdm0uUGxheWVycyA9ICRjb29raWVzLmdldE9iamVjdCgncGxheWVycycpO1xyXG5cclxuXHJcbiAgICB2bS5TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHZtLkNvdW50ICE9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ludmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgJGNvb2tpZXMucmVtb3ZlKCdjb3VudCcpO1xyXG4gICAgICAgICAgICAkY29va2llcy5yZW1vdmUoJ3BsYXllcnMnKTtcclxuICAgICAgICAgICAgdm0uUGxheWVycyA9IG5ldyBBcnJheShwYXJzZUludCh2bS5Db3VudCkpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLlBsYXllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZtLlBsYXllcnNbaV0gPSB7IG5hbWU6IG51bGwgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2bS5TaG93QnV0dG9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZtLmlzSW52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2bS5BZGRPbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHZtLkNvdW50ID09IDApIHtcclxuICAgICAgICAgICAgdm0uQ291bnQgPSA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2bS5Db3VudCA8IDIwKSB7XHJcbiAgICAgICAgICAgIHZtLkNvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2bS5SZW1vdmVPbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHZtLkNvdW50ID4gNCkge1xyXG4gICAgICAgICAgICB2bS5Db3VudC0tO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdm0uU2h1ZmZsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodm0ucGxheWVyc0Zvcm0uJHZhbGlkKSB7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgaWYgKHZtLlBsYXllcnMpIHtcclxuICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdXNlciBpbnNlcnRlZCBuYW1lIGZvciBhbGwgcGxheWVyc1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bS5QbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLlBsYXllcnNbaV0ubmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPT0gdm0uUGxheWVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICRjb29raWVzLnB1dE9iamVjdCgnY291bnQnLCB2bS5Db3VudCk7XHJcbiAgICAgICAgICAgICAgICAkY29va2llcy5wdXRPYmplY3QoJ3BsYXllcnMnLCB2bS5QbGF5ZXJzKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFNlcnZpY2UuZW1wdHlSZXN1bHRzKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gdm0ucmFuZG9taXplUmVzdWx0cyh2bS5QbGF5ZXJzKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChhcnIubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY291cGxlID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLmZpcnN0ID0gYXJyW2Fyci5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuc2Vjb25kID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U2VydmljZS5wdXNoUmVzdWx0KGNvdXBsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuZmlyc3QgPSBhcnJbYXJyLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZS5zZWNvbmQgPSBhcnJbYXJyLmxlbmd0aCAtIDJdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFNlcnZpY2UucHVzaFJlc3VsdChjb3VwbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ3Jlc3VsdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdm0uc2hvd1BsYXllcnNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCcpO1xyXG4gICAgICAgICAgICB2bS5zaG93UGxheWVyc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZtLnJhbmRvbWl6ZVJlc3VsdHMgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLCB0ZW1wb3JhcnlWYWx1ZSwgcmFuZG9tSW5kZXg7XHJcblxyXG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXHJcbiAgICAgICAgd2hpbGUgKDAgIT09IGN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cclxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cclxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSBhcnJheVtjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICBhcnJheVtjdXJyZW50SW5kZXhdID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgICAgICBhcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfTtcclxufVxyXG4iXX0=
