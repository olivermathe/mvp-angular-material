(function () {
    'use strict';

    function config ($routeProvider) {

        $routeProvider

            .when('/pageOne', {
                'templateUrl': 'pages/pageOne/page.one.html',
                'controller': 'pageOneController'
            })

            .when('/pageTwo', {
                'templateUrl': 'pages/pageTwo/page.two.html',
                'controller': 'pageTwoController'
            })

            .otherwise({
                'redirectTo': '/pageOne'
            });

    };

    config.$inject = ['$routeProvider', '$locationProvider'];

    angular.module('app').config(config);

})();
