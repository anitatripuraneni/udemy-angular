import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  userName = '';
  emptyUserName = true;
  /*constructor() {
    if (this.userName !== '') {
      this.emptyUserName = false;
    }
  }*/
  enterString() {
    if (this.userName.length > 0) {
      return this.emptyUserName = false;
    } else {
      return this.emptyUserName = true;
    }
  }
  emptyString() {
    this.userName = '';
  }
  ngOnInit() {
  }
}
