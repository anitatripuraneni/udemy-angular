import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe-list.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';


export class RecipeListService {
recipeschanged = new Subject<Recipe[]>();
 private recipes: Recipe[] = [
    new Recipe('First recipe', 'This is Italian recipe', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/' +
      'collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',[new Ingredient('Meat',1),new Ingredient('French fries',20)]),
    new Recipe('Second recipe', 'This is indian recipe', 'https://drop.ndtv.com/albums/COOKS/corngallery/' +
      'creolespicedcornthumb_640x480.jpg',[new Ingredient('Bun',3),new Ingredient('Fish',7)]) ];

setRecipes(recipes: Recipe[]){
  this.recipes = recipes;
  this.recipeschanged.next(this.recipes.slice());
}
 getRecipes(){
   return this.recipes.slice();//by using slice method we can return only copy of the array, not exactly the recipe object present in service class, so this helps to avoid directly access of recipe array from outside the service class.
 }
  constructor() { }

getRecipe(index: number){
  return this.recipes[index];
}


addRecipe(recipe: Recipe){
 this.recipes.push(recipe);
 this.recipeschanged.next(this.recipes.slice());
}

updateRecipe(index: number,newRecipe: Recipe){
  this.recipes[index]= newRecipe;
  this.recipeschanged.next(this.recipes.slice());
}

deleteRecipe(index: number){
  this.recipes.splice(index,1);
  this.recipeschanged.next(this.recipes.slice());
}
}
