import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeListService} from '../recipe-list.service';
import {Recipe} from '../recipe-list.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeEditComponent implements OnInit {
id: number;
editMode = false;
reciepeForm: FormGroup;
  constructor(private route:ActivatedRoute, private recipeService: RecipeListService,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
       this.initForm();
      }
    );
  }

  onAddIngredient(){
    (<FormArray>this.reciepeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }
  onSubmit(){
    const newRecipe = new Recipe(
      this.reciepeForm.value['name'],
      this.reciepeForm.value['description'],
      this.reciepeForm.value['imagePath'],
      this.reciepeForm.value['ingredients']);
    if(this.editMode) {
     this.recipeService.updateRecipe(this.id,newRecipe);

      //this.recipeService.updateRecipe(this.id,this.reciepeForm.value);

    }else{
      this.recipeService.addRecipe(newRecipe);
      //this.recipeService.addRecipe(this.reciepeForm.value);

    }
    this.onCancel();

  }
private initForm(){
    let recipeName ='';
    let recipeImagePath = '';
    let recipeDescription ='';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.desc;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name,Validators.required),
            'amount': new FormControl(ingredient.amount,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }
    this.reciepeForm = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'imagePath': new FormControl(recipeImagePath,Validators.required),
      'ingredients': recipeIngredients
    });
}
  onCancel(){
this.router.navigate(['../'],{relativeTo: this.route});
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.reciepeForm.get('ingredients')).removeAt(index);
  }
}
