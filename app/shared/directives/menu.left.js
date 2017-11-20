(function (){
    'use strict';

    function constructor ($mdSidenav, $location) {

        function link (scope, element, attrs) {

            scope.color = 'deep-purple';

            scope.close = function (id) {
                $mdSidenav(id).toggle();
            };

            scope.select = function (path) {

                $location.path(path);

                scope.close(scope.selfId);

            };

            document.onmousemove = function (event) {
                
                if (!$mdSidenav(scope.selfId).isOpen() && event.clientX <= 3)
                    $mdSidenav(scope.selfId).toggle();
    
            };

        };

        return {
            link: link,
            restrict: 'E',
            templateUrl: '/shared/directives/menu.left.html',
            scope: {
                'selfId': '@',
                'options': '='
            }
        };

    };

    angular.module('app').directive('menuLeft', constructor);

})();