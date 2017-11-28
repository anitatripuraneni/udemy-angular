import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Recipe} from './recipe-list.model';
import {RecipeListService} from './recipe-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class RecipeListComponent implements OnInit,OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  constructor(private recipeService: RecipeListService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.recipeService.recipeschanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes = recipes;
    }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
