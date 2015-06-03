import {Component, View, NgFor, bootstrap} from 'angular2/angular2';
import {Email} from 'models/Email';
import {EmailStorage} from 'services/EmailStorage';

@View({
  templateUrl: 'views/inbox.html',
  directives: [NgFor]
})
@Component({
  selector: 'mail-app',
  appInjector: [EmailStorage]
})
class MailAppComponent {
  emails: Email[];
  //emails2: Array<string>;
  
 
  constructor(emailStorage: EmailStorage) {
    
    this.populateStorage(emailStorage);
    //this.emails2 = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
    this.emails = emailStorage.get();
         
    
  }
  
  populateStorage(emailStorage: EmailStorage){
    var mail1: Email = new Email("raphael.rodrigues@vilt-group.com","mario.lameiras@vilt-group.com","Minium Rocks","Minium rocks !",false);
    var mail2: Email = new Email("raphael.rodrigues@vilt-group.com","mario.lameiras@vilt-group.com","what is up","what is up",false);
   /* $http.getJSON('JsonData.json').done(function (data) {
    var emails: Email[] = data;
    });*/
    var emails: Email[] = [mail1,mail2];
     
          
  //  var storage: EmailStorage = new EmailStorage();
    emailStorage.put(emails);
    

  }
}
bootstrap(MailAppComponent);
