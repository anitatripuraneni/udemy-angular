import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
  public name: String;
  public desc: String;
  public imagePath: String;
  public ingredients: Ingredient[];

  constructor(name: String, desc: String, imagePath: String,ingredients: Ingredient[]) {
    this.name = name;
    this.desc = desc;
    this.imagePath = imagePath;
    this.ingredients=ingredients;
  }
}
