if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Email_1 = require('models/Email');
var EmailStorage_1 = require('services/EmailStorage');
var MailAppComponent = (function () {
    //emails2: Array<string>;
    function MailAppComponent(emailStorage) {
        this.populateStorage(emailStorage);
        //this.emails2 = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
        this.emails = emailStorage.get();
    }
    MailAppComponent.prototype.populateStorage = function (emailStorage) {
        var mail1 = new Email_1.Email("raphael.rodrigues@vilt-group.com", "mario.lameiras@vilt-group.com", "Minium Rocks", "Minium rocks !", false);
        var mail2 = new Email_1.Email("raphael.rodrigues@vilt-group.com", "mario.lameiras@vilt-group.com", "what is up", "what is up", false);
        /* $http.getJSON('JsonData.json').done(function (data) {
         var emails: Email[] = data;
         });*/
        var emails = [mail1, mail2];
        //  var storage: EmailStorage = new EmailStorage();
        emailStorage.put(emails);
    };
    MailAppComponent = __decorate([
        angular2_1.View({
            templateUrl: 'views/inbox.html',
            directives: [angular2_1.NgFor]
        }),
        angular2_1.Component({
            selector: 'mail-app',
            appInjector: [EmailStorage_1.EmailStorage]
        }), 
        __metadata('design:paramtypes', [EmailStorage_1.EmailStorage])
    ], MailAppComponent);
    return MailAppComponent;
})();
angular2_1.bootstrap(MailAppComponent);
