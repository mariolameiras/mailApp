/// <reference path='../_all.ts' />
var mail;
(function (mail) {
    'use strict';
    /**
     * Directive that executes an expression when the element it is applied to loses focus.
     */
    function todoBlur() {
        return {
            link: function ($scope, element, attributes) {
                element.bind('blur', function () { $scope.$apply(attributes.todoBlur); });
                $scope.$on('$destroy', function () { element.unbind('blur'); });
            }
        };
    }
    mail.todoBlur = todoBlur;
})(mail || (mail = {}));
//# sourceMappingURL=TodoBlur.js.map