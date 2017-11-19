(function () {
    'use strict';

    function appController ($scope, $mdSidenav) {

        function toggle (id) {

            $mdSidenav(id).toggle();

        };

        (function init() {
            $scope.menuColors = {
                background: 'deep-purple'
            };

            $scope.sidenavOptions = [
                {name: 'Cosulta Simples', url: '/'},
                {name: 'Valores Em Conta', url: '/'},
                {name: 'Cadastro De Valores', url: '/'},
                {name: 'Carga De Dados', url: '/'},
                {name: 'Cofigurações', url: '/'},
                {name: 'Page One', url: '/pageOne'},
                {name: 'Page Two', url: '/pageTwo'}
            ];

            $scope.toggle = toggle;
            
        })();

    };

    appController.$inject = ['$scope', '$mdSidenav'];

    angular.module('app').controller('appCtrl', appController);
        
})();