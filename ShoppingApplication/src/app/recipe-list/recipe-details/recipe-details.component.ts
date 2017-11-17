import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {Recipe} from '../recipe-list.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe1: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
