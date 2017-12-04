import {Component, ElementRef, OnInit, ViewEncapsulation, ViewChild, EventEmitter, Output, OnDestroy} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as ShoppingListAction from '../store/shopping-list.actions';

import * as fromApp from '../../store/app.reducers';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
subscription: Subscription;
editMode = false;

editItem: Ingredient;
@ViewChild('form') slform: NgForm;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription= this.store.select('shoppingList').subscribe(
      data=>{
        if(data.editedIngredientIndex>-1){
          this.editItem = data.editedingredient;
          this.editMode = true;
          this.slform.setValue({
            name: this.editItem.name,
            amount: this.editItem.amount
          });
        }else {
          this.editMode = false;
        }
      }
    );

    
  }
  onSubmit(form:NgForm) {
const value = form.value;
const newIngredient = new Ingredient(value.name, value.amount);
if(this.editMode){
  this.store.dispatch(new ShoppingListAction.UpdateIngredient({ingredient:newIngredient}));
}else {
  this.store.dispatch(new ShoppingListAction.AddIngredient(newIngredient));
}
this.editMode = false;
form.reset();
  }

  onClear(){
    this.slform.reset();
    this.editMode = false;
  }
  onDelete(){
    this.store.dispatch(new ShoppingListAction.DeleteIngredient());
    this.onClear();

  }
  ngOnDestroy(){
    this.store.dispatch(new ShoppingListAction.StopEdit());
    this.subscription.unsubscribe();
  }
}
