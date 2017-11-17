import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //selector: `[app-servers]`,
  selector: `.app-servers`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
