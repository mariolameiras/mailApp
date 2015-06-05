/// <reference path='../_all.ts' />
/// <reference path='../_all.ts' />
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
/// <reference path='../_all.ts' />
var mail;
(function (mail) {
    'use strict';
    var Email = (function () {
        function Email(title, from, subject, message, label, completed) {
            this.title = title;
            this.from = from;
            this.subject = subject;
            this.message = message;
            this.label = label;
            this.completed = completed;
        }
        return Email;
    })();
    mail.Email = Email;
})(mail || (mail = {}));
/// <reference path='../_all.ts' />
var mail;
(function (mail) {
    'use strict';
    /**
     * The main controller for the app. The controller:
     * - retrieves and persists the model via the todoStorage service
     * - exposes the model to the template and provides event handlers
     */
    var EmailCtrl = (function () {
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        function EmailCtrl($scope, $location, todoStorage, filterFilter) {
            var _this = this;
            this.$scope = $scope;
            this.$location = $location;
            this.todoStorage = todoStorage;
            this.filterFilter = filterFilter;
            this.todos = $scope.todos = todoStorage.get();
            $scope.newTodo = '';
            $scope.editedTodo = null;
            // 'vm' stands for 'view model'. We're adding a reference to the controller to the scope
            // for its methods to be accessible from view / HTML
            $scope.vm = this;
            // watching for events/changes in scope, which are caused by view/user input
            // if you subscribe to scope or event with lifetime longer than this controller, make sure you unsubscribe.
            $scope.$watch('todos', function () { return _this.onTodos(); }, true);
            $scope.$watch('location.path()', function (path) { return _this.onPath(path); });
            if ($location.path() === '')
                $location.path('/');
            $scope.location = $location;
        }
        EmailCtrl.prototype.onPath = function (path) {
            this.$scope.statusFilter = (path === '/active') ?
                { completed: false } : (path === '/completed') ?
                { completed: true } : null;
        };
        EmailCtrl.prototype.onTodos = function () {
            this.$scope.remainingCount = this.filterFilter(this.todos, { completed: false }).length;
            this.$scope.doneCount = this.todos.length - this.$scope.remainingCount;
            this.$scope.allChecked = !this.$scope.remainingCount;
            this.todoStorage.put(this.todos);
        };
        EmailCtrl.prototype.addTodo = function () {
            var newTodo = this.$scope.newTodo.trim();
            if (!newTodo.length) {
                return;
            }
            this.todos.push(new mail.Email(newTodo, newTodo, newTodo, newTodo, false, false));
            this.$scope.newTodo = '';
        };
        EmailCtrl.prototype.editTodo = function (todoItem) {
            this.$scope.editedTodo = todoItem;
        };
        EmailCtrl.prototype.doneEditing = function (todoItem) {
            this.$scope.editedTodo = null;
            todoItem.title = todoItem.title.trim();
            if (!todoItem.title) {
                this.removeTodo(todoItem);
            }
        };
        EmailCtrl.prototype.removeTodo = function (todoItem) {
            this.todos.splice(this.todos.indexOf(todoItem), 1);
        };
        EmailCtrl.prototype.clearDoneTodos = function () {
            this.$scope.todos = this.todos = this.todos.filter(function (todoItem) { return !todoItem.completed; });
        };
        EmailCtrl.prototype.markAll = function (completed) {
            this.todos.forEach(function (todoItem) { todoItem.completed = completed; });
        };
        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        EmailCtrl.$inject = [
            '$scope',
            '$location',
            'todoStorage',
            'filterFilter'
        ];
        return EmailCtrl;
    })();
    mail.EmailCtrl = EmailCtrl;
})(mail || (mail = {}));
/// <reference path='../_all.ts' />
var mail;
(function (mail) {
    /**
     * Services that persists and retrieves Mails from localStorage.
     */
    var EmailStorage = (function () {
        function EmailStorage() {
            this.STORAGE_ID = 'minium-mailapp';
        }
        EmailStorage.prototype.get = function () {
            return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
        };
        EmailStorage.prototype.put = function (todos) {
            localStorage.setItem(this.STORAGE_ID, JSON.stringify(todos));
        };
        return EmailStorage;
    })();
    mail.EmailStorage = EmailStorage;
})(mail || (mail = {}));
/// <reference path='_all.ts' />
/**
 * The main TodoMVC app module.
 *
 * @type {angular.Module}
 */
var mail;
(function (mail) {
    'use strict';
    var todomvc = angular.module('mailApp', [])
        .controller('todoCtrl', mail.EmailCtrl)
        .directive('todoBlur', mail.todoBlur)
        .directive('todoFocus', mail.todoFocus)
        .service('todoStorage', mail.EmailStorage);
})(mail || (mail = {}));
/// <reference path='libs/jquery/jquery.d.ts' />
/// <reference path='libs/angular/angular.d.ts' />
/// <reference path='interfaces/ITodoScope.ts' />
/// <reference path='interfaces/ITodoStorage.ts' />
/// <reference path='directives/TodoFocus.ts' />
/// <reference path='directives/TodoBlur.ts' />
/// <reference path='models/Email.ts' />
/// <reference path='controllers/EmailCtrl.ts' />
/// <reference path='services/EmailStorage.ts' />
/// <reference path='Application.ts' />
//# sourceMappingURL=Application.js.map