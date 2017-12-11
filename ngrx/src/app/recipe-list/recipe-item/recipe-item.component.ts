import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {Recipe} from '../recipe-list.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input()index: number;



  ngOnInit() {

  }
}