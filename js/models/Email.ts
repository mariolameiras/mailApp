/// <reference path='../_all.ts' />


module mail {
    'use strict';

    export class Email {
        constructor(
            public title: string,
            public from: string,
            public subject: string,
            public message: string,
            public label: boolean,
            public completed: boolean
         ) { }
    }
}