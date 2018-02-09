import { Component, Input, OnChanges, SimpleChange} from '@angular/core';

@Component({
  //method 1:
  selector: 'app-root',//selector by element , this is recognised by angular bcoz it looks like how we use element is css , so it works just like a css selector
  //method 2:
  //selector: ['app-root']// selector by attribute, now angular selects the selector by attribute but not by element, so this selector should be used with some html div tag
  //method 3:
  //selector: .'app-root' // selector by class,now angular selects the selector by div class 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Does this change';
  firstname = '';
}

