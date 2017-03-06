(function () {
    'use strict';

    angular
        .module('seedApp', ['ui.router', 'ngAnimate', 'ngMessages'])
        .config(config);

    config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    function config($locationProvider, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state("otherwise", {url: '/otherwise'})
    }
})();

(function () {
    'use strict';
    angular
        .module('seedApp')
        .controller('homeController', homeController);

    homeController.$inject = ['$state'];

    function homeController($state) {
        var vm = this;
    }
})(); 
(function () {
    'use strict';

    angular
        .module('seedApp')
        .config(config);

    config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    function config($locationProvider, $stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'modules/home/home.html'
        })
    }
})();
(function () {
    'use strict';

    angular.module("seedApp")
        .directive("sampleDirective", sampleDirective);

    function sampleDirective($state) {
        return {
            restrict: 'AE',
            templateUrl: "shared/directives/sample-directive/sample-directive.html",
            scope: {
            },
            link: function (scope, element, attrs) {
            }
        }
    }
})();


(function () {
    'use strict';

    angular.module('seedApp')
        .service('sampleService', sampleService);

    function sampleService() {
        return {}
    }
})(); 