(function () {
    'use strict';

    function pageTwoController ($scope, $rootScope) {

        (function () {

            $rootScope.$broadcast('CHANGE_TOOLS', 'page-two-tools');

        })();

    };

    pageTwoController.$inject = ['$scope', '$rootScope'];

    angular.module('app').controller('pageTwoController', pageTwoController);

})();