(function () {
    'use strict';

    function config ($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('purple')
            .warnPalette('red')
            .backgroundPalette('grey');

    };

    config.$inject = ['$mdThemingProvider'];

    angular.module('app', ['ngMaterial','ngAnimate', 'ngRoute']).config(config);

})();
