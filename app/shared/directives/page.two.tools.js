(function (){
    'use strict';

    function constructor () {

        function link (scope, element, attrs) {
    
        };

        return {
            link: link,
            restrict: 'E',
            templateUrl: '/shared/directives/page.two.tools.html'
        };

    };

    angular.module('app').directive('pageTwoTools', constructor);

})();