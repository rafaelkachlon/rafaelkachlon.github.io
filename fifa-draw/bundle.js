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
$templateCache.put('./back-button.component.html','<button type="submit" class="back-btn heb" ng-click="vm.back()">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button>\r\n');
$templateCache.put('./by-level-draw.component.html','<div class="text-center by-level-draw">\r\n  <div class="blur-bg more-opacity">\r\n    <h1 class="header heb">{{vm.name}}</h1>\r\n    <p class="heb hm-players hm-players-levels">\u05DB\u05DE\u05D4 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD? <span>(4-20)</span></p>\r\n    <hr />\r\n    <form name="myForm" ng-submit="vm.Submit()">\r\n      <div class="heb">\u05DE\u05E7\u05E6\u05D5\u05E2\u05E0\u05D9\u05DD:</div>\r\n      <div class="inputButtons">\r\n        <div ng-click="vm.AddOnePro()" class="inputButtonsChild inputButtons"><span\r\n            class="glyphicon glyphicon-plus plusMinus"></span></div>\r\n        <input ng-model="vm.CountPro" class="inputButtonsChild countInput heb" type="text" readonly required />\r\n        <div ng-click="vm.RemoveOnePro()" class="inputButtonsChild inputButtons"><span\r\n            class="glyphicon glyphicon-minus plusMinus"></span></div>\r\n      </div>\r\n      <div class="heb">\u05D7\u05D5\u05D1\u05D1\u05E0\u05D9\u05DD:</div>\r\n      <div class="inputButtons">\r\n        <div ng-click="vm.AddOneAmateur()" class="inputButtonsChild inputButtons"><span\r\n            class="glyphicon glyphicon-plus plusMinus"></span></div>\r\n        <input ng-model="vm.CountAmateur" class="inputButtonsChild countInput heb" type="text" readonly required />\r\n        <div ng-click="vm.RemoveOneAmateur()" class="inputButtonsChild inputButtons"><span\r\n            class="glyphicon glyphicon-minus plusMinus"></span></div>\r\n      </div>\r\n      <input class="confirm-btn heb" type="submit" value="\u05D0\u05E9\u05E8" />\r\n      <div ng-show="vm.isInvalid" class="alert alert-danger">\u05D0\u05E0\u05D0 \u05D1\u05D7\u05E8 \u05DE\u05E1\u05E4\u05E8 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD (\u05DC\u05E4\u05D7\u05D5\u05EA 2 \u05DE\u05DB\u05DC \u05E7\u05D1\u05D5\u05E6\u05D4)</div>\r\n    </form>\r\n\r\n    <div class="namesInputs">\r\n      <p class="who-plays heb" ng-show="vm.ShowButton">\u05DE\u05D9 \u05DE\u05E9\u05D7\u05E7?</p>\r\n      <hr ng-show="vm.ShowButton" />\r\n      <form name="vm.playersForm" novalidate>\r\n        <p class="heb" ng-show="vm.IsValid">\u05DE\u05E7\u05E6\u05D5\u05E2\u05E0\u05D9\u05DD</p>\r\n        <input class="playerInput" type="text" ng-model="p.name" ng-repeat="p in vm.PlayersPro"\r\n          name="proPlayer{{$index}}" placeholder="\u05E9\u05D7\u05E7\u05DF {{$index+1}}" required\r\n          ng-class="{\'error\': vm.playersForm.proPlayer{{$index}}.$invalid  && vm.submitted}" />\r\n        <br />\r\n        <p class="heb" ng-show="vm.IsValid">\u05D7\u05D5\u05D1\u05D1\u05E0\u05D9\u05DD</p>\r\n        <input class="playerInput" type="text" ng-model="p.name" ng-repeat="p in vm.PlayersAmateur"\r\n          name="player{{$index}}" placeholder="\u05E9\u05D7\u05E7\u05DF {{$index+1}}" required\r\n          ng-class="{\'error\': vm.playersForm.player{{$index}}.$invalid  && vm.submitted}" />\r\n        <br />\r\n      <div ng-show="vm.showPlayersError" class="alert alert-danger">\u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05E9\u05DE\u05D5\u05EA \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD</div>\r\n\r\n        <input type="submit" class="confirm-btn heb draw"\r\n          ng-show="vm.PlayersPro.length>0 && vm.PlayersAmateur.length>0 " ng-click="vm.Shuffle();vm.submitted = true"\r\n          value="\u05D4\u05D2\u05E8\u05DC">\r\n      </form>\r\n    </div>\r\n    <back-button></back-button>\r\n  </div>\r\n</div>');
$templateCache.put('./about.component.html','<div class="text-center about heb">\r\n    <div class="blur-bg more-opacity">\r\n        <div class="header about-header">{{vm.name}}</div>\r\n        <p>\u05DB\u05DF, \u05D2\u05DD \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05E4\u05D9\u05E4\u05D0.</p>\r\n        <p>\u05D5\u05DB\u05DF, \u05D2\u05DD \u05D2\u05DD \u05DC\u05E0\u05D5 \u05E7\u05E8\u05D4 \u05E9\u05D9\u05E9\u05D1\u05E0\u05D5 \u05DB\u05DC \u05D4\u05D7\u05D1\u05E8\u05D9\u05DD \u05D5\u05D4\u05EA\u05D5\u05D5\u05DB\u05D7\u05E0\u05D5 \u05D3\u05E7\u05D5\u05EA \u05D0\u05E8\u05D5\u05DB\u05D5\u05EA \u05DE\u05D9 \u05E0\u05D2\u05D3 \u05DE\u05D9 \u05D5\u05D0\u05D9\u05DA \u05DC\u05D7\u05DC\u05E7 \u05D6\u05D5\u05D2\u05D5\u05EA.</p>\r\n        <p>\u05D5\u05DB\u05DF, \u05D2\u05DD \u05D0\u05E0\u05D7\u05E0\u05D5 \u05D1\u05E1\u05D5\u05E3 \u05D4\u05E1\u05EA\u05D5\u05D1\u05D1\u05E0\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E0\u05D9\u05D9\u05E8 \u05D5\u05E2\u05D8 \u05D5\u05D4\u05EA\u05D7\u05DC\u05E0\u05D5 \u05DB\u05DE\u05D5 \u05D1\u05E9\u05E0\u05D5\u05EA \u05D480 \u05DC\u05DB\u05EA\u05D5\u05D1 \u05E9\u05DE\u05D5\u05EA \u05D5\u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DC\u05E7\u05E8\u05D5\u05E2 \u05E4\u05EA\u05E7\u05D9\u05DD \u05D5\u05DC\u05D4\u05D2\u05E8\u05D9\u05DC \u05DE\u05DB\u05D5\u05D1\u05E2.</p>\r\n        <p>\u05DC\u05E0\u05D5 \u05DC\u05E7\u05D7 \u05D1\u05E1\u05D1\u05D9\u05D1\u05D5\u05EA \u05D4\u05E9\u05E2\u05D4 \u05E2\u05D3 \u05E9\u05D4\u05EA\u05D7\u05DC\u05E0\u05D5 \u05DC\u05E9\u05D7\u05E7, \u05D5\u05DC\u05DB\u05DD?</p>\r\n        <p>\u05D1\u05D3\u05D9\u05D5\u05E7 \u05D1\u05E9\u05D1\u05D9\u05DC \u05E9\u05DC\u05D0 \u05D9\u05E7\u05E8\u05D5 \u05DC\u05DB\u05DD \u05D4\u05E0\u05E1\u05D9\u05DD \u05D5\u05D4\u05E0\u05E4\u05DC\u05D0\u05D5\u05EA \u05D9\u05E6\u05E8\u05EA\u05D9 \u05D0\u05EA \u05D4\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05D4\u05E4\u05E9\u05D5\u05D8\u05D4 \u05D4\u05D6\u05D5.</p>\r\n        <p>\u05DC\u05D0 \u05E2\u05D5\u05D3 \u05E9\u05E2\u05D4 \u05E2\u05D3 \u05E9\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D7\u05E7, \u05D4\u05DB\u05DC \u05E8\u05E5 \u05DE\u05D4\u05E8 \u05DE\u05D0\u05D5\u05D3.</p>\r\n        <p>\u05D1\u05EA\u05E7\u05D5\u05D5\u05D4 \u05E9\u05EA\u05DE\u05E6\u05D0\u05D5 \u05D0\u05EA \u05D4\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05DE\u05D5\u05E2\u05D9\u05DC\u05D4.</p>\r\n        <p>\u05E8\u05E4\u05D0\u05DC</p>\r\n    </div>\r\n    <back-button></back-button>\r\n</div>');
$templateCache.put('./help.component.html','<div class="text-center help heb blur-bg">\r\n  <h1 class="header">{{vm.name}}</h1>\r\n\r\n  <div class="button" ng-click="vm.simpleShow = !vm.simpleShow">\u05D4\u05D2\u05E8\u05DC\u05D4 \u05E8\u05D2\u05D9\u05DC\u05D4</div>\r\n  <div class="simple-draw-help" ng-init="vm.simpleShow = false" ng-show="vm.simpleShow">\r\n    <div class="help-cont center-block">\r\n      <p>1. \u05D1\u05D7\u05E8 \u05DE\u05E1\u05E4\u05E8 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D1\u05D8\u05D5\u05E8\u05E0\u05D9\u05E8 \u05D5\u05DC\u05D7\u05E5 "\u05D0\u05E9\u05E8"</p>\r\n      <img class="help-pic" src="./assets/images/sd1.jpg" alt="">\r\n    </div>\r\n    <div class="help-cont center-block">\r\n      <p>2. \u05D4\u05DB\u05E0\u05E1 \u05D0\u05EA \u05E9\u05DE\u05D5\u05EA \u05D4\u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D5\u05DC\u05D7\u05E5 "\u05D4\u05D2\u05E8\u05DC"</p>\r\n      <img class="help-pic" src="./assets/images/sd2.jpg" alt="">\r\n    </div>\r\n    <div class="help-cont center-block results">\r\n      <p>3. \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D4\u05D6\u05D5\u05D2\u05D5\u05EA \u05D9\u05D5\u05E4\u05D9\u05E2\u05D5 \u05D1\u05D6\u05D5 \u05D0\u05D7\u05E8 \u05D6\u05D5. \u05D4\u05EA\u05D7\u05D9\u05DC\u05D5 \u05DC\u05E9\u05D7\u05E7.</p>\r\n      <img class="help-pic" src="./assets/images/sd3.jpg" alt="">\r\n    </div>\r\n  </div>\r\n\r\n  <div class="button" ng-click="vm.byLevelShow = !vm.byLevelShow">\u05D4\u05D2\u05E8\u05DC\u05D4 \u05DC\u05E4\u05D9 \u05E8\u05DE\u05D4</div>\r\n  <div class="by-level-draw-help" ng-init="vm.byLevelShow = false" ng-show="vm.byLevelShow">\r\n    <div class="help-cont center-block by-level">\r\n      <p>1. \u05D1\u05D7\u05E8 \u05DE\u05E1\u05E4\u05E8 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D1\u05D8\u05D5\u05E8\u05E0\u05D9\u05E8, \u05DB\u05DE\u05D5\u05EA \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05DE\u05E7\u05E6\u05D5\u05E2\u05E0\u05D9\u05DD \u05D5\u05DB\u05DE\u05D5\u05EA \u05D7\u05D5\u05D1\u05D1\u05E0\u05D9\u05DD \u05D5\u05DC\u05D7\u05E5 "\u05D0\u05E9\u05E8"</p>\r\n      <img class="help-pic" src="./assets/images/bl1.jpg" alt="">\r\n    </div>\r\n    <div class="help-cont center-block by-level bl2">\r\n      <p>2. \u05D4\u05DB\u05E0\u05E1 \u05D0\u05EA \u05E9\u05DE\u05D5\u05EA \u05D4\u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05DC\u05E4\u05D9 \u05E8\u05DE\u05D4 \u05DB\u05DA \u05E9\u05DE\u05E7\u05E6\u05D5\u05E2\u05DF \u05DC\u05D0 \u05D9\u05D5\u05D2\u05E8\u05DC \u05E2\u05DD \u05DE\u05E7\u05E6\u05D5\u05E2\u05DF \u05D5\u05D7\u05D5\u05D1\u05D1\u05DF \u05DC\u05D0 \u05D9\u05D5\u05D2\u05E8\u05DC \u05E2\u05DD \u05D7\u05D5\u05D1\u05D1\u05DF \u05D5\u05DC\u05D7\u05E5 "\u05D4\u05D2\u05E8\u05DC"</p>\r\n      <img class="help-pic" src="./assets/images/bl2.jpg" alt="">\r\n    </div>\r\n    <div class="help-cont center-block results">\r\n      <p>3. \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D4\u05D6\u05D5\u05D2\u05D5\u05EA \u05D9\u05D5\u05E4\u05D9\u05E2\u05D5 \u05D1\u05D6\u05D5 \u05D0\u05D7\u05E8 \u05D6\u05D5, \u05DE\u05E7\u05E6\u05D5\u05E2\u05DF \u05E2\u05DD \u05D7\u05D5\u05D1\u05D1\u05DF \u05D1\u05DB\u05DC \u05E7\u05D1\u05D5\u05E6\u05D4. \u05D4\u05EA\u05D7\u05D9\u05DC\u05D5 \u05DC\u05E9\u05D7\u05E7.</p>\r\n      <img class="help-pic" src="./assets/images/bl3.jpg" alt="">\r\n    </div>\r\n  </div>\r\n  <back-button></back-button>\r\n</div>');
$templateCache.put('./menu.component.html','<div class="text-center menu">\r\n    <div class="header menu-header">{{vm.name}}</div>\r\n    <div class="blur-bg bg-main">\r\n        <div class="menu-btn firstBtn heb" ng-click="vm.goToSimpleDraw()">\u05D4\u05D2\u05E8\u05DC\u05D4 \u05E8\u05D2\u05D9\u05DC\u05D4</div>\r\n        <div class="menu-btn heb" ng-click="vm.goToByLevelDraw()">\u05D4\u05D2\u05E8\u05DC\u05D4 \u05DC\u05E4\u05D9 \u05E8\u05DE\u05D4</div>\r\n        <div class="menu-btn heb" ng-click="vm.goToHelp()">\u05E2\u05D6\u05E8\u05D4</div>\r\n        <div class="menu-btn heb" ng-click="vm.goToAbout()">\u05D0\u05D5\u05D3\u05D5\u05EA</div>\r\n    </div>\r\n</div>\r\n');
$templateCache.put('./result.component.html','<div class="text-center result">\r\n    <div class="blur-bg more-opacity">\r\n        <div class="header heb">{{vm.name}}</div>\r\n        <div class="namesInputs">\r\n            <div ng-repeat="r in vm.couples" class="couples" style="-webkit-transition-delay:{{$index*1000}}ms">\r\n                <span ng-show="r.second ==null" class="glyphicon glyphicon-thumbs-down"></span>\r\n                <div class="name">{{r.first}}</div>\r\n                <div ng-show="r.second !=null" class="seperator">|</div>\r\n                <div ng-show="r.second !=null" class="name">{{r.second}}</div>\r\n                <span ng-show="r.second ==null" class="glyphicon glyphicon-thumbs-down"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <back-button></back-button>\r\n</div>');
$templateCache.put('./simple-draw.component.html','<div class="text-center simple-draw ">\r\n    <div class="blur-bg">\r\n        <p class="hmplayers heb">\u05DB\u05DE\u05D4 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD? <span>(4-20)</span></p>\r\n        <hr />\r\n\r\n        <form name="myForm" ng-submit="vm.Submit()">\r\n            <div class="inputButtons">\r\n                <div ng-click="vm.AddOne()" class="inputButtonsChild inputButtons"><span\r\n                        class="glyphicon glyphicon-plus plusMinus"></span></div>\r\n                <input ng-model="vm.Count" class="inputButtonsChild countInput heb" type="text" readonly required />\r\n                <div ng-click="vm.RemoveOne()" class="inputButtonsChild inputButtons"><span\r\n                        class="glyphicon glyphicon-minus plusMinus"></span></div>\r\n            </div>\r\n            <input class="confirm-btn heb" type="submit" value="\u05D0\u05E9\u05E8" />\r\n            <div ng-show="vm.isInvalid" class="alert alert-danger">\u05D0\u05E0\u05D0 \u05D1\u05D7\u05E8 \u05DE\u05E1\u05E4\u05E8 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD (\u05DC\u05E4\u05D7\u05D5\u05EA 4)</div>\r\n        </form>\r\n        <div class="namesInputs">\r\n            <p class="whoplays heb" ng-show="vm.ShowButton">\u05DE\u05D9 \u05DE\u05E9\u05D7\u05E7?</p>\r\n            <hr ng-show="vm.ShowButton" />\r\n\r\n            <form name="vm.playersForm" novalidate>\r\n                <input class="playerInput" type="text" ng-model="p.name" ng-repeat="p in vm.Players"\r\n                    name="player{{$index}}" placeholder="\u05E9\u05D7\u05E7\u05DF {{$index+1}}" required\r\n                    ng-class="{\'error\': vm.playersForm.player{{$index}}.$invalid  && vm.submitted}" />\r\n                <br />\r\n                <div ng-show="vm.playersForm.$invalid && vm.submitted" class="alert alert-danger">\u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05E9\u05DE\u05D5\u05EA\r\n                    \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD</div>\r\n                <input type="submit" class="confirm-btn heb draw" ng-show="vm.Players.length>0"\r\n                    ng-click="vm.Shuffle();vm.submitted = true" value="\u05D4\u05D2\u05E8\u05DC">\r\n            </form>\r\n        </div>\r\n        <back-button></back-button>\r\n    </div>\r\n\r\n</div>');}]);
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
    .module('app')
    .component('backButton', {
        templateUrl: './back-button.component.html',
        controller: backButtonController,
        controllerAs: 'vm'
    });
