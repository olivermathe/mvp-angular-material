(function (){
    'use strict';

    function constructor ($compile) {

        function link (scope, element, attrs) {

            scope.lastTagPage = '';

            scope.$on('CHANGE_TOOLS', function (event, tools) {

                var divTools = element.find('md-toolbar').find('div').eq(0);
                var tag = '<'+tools+'></'+tools+'>';

                divTools.find(scope.lastTagPage).remove();

                divTools.append($compile(tag)(scope));

                scope.lastTagPage = tools;
                
            });

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