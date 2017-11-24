import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  genders = ['male', 'female'];
  signUpForm: FormGroup;

  ngOnInit(){
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null,[Validators.email,Validators.required]),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });

  }

  onsubmit(){
    console.log(this.signUpForm);
  }

  onAddHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
}
