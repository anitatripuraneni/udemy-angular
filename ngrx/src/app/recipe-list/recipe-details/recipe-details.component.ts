import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {Recipe} from '../recipe-list.model';
import {RecipeListService} from '../recipe-list.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListAction from '../../shopping-list/store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeDetailsComponent implements OnInit {
  recipe1: Recipe;
  id: number;
  constructor(private recipeListService: RecipeListService,private route: ActivatedRoute, private router: Router,
    private store:Store<fromApp.AppState>) { }

  ngOnInit() {
    //const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.recipe1 = this.recipeListService.getRecipe(this.id);
      }
    );
  }
  onAddToShoppingList(){
this.store.dispatch(new ShoppingListAction.AddIngredients(this.recipe1.ingredients));
  }

  onEditRecipe(){
    //this.router.navigate(['edit'],{relativeTo: this.route});
    this.router.navigate(['../',this.id,'edit'],{relativeTo: this.route});
  }
  onDeleteRecipe(){
    this.recipeListService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
