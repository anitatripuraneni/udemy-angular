
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeStartComponent} from './recipe-list/recipe-start/recipe-start.component';
import {RecipeDetailsComponent} from './recipe-list/recipe-details/recipe-details.component';
import {RecipeEditComponent} from './recipe-list/recipe-edit/recipe-edit.component';

const appRoutes : Routes = [
  {path: '', redirectTo:'/recipes',pathMatch: 'full'},
  {path: 'recipes', component: RecipeListComponent, children: [
    {path:'', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id',component: RecipeDetailsComponent},
    {path: ':id/edit', component: RecipeEditComponent}
  ]},
  {path: 'shopping-list', component:ShoppingListComponent}
];
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
  })

export class AppRoutingModule {

}
