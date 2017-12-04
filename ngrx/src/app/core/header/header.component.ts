import {Component, EventEmitter, OnInit, ViewEncapsulation, Output} from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
authState:Observable<fromAuth.State>;
  constructor(private datastorageService: DataStorageService, private authService: AuthService, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
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
