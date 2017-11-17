import {Component, EventEmitter, OnInit, ViewEncapsulation, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
@Output('featureSelect') featureSelected = new EventEmitter<String>();

  onSelect(feature: String) {
  this.featureSelected.emit(feature);
}
  constructor() { }

  ngOnInit() {
  }

}
