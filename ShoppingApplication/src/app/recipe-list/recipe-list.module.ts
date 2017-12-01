import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeListComponent } from './recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListRoutingModule } from './recipe-list-routing.module';
import { sharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeStartComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    RecipeEditComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipeListRoutingModule,
    sharedModule
  ]

})
export class RecipeListModule { }
