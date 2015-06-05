/// <reference path='_all.ts' />

/**
 * The main TodoMVC app module.
 *
 * @type {angular.Module}
 */
module mail {
    'use strict';

    var todomvc = angular.module('mailApp', [])
            .controller('todoCtrl', EmailCtrl)
            .directive('todoBlur', todoBlur)
            .directive('todoFocus', todoFocus)
            .service('todoStorage', EmailStorage);
}