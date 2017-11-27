import {Component, ElementRef, OnInit, ViewEncapsulation, ViewChild, EventEmitter, Output, OnDestroy} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
subscription: Subscription;
editMode = false;
editItemIndex : number;
editItem: Ingredient;
@ViewChild('form') slform: NgForm;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number)=>{
        this.editItemIndex = index;
        this.editMode = true;
        this.editItem = this.shoppingListService.getIngredient(index);
        this.slform.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      }
    );
  }
  onSubmit(form:NgForm) {
const value = form.value;
const newIngredient = new Ingredient(value.name, value.amount);
if(this.editMode){
  this.shoppingListService.updateIngredient(this.editItemIndex,newIngredient);
}else {
  this.shoppingListService.addIngredient(newIngredient);
}
this.editMode = false;
form.reset();
  }

  onClear(){
    this.slform.reset();
    this.editMode = false;
  }
  onDelete(){
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
