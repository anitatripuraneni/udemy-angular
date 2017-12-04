
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './core/home/home.component';
import { PreloadAllModules } from '@angular/router';



const appRoutes: Routes = [
 // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
 { path: '', component:HomeComponent},
 //below statement is for lazy loading of recipes module when ever use clicks on recipes link on the home page
 {path:'recipes', loadChildren:'./recipe-list/recipe-list.module#RecipeListModule'},
 //the second property of the above statement signifies that RecipeListModule should be loaded lazyly ,that is when ever required.the content before # is the relative path of recipe-list.module file name  without '.ts' and  the content after # is the Class name of RecipeListModule.
  { path: 'shopping-list', component: ShoppingListComponent },
 
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
