import {Component, ElementRef, OnInit, ViewEncapsulation, ViewChild, EventEmitter, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() IngredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem() {
const ingName = this.nameInputRef.nativeElement.value;
const ingAmount = this.amountInputRef.nativeElement.value;
const newIngredient = new Ingredient(ingName, ingAmount);
this.IngredientAdded.emit(newIngredient);
  }
}
