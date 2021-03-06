import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private store: Store<fromApp.AppState>) { }
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth').map(
      (authState: fromAuth.State)=>{
        return authState.authenticated;
      }
    );
  }
}
