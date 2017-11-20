(function () {
    'use strict';

    function pageOneController ($scope, $rootScope) {

        (function (){

            $rootScope.$broadcast('CHANGE_TOOLS', 'page-one-tools');

        })();

    };

    pageOneController.$inject = ['$scope', '$rootScope'];

    angular.module('app').controller('pageOneController', pageOneController);

})();