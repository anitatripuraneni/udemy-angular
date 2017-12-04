import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers'
import 'rxjs/add/operator/switchMap';


export class AuthInterceptor implements HttpInterceptor {

    constructor(private store: Store<fromApp.AppState>) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.store.select('auth')
        .switchMap((authState: fromAuth.State) => {
            const copiedReq = request.clone({ params: request.params.set('auth', authState.token)});
            return next.handle(copiedReq);
        })
    }
}