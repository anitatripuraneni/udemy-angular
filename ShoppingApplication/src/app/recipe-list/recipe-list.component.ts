import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Recipe} from './recipe-list.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
  selectedRecipe: Recipe;
  recipes: Recipe[] = [
    new Recipe('First recipe', 'This is Italian recipe', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/' +
      'collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
    new Recipe('Second recipe', 'This is indian recipe', 'https://drop.ndtv.com/albums/COOKS/corngallery/' +
      'creolespicedcornthumb_640x480.jpg') ];
  constructor() {
      }

  ngOnInit() {
  }

}
