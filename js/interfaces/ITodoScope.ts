/// <reference path='../_all.ts' />

module mail {

	export interface ITodoScope extends ng.IScope {
		todos: Email[];
		newTodo: string;
		editedTodo: Email;
		remainingCount: number;
		doneCount: number;
		allChecked: boolean;
		statusFilter: { completed: boolean; };
		location: ng.ILocationService;
		vm: EmailCtrl;
	}
}