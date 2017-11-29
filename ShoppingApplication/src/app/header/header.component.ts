import {Component, EventEmitter, OnInit, ViewEncapsulation, Output} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(private datastorageService: DataStorageService, private authService: AuthService) { }

  ngOnInit() {
  }
  onSaveData(){
 this.datastorageService.storeRecipes().subscribe(
   (response: Response)=>{
     console.log(response);
   }
 );
  }

  onFetchData(){
    this.datastorageService.getRecipes();
  }

  onLogout(){
    this.authService.logout();
  }
}
