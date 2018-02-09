import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService, private accountSerivce: AccountsService){
    this.accountSerivce.statusUpdated.subscribe(
      (status: string)=>alert('new status: '+status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    /*this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });*/
    //console.log('A server status changed, new status: ' + accountStatus);
this.accountSerivce.addAccount(accountName,accountStatus);

    //const loggingService = new LoggingService();

    // No need to create new object for service class like above statment, need to inject the serivce to component by using dependency injection.
    // to do this need to add service object to constructor and add providers in the decorators.

    //this.loggingService.logStatusChange(accountStatus);//no need to call the logging service here

  }
}
