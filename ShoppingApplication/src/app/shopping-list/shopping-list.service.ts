import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Mangoes', 10)];
  startedEditing = new Subject<number>();
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
getIngredient(index: number){
    return this.ingredients[index];
}
  addIngredients(ingredients: Ingredient[]){
   //1st approach of adding the object to array

   /* for(let ingredient of ingredients){
      this.addIngredient(ingredient);
    }*/
    //2nd approach of adding the object to array.

    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number,newIgredient: Ingredient){
    this.ingredients[index]= newIgredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number){
    this.ingredients.splice(index);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
