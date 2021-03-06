(function (){
    'use strict';

    function constructor ($mdMenu, $mdDialog) {

        function link (scope, element, attrs) {

            scope.showAlert = function(ev) {
                // Appending dialog to document.body to cover sidenav in docs app
                // Modal dialogs should fully cover application
                // to prevent interaction outside of dialog
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('This is an alert title')
                        .textContent('You can specify some description text in here.')
                        .ariaLabel('Alert Dialog Demo')
                        .ok('Got it!')
                        .targetEvent(ev)
                );
            };
    
        };

        return {
            link: link,
            restrict: 'E',
            templateUrl: '/shared/directives/page.one.tools.html'
        };

    };

    angular.module('app').directive('pageOneTools', constructor);

})();