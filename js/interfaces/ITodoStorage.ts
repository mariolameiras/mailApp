/// <reference path='../_all.ts' />

module mail {

	export interface ITodoStorage {
		get (): Email[];
		put(todos: Email[]);
	}
}