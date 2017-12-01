import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { CommonModule } from "@angular/common";
import { sharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { RecipeListService } from "../recipe-list/recipe-list.service";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../auth/auth.interceptor";
import { LoggingInterceptor } from "../shared/logging.interceptor";




@NgModule({
declarations:[
    HeaderComponent,
    HomeComponent
], 
imports:[
    CommonModule,
    sharedModule,
    AppRoutingModule
],
exports:[
    AppRoutingModule,
    HeaderComponent

],
providers:[ShoppingListService, 
    RecipeListService, 
    DataStorageService, 
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}]
})
export class CoreModule{

}