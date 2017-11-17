import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  NewServerStatus = 'new server not created';
  serverName = '';
  serverCreated = false;
  serverList = [ 'TestServer1', 'TestServer2'];
  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverList.push(this.serverName);
    //this.NewServerStatus = 'new server was created is' + this.serverName;
  }
  /*updateSeverName(event: any) {
  console.log(event);
  }*/
  updateSeverName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
