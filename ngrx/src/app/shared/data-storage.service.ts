import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { RecipeListService } from '../recipe-list/recipe-list.service';
import { Recipe } from '../recipe-list/recipe-list.model';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';
import { HttpClient,HttpRequest } from '@angular/common/http';



@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeListService: RecipeListService, private authService: AuthService, private httpClient: HttpClient) { }
  storeRecipes() {
    const req = new HttpRequest('PUT', 'https://ng-recipe-e2805.firebaseio.com/recipes.json', this.recipeListService.getRecipes(), {reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes() {
     this.httpClient.get<Recipe[]>('https://ng-recipe-e2805.firebaseio.com/recipes.json', {
          observe: 'body',
          responseType: 'json'
        })
          .map(
            (recipes) => {
              console.log(recipes);
              for (let recipe of recipes) {
                if (!recipe['ingredients']) {
                  recipe['ingredients'] = [];
                }
              }
              return recipes;
            }
          )
          .subscribe(
            (recipes: Recipe[]) => {
              this.recipeListService.setRecipes(recipes);
            }
          );
  }
}
