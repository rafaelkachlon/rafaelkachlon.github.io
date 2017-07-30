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
angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./root.component.html','<div style="transform: scale(1); transform-origin: 0px 0px 0px;">\r\n    <div class="mobile-emulator">\r\n        <div id="frame-emulator" class="frame-emulator frame-scroller">\r\n            <div class="root">\r\n                <img src="./../assets/images/logo.png" class="logo">\r\n                <ui-view></ui-view>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>');
$templateCache.put('./app.component.html','<div class="app">\r\n    <div ui-view></div>\r\n</div>');
$templateCache.put('./back-button.component.html','<button type="submit" class="back-btn heb" ng-click="vm.Back()">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button>');
$templateCache.put('./about.component.html','<div class="text-center about heb">\r\n    <div class="blur-bg more-opacity">\r\n        <div class="header about-header">{{vm.name}}</div>\r\n        <p>\u05DB\u05DF, \u05D2\u05DD \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05E4\u05D9\u05E4\u05D0.</p>\r\n        <p>\u05D5\u05DB\u05DF, \u05D2\u05DD \u05D2\u05DD \u05DC\u05E0\u05D5 \u05E7\u05E8\u05D4 \u05E9\u05D9\u05E9\u05D1\u05E0\u05D5 \u05DB\u05DC \u05D4\u05D7\u05D1\u05E8\u05D9\u05DD \u05D5\u05D4\u05EA\u05D5\u05D5\u05DB\u05D7\u05E0\u05D5 \u05D3\u05E7\u05D5\u05EA \u05D0\u05E8\u05D5\u05DB\u05D5\u05EA \u05DE\u05D9 \u05E0\u05D2\u05D3 \u05DE\u05D9 \u05D5\u05D0\u05D9\u05DA \u05DC\u05D7\u05DC\u05E7 \u05D6\u05D5\u05D2\u05D5\u05EA.</p>\r\n        <p>\u05D5\u05DB\u05DF, \u05D2\u05DD \u05D0\u05E0\u05D7\u05E0\u05D5 \u05D1\u05E1\u05D5\u05E3 \u05D4\u05E1\u05EA\u05D5\u05D1\u05D1\u05E0\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E0\u05D9\u05D9\u05E8 \u05D5\u05E2\u05D8 \u05D5\u05D4\u05EA\u05D7\u05DC\u05E0\u05D5 \u05DB\u05DE\u05D5 \u05D1\u05E9\u05E0\u05D5\u05EA \u05D480 \u05DC\u05DB\u05EA\u05D5\u05D1 \u05E9\u05DE\u05D5\u05EA \u05D5\u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DC\u05E7\u05E8\u05D5\u05E2 \u05E4\u05EA\u05E7\u05D9\u05DD \u05D5\u05DC\u05D4\u05D2\u05E8\u05D9\u05DC \u05DE\u05DB\u05D5\u05D1\u05E2.</p>\r\n        <p>\u05DC\u05E0\u05D5 \u05DC\u05E7\u05D7 \u05D1\u05E1\u05D1\u05D9\u05D1\u05D5\u05EA \u05D4\u05E9\u05E2\u05D4 \u05E2\u05D3 \u05E9\u05D4\u05EA\u05D7\u05DC\u05E0\u05D5 \u05DC\u05E9\u05D7\u05E7, \u05D5\u05DC\u05DB\u05DD?</p>\r\n        <p>\u05D1\u05D3\u05D9\u05D5\u05E7 \u05D1\u05E9\u05D1\u05D9\u05DC \u05E9\u05DC\u05D0 \u05D9\u05E7\u05E8\u05D5 \u05DC\u05DB\u05DD \u05D4\u05E0\u05E1\u05D9\u05DD \u05D5\u05D4\u05E0\u05E4\u05DC\u05D0\u05D5\u05EA \u05D9\u05E6\u05E8\u05EA\u05D9 \u05D0\u05EA \u05D4\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05D4\u05E4\u05E9\u05D5\u05D8\u05D4 \u05D4\u05D6\u05D5.</p>\r\n        <p>\u05DC\u05D0 \u05E2\u05D5\u05D3 \u05E9\u05E2\u05D4 \u05E2\u05D3 \u05E9\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05DC\u05E9\u05D7\u05E7, \u05D4\u05DB\u05DC \u05E8\u05E5 \u05DE\u05D4\u05E8 \u05DE\u05D0\u05D5\u05D3.</p>\r\n        <p>\u05D1\u05EA\u05E7\u05D5\u05D5\u05D4 \u05E9\u05EA\u05DE\u05E6\u05D0\u05D5 \u05D0\u05EA \u05D4\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05DE\u05D5\u05E2\u05D9\u05DC\u05D4.</p>\r\n        <p>\u05E8\u05E4\u05D0\u05DC</p>\r\n    </div>\r\n    <back-button></back-button>\r\n</div>');
$templateCache.put('./by-level-draw.component.html','<div class="text-center by-level-draw heb">\r\n  <h1>{{vm.name}}</h1>\r\n  <back-button></back-button>\r\n</div>');
$templateCache.put('./help.component.html','<div class="text-center help heb">\r\n  <h1 class="header">{{vm.name}}</h1>\r\n\r\n  <div class="button" ng-click="vm.simpleShow = !vm.simpleShow">\u05D4\u05D2\u05E8\u05DC\u05D4 \u05E8\u05D2\u05D9\u05DC\u05D4</div>\r\n  <div class="simple-draw-help" ng-init="vm.simpleShow = false" ng-show="vm.simpleShow">\r\n    <div class="help-cont center-block">\r\n      <p>1. \u05D1\u05D7\u05E8 \u05DE\u05E1\u05E4\u05E8 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D1\u05D8\u05D5\u05E8\u05E0\u05D9\u05E8 \u05D5\u05DC\u05D7\u05E5 "\u05D0\u05E9\u05E8"</p>\r\n      <img class="help-pic" src="./../../../assets/images/sd1.jpg" alt="">\r\n    </div>\r\n    <div class="help-cont center-block">\r\n      <p>2. \u05D4\u05DB\u05E0\u05E1 \u05D0\u05EA \u05E9\u05DE\u05D5\u05EA \u05D4\u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D5\u05DC\u05D7\u05E5 "\u05D4\u05D2\u05E8\u05DC"</p>\r\n      <img class="help-pic" src="./../../../assets/images/sd2.jpg" alt="">\r\n    </div>\r\n    <div class="help-cont center-block results">\r\n      <p>3. \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D4\u05D6\u05D5\u05D2\u05D5\u05EA \u05D9\u05D5\u05E4\u05D9\u05E2\u05D5 \u05D1\u05D6\u05D5 \u05D0\u05D7\u05E8 \u05D6\u05D5. \u05D4\u05EA\u05D7\u05D9\u05DC\u05D5 \u05DC\u05E9\u05D7\u05E7.</p>\r\n      <img class="help-pic" src="./../../../assets/images/sd3.jpg" alt="">\r\n    </div>\r\n  </div>\r\n\r\n  <div class="button" ng-click="vm.byLevelShow = !vm.byLevelShow">\u05D4\u05D2\u05E8\u05DC\u05D4 \u05DC\u05E4\u05D9 \u05E8\u05DE\u05D4</div>\r\n  <div class="by-level-draw-help" ng-init="vm.byLevelShow = false" ng-show="vm.byLevelShow">\r\n    <div class="help-cont center-block by-level">\r\n      <p>1. \u05D1\u05D7\u05E8 \u05DE\u05E1\u05E4\u05E8 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D1\u05D8\u05D5\u05E8\u05E0\u05D9\u05E8, \u05DB\u05DE\u05D5\u05EA \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05DE\u05E7\u05E6\u05D5\u05E2\u05E0\u05D9\u05DD \u05D5\u05DB\u05DE\u05D5\u05EA \u05D7\u05D5\u05D1\u05D1\u05E0\u05D9\u05DD \u05D5\u05DC\u05D7\u05E5 "\u05D0\u05E9\u05E8"</p>\r\n      <img class="help-pic" src="./../../../assets/images/bl1.jpg" alt="">\r\n    </div>\r\n    <div class="help-cont center-block by-level bl2">\r\n      <p>2. \u05D4\u05DB\u05E0\u05E1 \u05D0\u05EA \u05E9\u05DE\u05D5\u05EA \u05D4\u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05DC\u05E4\u05D9 \u05E8\u05DE\u05D4 \u05DB\u05DA \u05E9\u05DE\u05E7\u05E6\u05D5\u05E2\u05DF \u05DC\u05D0 \u05D9\u05D5\u05D2\u05E8\u05DC \u05E2\u05DD \u05DE\u05E7\u05E6\u05D5\u05E2\u05DF \u05D5\u05D7\u05D5\u05D1\u05D1\u05DF \u05DC\u05D0 \u05D9\u05D5\u05D2\u05E8\u05DC \u05E2\u05DD \u05D7\u05D5\u05D1\u05D1\u05DF \u05D5\u05DC\u05D7\u05E5 "\u05D4\u05D2\u05E8\u05DC"</p>\r\n      <img class="help-pic" src="./../../../assets/images/bl2.jpg" alt="">\r\n    </div>\r\n    <div class="help-cont center-block results">\r\n      <p>3. \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D4\u05D6\u05D5\u05D2\u05D5\u05EA \u05D9\u05D5\u05E4\u05D9\u05E2\u05D5 \u05D1\u05D6\u05D5 \u05D0\u05D7\u05E8 \u05D6\u05D5, \u05DE\u05E7\u05E6\u05D5\u05E2\u05DF \u05E2\u05DD \u05D7\u05D5\u05D1\u05D1\u05DF \u05D1\u05DB\u05DC \u05E7\u05D1\u05D5\u05E6\u05D4. \u05D4\u05EA\u05D7\u05D9\u05DC\u05D5 \u05DC\u05E9\u05D7\u05E7.</p>\r\n      <img class="help-pic" src="./../../../assets/images/bl3.jpg" alt="">\r\n    </div>\r\n  </div>\r\n  <back-button></back-button>\r\n</div>');
$templateCache.put('./menu.component.html','<div class="text-center menu">\r\n    <div class="header menu-header">{{vm.name}}</div>\r\n    <div class="blur-bg bg-main">\r\n        <div class="menu-btn firstBtn heb" ng-click="vm.GoToSimpleDraw()">\u05D4\u05D2\u05E8\u05DC\u05D4 \u05E8\u05D2\u05D9\u05DC\u05D4</div>\r\n        <div class="menu-btn heb" ng-click="vm.GoToByLevelDraw()">\u05D4\u05D2\u05E8\u05DC\u05D4 \u05DC\u05E4\u05D9 \u05E8\u05DE\u05D4</div>\r\n        <div class="menu-btn heb" ng-click="vm.GoToHelp()">\u05E2\u05D6\u05E8\u05D4</div>\r\n        <div class="menu-btn heb" ng-click="vm.GoToAbout()">\u05D0\u05D5\u05D3\u05D5\u05EA</div>\r\n    </div>\r\n</div>');
$templateCache.put('./result.component.html','<div class="text-center result">\r\n    <div class="blur-bg more-opacity">\r\n        <div class="header heb">{{vm.name}}</div>\r\n        <div class="namesInputs">\r\n            <div ng-repeat="r in vm.couples" class="couples" style="-webkit-transition-delay:{{$index*1000}}ms">\r\n                <span ng-show="r.second ==null" class="glyphicon glyphicon-thumbs-down"></span>\r\n                <div class="name">{{r.first}}</div>\r\n                <div ng-show="r.second !=null" class="seperator">|</div>\r\n                <div ng-show="r.second !=null" class="name">{{r.second}}</div>\r\n                <span ng-show="r.second ==null" class="glyphicon glyphicon-thumbs-down"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <back-button></back-button>\r\n</div>');
$templateCache.put('./simple-draw.component.html','<div class="text-center simple-draw ">\r\n <div class="blur-bg">\r\n        <p class="hmplayers heb">\u05DB\u05DE\u05D4 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD? <span>(4-20)</span></p>\r\n        <hr />\r\n\r\n        <form name="myForm" ng-submit="vm.Submit()">\r\n            <div class="inputButtons">\r\n                <div ng-click="vm.AddOne()" class="inputButtonsChild inputButtons"><span class="glyphicon glyphicon-plus plusMinus"></span></div>\r\n                <input ng-model="vm.Count" class="inputButtonsChild countInput heb" type="text" readonly required />\r\n                <div ng-click="vm.RemoveOne()" class="inputButtonsChild inputButtons"><span class="glyphicon glyphicon-minus plusMinus"></span></div>\r\n            </div>\r\n            <input class="confirmBtn heb" type="submit" value="\u05D0\u05E9\u05E8"/>\r\n            <div ng-show="vm.isInvalid" class="alert alert-danger">\u05D0\u05E0\u05D0 \u05D1\u05D7\u05E8 \u05DE\u05E1\u05E4\u05E8 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD (\u05DC\u05E4\u05D7\u05D5\u05EA 4)</div>\r\n        </form>\r\n        <div class="namesInputs">\r\n            <p class="whoplays heb" ng-show="vm.ShowButton">\u05DE\u05D9 \u05DE\u05E9\u05D7\u05E7?</p>\r\n        <hr ng-show="vm.ShowButton" />\r\n            <div ng-show="vm.showPlayersError" class="alert alert-danger">\u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05E9\u05DE\u05D5\u05EA \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD</div>\r\n            <form>\r\n                <input class="playerInput" type="text" ng-model="p.name" ng-repeat="p in vm.Players" value="p.name" placeholder="\u05E9\u05D7\u05E7\u05DF {{$index+1}}" required />\r\n                <br />\r\n                <input type="submit" class="confirmBtn heb draw" ng-show="vm.ShowButton" ng-click="vm.Shuffle()"  value="\u05D4\u05D2\u05E8\u05DC">\r\n            </form>\r\n        </div>\r\n          <back-button></back-button>\r\n    </div>\r\n\r\n</div>');}]);
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
    vm.Back = function () {
        $state.go('menu');
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

function byLevelDrawController() {
    var vm = this;
    vm.name = "הגרלה לפי רמה";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb290Lm1vZHVsZS5qcyIsImFwcC9jb21tb24vYXBwLm1vZHVsZS5qcyIsImFwcC9jb21wb25lbnRzL2NvbXBvbmVudHMubW9kdWxlLmpzIiwiYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQubW9kdWxlLmpzIiwiYXBwL2NvbXBvbmVudHMvYnktbGV2ZWwtZHJhdy9ieS1sZXZlbC1kcmF3Lm1vZHVsZS5qcyIsImFwcC9jb21wb25lbnRzL2hlbHAvaGVscC5tb2R1bGUuanMiLCJhcHAvY29tcG9uZW50cy9tZW51L21lbnUubW9kdWxlLmpzIiwiYXBwL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHQubW9kdWxlLmpzIiwiYXBwL2NvbXBvbmVudHMvc2ltcGxlLWRyYXcvc2ltcGxlLWRyYXcubW9kdWxlLmpzIiwidGVtcGxhdGVzLmpzIiwiYXBwL3Jvb3QuY29tcG9uZW50LmpzIiwiYXBwL2NvbW1vbi9hcHAuY29tcG9uZW50LmpzIiwiYXBwL2NvbW1vbi9iYWNrLWJ1dHRvbi9iYWNrLWJ1dHRvbi5jb21wb25lbnQuanMiLCJhcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuanMiLCJhcHAvY29tcG9uZW50cy9ieS1sZXZlbC1kcmF3L2J5LWxldmVsLWRyYXcuY29tcG9uZW50LmpzIiwiYXBwL2NvbXBvbmVudHMvaGVscC9oZWxwLmNvbXBvbmVudC5qcyIsImFwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuanMiLCJhcHAvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdC5jb21wb25lbnQuanMiLCJhcHAvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdC5zZXJ2aWNlLmpzIiwiYXBwL2NvbXBvbmVudHMvc2ltcGxlLWRyYXcvc2ltcGxlLWRyYXcuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgncm9vdCcsIFsnYXBwJ1xyXG4gICAgXSlcclxuICAgIC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvYXBwJyk7XHJcbiAgICB9KTsiLCJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdhcHAnLCBbXHJcbiAgICAgICAgJ3RlbXBsYXRlcycsXHJcbiAgICAgICAgJ2NvbXBvbmVudHMnLFxyXG4gICAgICAgICduZ0FuaW1hdGUnLFxyXG4gICAgICAgICd1aS5yb3V0ZXInXHJcbiAgICBdKVxyXG4gICAgLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgICAgIC8vICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9tZW51Jyk7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgLnN0YXRlKCdhcHAnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBwJyxcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogJ2FwcCcsXHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdFRvOiAnbWVudSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTsiLCJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzJywgW1xyXG4gICAgICAgICdtZW51JyxcclxuICAgICAgICAnc2ltcGxlRHJhdycsXHJcbiAgICAgICAgJ2J5TGV2ZWxEcmF3JyxcclxuICAgICAgICAnaGVscCcsXHJcbiAgICAgICAgJ2Fib3V0JyxcclxuICAgICAgICAncmVzdWx0J1xyXG4gICAgXSk7IiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnYWJvdXQnLCBbXHJcbiAgICAgICAgJ3VpLnJvdXRlcidcclxuICAgIF0pXHJcbiAgICAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdhYm91dCcsIHtcclxuICAgICAgICAgICAgdXJsOiAnL2Fib3V0JyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiAnYWJvdXQnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsiLCJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdieUxldmVsRHJhdycsIFtcclxuICAgICAgICAndWkucm91dGVyJ1xyXG4gICAgXSlcclxuICAgIC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2J5TGV2ZWxEcmF3Jywge1xyXG4gICAgICAgICAgICB1cmw6ICcvYnlMZXZlbERyYXcnLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6ICdieUxldmVsRHJhdydcclxuICAgICAgICB9KTtcclxuICAgIH0pOyIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2hlbHAnLCBbXHJcbiAgICAgICAgJ3VpLnJvdXRlcidcclxuICAgIF0pXHJcbiAgICAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdoZWxwJywge1xyXG4gICAgICAgICAgICB1cmw6ICcvaGVscCcsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ2hlbHAnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsiLCJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdtZW51JywgW1xyXG4gICAgICAgICd1aS5yb3V0ZXInXHJcbiAgICBdKVxyXG4gICAgLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnbWVudScsIHtcclxuICAgICAgICAgICAgdXJsOiAnL21lbnUnLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6ICdmaWZhTWVudSdcclxuICAgICAgICB9KTtcclxuICAgIH0pOyIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3Jlc3VsdCcsIFtcclxuICAgICAgICAndWkucm91dGVyJ1xyXG4gICAgXSlcclxuICAgIC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ3Jlc3VsdCcsIHtcclxuICAgICAgICAgICAgdXJsOiAnL3Jlc3VsdCcsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ3Jlc3VsdCdcclxuICAgICAgICB9KTtcclxuICAgIH0pOyIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3NpbXBsZURyYXcnLCBbXHJcbiAgICAgICAgJ3VpLnJvdXRlcidcclxuICAgIF0pXHJcbiAgICAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdzaW1wbGVEcmF3Jywge1xyXG4gICAgICAgICAgICB1cmw6ICcvc2ltcGxlRHJhdycsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ3NpbXBsZURyYXcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgndGVtcGxhdGVzJywgW10pLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoJy4vcm9vdC5jb21wb25lbnQuaHRtbCcsJzxkaXYgc3R5bGU9XCJ0cmFuc2Zvcm06IHNjYWxlKDEpOyB0cmFuc2Zvcm0tb3JpZ2luOiAwcHggMHB4IDBweDtcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cIm1vYmlsZS1lbXVsYXRvclwiPlxcclxcbiAgICAgICAgPGRpdiBpZD1cImZyYW1lLWVtdWxhdG9yXCIgY2xhc3M9XCJmcmFtZS1lbXVsYXRvciBmcmFtZS1zY3JvbGxlclwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb290XCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3M9XCJsb2dvXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx1aS12aWV3PjwvdWktdmlldz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj4nKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dCgnLi9hcHAuY29tcG9uZW50Lmh0bWwnLCc8ZGl2IGNsYXNzPVwiYXBwXCI+XFxyXFxuICAgIDxkaXYgdWktdmlldz48L2Rpdj5cXHJcXG48L2Rpdj4nKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dCgnLi9iYWNrLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsJzxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYmFjay1idG4gaGViXCIgbmctY2xpY2s9XCJ2bS5CYWNrKClcIj5cXHUwNUQ3XFx1MDVENlxcdTA1RThcXHUwNUQ0IFxcdTA1RENcXHUwNUVBXFx1MDVFNFxcdTA1RThcXHUwNUQ5XFx1MDVEODwvYnV0dG9uPicpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KCcuL2Fib3V0LmNvbXBvbmVudC5odG1sJywnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGFib3V0IGhlYlwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVwiYmx1ci1iZyBtb3JlLW9wYWNpdHlcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgYWJvdXQtaGVhZGVyXCI+e3t2bS5uYW1lfX08L2Rpdj5cXHJcXG4gICAgICAgIDxwPlxcdTA1REJcXHUwNURGLCBcXHUwNUQyXFx1MDVERCBcXHUwNUQwXFx1MDVFMFxcdTA1RDdcXHUwNUUwXFx1MDVENSBcXHUwNURFXFx1MDVFOVxcdTA1RDdcXHUwNUU3XFx1MDVEOVxcdTA1REQgXFx1MDVFNFxcdTA1RDlcXHUwNUU0XFx1MDVEMC48L3A+XFxyXFxuICAgICAgICA8cD5cXHUwNUQ1XFx1MDVEQlxcdTA1REYsIFxcdTA1RDJcXHUwNUREIFxcdTA1RDJcXHUwNUREIFxcdTA1RENcXHUwNUUwXFx1MDVENSBcXHUwNUU3XFx1MDVFOFxcdTA1RDQgXFx1MDVFOVxcdTA1RDlcXHUwNUU5XFx1MDVEMVxcdTA1RTBcXHUwNUQ1IFxcdTA1REJcXHUwNURDIFxcdTA1RDRcXHUwNUQ3XFx1MDVEMVxcdTA1RThcXHUwNUQ5XFx1MDVERCBcXHUwNUQ1XFx1MDVENFxcdTA1RUFcXHUwNUQ1XFx1MDVENVxcdTA1REJcXHUwNUQ3XFx1MDVFMFxcdTA1RDUgXFx1MDVEM1xcdTA1RTdcXHUwNUQ1XFx1MDVFQSBcXHUwNUQwXFx1MDVFOFxcdTA1RDVcXHUwNURCXFx1MDVENVxcdTA1RUEgXFx1MDVERVxcdTA1RDkgXFx1MDVFMFxcdTA1RDJcXHUwNUQzIFxcdTA1REVcXHUwNUQ5IFxcdTA1RDVcXHUwNUQwXFx1MDVEOVxcdTA1REEgXFx1MDVEQ1xcdTA1RDdcXHUwNURDXFx1MDVFNyBcXHUwNUQ2XFx1MDVENVxcdTA1RDJcXHUwNUQ1XFx1MDVFQS48L3A+XFxyXFxuICAgICAgICA8cD5cXHUwNUQ1XFx1MDVEQlxcdTA1REYsIFxcdTA1RDJcXHUwNUREIFxcdTA1RDBcXHUwNUUwXFx1MDVEN1xcdTA1RTBcXHUwNUQ1IFxcdTA1RDFcXHUwNUUxXFx1MDVENVxcdTA1RTMgXFx1MDVENFxcdTA1RTFcXHUwNUVBXFx1MDVENVxcdTA1RDFcXHUwNUQxXFx1MDVFMFxcdTA1RDUgXFx1MDVEQ1xcdTA1RDdcXHUwNUU0XFx1MDVFOSBcXHUwNUUwXFx1MDVEOVxcdTA1RDlcXHUwNUU4IFxcdTA1RDVcXHUwNUUyXFx1MDVEOCBcXHUwNUQ1XFx1MDVENFxcdTA1RUFcXHUwNUQ3XFx1MDVEQ1xcdTA1RTBcXHUwNUQ1IFxcdTA1REJcXHUwNURFXFx1MDVENSBcXHUwNUQxXFx1MDVFOVxcdTA1RTBcXHUwNUQ1XFx1MDVFQSBcXHUwNUQ0ODAgXFx1MDVEQ1xcdTA1REJcXHUwNUVBXFx1MDVENVxcdTA1RDEgXFx1MDVFOVxcdTA1REVcXHUwNUQ1XFx1MDVFQSBcXHUwNUQ1XFx1MDVEQ1xcdTA1RDRcXHUwNUVBXFx1MDVEN1xcdTA1RDlcXHUwNURDIFxcdTA1RENcXHUwNUU3XFx1MDVFOFxcdTA1RDVcXHUwNUUyIFxcdTA1RTRcXHUwNUVBXFx1MDVFN1xcdTA1RDlcXHUwNUREIFxcdTA1RDVcXHUwNURDXFx1MDVENFxcdTA1RDJcXHUwNUU4XFx1MDVEOVxcdTA1REMgXFx1MDVERVxcdTA1REJcXHUwNUQ1XFx1MDVEMVxcdTA1RTIuPC9wPlxcclxcbiAgICAgICAgPHA+XFx1MDVEQ1xcdTA1RTBcXHUwNUQ1IFxcdTA1RENcXHUwNUU3XFx1MDVENyBcXHUwNUQxXFx1MDVFMVxcdTA1RDFcXHUwNUQ5XFx1MDVEMVxcdTA1RDVcXHUwNUVBIFxcdTA1RDRcXHUwNUU5XFx1MDVFMlxcdTA1RDQgXFx1MDVFMlxcdTA1RDMgXFx1MDVFOVxcdTA1RDRcXHUwNUVBXFx1MDVEN1xcdTA1RENcXHUwNUUwXFx1MDVENSBcXHUwNURDXFx1MDVFOVxcdTA1RDdcXHUwNUU3LCBcXHUwNUQ1XFx1MDVEQ1xcdTA1REJcXHUwNUREPzwvcD5cXHJcXG4gICAgICAgIDxwPlxcdTA1RDFcXHUwNUQzXFx1MDVEOVxcdTA1RDVcXHUwNUU3IFxcdTA1RDFcXHUwNUU5XFx1MDVEMVxcdTA1RDlcXHUwNURDIFxcdTA1RTlcXHUwNURDXFx1MDVEMCBcXHUwNUQ5XFx1MDVFN1xcdTA1RThcXHUwNUQ1IFxcdTA1RENcXHUwNURCXFx1MDVERCBcXHUwNUQ0XFx1MDVFMFxcdTA1RTFcXHUwNUQ5XFx1MDVERCBcXHUwNUQ1XFx1MDVENFxcdTA1RTBcXHUwNUU0XFx1MDVEQ1xcdTA1RDBcXHUwNUQ1XFx1MDVFQSBcXHUwNUQ5XFx1MDVFNlxcdTA1RThcXHUwNUVBXFx1MDVEOSBcXHUwNUQwXFx1MDVFQSBcXHUwNUQ0XFx1MDVEMFxcdTA1RTRcXHUwNURDXFx1MDVEOVxcdTA1RTdcXHUwNUU2XFx1MDVEOVxcdTA1RDQgXFx1MDVENFxcdTA1RTRcXHUwNUU5XFx1MDVENVxcdTA1RDhcXHUwNUQ0IFxcdTA1RDRcXHUwNUQ2XFx1MDVENS48L3A+XFxyXFxuICAgICAgICA8cD5cXHUwNURDXFx1MDVEMCBcXHUwNUUyXFx1MDVENVxcdTA1RDMgXFx1MDVFOVxcdTA1RTJcXHUwNUQ0IFxcdTA1RTJcXHUwNUQzIFxcdTA1RTlcXHUwNURFXFx1MDVFQVxcdTA1RDdcXHUwNUQ5XFx1MDVEQ1xcdTA1RDlcXHUwNUREIFxcdTA1RENcXHUwNUU5XFx1MDVEN1xcdTA1RTcsIFxcdTA1RDRcXHUwNURCXFx1MDVEQyBcXHUwNUU4XFx1MDVFNSBcXHUwNURFXFx1MDVENFxcdTA1RTggXFx1MDVERVxcdTA1RDBcXHUwNUQ1XFx1MDVEMy48L3A+XFxyXFxuICAgICAgICA8cD5cXHUwNUQxXFx1MDVFQVxcdTA1RTdcXHUwNUQ1XFx1MDVENVxcdTA1RDQgXFx1MDVFOVxcdTA1RUFcXHUwNURFXFx1MDVFNlxcdTA1RDBcXHUwNUQ1IFxcdTA1RDBcXHUwNUVBIFxcdTA1RDRcXHUwNUQwXFx1MDVFNFxcdTA1RENcXHUwNUQ5XFx1MDVFN1xcdTA1RTZcXHUwNUQ5XFx1MDVENCBcXHUwNURFXFx1MDVENVxcdTA1RTJcXHUwNUQ5XFx1MDVEQ1xcdTA1RDQuPC9wPlxcclxcbiAgICAgICAgPHA+XFx1MDVFOFxcdTA1RTRcXHUwNUQwXFx1MDVEQzwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxiYWNrLWJ1dHRvbj48L2JhY2stYnV0dG9uPlxcclxcbjwvZGl2PicpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KCcuL2J5LWxldmVsLWRyYXcuY29tcG9uZW50Lmh0bWwnLCc8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgYnktbGV2ZWwtZHJhdyBoZWJcIj5cXHJcXG4gIDxoMT57e3ZtLm5hbWV9fTwvaDE+XFxyXFxuICA8YmFjay1idXR0b24+PC9iYWNrLWJ1dHRvbj5cXHJcXG48L2Rpdj4nKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dCgnLi9oZWxwLmNvbXBvbmVudC5odG1sJywnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGhlbHAgaGViXCI+XFxyXFxuICA8aDEgY2xhc3M9XCJoZWFkZXJcIj57e3ZtLm5hbWV9fTwvaDE+XFxyXFxuXFxyXFxuICA8ZGl2IGNsYXNzPVwiYnV0dG9uXCIgbmctY2xpY2s9XCJ2bS5zaW1wbGVTaG93ID0gIXZtLnNpbXBsZVNob3dcIj5cXHUwNUQ0XFx1MDVEMlxcdTA1RThcXHUwNURDXFx1MDVENCBcXHUwNUU4XFx1MDVEMlxcdTA1RDlcXHUwNURDXFx1MDVENDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cInNpbXBsZS1kcmF3LWhlbHBcIiBuZy1pbml0PVwidm0uc2ltcGxlU2hvdyA9IGZhbHNlXCIgbmctc2hvdz1cInZtLnNpbXBsZVNob3dcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImhlbHAtY29udCBjZW50ZXItYmxvY2tcIj5cXHJcXG4gICAgICA8cD4xLiBcXHUwNUQxXFx1MDVEN1xcdTA1RTggXFx1MDVERVxcdTA1RTFcXHUwNUU0XFx1MDVFOCBcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQgXFx1MDVENFxcdTA1REVcXHUwNUU5XFx1MDVFQVxcdTA1RUFcXHUwNUU0XFx1MDVEOVxcdTA1REQgXFx1MDVEMVxcdTA1RDhcXHUwNUQ1XFx1MDVFOFxcdTA1RTBcXHUwNUQ5XFx1MDVFOCBcXHUwNUQ1XFx1MDVEQ1xcdTA1RDdcXHUwNUU1IFwiXFx1MDVEMFxcdTA1RTlcXHUwNUU4XCI8L3A+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cImhlbHAtcGljXCIgc3JjPVwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NkMS5qcGdcIiBhbHQ9XCJcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJoZWxwLWNvbnQgY2VudGVyLWJsb2NrXCI+XFxyXFxuICAgICAgPHA+Mi4gXFx1MDVENFxcdTA1REJcXHUwNUUwXFx1MDVFMSBcXHUwNUQwXFx1MDVFQSBcXHUwNUU5XFx1MDVERVxcdTA1RDVcXHUwNUVBIFxcdTA1RDRcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQgXFx1MDVENFxcdTA1REVcXHUwNUU5XFx1MDVFQVxcdTA1RUFcXHUwNUU0XFx1MDVEOVxcdTA1REQgXFx1MDVENVxcdTA1RENcXHUwNUQ3XFx1MDVFNSBcIlxcdTA1RDRcXHUwNUQyXFx1MDVFOFxcdTA1RENcIjwvcD5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVwiaGVscC1waWNcIiBzcmM9XCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2QyLmpwZ1wiIGFsdD1cIlwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImhlbHAtY29udCBjZW50ZXItYmxvY2sgcmVzdWx0c1wiPlxcclxcbiAgICAgIDxwPjMuIFxcdTA1RUFcXHUwNUQ1XFx1MDVFNlxcdTA1RDBcXHUwNUQ1XFx1MDVFQSBcXHUwNUQ0XFx1MDVENlxcdTA1RDVcXHUwNUQyXFx1MDVENVxcdTA1RUEgXFx1MDVEOVxcdTA1RDVcXHUwNUU0XFx1MDVEOVxcdTA1RTJcXHUwNUQ1IFxcdTA1RDFcXHUwNUQ2XFx1MDVENSBcXHUwNUQwXFx1MDVEN1xcdTA1RTggXFx1MDVENlxcdTA1RDUuIFxcdTA1RDRcXHUwNUVBXFx1MDVEN1xcdTA1RDlcXHUwNURDXFx1MDVENSBcXHUwNURDXFx1MDVFOVxcdTA1RDdcXHUwNUU3LjwvcD5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVwiaGVscC1waWNcIiBzcmM9XCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2QzLmpwZ1wiIGFsdD1cIlwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiAgPGRpdiBjbGFzcz1cImJ1dHRvblwiIG5nLWNsaWNrPVwidm0uYnlMZXZlbFNob3cgPSAhdm0uYnlMZXZlbFNob3dcIj5cXHUwNUQ0XFx1MDVEMlxcdTA1RThcXHUwNURDXFx1MDVENCBcXHUwNURDXFx1MDVFNFxcdTA1RDkgXFx1MDVFOFxcdTA1REVcXHUwNUQ0PC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVwiYnktbGV2ZWwtZHJhdy1oZWxwXCIgbmctaW5pdD1cInZtLmJ5TGV2ZWxTaG93ID0gZmFsc2VcIiBuZy1zaG93PVwidm0uYnlMZXZlbFNob3dcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImhlbHAtY29udCBjZW50ZXItYmxvY2sgYnktbGV2ZWxcIj5cXHJcXG4gICAgICA8cD4xLiBcXHUwNUQxXFx1MDVEN1xcdTA1RTggXFx1MDVERVxcdTA1RTFcXHUwNUU0XFx1MDVFOCBcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQgXFx1MDVENFxcdTA1REVcXHUwNUU5XFx1MDVFQVxcdTA1RUFcXHUwNUU0XFx1MDVEOVxcdTA1REQgXFx1MDVEMVxcdTA1RDhcXHUwNUQ1XFx1MDVFOFxcdTA1RTBcXHUwNUQ5XFx1MDVFOCwgXFx1MDVEQlxcdTA1REVcXHUwNUQ1XFx1MDVFQSBcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQgXFx1MDVERVxcdTA1RTdcXHUwNUU2XFx1MDVENVxcdTA1RTJcXHUwNUUwXFx1MDVEOVxcdTA1REQgXFx1MDVENVxcdTA1REJcXHUwNURFXFx1MDVENVxcdTA1RUEgXFx1MDVEN1xcdTA1RDVcXHUwNUQxXFx1MDVEMVxcdTA1RTBcXHUwNUQ5XFx1MDVERCBcXHUwNUQ1XFx1MDVEQ1xcdTA1RDdcXHUwNUU1IFwiXFx1MDVEMFxcdTA1RTlcXHUwNUU4XCI8L3A+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cImhlbHAtcGljXCIgc3JjPVwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JsMS5qcGdcIiBhbHQ9XCJcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJoZWxwLWNvbnQgY2VudGVyLWJsb2NrIGJ5LWxldmVsIGJsMlwiPlxcclxcbiAgICAgIDxwPjIuIFxcdTA1RDRcXHUwNURCXFx1MDVFMFxcdTA1RTEgXFx1MDVEMFxcdTA1RUEgXFx1MDVFOVxcdTA1REVcXHUwNUQ1XFx1MDVFQSBcXHUwNUQ0XFx1MDVFOVxcdTA1RDdcXHUwNUU3XFx1MDVFMFxcdTA1RDlcXHUwNUREIFxcdTA1RDRcXHUwNURFXFx1MDVFOVxcdTA1RUFcXHUwNUVBXFx1MDVFNFxcdTA1RDlcXHUwNUREIFxcdTA1RENcXHUwNUU0XFx1MDVEOSBcXHUwNUU4XFx1MDVERVxcdTA1RDQgXFx1MDVEQlxcdTA1REEgXFx1MDVFOVxcdTA1REVcXHUwNUU3XFx1MDVFNlxcdTA1RDVcXHUwNUUyXFx1MDVERiBcXHUwNURDXFx1MDVEMCBcXHUwNUQ5XFx1MDVENVxcdTA1RDJcXHUwNUU4XFx1MDVEQyBcXHUwNUUyXFx1MDVERCBcXHUwNURFXFx1MDVFN1xcdTA1RTZcXHUwNUQ1XFx1MDVFMlxcdTA1REYgXFx1MDVENVxcdTA1RDdcXHUwNUQ1XFx1MDVEMVxcdTA1RDFcXHUwNURGIFxcdTA1RENcXHUwNUQwIFxcdTA1RDlcXHUwNUQ1XFx1MDVEMlxcdTA1RThcXHUwNURDIFxcdTA1RTJcXHUwNUREIFxcdTA1RDdcXHUwNUQ1XFx1MDVEMVxcdTA1RDFcXHUwNURGIFxcdTA1RDVcXHUwNURDXFx1MDVEN1xcdTA1RTUgXCJcXHUwNUQ0XFx1MDVEMlxcdTA1RThcXHUwNURDXCI8L3A+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cImhlbHAtcGljXCIgc3JjPVwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JsMi5qcGdcIiBhbHQ9XCJcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJoZWxwLWNvbnQgY2VudGVyLWJsb2NrIHJlc3VsdHNcIj5cXHJcXG4gICAgICA8cD4zLiBcXHUwNUVBXFx1MDVENVxcdTA1RTZcXHUwNUQwXFx1MDVENVxcdTA1RUEgXFx1MDVENFxcdTA1RDZcXHUwNUQ1XFx1MDVEMlxcdTA1RDVcXHUwNUVBIFxcdTA1RDlcXHUwNUQ1XFx1MDVFNFxcdTA1RDlcXHUwNUUyXFx1MDVENSBcXHUwNUQxXFx1MDVENlxcdTA1RDUgXFx1MDVEMFxcdTA1RDdcXHUwNUU4IFxcdTA1RDZcXHUwNUQ1LCBcXHUwNURFXFx1MDVFN1xcdTA1RTZcXHUwNUQ1XFx1MDVFMlxcdTA1REYgXFx1MDVFMlxcdTA1REQgXFx1MDVEN1xcdTA1RDVcXHUwNUQxXFx1MDVEMVxcdTA1REYgXFx1MDVEMVxcdTA1REJcXHUwNURDIFxcdTA1RTdcXHUwNUQxXFx1MDVENVxcdTA1RTZcXHUwNUQ0LiBcXHUwNUQ0XFx1MDVFQVxcdTA1RDdcXHUwNUQ5XFx1MDVEQ1xcdTA1RDUgXFx1MDVEQ1xcdTA1RTlcXHUwNUQ3XFx1MDVFNy48L3A+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cImhlbHAtcGljXCIgc3JjPVwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JsMy5qcGdcIiBhbHQ9XCJcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxiYWNrLWJ1dHRvbj48L2JhY2stYnV0dG9uPlxcclxcbjwvZGl2PicpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KCcuL21lbnUuY29tcG9uZW50Lmh0bWwnLCc8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbWVudVwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIG1lbnUtaGVhZGVyXCI+e3t2bS5uYW1lfX08L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImJsdXItYmcgYmctbWFpblwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtYnRuIGZpcnN0QnRuIGhlYlwiIG5nLWNsaWNrPVwidm0uR29Ub1NpbXBsZURyYXcoKVwiPlxcdTA1RDRcXHUwNUQyXFx1MDVFOFxcdTA1RENcXHUwNUQ0IFxcdTA1RThcXHUwNUQyXFx1MDVEOVxcdTA1RENcXHUwNUQ0PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1idG4gaGViXCIgbmctY2xpY2s9XCJ2bS5Hb1RvQnlMZXZlbERyYXcoKVwiPlxcdTA1RDRcXHUwNUQyXFx1MDVFOFxcdTA1RENcXHUwNUQ0IFxcdTA1RENcXHUwNUU0XFx1MDVEOSBcXHUwNUU4XFx1MDVERVxcdTA1RDQ8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWJ0biBoZWJcIiBuZy1jbGljaz1cInZtLkdvVG9IZWxwKClcIj5cXHUwNUUyXFx1MDVENlxcdTA1RThcXHUwNUQ0PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1idG4gaGViXCIgbmctY2xpY2s9XCJ2bS5Hb1RvQWJvdXQoKVwiPlxcdTA1RDBcXHUwNUQ1XFx1MDVEM1xcdTA1RDVcXHUwNUVBPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PicpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KCcuL3Jlc3VsdC5jb21wb25lbnQuaHRtbCcsJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciByZXN1bHRcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImJsdXItYmcgbW9yZS1vcGFjaXR5XCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIGhlYlwiPnt7dm0ubmFtZX19PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZXNJbnB1dHNcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cInIgaW4gdm0uY291cGxlc1wiIGNsYXNzPVwiY291cGxlc1wiIHN0eWxlPVwiLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5Ont7JGluZGV4KjEwMDB9fW1zXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XCJyLnNlY29uZCA9PW51bGxcIiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLWRvd25cIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+e3tyLmZpcnN0fX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBuZy1zaG93PVwici5zZWNvbmQgIT1udWxsXCIgY2xhc3M9XCJzZXBlcmF0b3JcIj58PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgbmctc2hvdz1cInIuc2Vjb25kICE9bnVsbFwiIGNsYXNzPVwibmFtZVwiPnt7ci5zZWNvbmR9fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVwici5zZWNvbmQgPT1udWxsXCIgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy1kb3duXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YmFjay1idXR0b24+PC9iYWNrLWJ1dHRvbj5cXHJcXG48L2Rpdj4nKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dCgnLi9zaW1wbGUtZHJhdy5jb21wb25lbnQuaHRtbCcsJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBzaW1wbGUtZHJhdyBcIj5cXHJcXG4gPGRpdiBjbGFzcz1cImJsdXItYmdcIj5cXHJcXG4gICAgICAgIDxwIGNsYXNzPVwiaG1wbGF5ZXJzIGhlYlwiPlxcdTA1REJcXHUwNURFXFx1MDVENCBcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQ/IDxzcGFuPig0LTIwKTwvc3Bhbj48L3A+XFxyXFxuICAgICAgICA8aHIgLz5cXHJcXG5cXHJcXG4gICAgICAgIDxmb3JtIG5hbWU9XCJteUZvcm1cIiBuZy1zdWJtaXQ9XCJ2bS5TdWJtaXQoKVwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dEJ1dHRvbnNcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBuZy1jbGljaz1cInZtLkFkZE9uZSgpXCIgY2xhc3M9XCJpbnB1dEJ1dHRvbnNDaGlsZCBpbnB1dEJ1dHRvbnNcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1cyBwbHVzTWludXNcIj48L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBuZy1tb2RlbD1cInZtLkNvdW50XCIgY2xhc3M9XCJpbnB1dEJ1dHRvbnNDaGlsZCBjb3VudElucHV0IGhlYlwiIHR5cGU9XCJ0ZXh0XCIgcmVhZG9ubHkgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBuZy1jbGljaz1cInZtLlJlbW92ZU9uZSgpXCIgY2xhc3M9XCJpbnB1dEJ1dHRvbnNDaGlsZCBpbnB1dEJ1dHRvbnNcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbWludXMgcGx1c01pbnVzXCI+PC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImNvbmZpcm1CdG4gaGViXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiXFx1MDVEMFxcdTA1RTlcXHUwNUU4XCIvPlxcclxcbiAgICAgICAgICAgIDxkaXYgbmctc2hvdz1cInZtLmlzSW52YWxpZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XFx1MDVEMFxcdTA1RTBcXHUwNUQwIFxcdTA1RDFcXHUwNUQ3XFx1MDVFOCBcXHUwNURFXFx1MDVFMVxcdTA1RTRcXHUwNUU4IFxcdTA1RTlcXHUwNUQ3XFx1MDVFN1xcdTA1RTBcXHUwNUQ5XFx1MDVERCAoXFx1MDVEQ1xcdTA1RTRcXHUwNUQ3XFx1MDVENVxcdTA1RUEgNCk8L2Rpdj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lc0lucHV0c1wiPlxcclxcbiAgICAgICAgICAgIDxwIGNsYXNzPVwid2hvcGxheXMgaGViXCIgbmctc2hvdz1cInZtLlNob3dCdXR0b25cIj5cXHUwNURFXFx1MDVEOSBcXHUwNURFXFx1MDVFOVxcdTA1RDdcXHUwNUU3PzwvcD5cXHJcXG4gICAgICAgIDxociBuZy1zaG93PVwidm0uU2hvd0J1dHRvblwiIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiBuZy1zaG93PVwidm0uc2hvd1BsYXllcnNFcnJvclwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XFx1MDVEN1xcdTA1RDVcXHUwNUQxXFx1MDVENCBcXHUwNURDXFx1MDVENFxcdTA1REJcXHUwNUUwXFx1MDVEOVxcdTA1RTEgXFx1MDVFOVxcdTA1REVcXHUwNUQ1XFx1MDVFQSBcXHUwNUU5XFx1MDVEN1xcdTA1RTdcXHUwNUUwXFx1MDVEOVxcdTA1REQ8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8Zm9ybT5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicGxheWVySW5wdXRcIiB0eXBlPVwidGV4dFwiIG5nLW1vZGVsPVwicC5uYW1lXCIgbmctcmVwZWF0PVwicCBpbiB2bS5QbGF5ZXJzXCIgdmFsdWU9XCJwLm5hbWVcIiBwbGFjZWhvbGRlcj1cIlxcdTA1RTlcXHUwNUQ3XFx1MDVFN1xcdTA1REYge3skaW5kZXgrMX19XCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICAgICAgPGJyIC8+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJjb25maXJtQnRuIGhlYiBkcmF3XCIgbmctc2hvdz1cInZtLlNob3dCdXR0b25cIiBuZy1jbGljaz1cInZtLlNodWZmbGUoKVwiICB2YWx1ZT1cIlxcdTA1RDRcXHUwNUQyXFx1MDVFOFxcdTA1RENcIj5cXHJcXG4gICAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPGJhY2stYnV0dG9uPjwvYmFjay1idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvZGl2PicpO31dKTsiLCJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdyb290JylcclxuICAgIC5jb21wb25lbnQoJ3Jvb3QnLCB7XHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3Jvb3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IHJvb3RDb250cm9sbGVyLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgICAgICBiaW5kaW5nczoge1xyXG4gICAgICAgICAgICBCaW5kaW5nOiAnPScsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuZnVuY3Rpb24gcm9vdENvbnRyb2xsZXIoKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG59XHJcbiIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2FwcCcpXHJcbiAgICAuY29tcG9uZW50KCdhcHAnLCB7XHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogYXBwQ29udHJvbGxlcixcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICB9KTtcclxuXHJcbmZ1bmN0aW9uIGFwcENvbnRyb2xsZXIoKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG59XHJcbiIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2FwcCcpXHJcbiAgICAuY29tcG9uZW50KCdiYWNrQnV0dG9uJywge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9iYWNrLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogYmFja0J1dHRvbkNvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICB9KTtcclxuYmFja0J1dHRvbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHN0YXRlJ107XHJcbmZ1bmN0aW9uIGJhY2tCdXR0b25Db250cm9sbGVyKCRzdGF0ZSkge1xyXG4gICAgdmFyIHZtID0gdGhpcztcclxuICAgIHZtLkJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKCdtZW51Jyk7XHJcbiAgICB9O1xyXG59XHJcbiIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMnKVxyXG4gICAgLmNvbXBvbmVudCgnYWJvdXQnLCB7XHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL2Fib3V0LmNvbXBvbmVudC5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiBhYm91dENvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICB9KTtcclxuYWJvdXRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzdGF0ZSddO1xyXG5mdW5jdGlvbiBhYm91dENvbnRyb2xsZXIoJHN0YXRlKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgdm0ubmFtZSA9IFwi15DXldeT15XXqlwiO1xyXG4gICAgdm0uQmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ21lbnUnKTtcclxuICAgIH07XHJcbn1cclxuIiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cycpXHJcbiAgICAuY29tcG9uZW50KCdieUxldmVsRHJhdycsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vYnktbGV2ZWwtZHJhdy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogYnlMZXZlbERyYXdDb250cm9sbGVyLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgICAgICBiaW5kaW5nczoge1xyXG4gICAgICAgICAgICBCaW5kaW5nOiAnPScsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuZnVuY3Rpb24gYnlMZXZlbERyYXdDb250cm9sbGVyKCkge1xyXG4gICAgdmFyIHZtID0gdGhpcztcclxuICAgIHZtLm5hbWUgPSBcIteU15LXqNec15Qg15zXpNeZINeo157XlFwiO1xyXG59XHJcbiIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMnKVxyXG4gICAgLmNvbXBvbmVudCgnaGVscCcsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vaGVscC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogaGVscENvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgICAgIEJpbmRpbmc6ICc9JyxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG5mdW5jdGlvbiBoZWxwQ29udHJvbGxlcigpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICB2bS5uYW1lID0gXCLXoteW16jXlFwiO1xyXG59XHJcbiIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ21lbnUnKVxyXG4gICAgLmNvbXBvbmVudCgnZmlmYU1lbnUnLCB7XHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL21lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IG1lbnVDb250cm9sbGVyLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgICAgICBiaW5kaW5nczoge1xyXG4gICAgICAgICAgICBCaW5kaW5nOiAnPScsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5tZW51Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc3RhdGUnXTtcclxuZnVuY3Rpb24gbWVudUNvbnRyb2xsZXIoJHN0YXRlKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgdm0ubmFtZSA9IFwi157XmSDXoNeS15MgTWU/XCI7XHJcblxyXG4gICAgdm0uR29Ub1NpbXBsZURyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKCdzaW1wbGVEcmF3Jyk7XHJcbiAgICB9O1xyXG4gICAgdm0uR29Ub0J5TGV2ZWxEcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbygnYnlMZXZlbERyYXcnKTtcclxuICAgIH07XHJcbiAgICB2bS5Hb1RvSGVscCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ2hlbHAnKTtcclxuICAgIH07XHJcbiAgICB2bS5Hb1RvQWJvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKCdhYm91dCcpO1xyXG4gICAgfTtcclxufVxyXG4iLCJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzJylcclxuICAgIC5jb21wb25lbnQoJ3Jlc3VsdCcsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vcmVzdWx0LmNvbXBvbmVudC5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiByZXN1bHRDb250cm9sbGVyLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gICAgfSk7XHJcblxyXG5yZXN1bHRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzdGF0ZScsICdyZXN1bHRTZXJ2aWNlJywgJyR0aW1lb3V0J107XHJcblxyXG5mdW5jdGlvbiByZXN1bHRDb250cm9sbGVyKCRzdGF0ZSwgcmVzdWx0U2VydmljZSwgJHRpbWVvdXQpIHtcclxuICAgIGlmIChyZXN1bHRTZXJ2aWNlLnJlc3VsdHNBcmVOb3RFbXB0eSgpIHx8IHRydWUpIHtcclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgICAgIHZtLm5hbWUgPSBcIteV15TXqNeZINeq15XXpteQ15XXqlwiO1xyXG4gICAgICAgIHZtLmNvdXBsZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdm0uJG9uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdm0uY291cGxlcyA9IHJlc3VsdFNlcnZpY2UuZ2V0UmVzdWx0cygpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codm0uY291cGxlcyk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ21lbnUnKTtcclxuICAgIH1cclxufVxyXG4iLCJhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdyZXN1bHQnKVxyXG4gICAgLnNlcnZpY2UoJ3Jlc3VsdFNlcnZpY2UnLCByZXN1bHRTZXJ2aWNlKTtcclxuXHJcbnJlc3VsdFNlcnZpY2UuJGluamVjdCA9IFsnJHN0YXRlJ107XHJcblxyXG5mdW5jdGlvbiByZXN1bHRTZXJ2aWNlKCRzdGF0ZSkge1xyXG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRSZXN1bHRzKCkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcHVzaFJlc3VsdChyZXN1bHQpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbXB0eVJlc3VsdHMoKSB7XHJcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc3VsdHNBcmVOb3RFbXB0eSgpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0cy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0UmVzdWx0czogZ2V0UmVzdWx0cyxcclxuICAgICAgICBwdXNoUmVzdWx0OiBwdXNoUmVzdWx0LFxyXG4gICAgICAgIGVtcHR5UmVzdWx0czogZW1wdHlSZXN1bHRzLFxyXG4gICAgICAgIHJlc3VsdHNBcmVOb3RFbXB0eTogcmVzdWx0c0FyZU5vdEVtcHR5XHJcbiAgICB9O1xyXG59IiwiYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cycpXHJcbiAgICAuY29tcG9uZW50KCdzaW1wbGVEcmF3Jywge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9zaW1wbGUtZHJhdy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogc2ltcGxlRHJhd0NvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgICAgIEJpbmRpbmc6ICc9JyxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG5zaW1wbGVEcmF3Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc3RhdGUnLCAncmVzdWx0U2VydmljZSddO1xyXG5cclxuZnVuY3Rpb24gc2ltcGxlRHJhd0NvbnRyb2xsZXIoJHN0YXRlLCByZXN1bHRTZXJ2aWNlKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgdm0ubmFtZSA9IFwi15TXkteo15zXlCDXqNeS15nXnNeUXCI7XHJcbiAgICB2bS5pc0ludmFsaWQgPSBmYWxzZTtcclxuICAgIHZtLkNvdW50ID0gMDtcclxuICAgIHZtLlNob3dCdXR0b24gPSBmYWxzZTtcclxuICAgIHZtLnNob3dQbGF5ZXJzRXJyb3IgPSBmYWxzZTtcclxuICAgIHZtLlBsYXllcnMgPSBudWxsO1xyXG5cclxuXHJcbiAgICB2bS5TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHZtLkNvdW50ICE9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ludmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHZtLlBsYXllcnMgPSBuZXcgQXJyYXkocGFyc2VJbnQodm0uQ291bnQpKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bS5QbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2bS5QbGF5ZXJzW2ldID0geyBuYW1lOiBcIlwiIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdm0uU2hvd0J1dHRvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2bS5pc0ludmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdm0uQWRkT25lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh2bS5Db3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHZtLkNvdW50ID0gNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodm0uQ291bnQgPCAyMCkge1xyXG4gICAgICAgICAgICB2bS5Db3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdm0uUmVtb3ZlT25lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh2bS5Db3VudCA+IDQpIHtcclxuICAgICAgICAgICAgdm0uQ291bnQtLTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZtLlNodWZmbGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgICBpZiAodm0uUGxheWVycykge1xyXG4gICAgICAgICAgICAvL2NoZWNrIGlmIHVzZXIgaW5zZXJ0ZWQgbmFtZSBmb3IgYWxsIHBsYXllcnNcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bS5QbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodm0uUGxheWVyc1tpXS5uYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvdW50ZXIgPT0gdm0uUGxheWVycy5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgIHJlc3VsdFNlcnZpY2UuZW1wdHlSZXN1bHRzKCk7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSB2bS5yYW5kb21pemVSZXN1bHRzKHZtLlBsYXllcnMpO1xyXG4gICAgICAgICAgICB3aGlsZSAoYXJyLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY291cGxlID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291cGxlID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgY291cGxlLmZpcnN0ID0gYXJyW2Fyci5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdXBsZS5zZWNvbmQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFNlcnZpY2UucHVzaFJlc3VsdChjb3VwbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wb3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdXBsZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdXBsZS5maXJzdCA9IGFyclthcnIubGVuZ3RoIC0gMV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VwbGUuc2Vjb25kID0gYXJyW2Fyci5sZW5ndGggLSAyXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFNlcnZpY2UucHVzaFJlc3VsdChjb3VwbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdyZXN1bHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZtLnNob3dQbGF5ZXJzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdm0ucmFuZG9taXplUmVzdWx0cyA9IGZ1bmN0aW9uIChhcnJheSkge1xyXG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcclxuXHJcbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cclxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XHJcbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxyXG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xyXG5cclxuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgICAgIGFycmF5W2N1cnJlbnRJbmRleF0gPSBhcnJheVtyYW5kb21JbmRleF07XHJcbiAgICAgICAgICAgIGFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9O1xyXG59XHJcbiJdfQ==
