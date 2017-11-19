(function () {
    'use strict';

    function appController ($scope, $mdSidenav) {

        function toggle (id) {

            $mdSidenav(id).toggle();

        };

        (function init() {

            $scope.sidenavOptions = [
                {name: 'Page One', url: '/pageOne'},
                {name: 'Page Two', url: '/pageTwo'}
            ];

            $scope.toggle = toggle;
            
        })();

    };

    appController.$inject = ['$scope', '$mdSidenav'];

    angular.module('app').controller('appCtrl', appController);
        
})();