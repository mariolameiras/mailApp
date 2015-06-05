/// <reference path='../_all.ts' />
var mail;
(function (mail) {
    'use strict';
    /**
     * Directive that places focus on the element it is applied to when the expression it binds to evaluates to true.
     */
    function todoFocus($timeout) {
        return {
            link: function ($scope, element, attributes) {
                $scope.$watch(attributes.todoFocus, function (newval) {
                    if (newval) {
                        $timeout(function () { return element[0].focus(); }, 0, false);
                    }
                });
            }
        };
    }
    mail.todoFocus = todoFocus;
    todoFocus.$inject = ['$timeout'];
})(mail || (mail = {}));
//# sourceMappingURL=TodoFocus.js.map