import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['' +
  '.online{' +
  'color: white;' +
  '}'
  ]
})
export class AppComponent {
  paragraph = 'sceret password is displayed here';
  displayContent1 = false;
  count = 0;
  countArr = [];

  displayContent() {
    this.displayContent1 = true;
    this.count++;
    this.countArr.push(this.count);
  }

  getColor() {
    return this.count > 5 ? 'green' : 'white';
  }
}
