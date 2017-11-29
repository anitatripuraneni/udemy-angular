import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { RecipeListService } from '../recipe-list/recipe-list.service';
import { Recipe } from '../recipe-list/recipe-list.model';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';



@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeListService: RecipeListService, private authService: AuthService) { }
  storeRecipes() {
    const headers = new Headers({ 'content-type': 'application/json' });
    const token =this.authService.getToken();
    return this.http.put('https://ng-recipe-e2805.firebaseio.com/recipes.json?auth='+token, this.recipeListService.getRecipes(), { headers: headers });
  }

  getRecipes() {
    const token =this.authService.getToken();
    this.http.get('https://ng-recipe-e2805.firebaseio.com/recipes.json?auth='+token).map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    ).subscribe(
      (recipes: Recipe[]) => {
        this.recipeListService.setRecipes(recipes);

      }
      );
  }
}
