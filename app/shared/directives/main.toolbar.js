(function (){
    'use strict';

    function constructor () {

        function link (component, element, attrs) {

        };

        return {
            link: link,
            restrict: 'E',
            templateUrl: '/shared/directives/main.toolbar.html',
            scope: {
                'menuClick': '&menuClick'
            }
        };

    };

    angular.module('app').directive('mainToolbar', constructor);

})();