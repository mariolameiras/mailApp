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
//# sourceMappingURL=Email.js.map