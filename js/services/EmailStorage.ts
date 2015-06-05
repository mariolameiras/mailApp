/// <reference path='../_all.ts' />

module mail {
    /**
     * Services that persists and retrieves Mails from localStorage.
     */
    export class EmailStorage {

        STORAGE_ID = 'minium-mailapp';


        get(): Email[] {
            return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
        }

        put(todos: Email[]) {
            localStorage.setItem(this.STORAGE_ID, JSON.stringify(todos));
        }
    }
}