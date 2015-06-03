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
exports.EmailStorage = EmailStorage;
