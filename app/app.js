(function () {
    'use strict';

    function appController ($scope) {

        function boom () {
            $scope.list.push('boom!');
        };

        function click (tic) {

            if ($scope.list.length === 11)
                $scope.list = [];

            if ($scope.list.length === 10)
                return boom();

            if (tic)
                $scope.list.push('tic...');
            else 
                $scope.list.push('tac...');            

            $scope.tic = !tic

        };

        (function init() {

            $scope.message = "Oh Yeah! It's!";
            $scope.list = [];
            $scope.tic = true;

            $scope.click = click;

        })();

    };

    appController.$inject = ['$scope'];

    angular.module('app', ['ngMaterial','ngAnimate'])
        .controller('appCtrl', appController)
        .config(function($mdThemingProvider) {
            //disable theme generation
            
            //themes are still defined in config, but the css is not generated
            $mdThemingProvider.theme('default')
                .primaryPalette('blue-grey')
                .accentPalette('amber')
                .warnPalette('red')
                .backgroundPalette('grey');
        });

})();