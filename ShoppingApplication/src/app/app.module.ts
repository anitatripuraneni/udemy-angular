import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { sharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule.withServerTransition({appId:'my-unversial-app'}),
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    sharedModule,
    //RecipeListModule,//The RecipeListModule is removed from app.module since it should not be loaded eagerly at the time of webpack.so this module is configured in app-routing module for lazy laoding
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