backButtonController.$inject = ['$state'];
function backButtonController($state) {
    var vm = this;
    vm.back = function () {
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

byLevelDrawController.$inject = ['$state', 'resultService', '$cookies'];

function byLevelDrawController($state, resultService, $cookies) {
    var vm = this;
    vm.name = "הגרל בין רמות";
    vm.CountPro = $cookies.getObject('countPro') ? $cookies.getObject('countPro') : 0;
    vm.CountAmateur = $cookies.getObject('countAmateur') ? $cookies.getObject('countAmateur') : 0;
    vm.PlayersPro = $cookies.getObject('playersPro');;
    vm.PlayersAmateur = $cookies.getObject('playersAmateur');


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
            $cookies.remove('mode');
            $cookies.remove('countPro');
            $cookies.remove('countAmateur');
            $cookies.remove('playersPro');
            $cookies.remove('playersAmateur');
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
        if (vm.playersForm.$valid) {
            resultService.emptyResults();
            $cookies.put('mode', 'level');
            $cookies.putObject('countPro', vm.CountPro);
            $cookies.putObject('countAmateur', vm.CountAmateur);
            $cookies.putObject('playersPro', vm.PlayersPro);
            $cookies.putObject('playersAmateur', vm.PlayersAmateur);
            $state.go('result');
        }
        else {
            vm.showPlayersError = true;
        }
    };

    vm.RandomizeResults = function (array) {

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
    .component('about', {
        templateUrl: './about.component.html',
        controller: aboutController,
        controllerAs: 'vm'
    });
aboutController.$inject = ['$state'];
function aboutController($state) {
    var vm = this;
    vm.name = "אודות";
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

    vm.goToSimpleDraw = function () {
        $state.go('simpleDraw');
    };
    vm.goToByLevelDraw = function () {
        $state.go('byLevelDraw');
    };
    vm.goToHelp = function () {
        $state.go('help');
    };
    vm.goToAbout = function () {
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
        // $state.go('menu');
    }
}

angular
    .module('result')
    .service('resultService', resultService);

resultService.$inject = ['$cookies'];

function resultService($cookies) {
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
        var players = $cookies.getObject('players');
        var playersPro = $cookies.getObject('playersPro');
        if (players || playersPro) {
            makeCouples();
        }
        return results.length > 0;
    }

    function makeCouples() {
        var mode = $cookies.get('mode');
        if (mode === 'simple') {
            var players = $cookies.getObject('players');
            players = randomizeResults(players);
            handleSimpleDraw(players)
        }
        else if (mode === 'level') {
            var playersPro = $cookies.getObject('playersPro');
            var playersAmateur = $cookies.getObject('playersAmateur');
            playersPro = randomizeResults(playersPro);
            playersAmateur = randomizeResults(playersAmateur);
            handleByLevelDraw(playersAmateur, playersPro);
        }
    }
    function randomizeResults(array) {
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

    }

    function handleSimpleDraw(array) {
        while (array.length != 0) {
            var couple = {};
            if (array.length == 1) {
                couple = {};
                couple.first = array[array.length - 1].name;
                couple.second = null;
                results.push(couple);
                array.pop();
            }
            else {
                couple = {};
                couple.first = array[array.length - 1].name;
                couple.second = array[array.length - 2].name;
                results.push(couple);
                array.pop();
                array.pop();
            }
        }
    }

    function handleByLevelDraw(arrPro, arrAmateur) {
        while (arrPro.length != 0 || arrAmateur.length != 0) {
            var couple = {};
            if (arrPro.length == 1 || arrAmateur.length == 1) {

                if (arrPro.length == 1 && arrAmateur.length == 1) {

                    couple = {};
                    couple.first = arrPro[arrPro.length - 1].name;
                    couple.second = arrAmateur[arrAmateur.length - 1].name;
                    results.push(couple);
                    arrPro.pop();
                    arrAmateur.pop();
                }

                else if (arrPro.length <= 1 && arrAmateur.length == 0) {
                    couple = {};
                    couple.first = arrPro[arrPro.length - 1].name;
                    couple.second = null;
                    results.push(couple);
                    arrPro.pop();
                }
                else if (arrPro.length == 0 && arrAmateur.length <= 1) {
                    couple = {};
                    couple.first = arrAmateur[arrAmateur.length - 1].name;
                    couple.second = null;
                    results.push(couple);
                    arrAmateur.pop();
                }
                else if (arrPro.length > 1 && arrAmateur.length == 1) {
                    couple = {};
                    couple.first = arrPro[arrPro.length - 1].name;
                    couple.second = arrAmateur[arrAmateur.length - 1].name;
                    results.push(couple);
                    arrPro.pop();
                    arrAmateur.pop();
                }
                else if (arrPro.length == 1 && arrAmateur.length > 1) {
                    couple = {};
                    couple.first = arrPro[arrPro.length - 1].name;
                    couple.second = arrAmateur[arrAmateur.length - 1].name;
                    results.push(couple);
                    arrPro.pop();
                    arrAmateur.pop();
                }
            }
            else {
                if (arrPro.length > 0 && arrAmateur.length > 0) {
                    couple = {};
                    couple.first = arrPro[arrPro.length - 1].name;
                    couple.second = arrAmateur[arrAmateur.length - 1].name;
                    results.push(couple);
                    arrPro.pop();
                    arrAmateur.pop();
                }
                else {
                    if (arrPro.length == 0) {
                        if (arrAmateur.length > 1) {
                            couple = {};
                            couple.first = arrAmateur[arrAmateur.length - 1].name;
                            couple.second = arrAmateur[arrAmateur.length - 2].name;
                            results.push(couple);
                            arrAmateur.pop();
                            arrAmateur.pop();
                        }
                        else {
                            couple = {};
                            couple.first = arrAmateur[arrAmateur.length - 1].name;
                            couple.second = null;
                            results.push(couple);
                            arrAmateur.pop();
                        }
                    }
                    else if (arrAmateur.length == 0) {
                        if (arrPro.length > 1) {
                            couple = {};
                            couple.first = arrPro[arrPro.length - 1].name;
                            couple.second = arrPro[arrPro.length - 2].name;
                            results.push(couple);
                            arrPro.pop();
                            arrPro.pop();
                        }
                        else {
                            Scouple = {};
                            couple.first = arrPro[arrPro.length - 1].name;
                            couple.second = null;
                            results.push(couple);
                            arrPro.pop();
                        }
                    }
                }

            }
        }
    }

    return {
        getResults: getResults,
        pushResult: pushResult,
        emptyResults: emptyResults,
        resultsAreNotEmpty: resultsAreNotEmpty,
        RandomizeResults: randomizeResults
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
            $cookies.remove('mode');
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
            $cookies.put('mode', 'simple');
            $cookies.putObject('count', vm.Count);
            $cookies.putObject('players', vm.Players);
            resultService.emptyResults();
            $state.go('result');
        }
        else {
            vm.showPlayersError = true;
        }
    };
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb290Lm1vZHVsZS5qcyIsImFwcC9jb21tb24vYXBwLm1vZHVsZS5qcyIsImFwcC9jb21wb25lbnRzL2NvbXBvbmVudHMubW9kdWxlLmpzIiwiYXBwL2NvbXBvbmVudHMvYnktbGV2ZWwtZHJhdy9ieS1sZXZlbC1kcmF3Lm1vZHVsZS5qcyIsImFwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0Lm1vZHVsZS5qcyIsImFwcC9jb21wb25lbnRzL2hlbHAvaGVscC5tb2R1bGUuanMiLCJhcHAvY29tcG9uZW50cy9tZW51L21lbnUubW9kdWxlLmpzIiwiYXBwL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHQubW9kdWxlLmpzIiwiYXBwL2NvbXBvbmVudHMvc2ltcGxlLWRyYXcvc2ltcGxlLWRyYXcubW9kdWxlLmpzIiwidGVtcGxhdGVzLmpzIiwiYXBwL3Jvb3QuY29tcG9uZW50LmpzIiwiYXBwL2NvbW1vbi9hcHAuY29tcG9uZW50LmpzIiwiYXBwL2NvbW1vbi9iYWNrLWJ1dHRvbi9iYWNrLWJ1dHRvbi5jb21wb25lbnQuanMiLCJhcHAvY29tcG9uZW50cy9ieS1sZXZlbC1kcmF3L2J5LWxldmVsLWRyYXcuY29tcG9uZW50LmpzIiwiYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmpzIiwiYXBwL2NvbXBvbmVudHMvaGVscC9oZWxwLmNvbXBvbmVudC5qcyIsImFwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuanMiLCJhcHAvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdC5jb21wb25lbnQuanMiLCJhcHAvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdC5zZXJ2aWNlLmpzIiwiYXBwL2NvbXBvbmVudHMvc2ltcGxlLWRyYXcvc2ltcGxlLWRyYXcuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgncm9vdCcsIFsnYXBwJ1xyXG4gICAgXSlcclxuICAgIC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvYXBwJyk7XHJcbiAgICB9KTsiLCJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdhcHAnLCBbXHJcbiAgICAgICAgJ3RlbXBsYXRlcycsXHJcbiAgICAgICAgJ2NvbXBvbmVudHMnLFxyXG4gICAgICAgICduZ0FuaW1hdGUnLFxyXG4gICAgICAgICd1aS5yb3V0ZXInLFxyXG4gICAgICAgICduZ0Nvb2tpZXMnXHJcbiAgICBdKVxyXG4gICAgLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcCcsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9hcHAnLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiAnYXBwJyxcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0VG86ICdtZW51J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pOyIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMnLCBbXHJcbiAgICAgICAgJ21lbnUnLFxyXG4gICAgICAgICdzaW1wbGVEcmF3JyxcclxuICAgICAgICAnYnlMZXZlbERyYXcnLFxyXG4gICAgICAgICdoZWxwJyxcclxuICAgICAgICAnYWJvdXQnLFxyXG4gICAgICAgICdyZXN1bHQnXHJcbiAgICBdKTsiLCJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdieUxldmVsRHJhdycsIFtcclxuICAgICAgICAndWkucm91dGVyJ1xyXG4gICAgXSlcclxuICAgIC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2J5TGV2ZWxEcmF3Jywge1xyXG4gICAgICAgICAgICB1cmw6ICcvYnlMZXZlbERyYXcnLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6ICdieUxldmVsRHJhdydcclxuICAgICAgICB9KTtcclxuICAgIH0pOyIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2Fib3V0JywgW1xyXG4gICAgICAgICd1aS5yb3V0ZXInXHJcbiAgICBdKVxyXG4gICAgLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnYWJvdXQnLCB7XHJcbiAgICAgICAgICAgIHVybDogJy9hYm91dCcsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ2Fib3V0J1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnaGVscCcsIFtcclxuICAgICAgICAndWkucm91dGVyJ1xyXG4gICAgXSlcclxuICAgIC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2hlbHAnLCB7XHJcbiAgICAgICAgICAgIHVybDogJy9oZWxwJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiAnaGVscCdcclxuICAgICAgICB9KTtcclxuICAgIH0pOyIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ21lbnUnLCBbXHJcbiAgICAgICAgJ3VpLnJvdXRlcidcclxuICAgIF0pXHJcbiAgICAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdtZW51Jywge1xyXG4gICAgICAgICAgICB1cmw6ICcvbWVudScsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ2ZpZmFNZW51J1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgncmVzdWx0JywgW1xyXG4gICAgICAgICd1aS5yb3V0ZXInXHJcbiAgICBdKVxyXG4gICAgLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgncmVzdWx0Jywge1xyXG4gICAgICAgICAgICB1cmw6ICcvcmVzdWx0JyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiAncmVzdWx0J1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnc2ltcGxlRHJhdycsIFtcclxuICAgICAgICAndWkucm91dGVyJ1xyXG4gICAgXSlcclxuICAgIC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ3NpbXBsZURyYXcnLCB7XHJcbiAgICAgICAgICAgIHVybDogJy9zaW1wbGVEcmF3JyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiAnc2ltcGxlRHJhdydcclxuICAgICAgICB9KTtcclxuICAgIH0pOyIsImFuZ3VsYXIubW9kdWxlKCd0ZW1wbGF0ZXMnLCBbXSkucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dCgnLi9yb290LmNvbXBvbmVudC5odG1sJywnPGRpdiBzdHlsZT1cInRyYW5zZm9ybTogc2NhbGUoMSk7IHRyYW5zZm9ybS1vcmlnaW46IDBweCAwcHggMHB4O1wiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVwibW9iaWxlLWVtdWxhdG9yXCI+XFxyXFxuICAgICAgICA8ZGl2IGlkPVwiZnJhbWUtZW11bGF0b3JcIiBjbGFzcz1cImZyYW1lLWVtdWxhdG9yIGZyYW1lLXNjcm9sbGVyXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvb3RcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIiBjbGFzcz1cImxvZ29cIj5cXHJcXG4gICAgICAgICAgICAgICAgPHVpLXZpZXc+PC91aS12aWV3PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PicpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KCcuL2FwcC5jb21wb25lbnQuaHRtbCcsJzxkaXYgY2xhc3M9XCJhcHBcIj5cXHJcXG4gICAgPGRpdiB1aS12aWV3PjwvZGl2PlxcclxcbjwvZGl2PicpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KCcuL2JhY2stYnV0dG9uLmNvbXBvbmVudC5odG1sJywnPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJiYWNrLWJ0biBoZWJcIiBuZy1jbGljaz1cInZtLmJhY2soKVwiPlxcdTA1RDdcXHUwNUQ2XFx1MDVFOFxcdTA1RDQgXFx1MDVEQ1xcdTA1RUFcXHUwNUU0XFx1MDVFOFxcdTA1RDlcXHUwNUQ4PC9idXR0b24+XFxyXFxuJyk7XG4kdGVtcGxhdGVDYWNoZS5wdXQoJy4vYnktbGV2ZWwtZHJhdy5jb21wb25lbnQuaHRtbCcsJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBieS1sZXZlbC1kcmF3XCI+XFxyXFxuICA8ZGl2IGNsYXNzPVwiYmx1ci1iZyBtb3JlLW9wYWNpdHlcIj5cXHJcXG4gICAgPGgxIGNsYXNzPVwiaGVhZGVyIGhlYlwiPnt7dm0ubmFtZX19PC9oMT5cXHJcXG4gICAgPHAgY2xhc3M9XCJoZWIgaG0tcGxheWVycyBobS1wbGF5ZXJzLWxldmVsc1wiPlxcdTA1REJcXHUwNURFXFx1MDVENCBcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQ/IDxzcGFuPig0LTIwKTwvc3Bhbj48L3A+XFxyXFxuICAgIDxociAvPlxcclxcbiAgICA8Zm9ybSBuYW1lPVwibXlGb3JtXCIgbmctc3VibWl0PVwidm0uU3VibWl0KClcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVwiaGViXCI+XFx1MDVERVxcdTA1RTdcXHUwNUU2XFx1MDVENVxcdTA1RTJcXHUwNUUwXFx1MDVEOVxcdTA1REQ6PC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0QnV0dG9uc1wiPlxcclxcbiAgICAgICAgPGRpdiBuZy1jbGljaz1cInZtLkFkZE9uZVBybygpXCIgY2xhc3M9XCJpbnB1dEJ1dHRvbnNDaGlsZCBpbnB1dEJ1dHRvbnNcIj48c3BhblxcclxcbiAgICAgICAgICAgIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzIHBsdXNNaW51c1wiPjwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgIDxpbnB1dCBuZy1tb2RlbD1cInZtLkNvdW50UHJvXCIgY2xhc3M9XCJpbnB1dEJ1dHRvbnNDaGlsZCBjb3VudElucHV0IGhlYlwiIHR5cGU9XCJ0ZXh0XCIgcmVhZG9ubHkgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgIDxkaXYgbmctY2xpY2s9XCJ2bS5SZW1vdmVPbmVQcm8oKVwiIGNsYXNzPVwiaW5wdXRCdXR0b25zQ2hpbGQgaW5wdXRCdXR0b25zXCI+PHNwYW5cXHJcXG4gICAgICAgICAgICBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbWludXMgcGx1c01pbnVzXCI+PC9zcGFuPjwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XCJoZWJcIj5cXHUwNUQ3XFx1MDVENVxcdTA1RDFcXHUwNUQxXFx1MDVFMFxcdTA1RDlcXHUwNUREOjwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dEJ1dHRvbnNcIj5cXHJcXG4gICAgICAgIDxkaXYgbmctY2xpY2s9XCJ2bS5BZGRPbmVBbWF0ZXVyKClcIiBjbGFzcz1cImlucHV0QnV0dG9uc0NoaWxkIGlucHV0QnV0dG9uc1wiPjxzcGFuXFxyXFxuICAgICAgICAgICAgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXMgcGx1c01pbnVzXCI+PC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgPGlucHV0IG5nLW1vZGVsPVwidm0uQ291bnRBbWF0ZXVyXCIgY2xhc3M9XCJpbnB1dEJ1dHRvbnNDaGlsZCBjb3VudElucHV0IGhlYlwiIHR5cGU9XCJ0ZXh0XCIgcmVhZG9ubHkgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgIDxkaXYgbmctY2xpY2s9XCJ2bS5SZW1vdmVPbmVBbWF0ZXVyKClcIiBjbGFzcz1cImlucHV0QnV0dG9uc0NoaWxkIGlucHV0QnV0dG9uc1wiPjxzcGFuXFxyXFxuICAgICAgICAgICAgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW1pbnVzIHBsdXNNaW51c1wiPjwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8aW5wdXQgY2xhc3M9XCJjb25maXJtLWJ0biBoZWJcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJcXHUwNUQwXFx1MDVFOVxcdTA1RThcIiAvPlxcclxcbiAgICAgIDxkaXYgbmctc2hvdz1cInZtLmlzSW52YWxpZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XFx1MDVEMFxcdTA1RTBcXHUwNUQwIFxcdTA1RDFcXHUwNUQ3XFx1MDVFOCBcXHUwNURFXFx1MDVFMVxcdTA1RTRcXHUwNUU4IFxcdTA1RTlcXHUwNUQ3XFx1MDVFN1xcdTA1RTBcXHUwNUQ5XFx1MDVERCAoXFx1MDVEQ1xcdTA1RTRcXHUwNUQ3XFx1MDVENVxcdTA1RUEgMiBcXHUwNURFXFx1MDVEQlxcdTA1REMgXFx1MDVFN1xcdTA1RDFcXHUwNUQ1XFx1MDVFNlxcdTA1RDQpPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cIm5hbWVzSW5wdXRzXCI+XFxyXFxuICAgICAgPHAgY2xhc3M9XCJ3aG8tcGxheXMgaGViXCIgbmctc2hvdz1cInZtLlNob3dCdXR0b25cIj5cXHUwNURFXFx1MDVEOSBcXHUwNURFXFx1MDVFOVxcdTA1RDdcXHUwNUU3PzwvcD5cXHJcXG4gICAgICA8aHIgbmctc2hvdz1cInZtLlNob3dCdXR0b25cIiAvPlxcclxcbiAgICAgIDxmb3JtIG5hbWU9XCJ2bS5wbGF5ZXJzRm9ybVwiIG5vdmFsaWRhdGU+XFxyXFxuICAgICAgICA8cCBjbGFzcz1cImhlYlwiIG5nLXNob3c9XCJ2bS5Jc1ZhbGlkXCI+XFx1MDVERVxcdTA1RTdcXHUwNUU2XFx1MDVENVxcdTA1RTJcXHUwNUUwXFx1MDVEOVxcdTA1REQ8L3A+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJwbGF5ZXJJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmctbW9kZWw9XCJwLm5hbWVcIiBuZy1yZXBlYXQ9XCJwIGluIHZtLlBsYXllcnNQcm9cIlxcclxcbiAgICAgICAgICBuYW1lPVwicHJvUGxheWVye3skaW5kZXh9fVwiIHBsYWNlaG9sZGVyPVwiXFx1MDVFOVxcdTA1RDdcXHUwNUU3XFx1MDVERiB7eyRpbmRleCsxfX1cIiByZXF1aXJlZFxcclxcbiAgICAgICAgICBuZy1jbGFzcz1cIntcXCdlcnJvclxcJzogdm0ucGxheWVyc0Zvcm0ucHJvUGxheWVye3skaW5kZXh9fS4kaW52YWxpZCAgJiYgdm0uc3VibWl0dGVkfVwiIC8+XFxyXFxuICAgICAgICA8YnIgLz5cXHJcXG4gICAgICAgIDxwIGNsYXNzPVwiaGViXCIgbmctc2hvdz1cInZtLklzVmFsaWRcIj5cXHUwNUQ3XFx1MDVENVxcdTA1RDFcXHUwNUQxXFx1MDVFMFxcdTA1RDlcXHUwNUREPC9wPlxcclxcbiAgICAgICAgPGlucHV0IGNsYXNzPVwicGxheWVySW5wdXRcIiB0eXBlPVwidGV4dFwiIG5nLW1vZGVsPVwicC5uYW1lXCIgbmctcmVwZWF0PVwicCBpbiB2bS5QbGF5ZXJzQW1hdGV1clwiXFxyXFxuICAgICAgICAgIG5hbWU9XCJwbGF5ZXJ7eyRpbmRleH19XCIgcGxhY2Vob2xkZXI9XCJcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNURGIHt7JGluZGV4KzF9fVwiIHJlcXVpcmVkXFxyXFxuICAgICAgICAgIG5nLWNsYXNzPVwie1xcJ2Vycm9yXFwnOiB2bS5wbGF5ZXJzRm9ybS5wbGF5ZXJ7eyRpbmRleH19LiRpbnZhbGlkICAmJiB2bS5zdWJtaXR0ZWR9XCIgLz5cXHJcXG4gICAgICAgIDxiciAvPlxcclxcbiAgICAgIDxkaXYgbmctc2hvdz1cInZtLnNob3dQbGF5ZXJzRXJyb3JcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxcdTA1RDdcXHUwNUQ1XFx1MDVEMVxcdTA1RDQgXFx1MDVEQ1xcdTA1RDRcXHUwNURCXFx1MDVFMFxcdTA1RDlcXHUwNUUxIFxcdTA1RTlcXHUwNURFXFx1MDVENVxcdTA1RUEgXFx1MDVFOVxcdTA1RDdcXHUwNUU3XFx1MDVFMFxcdTA1RDlcXHUwNUREPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiY29uZmlybS1idG4gaGViIGRyYXdcIlxcclxcbiAgICAgICAgICBuZy1zaG93PVwidm0uUGxheWVyc1Byby5sZW5ndGg+MCAmJiB2bS5QbGF5ZXJzQW1hdGV1ci5sZW5ndGg+MCBcIiBuZy1jbGljaz1cInZtLlNodWZmbGUoKTt2bS5zdWJtaXR0ZWQgPSB0cnVlXCJcXHJcXG4gICAgICAgICAgdmFsdWU9XCJcXHUwNUQ0XFx1MDVEMlxcdTA1RThcXHUwNURDXCI+XFxyXFxuICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJhY2stYnV0dG9uPjwvYmFjay1idXR0b24+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj4nKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dCgnLi9hYm91dC5jb21wb25lbnQuaHRtbCcsJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBhYm91dCBoZWJcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImJsdXItYmcgbW9yZS1vcGFjaXR5XCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIGFib3V0LWhlYWRlclwiPnt7dm0ubmFtZX19PC9kaXY+XFxyXFxuICAgICAgICA8cD5cXHUwNURCXFx1MDVERiwgXFx1MDVEMlxcdTA1REQgXFx1MDVEMFxcdTA1RTBcXHUwNUQ3XFx1MDVFMFxcdTA1RDUgXFx1MDVERVxcdTA1RTlcXHUwNUQ3XFx1MDVFN1xcdTA1RDlcXHUwNUREIFxcdTA1RTRcXHUwNUQ5XFx1MDVFNFxcdTA1RDAuPC9wPlxcclxcbiAgICAgICAgPHA+XFx1MDVENVxcdTA1REJcXHUwNURGLCBcXHUwNUQyXFx1MDVERCBcXHUwNUQyXFx1MDVERCBcXHUwNURDXFx1MDVFMFxcdTA1RDUgXFx1MDVFN1xcdTA1RThcXHUwNUQ0IFxcdTA1RTlcXHUwNUQ5XFx1MDVFOVxcdTA1RDFcXHUwNUUwXFx1MDVENSBcXHUwNURCXFx1MDVEQyBcXHUwNUQ0XFx1MDVEN1xcdTA1RDFcXHUwNUU4XFx1MDVEOVxcdTA1REQgXFx1MDVENVxcdTA1RDRcXHUwNUVBXFx1MDVENVxcdTA1RDVcXHUwNURCXFx1MDVEN1xcdTA1RTBcXHUwNUQ1IFxcdTA1RDNcXHUwNUU3XFx1MDVENVxcdTA1RUEgXFx1MDVEMFxcdTA1RThcXHUwNUQ1XFx1MDVEQlxcdTA1RDVcXHUwNUVBIFxcdTA1REVcXHUwNUQ5IFxcdTA1RTBcXHUwNUQyXFx1MDVEMyBcXHUwNURFXFx1MDVEOSBcXHUwNUQ1XFx1MDVEMFxcdTA1RDlcXHUwNURBIFxcdTA1RENcXHUwNUQ3XFx1MDVEQ1xcdTA1RTcgXFx1MDVENlxcdTA1RDVcXHUwNUQyXFx1MDVENVxcdTA1RUEuPC9wPlxcclxcbiAgICAgICAgPHA+XFx1MDVENVxcdTA1REJcXHUwNURGLCBcXHUwNUQyXFx1MDVERCBcXHUwNUQwXFx1MDVFMFxcdTA1RDdcXHUwNUUwXFx1MDVENSBcXHUwNUQxXFx1MDVFMVxcdTA1RDVcXHUwNUUzIFxcdTA1RDRcXHUwNUUxXFx1MDVFQVxcdTA1RDVcXHUwNUQxXFx1MDVEMVxcdTA1RTBcXHUwNUQ1IFxcdTA1RENcXHUwNUQ3XFx1MDVFNFxcdTA1RTkgXFx1MDVFMFxcdTA1RDlcXHUwNUQ5XFx1MDVFOCBcXHUwNUQ1XFx1MDVFMlxcdTA1RDggXFx1MDVENVxcdTA1RDRcXHUwNUVBXFx1MDVEN1xcdTA1RENcXHUwNUUwXFx1MDVENSBcXHUwNURCXFx1MDVERVxcdTA1RDUgXFx1MDVEMVxcdTA1RTlcXHUwNUUwXFx1MDVENVxcdTA1RUEgXFx1MDVENDgwIFxcdTA1RENcXHUwNURCXFx1MDVFQVxcdTA1RDVcXHUwNUQxIFxcdTA1RTlcXHUwNURFXFx1MDVENVxcdTA1RUEgXFx1MDVENVxcdTA1RENcXHUwNUQ0XFx1MDVFQVxcdTA1RDdcXHUwNUQ5XFx1MDVEQyBcXHUwNURDXFx1MDVFN1xcdTA1RThcXHUwNUQ1XFx1MDVFMiBcXHUwNUU0XFx1MDVFQVxcdTA1RTdcXHUwNUQ5XFx1MDVERCBcXHUwNUQ1XFx1MDVEQ1xcdTA1RDRcXHUwNUQyXFx1MDVFOFxcdTA1RDlcXHUwNURDIFxcdTA1REVcXHUwNURCXFx1MDVENVxcdTA1RDFcXHUwNUUyLjwvcD5cXHJcXG4gICAgICAgIDxwPlxcdTA1RENcXHUwNUUwXFx1MDVENSBcXHUwNURDXFx1MDVFN1xcdTA1RDcgXFx1MDVEMVxcdTA1RTFcXHUwNUQxXFx1MDVEOVxcdTA1RDFcXHUwNUQ1XFx1MDVFQSBcXHUwNUQ0XFx1MDVFOVxcdTA1RTJcXHUwNUQ0IFxcdTA1RTJcXHUwNUQzIFxcdTA1RTlcXHUwNUQ0XFx1MDVFQVxcdTA1RDdcXHUwNURDXFx1MDVFMFxcdTA1RDUgXFx1MDVEQ1xcdTA1RTlcXHUwNUQ3XFx1MDVFNywgXFx1MDVENVxcdTA1RENcXHUwNURCXFx1MDVERD88L3A+XFxyXFxuICAgICAgICA8cD5cXHUwNUQxXFx1MDVEM1xcdTA1RDlcXHUwNUQ1XFx1MDVFNyBcXHUwNUQxXFx1MDVFOVxcdTA1RDFcXHUwNUQ5XFx1MDVEQyBcXHUwNUU5XFx1MDVEQ1xcdTA1RDAgXFx1MDVEOVxcdTA1RTdcXHUwNUU4XFx1MDVENSBcXHUwNURDXFx1MDVEQlxcdTA1REQgXFx1MDVENFxcdTA1RTBcXHUwNUUxXFx1MDVEOVxcdTA1REQgXFx1MDVENVxcdTA1RDRcXHUwNUUwXFx1MDVFNFxcdTA1RENcXHUwNUQwXFx1MDVENVxcdTA1RUEgXFx1MDVEOVxcdTA1RTZcXHUwNUU4XFx1MDVFQVxcdTA1RDkgXFx1MDVEMFxcdTA1RUEgXFx1MDVENFxcdTA1RDBcXHUwNUU0XFx1MDVEQ1xcdTA1RDlcXHUwNUU3XFx1MDVFNlxcdTA1RDlcXHUwNUQ0IFxcdTA1RDRcXHUwNUU0XFx1MDVFOVxcdTA1RDVcXHUwNUQ4XFx1MDVENCBcXHUwNUQ0XFx1MDVENlxcdTA1RDUuPC9wPlxcclxcbiAgICAgICAgPHA+XFx1MDVEQ1xcdTA1RDAgXFx1MDVFMlxcdTA1RDVcXHUwNUQzIFxcdTA1RTlcXHUwNUUyXFx1MDVENCBcXHUwNUUyXFx1MDVEMyBcXHUwNUU5XFx1MDVERVxcdTA1RUFcXHUwNUQ3XFx1MDVEOVxcdTA1RENcXHUwNUQ5XFx1MDVERCBcXHUwNURDXFx1MDVFOVxcdTA1RDdcXHUwNUU3LCBcXHUwNUQ0XFx1MDVEQlxcdTA1REMgXFx1MDVFOFxcdTA1RTUgXFx1MDVERVxcdTA1RDRcXHUwNUU4IFxcdTA1REVcXHUwNUQwXFx1MDVENVxcdTA1RDMuPC9wPlxcclxcbiAgICAgICAgPHA+XFx1MDVEMVxcdTA1RUFcXHUwNUU3XFx1MDVENVxcdTA1RDVcXHUwNUQ0IFxcdTA1RTlcXHUwNUVBXFx1MDVERVxcdTA1RTZcXHUwNUQwXFx1MDVENSBcXHUwNUQwXFx1MDVFQSBcXHUwNUQ0XFx1MDVEMFxcdTA1RTRcXHUwNURDXFx1MDVEOVxcdTA1RTdcXHUwNUU2XFx1MDVEOVxcdTA1RDQgXFx1MDVERVxcdTA1RDVcXHUwNUUyXFx1MDVEOVxcdTA1RENcXHUwNUQ0LjwvcD5cXHJcXG4gICAgICAgIDxwPlxcdTA1RThcXHUwNUU0XFx1MDVEMFxcdTA1REM8L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YmFjay1idXR0b24+PC9iYWNrLWJ1dHRvbj5cXHJcXG48L2Rpdj4nKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dCgnLi9oZWxwLmNvbXBvbmVudC5odG1sJywnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGhlbHAgaGViIGJsdXItYmdcIj5cXHJcXG4gIDxoMSBjbGFzcz1cImhlYWRlclwiPnt7dm0ubmFtZX19PC9oMT5cXHJcXG5cXHJcXG4gIDxkaXYgY2xhc3M9XCJidXR0b25cIiBuZy1jbGljaz1cInZtLnNpbXBsZVNob3cgPSAhdm0uc2ltcGxlU2hvd1wiPlxcdTA1RDRcXHUwNUQyXFx1MDVFOFxcdTA1RENcXHUwNUQ0IFxcdTA1RThcXHUwNUQyXFx1MDVEOVxcdTA1RENcXHUwNUQ0PC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVwic2ltcGxlLWRyYXctaGVscFwiIG5nLWluaXQ9XCJ2bS5zaW1wbGVTaG93ID0gZmFsc2VcIiBuZy1zaG93PVwidm0uc2ltcGxlU2hvd1wiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVwiaGVscC1jb250IGNlbnRlci1ibG9ja1wiPlxcclxcbiAgICAgIDxwPjEuIFxcdTA1RDFcXHUwNUQ3XFx1MDVFOCBcXHUwNURFXFx1MDVFMVxcdTA1RTRcXHUwNUU4IFxcdTA1RTlcXHUwNUQ3XFx1MDVFN1xcdTA1RTBcXHUwNUQ5XFx1MDVERCBcXHUwNUQ0XFx1MDVERVxcdTA1RTlcXHUwNUVBXFx1MDVFQVxcdTA1RTRcXHUwNUQ5XFx1MDVERCBcXHUwNUQxXFx1MDVEOFxcdTA1RDVcXHUwNUU4XFx1MDVFMFxcdTA1RDlcXHUwNUU4IFxcdTA1RDVcXHUwNURDXFx1MDVEN1xcdTA1RTUgXCJcXHUwNUQwXFx1MDVFOVxcdTA1RThcIjwvcD5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVwiaGVscC1waWNcIiBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvc2QxLmpwZ1wiIGFsdD1cIlwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImhlbHAtY29udCBjZW50ZXItYmxvY2tcIj5cXHJcXG4gICAgICA8cD4yLiBcXHUwNUQ0XFx1MDVEQlxcdTA1RTBcXHUwNUUxIFxcdTA1RDBcXHUwNUVBIFxcdTA1RTlcXHUwNURFXFx1MDVENVxcdTA1RUEgXFx1MDVENFxcdTA1RTlcXHUwNUQ3XFx1MDVFN1xcdTA1RTBcXHUwNUQ5XFx1MDVERCBcXHUwNUQ0XFx1MDVERVxcdTA1RTlcXHUwNUVBXFx1MDVFQVxcdTA1RTRcXHUwNUQ5XFx1MDVERCBcXHUwNUQ1XFx1MDVEQ1xcdTA1RDdcXHUwNUU1IFwiXFx1MDVENFxcdTA1RDJcXHUwNUU4XFx1MDVEQ1wiPC9wPlxcclxcbiAgICAgIDxpbWcgY2xhc3M9XCJoZWxwLXBpY1wiIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9zZDIuanBnXCIgYWx0PVwiXCI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVwiaGVscC1jb250IGNlbnRlci1ibG9jayByZXN1bHRzXCI+XFxyXFxuICAgICAgPHA+My4gXFx1MDVFQVxcdTA1RDVcXHUwNUU2XFx1MDVEMFxcdTA1RDVcXHUwNUVBIFxcdTA1RDRcXHUwNUQ2XFx1MDVENVxcdTA1RDJcXHUwNUQ1XFx1MDVFQSBcXHUwNUQ5XFx1MDVENVxcdTA1RTRcXHUwNUQ5XFx1MDVFMlxcdTA1RDUgXFx1MDVEMVxcdTA1RDZcXHUwNUQ1IFxcdTA1RDBcXHUwNUQ3XFx1MDVFOCBcXHUwNUQ2XFx1MDVENS4gXFx1MDVENFxcdTA1RUFcXHUwNUQ3XFx1MDVEOVxcdTA1RENcXHUwNUQ1IFxcdTA1RENcXHUwNUU5XFx1MDVEN1xcdTA1RTcuPC9wPlxcclxcbiAgICAgIDxpbWcgY2xhc3M9XCJoZWxwLXBpY1wiIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9zZDMuanBnXCIgYWx0PVwiXCI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuICA8ZGl2IGNsYXNzPVwiYnV0dG9uXCIgbmctY2xpY2s9XCJ2bS5ieUxldmVsU2hvdyA9ICF2bS5ieUxldmVsU2hvd1wiPlxcdTA1RDRcXHUwNUQyXFx1MDVFOFxcdTA1RENcXHUwNUQ0IFxcdTA1RENcXHUwNUU0XFx1MDVEOSBcXHUwNUU4XFx1MDVERVxcdTA1RDQ8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XCJieS1sZXZlbC1kcmF3LWhlbHBcIiBuZy1pbml0PVwidm0uYnlMZXZlbFNob3cgPSBmYWxzZVwiIG5nLXNob3c9XCJ2bS5ieUxldmVsU2hvd1wiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVwiaGVscC1jb250IGNlbnRlci1ibG9jayBieS1sZXZlbFwiPlxcclxcbiAgICAgIDxwPjEuIFxcdTA1RDFcXHUwNUQ3XFx1MDVFOCBcXHUwNURFXFx1MDVFMVxcdTA1RTRcXHUwNUU4IFxcdTA1RTlcXHUwNUQ3XFx1MDVFN1xcdTA1RTBcXHUwNUQ5XFx1MDVERCBcXHUwNUQ0XFx1MDVERVxcdTA1RTlcXHUwNUVBXFx1MDVFQVxcdTA1RTRcXHUwNUQ5XFx1MDVERCBcXHUwNUQxXFx1MDVEOFxcdTA1RDVcXHUwNUU4XFx1MDVFMFxcdTA1RDlcXHUwNUU4LCBcXHUwNURCXFx1MDVERVxcdTA1RDVcXHUwNUVBIFxcdTA1RTlcXHUwNUQ3XFx1MDVFN1xcdTA1RTBcXHUwNUQ5XFx1MDVERCBcXHUwNURFXFx1MDVFN1xcdTA1RTZcXHUwNUQ1XFx1MDVFMlxcdTA1RTBcXHUwNUQ5XFx1MDVERCBcXHUwNUQ1XFx1MDVEQlxcdTA1REVcXHUwNUQ1XFx1MDVFQSBcXHUwNUQ3XFx1MDVENVxcdTA1RDFcXHUwNUQxXFx1MDVFMFxcdTA1RDlcXHUwNUREIFxcdTA1RDVcXHUwNURDXFx1MDVEN1xcdTA1RTUgXCJcXHUwNUQwXFx1MDVFOVxcdTA1RThcIjwvcD5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVwiaGVscC1waWNcIiBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvYmwxLmpwZ1wiIGFsdD1cIlwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImhlbHAtY29udCBjZW50ZXItYmxvY2sgYnktbGV2ZWwgYmwyXCI+XFxyXFxuICAgICAgPHA+Mi4gXFx1MDVENFxcdTA1REJcXHUwNUUwXFx1MDVFMSBcXHUwNUQwXFx1MDVFQSBcXHUwNUU5XFx1MDVERVxcdTA1RDVcXHUwNUVBIFxcdTA1RDRcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQgXFx1MDVENFxcdTA1REVcXHUwNUU5XFx1MDVFQVxcdTA1RUFcXHUwNUU0XFx1MDVEOVxcdTA1REQgXFx1MDVEQ1xcdTA1RTRcXHUwNUQ5IFxcdTA1RThcXHUwNURFXFx1MDVENCBcXHUwNURCXFx1MDVEQSBcXHUwNUU5XFx1MDVERVxcdTA1RTdcXHUwNUU2XFx1MDVENVxcdTA1RTJcXHUwNURGIFxcdTA1RENcXHUwNUQwIFxcdTA1RDlcXHUwNUQ1XFx1MDVEMlxcdTA1RThcXHUwNURDIFxcdTA1RTJcXHUwNUREIFxcdTA1REVcXHUwNUU3XFx1MDVFNlxcdTA1RDVcXHUwNUUyXFx1MDVERiBcXHUwNUQ1XFx1MDVEN1xcdTA1RDVcXHUwNUQxXFx1MDVEMVxcdTA1REYgXFx1MDVEQ1xcdTA1RDAgXFx1MDVEOVxcdTA1RDVcXHUwNUQyXFx1MDVFOFxcdTA1REMgXFx1MDVFMlxcdTA1REQgXFx1MDVEN1xcdTA1RDVcXHUwNUQxXFx1MDVEMVxcdTA1REYgXFx1MDVENVxcdTA1RENcXHUwNUQ3XFx1MDVFNSBcIlxcdTA1RDRcXHUwNUQyXFx1MDVFOFxcdTA1RENcIjwvcD5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVwiaGVscC1waWNcIiBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvYmwyLmpwZ1wiIGFsdD1cIlwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImhlbHAtY29udCBjZW50ZXItYmxvY2sgcmVzdWx0c1wiPlxcclxcbiAgICAgIDxwPjMuIFxcdTA1RUFcXHUwNUQ1XFx1MDVFNlxcdTA1RDBcXHUwNUQ1XFx1MDVFQSBcXHUwNUQ0XFx1MDVENlxcdTA1RDVcXHUwNUQyXFx1MDVENVxcdTA1RUEgXFx1MDVEOVxcdTA1RDVcXHUwNUU0XFx1MDVEOVxcdTA1RTJcXHUwNUQ1IFxcdTA1RDFcXHUwNUQ2XFx1MDVENSBcXHUwNUQwXFx1MDVEN1xcdTA1RTggXFx1MDVENlxcdTA1RDUsIFxcdTA1REVcXHUwNUU3XFx1MDVFNlxcdTA1RDVcXHUwNUUyXFx1MDVERiBcXHUwNUUyXFx1MDVERCBcXHUwNUQ3XFx1MDVENVxcdTA1RDFcXHUwNUQxXFx1MDVERiBcXHUwNUQxXFx1MDVEQlxcdTA1REMgXFx1MDVFN1xcdTA1RDFcXHUwNUQ1XFx1MDVFNlxcdTA1RDQuIFxcdTA1RDRcXHUwNUVBXFx1MDVEN1xcdTA1RDlcXHUwNURDXFx1MDVENSBcXHUwNURDXFx1MDVFOVxcdTA1RDdcXHUwNUU3LjwvcD5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVwiaGVscC1waWNcIiBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvYmwzLmpwZ1wiIGFsdD1cIlwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGJhY2stYnV0dG9uPjwvYmFjay1idXR0b24+XFxyXFxuPC9kaXY+Jyk7XG4kdGVtcGxhdGVDYWNoZS5wdXQoJy4vbWVudS5jb21wb25lbnQuaHRtbCcsJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtZW51XCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgbWVudS1oZWFkZXJcIj57e3ZtLm5hbWV9fTwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVwiYmx1ci1iZyBiZy1tYWluXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1idG4gZmlyc3RCdG4gaGViXCIgbmctY2xpY2s9XCJ2bS5nb1RvU2ltcGxlRHJhdygpXCI+XFx1MDVENFxcdTA1RDJcXHUwNUU4XFx1MDVEQ1xcdTA1RDQgXFx1MDVFOFxcdTA1RDJcXHUwNUQ5XFx1MDVEQ1xcdTA1RDQ8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWJ0biBoZWJcIiBuZy1jbGljaz1cInZtLmdvVG9CeUxldmVsRHJhdygpXCI+XFx1MDVENFxcdTA1RDJcXHUwNUU4XFx1MDVEQ1xcdTA1RDQgXFx1MDVEQ1xcdTA1RTRcXHUwNUQ5IFxcdTA1RThcXHUwNURFXFx1MDVENDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtYnRuIGhlYlwiIG5nLWNsaWNrPVwidm0uZ29Ub0hlbHAoKVwiPlxcdTA1RTJcXHUwNUQ2XFx1MDVFOFxcdTA1RDQ8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWJ0biBoZWJcIiBuZy1jbGljaz1cInZtLmdvVG9BYm91dCgpXCI+XFx1MDVEMFxcdTA1RDVcXHUwNUQzXFx1MDVENVxcdTA1RUE8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuJyk7XG4kdGVtcGxhdGVDYWNoZS5wdXQoJy4vcmVzdWx0LmNvbXBvbmVudC5odG1sJywnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHJlc3VsdFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVwiYmx1ci1iZyBtb3JlLW9wYWNpdHlcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgaGViXCI+e3t2bS5uYW1lfX08L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lc0lucHV0c1wiPlxcclxcbiAgICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwiciBpbiB2bS5jb3VwbGVzXCIgY2xhc3M9XCJjb3VwbGVzXCIgc3R5bGU9XCItd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6e3skaW5kZXgqMTAwMH19bXNcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cInIuc2Vjb25kID09bnVsbFwiIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtZG93blwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj57e3IuZmlyc3R9fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IG5nLXNob3c9XCJyLnNlY29uZCAhPW51bGxcIiBjbGFzcz1cInNlcGVyYXRvclwiPnw8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBuZy1zaG93PVwici5zZWNvbmQgIT1udWxsXCIgY2xhc3M9XCJuYW1lXCI+e3tyLnNlY29uZH19PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XCJyLnNlY29uZCA9PW51bGxcIiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLWRvd25cIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxiYWNrLWJ1dHRvbj48L2JhY2stYnV0dG9uPlxcclxcbjwvZGl2PicpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KCcuL3NpbXBsZS1kcmF3LmNvbXBvbmVudC5odG1sJywnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHNpbXBsZS1kcmF3IFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVwiYmx1ci1iZ1wiPlxcclxcbiAgICAgICAgPHAgY2xhc3M9XCJobXBsYXllcnMgaGViXCI+XFx1MDVEQlxcdTA1REVcXHUwNUQ0IFxcdTA1RTlcXHUwNUQ3XFx1MDVFN1xcdTA1RTBcXHUwNUQ5XFx1MDVERD8gPHNwYW4+KDQtMjApPC9zcGFuPjwvcD5cXHJcXG4gICAgICAgIDxociAvPlxcclxcblxcclxcbiAgICAgICAgPGZvcm0gbmFtZT1cIm15Rm9ybVwiIG5nLXN1Ym1pdD1cInZtLlN1Ym1pdCgpXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0QnV0dG9uc1wiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IG5nLWNsaWNrPVwidm0uQWRkT25lKClcIiBjbGFzcz1cImlucHV0QnV0dG9uc0NoaWxkIGlucHV0QnV0dG9uc1wiPjxzcGFuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXMgcGx1c01pbnVzXCI+PC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmctbW9kZWw9XCJ2bS5Db3VudFwiIGNsYXNzPVwiaW5wdXRCdXR0b25zQ2hpbGQgY291bnRJbnB1dCBoZWJcIiB0eXBlPVwidGV4dFwiIHJlYWRvbmx5IHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgbmctY2xpY2s9XCJ2bS5SZW1vdmVPbmUoKVwiIGNsYXNzPVwiaW5wdXRCdXR0b25zQ2hpbGQgaW5wdXRCdXR0b25zXCI+PHNwYW5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbWludXMgcGx1c01pbnVzXCI+PC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImNvbmZpcm0tYnRuIGhlYlwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlxcdTA1RDBcXHUwNUU5XFx1MDVFOFwiIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiBuZy1zaG93PVwidm0uaXNJbnZhbGlkXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cXHUwNUQwXFx1MDVFMFxcdTA1RDAgXFx1MDVEMVxcdTA1RDdcXHUwNUU4IFxcdTA1REVcXHUwNUUxXFx1MDVFNFxcdTA1RTggXFx1MDVFOVxcdTA1RDdcXHUwNUU3XFx1MDVFMFxcdTA1RDlcXHUwNUREIChcXHUwNURDXFx1MDVFNFxcdTA1RDdcXHUwNUQ1XFx1MDVFQSA0KTwvZGl2PlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVzSW5wdXRzXCI+XFxyXFxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ3aG9wbGF5cyBoZWJcIiBuZy1zaG93PVwidm0uU2hvd0J1dHRvblwiPlxcdTA1REVcXHUwNUQ5IFxcdTA1REVcXHUwNUU5XFx1MDVEN1xcdTA1RTc/PC9wPlxcclxcbiAgICAgICAgICAgIDxociBuZy1zaG93PVwidm0uU2hvd0J1dHRvblwiIC8+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGZvcm0gbmFtZT1cInZtLnBsYXllcnNGb3JtXCIgbm92YWxpZGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicGxheWVySW5wdXRcIiB0eXBlPVwidGV4dFwiIG5nLW1vZGVsPVwicC5uYW1lXCIgbmctcmVwZWF0PVwicCBpbiB2bS5QbGF5ZXJzXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwbGF5ZXJ7eyRpbmRleH19XCIgcGxhY2Vob2xkZXI9XCJcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNURGIHt7JGluZGV4KzF9fVwiIHJlcXVpcmVkXFxyXFxuICAgICAgICAgICAgICAgICAgICBuZy1jbGFzcz1cIntcXCdlcnJvclxcJzogdm0ucGxheWVyc0Zvcm0ucGxheWVye3skaW5kZXh9fS4kaW52YWxpZCAgJiYgdm0uc3VibWl0dGVkfVwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDxiciAvPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IG5nLXNob3c9XCJ2bS5wbGF5ZXJzRm9ybS4kaW52YWxpZCAmJiB2bS5zdWJtaXR0ZWRcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxcdTA1RDdcXHUwNUQ1XFx1MDVEMVxcdTA1RDQgXFx1MDVEQ1xcdTA1RDRcXHUwNURCXFx1MDVFMFxcdTA1RDlcXHUwNUUxIFxcdTA1RTlcXHUwNURFXFx1MDVENVxcdTA1RUFcXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcdTA1RTlcXHUwNUQ3XFx1MDVFN1xcdTA1RTBcXHUwNUQ5XFx1MDVERDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiY29uZmlybS1idG4gaGViIGRyYXdcIiBuZy1zaG93PVwidm0uUGxheWVycy5sZW5ndGg+MFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cInZtLlNodWZmbGUoKTt2bS5zdWJtaXR0ZWQgPSB0cnVlXCIgdmFsdWU9XCJcXHUwNUQ0XFx1MDVEMlxcdTA1RThcXHUwNURDXCI+XFxyXFxuICAgICAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8YmFjay1idXR0b24+PC9iYWNrLWJ1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+Jyk7fV0pOyIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3Jvb3QnKVxyXG4gICAgLmNvbXBvbmVudCgncm9vdCcsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vcm9vdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogcm9vdENvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgICAgIEJpbmRpbmc6ICc9JyxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG5mdW5jdGlvbiByb290Q29udHJvbGxlcigpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbn1cclxuIiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnYXBwJylcclxuICAgIC5jb21wb25lbnQoJ2FwcCcsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiBhcHBDb250cm9sbGVyLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgIH0pO1xyXG5cclxuZnVuY3Rpb24gYXBwQ29udHJvbGxlcigpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbn1cclxuIiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnYXBwJylcclxuICAgIC5jb21wb25lbnQoJ2JhY2tCdXR0b24nLCB7XHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL2JhY2stYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiBiYWNrQnV0dG9uQ29udHJvbGxlcixcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgIH0pO1xyXG5iYWNrQnV0dG9uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc3RhdGUnXTtcclxuZnVuY3Rpb24gYmFja0J1dHRvbkNvbnRyb2xsZXIoJHN0YXRlKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgdm0uYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ21lbnUnKTtcclxuICAgIH07XHJcbn1cclxuIiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cycpXHJcbiAgICAuY29tcG9uZW50KCdieUxldmVsRHJhdycsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vYnktbGV2ZWwtZHJhdy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogYnlMZXZlbERyYXdDb250cm9sbGVyLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgICAgICBiaW5kaW5nczoge1xyXG4gICAgICAgICAgICBCaW5kaW5nOiAnPScsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuYnlMZXZlbERyYXdDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzdGF0ZScsICdyZXN1bHRTZXJ2aWNlJywgJyRjb29raWVzJ107XHJcblxyXG5mdW5jdGlvbiBieUxldmVsRHJhd0NvbnRyb2xsZXIoJHN0YXRlLCByZXN1bHRTZXJ2aWNlLCAkY29va2llcykge1xyXG4gICAgdmFyIHZtID0gdGhpcztcclxuICAgIHZtLm5hbWUgPSBcIteU15LXqNecINeR15nXnyDXqNee15XXqlwiO1xyXG4gICAgdm0uQ291bnRQcm8gPSAkY29va2llcy5nZXRPYmplY3QoJ2NvdW50UHJvJykgPyAkY29va2llcy5nZXRPYmplY3QoJ2NvdW50UHJvJykgOiAwO1xyXG4gICAgdm0uQ291bnRBbWF0ZXVyID0gJGNvb2tpZXMuZ2V0T2JqZWN0KCdjb3VudEFtYXRldXInKSA/ICRjb29raWVzLmdldE9iamVjdCgnY291bnRBbWF0ZXVyJykgOiAwO1xyXG4gICAgdm0uUGxheWVyc1BybyA9ICRjb29raWVzLmdldE9iamVjdCgncGxheWVyc1BybycpOztcclxuICAgIHZtLlBsYXllcnNBbWF0ZXVyID0gJGNvb2tpZXMuZ2V0T2JqZWN0KCdwbGF5ZXJzQW1hdGV1cicpO1xyXG5cclxuXHJcbiAgICB2bS5BZGRPbmVQcm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHZtLkNvdW50UHJvID09IDApIHtcclxuICAgICAgICAgICAgdm0uQ291bnRQcm8gPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2bS5Db3VudFBybyA8IDEwKSB7XHJcbiAgICAgICAgICAgIHZtLkNvdW50UHJvKys7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2bS5SZW1vdmVPbmVQcm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHZtLkNvdW50UHJvID4gMikge1xyXG4gICAgICAgICAgICB2bS5Db3VudFByby0tO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdm0uQWRkT25lQW1hdGV1ciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodm0uQ291bnRBbWF0ZXVyID09IDApIHtcclxuICAgICAgICAgICAgdm0uQ291bnRBbWF0ZXVyID0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodm0uQ291bnRBbWF0ZXVyIDwgMTApIHtcclxuICAgICAgICAgICAgdm0uQ291bnRBbWF0ZXVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2bS5SZW1vdmVPbmVBbWF0ZXVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh2bS5Db3VudEFtYXRldXIgPiAyKSB7XHJcbiAgICAgICAgICAgIHZtLkNvdW50QW1hdGV1ci0tO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdm0uU3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh2bS5Db3VudFBybyAhPSAwICYmIHZtLkNvdW50QW1hdGV1ciAhPSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNJbnZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICRjb29raWVzLnJlbW92ZSgnbW9kZScpO1xyXG4gICAgICAgICAgICAkY29va2llcy5yZW1vdmUoJ2NvdW50UHJvJyk7XHJcbiAgICAgICAgICAgICRjb29raWVzLnJlbW92ZSgnY291bnRBbWF0ZXVyJyk7XHJcbiAgICAgICAgICAgICRjb29raWVzLnJlbW92ZSgncGxheWVyc1BybycpO1xyXG4gICAgICAgICAgICAkY29va2llcy5yZW1vdmUoJ3BsYXllcnNBbWF0ZXVyJyk7XHJcbiAgICAgICAgICAgIHZtLlBsYXllcnNQcm8gPSBuZXcgQXJyYXkocGFyc2VJbnQodm0uQ291bnRQcm8pKTtcclxuICAgICAgICAgICAgdm0uUGxheWVyc0FtYXRldXIgPSBuZXcgQXJyYXkocGFyc2VJbnQodm0uQ291bnRBbWF0ZXVyKSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uUGxheWVyc1Byby5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdm0uUGxheWVyc1Byb1tpXSA9IHsgbmFtZTogXCJcIiB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB2bS5QbGF5ZXJzQW1hdGV1ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdm0uUGxheWVyc0FtYXRldXJbaV0gPSB7IG5hbWU6IFwiXCIgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2bS5TaG93QnV0dG9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgdm0uSXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2bS5pc0ludmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdm0uU2h1ZmZsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodm0ucGxheWVyc0Zvcm0uJHZhbGlkKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFNlcnZpY2UuZW1wdHlSZXN1bHRzKCk7XHJcbiAgICAgICAgICAgICRjb29raWVzLnB1dCgnbW9kZScsICdsZXZlbCcpO1xyXG4gICAgICAgICAgICAkY29va2llcy5wdXRPYmplY3QoJ2NvdW50UHJvJywgdm0uQ291bnRQcm8pO1xyXG4gICAgICAgICAgICAkY29va2llcy5wdXRPYmplY3QoJ2NvdW50QW1hdGV1cicsIHZtLkNvdW50QW1hdGV1cik7XHJcbiAgICAgICAgICAgICRjb29raWVzLnB1dE9iamVjdCgncGxheWVyc1BybycsIHZtLlBsYXllcnNQcm8pO1xyXG4gICAgICAgICAgICAkY29va2llcy5wdXRPYmplY3QoJ3BsYXllcnNBbWF0ZXVyJywgdm0uUGxheWVyc0FtYXRldXIpO1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ3Jlc3VsdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdm0uc2hvd1BsYXllcnNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2bS5SYW5kb21pemVSZXN1bHRzID0gZnVuY3Rpb24gKGFycmF5KSB7XHJcblxyXG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcclxuXHJcbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cclxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XHJcblxyXG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cclxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cclxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSBhcnJheVtjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICBhcnJheVtjdXJyZW50SW5kZXhdID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgICAgICBhcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH07XHJcbn1cclxuIiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cycpXHJcbiAgICAuY29tcG9uZW50KCdhYm91dCcsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vYWJvdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IGFib3V0Q29udHJvbGxlcixcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgIH0pO1xyXG5hYm91dENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHN0YXRlJ107XHJcbmZ1bmN0aW9uIGFib3V0Q29udHJvbGxlcigkc3RhdGUpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICB2bS5uYW1lID0gXCLXkNeV15PXldeqXCI7XHJcbn1cclxuIiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cycpXHJcbiAgICAuY29tcG9uZW50KCdoZWxwJywge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9oZWxwLmNvbXBvbmVudC5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiBoZWxwQ29udHJvbGxlcixcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICAgICAgYmluZGluZ3M6IHtcclxuICAgICAgICAgICAgQmluZGluZzogJz0nLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbmZ1bmN0aW9uIGhlbHBDb250cm9sbGVyKCkge1xyXG4gICAgdmFyIHZtID0gdGhpcztcclxuICAgIHZtLm5hbWUgPSBcItei15bXqNeUXCI7XHJcbn1cclxuIiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnbWVudScpXHJcbiAgICAuY29tcG9uZW50KCdmaWZhTWVudScsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogbWVudUNvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgICAgIEJpbmRpbmc6ICc9JyxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbm1lbnVDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzdGF0ZSddO1xyXG5mdW5jdGlvbiBtZW51Q29udHJvbGxlcigkc3RhdGUpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICB2bS5uYW1lID0gXCLXnteZINeg15LXkyBNZT9cIjtcclxuXHJcbiAgICB2bS5nb1RvU2ltcGxlRHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ3NpbXBsZURyYXcnKTtcclxuICAgIH07XHJcbiAgICB2bS5nb1RvQnlMZXZlbERyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKCdieUxldmVsRHJhdycpO1xyXG4gICAgfTtcclxuICAgIHZtLmdvVG9IZWxwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbygnaGVscCcpO1xyXG4gICAgfTtcclxuICAgIHZtLmdvVG9BYm91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ2Fib3V0Jyk7XHJcbiAgICB9O1xyXG59XHJcbiIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMnKVxyXG4gICAgLmNvbXBvbmVudCgncmVzdWx0Jywge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9yZXN1bHQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IHJlc3VsdENvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICB9KTtcclxuXHJcbnJlc3VsdENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHN0YXRlJywgJ3Jlc3VsdFNlcnZpY2UnLCAnJHRpbWVvdXQnXTtcclxuXHJcbmZ1bmN0aW9uIHJlc3VsdENvbnRyb2xsZXIoJHN0YXRlLCByZXN1bHRTZXJ2aWNlLCAkdGltZW91dCkge1xyXG4gICAgaWYgKHJlc3VsdFNlcnZpY2UucmVzdWx0c0FyZU5vdEVtcHR5KCkpIHtcclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgICAgIHZtLm5hbWUgPSBcIteV15TXqNeZINeq15XXpteQ15XXqlwiO1xyXG4gICAgICAgIHZtLmNvdXBsZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdm0uJG9uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdm0uY291cGxlcyA9IHJlc3VsdFNlcnZpY2UuZ2V0UmVzdWx0cygpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codm0uY291cGxlcyk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyAkc3RhdGUuZ28oJ21lbnUnKTtcclxuICAgIH1cclxufVxyXG4iLCJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdyZXN1bHQnKVxyXG4gICAgLnNlcnZpY2UoJ3Jlc3VsdFNlcnZpY2UnLCByZXN1bHRTZXJ2aWNlKTtcclxuXHJcbnJlc3VsdFNlcnZpY2UuJGluamVjdCA9IFsnJGNvb2tpZXMnXTtcclxuXHJcbmZ1bmN0aW9uIHJlc3VsdFNlcnZpY2UoJGNvb2tpZXMpIHtcclxuICAgIHZhciByZXN1bHRzID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UmVzdWx0cygpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHB1c2hSZXN1bHQocmVzdWx0KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZW1wdHlSZXN1bHRzKCkge1xyXG4gICAgICAgIHJlc3VsdHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXN1bHRzQXJlTm90RW1wdHkoKSB7XHJcbiAgICAgICAgdmFyIHBsYXllcnMgPSAkY29va2llcy5nZXRPYmplY3QoJ3BsYXllcnMnKTtcclxuICAgICAgICB2YXIgcGxheWVyc1BybyA9ICRjb29raWVzLmdldE9iamVjdCgncGxheWVyc1BybycpO1xyXG4gICAgICAgIGlmIChwbGF5ZXJzIHx8IHBsYXllcnNQcm8pIHtcclxuICAgICAgICAgICAgbWFrZUNvdXBsZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlQ291cGxlcygpIHtcclxuICAgICAgICB2YXIgbW9kZSA9ICRjb29raWVzLmdldCgnbW9kZScpO1xyXG4gICAgICAgIGlmIChtb2RlID09PSAnc2ltcGxlJykge1xyXG4gICAgICAgICAgICB2YXIgcGxheWVycyA9ICRjb29raWVzLmdldE9iamVjdCgncGxheWVycycpO1xyXG4gICAgICAgICAgICBwbGF5ZXJzID0gcmFuZG9taXplUmVzdWx0cyhwbGF5ZXJzKTtcclxuICAgICAgICAgICAgaGFuZGxlU2ltcGxlRHJhdyhwbGF5ZXJzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtb2RlID09PSAnbGV2ZWwnKSB7XHJcbiAgICAgICAgICAgIHZhciBwbGF5ZXJzUHJvID0gJGNvb2tpZXMuZ2V0T2JqZWN0KCdwbGF5ZXJzUHJvJyk7XHJcbiAgICAgICAgICAgIHZhciBwbGF5ZXJzQW1hdGV1ciA9ICRjb29raWVzLmdldE9iamVjdCgncGxheWVyc0FtYXRldXInKTtcclxuICAgICAgICAgICAgcGxheWVyc1BybyA9IHJhbmRvbWl6ZVJlc3VsdHMocGxheWVyc1Bybyk7XHJcbiAgICAgICAgICAgIHBsYXllcnNBbWF0ZXVyID0gcmFuZG9taXplUmVzdWx0cyhwbGF5ZXJzQW1hdGV1cik7XHJcbiAgICAgICAgICAgIGhhbmRsZUJ5TGV2ZWxEcmF3KHBsYXllcnNBbWF0ZXVyLCBwbGF5ZXJzUHJvKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByYW5kb21pemVSZXN1bHRzKGFycmF5KSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xyXG5cclxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxyXG4gICAgICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcclxuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXHJcbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XHJcblxyXG4gICAgICAgICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gYXJyYXlbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgYXJyYXlbY3VycmVudEluZGV4XSA9IGFycmF5W3JhbmRvbUluZGV4XTtcclxuICAgICAgICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2ltcGxlRHJhdyhhcnJheSkge1xyXG4gICAgICAgIHdoaWxlIChhcnJheS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgY291cGxlID0ge307XHJcbiAgICAgICAgICAgIGlmIChhcnJheS5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgY291cGxlID0ge307XHJcbiAgICAgICAgICAgICAgICBjb3VwbGUuZmlyc3QgPSBhcnJheVthcnJheS5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgY291cGxlLnNlY29uZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goY291cGxlKTtcclxuICAgICAgICAgICAgICAgIGFycmF5LnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY291cGxlID0ge307XHJcbiAgICAgICAgICAgICAgICBjb3VwbGUuZmlyc3QgPSBhcnJheVthcnJheS5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgY291cGxlLnNlY29uZCA9IGFycmF5W2FycmF5Lmxlbmd0aCAtIDJdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goY291cGxlKTtcclxuICAgICAgICAgICAgICAgIGFycmF5LnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgYXJyYXkucG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQnlMZXZlbERyYXcoYXJyUHJvLCBhcnJBbWF0ZXVyKSB7XHJcbiAgICAgICAgd2hpbGUgKGFyclByby5sZW5ndGggIT0gMCB8fCBhcnJBbWF0ZXVyLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBjb3VwbGUgPSB7fTtcclxuICAgICAgICAgICAgaWYgKGFyclByby5sZW5ndGggPT0gMSB8fCBhcnJBbWF0ZXVyLmxlbmd0aCA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFyclByby5sZW5ndGggPT0gMSAmJiBhcnJBbWF0ZXVyLmxlbmd0aCA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvdXBsZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdXBsZS5maXJzdCA9IGFyclByb1thcnJQcm8ubGVuZ3RoIC0gMV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VwbGUuc2Vjb25kID0gYXJyQW1hdGV1clthcnJBbWF0ZXVyLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGNvdXBsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyUHJvLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyckFtYXRldXIucG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYXJyUHJvLmxlbmd0aCA8PSAxICYmIGFyckFtYXRldXIubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VwbGUgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VwbGUuZmlyc3QgPSBhcnJQcm9bYXJyUHJvLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY291cGxlLnNlY29uZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGNvdXBsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyUHJvLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYXJyUHJvLmxlbmd0aCA9PSAwICYmIGFyckFtYXRldXIubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VwbGUgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VwbGUuZmlyc3QgPSBhcnJBbWF0ZXVyW2FyckFtYXRldXIubGVuZ3RoIC0gMV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VwbGUuc2Vjb25kID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goY291cGxlKTtcclxuICAgICAgICAgICAgICAgICAgICBhcnJBbWF0ZXVyLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYXJyUHJvLmxlbmd0aCA+IDEgJiYgYXJyQW1hdGV1ci5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdXBsZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdXBsZS5maXJzdCA9IGFyclByb1thcnJQcm8ubGVuZ3RoIC0gMV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VwbGUuc2Vjb25kID0gYXJyQW1hdGV1clthcnJBbWF0ZXVyLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGNvdXBsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyUHJvLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyckFtYXRldXIucG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhcnJQcm8ubGVuZ3RoID09IDEgJiYgYXJyQW1hdGV1ci5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291cGxlID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgY291cGxlLmZpcnN0ID0gYXJyUHJvW2FyclByby5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdXBsZS5zZWNvbmQgPSBhcnJBbWF0ZXVyW2FyckFtYXRldXIubGVuZ3RoIC0gMV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goY291cGxlKTtcclxuICAgICAgICAgICAgICAgICAgICBhcnJQcm8ucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyQW1hdGV1ci5wb3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcnJQcm8ubGVuZ3RoID4gMCAmJiBhcnJBbWF0ZXVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VwbGUgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VwbGUuZmlyc3QgPSBhcnJQcm9bYXJyUHJvLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY291cGxlLnNlY29uZCA9IGFyckFtYXRldXJbYXJyQW1hdGV1ci5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChjb3VwbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyclByby5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBhcnJBbWF0ZXVyLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyclByby5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyQW1hdGV1ci5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZS5maXJzdCA9IGFyckFtYXRldXJbYXJyQW1hdGV1ci5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLnNlY29uZCA9IGFyckFtYXRldXJbYXJyQW1hdGV1ci5sZW5ndGggLSAyXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGNvdXBsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJBbWF0ZXVyLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyQW1hdGV1ci5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLmZpcnN0ID0gYXJyQW1hdGV1clthcnJBbWF0ZXVyLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuc2Vjb25kID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChjb3VwbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyQW1hdGV1ci5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhcnJBbWF0ZXVyLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJQcm8ubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuZmlyc3QgPSBhcnJQcm9bYXJyUHJvLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuc2Vjb25kID0gYXJyUHJvW2FyclByby5sZW5ndGggLSAyXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGNvdXBsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJQcm8ucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJQcm8ucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTY291cGxlID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuZmlyc3QgPSBhcnJQcm9bYXJyUHJvLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUuc2Vjb25kID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChjb3VwbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyUHJvLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFJlc3VsdHM6IGdldFJlc3VsdHMsXHJcbiAgICAgICAgcHVzaFJlc3VsdDogcHVzaFJlc3VsdCxcclxuICAgICAgICBlbXB0eVJlc3VsdHM6IGVtcHR5UmVzdWx0cyxcclxuICAgICAgICByZXN1bHRzQXJlTm90RW1wdHk6IHJlc3VsdHNBcmVOb3RFbXB0eSxcclxuICAgICAgICBSYW5kb21pemVSZXN1bHRzOiByYW5kb21pemVSZXN1bHRzXHJcbiAgICB9O1xyXG59IiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cycpXHJcbiAgICAuY29tcG9uZW50KCdzaW1wbGVEcmF3Jywge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9zaW1wbGUtZHJhdy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogc2ltcGxlRHJhd0NvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgICAgIEJpbmRpbmc6ICc9JyxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG5zaW1wbGVEcmF3Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc3RhdGUnLCAncmVzdWx0U2VydmljZScsICckY29va2llcyddO1xyXG5cclxuZnVuY3Rpb24gc2ltcGxlRHJhd0NvbnRyb2xsZXIoJHN0YXRlLCByZXN1bHRTZXJ2aWNlLCAkY29va2llcykge1xyXG4gICAgdmFyIHZtID0gdGhpcztcclxuICAgIHZtLm5hbWUgPSBcIteU15LXqNec15Qg16jXkteZ15zXlFwiO1xyXG4gICAgdm0uaXNJbnZhbGlkID0gZmFsc2U7XHJcbiAgICB2bS5Db3VudCA9ICRjb29raWVzLmdldE9iamVjdCgnY291bnQnKSA/ICRjb29raWVzLmdldE9iamVjdCgnY291bnQnKSA6IDA7XHJcbiAgICB2bS5TaG93QnV0dG9uID0gZmFsc2U7XHJcbiAgICB2bS5zaG93UGxheWVyc0Vycm9yID0gZmFsc2U7XHJcbiAgICB2bS5QbGF5ZXJzID0gJGNvb2tpZXMuZ2V0T2JqZWN0KCdwbGF5ZXJzJyk7XHJcblxyXG5cclxuICAgIHZtLlN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodm0uQ291bnQgIT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzSW52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAkY29va2llcy5yZW1vdmUoJ21vZGUnKTtcclxuICAgICAgICAgICAgJGNvb2tpZXMucmVtb3ZlKCdjb3VudCcpO1xyXG4gICAgICAgICAgICAkY29va2llcy5yZW1vdmUoJ3BsYXllcnMnKTtcclxuICAgICAgICAgICAgdm0uUGxheWVycyA9IG5ldyBBcnJheShwYXJzZUludCh2bS5Db3VudCkpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLlBsYXllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZtLlBsYXllcnNbaV0gPSB7IG5hbWU6IG51bGwgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2bS5TaG93QnV0dG9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZtLmlzSW52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2bS5BZGRPbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHZtLkNvdW50ID09IDApIHtcclxuICAgICAgICAgICAgdm0uQ291bnQgPSA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2bS5Db3VudCA8IDIwKSB7XHJcbiAgICAgICAgICAgIHZtLkNvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2bS5SZW1vdmVPbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHZtLkNvdW50ID4gNCkge1xyXG4gICAgICAgICAgICB2bS5Db3VudC0tO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIHZtLlNodWZmbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHZtLnBsYXllcnNGb3JtLiR2YWxpZCkge1xyXG4gICAgICAgICAgICAkY29va2llcy5wdXQoJ21vZGUnLCAnc2ltcGxlJyk7XHJcbiAgICAgICAgICAgICRjb29raWVzLnB1dE9iamVjdCgnY291bnQnLCB2bS5Db3VudCk7XHJcbiAgICAgICAgICAgICRjb29raWVzLnB1dE9iamVjdCgncGxheWVycycsIHZtLlBsYXllcnMpO1xyXG4gICAgICAgICAgICByZXN1bHRTZXJ2aWNlLmVtcHR5UmVzdWx0cygpO1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ3Jlc3VsdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdm0uc2hvd1BsYXllcnNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iXX0=
