import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { RecipeListService } from '../recipe-list/recipe-list.service';
import { Recipe } from '../recipe-list/recipe-list.model';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeListService: RecipeListService, private authService: AuthService, private httpClient: HttpClient) { }
  storeRecipes() {
    const headers = new Headers({ 'content-type': 'application/json' });
    const token = this.authService.getToken();
    //The below http call is with old http class before angular 4
    //return this.http.put('https://ng-recipe-e2805.firebaseio.com/recipes.json?auth='+token, this.recipeListService.getRecipes(), { headers: headers });
    //The below httpclient call is with new HttpClient class from angular 4.2+
    return this.httpClient.put('https://ng-recipe-e2805.firebaseio.com/recipes.json?auth=' + token, this.recipeListService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    /*this.http.get('https://ng-recipe-e2805.firebaseio.com/recipes.json?auth=' + token).map(
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
      );*/

      this.httpClient.get<Recipe[]>('https://ng-recipe-e2805.firebaseio.com/recipes.json?auth=' + token).map(
        (recipes) => {
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
