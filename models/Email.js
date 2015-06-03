var Email = (function () {
    function Email(title, from, subject, message, label) {
        this.title = title;
        this.from = from;
        this.subject = subject;
        this.message = message;
        this.label = label;
    }
    return Email;
})();
exports.Email = Email;
