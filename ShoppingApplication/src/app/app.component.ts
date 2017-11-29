import { Component,OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature: String = 'recipe';
  onNavigate(feature: String) {
    console.log(feature);
    this.loadedFeature = feature;
  }
  ngOnInit(){
firebase.initializeApp({
  apiKey: "AIzaSyD1Z-QZwF-Mbx59mUjYYj7SJspFtChOr5Y",
  authDomain: "ng-recipe-e2805.firebaseapp.com"
});
  }
}
