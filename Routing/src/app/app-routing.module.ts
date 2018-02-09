import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {ServersComponent} from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ServerResolver} from './servers/server/server-resolver.service';


const appRoutes: Routes=[
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children:[
    {path: ':id/:name', component: UserComponent}
  ]},
  {path: 'servers',
    //canActivate: [AuthGuard],//This guard is used to guard  parent and child routes, but if we want to guard only child routes not parent route then need to go with below approach.
    canActivateChild: [AuthGuard],
    component: ServersComponent, children:[
    {path: ':id', component: ServerComponent,resolve:{server:ServerResolver}},
    {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
  ]},
//  {path: 'not-found', component: PageNotFoundComponent},

  //{path: 'something', redirectTo: '/not-found'}
  //with the aboue route we can handle something route and redirect to not-found which will land in pagenotfound component
  //but in real time we cannot handle all the possible unknown routes in the application so for it we can generically represent all other routes which are not handled by our application by using '**'

  {path: 'not-found', component: ErrorPageComponent,data: {message: 'page not found'}},
  {path: '**', redirectTo: '/not-found'}
  //but 1 important point to remember is to make sure ur '**' router path should be last in the routes array since while parsing the array will be parsed from top to bottom.
  //so if any routes present after '**' will be redirected to not-found route only.
];
@NgModule({
imports: [
  //RouterModule.forRoot(appRoutes,{useHash: true})//useHash property is used in the url to identify or divide URL to 2 parts which is understandable in all browers and also on different web servers
  //http://localhost:4200/#/servers-->the portion before # will be taken by webserver and after portion will be ignored, the portion after # will be taken by angular for normal process.
  RouterModule.forRoot(appRoutes)
],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
