import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('userForm')  singUpForm: NgForm;
defaultQuestion = 'pet';
answer = '';
genders = ['male','female'];
user = {
  username:'',
  email:'',
  secretQuestion:'',
  answer:'',
  gender:''
};
submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    /*this.singUpForm.setValue(
      {
        userData:{
          username: suggestedName,
          email:''
        },
        secret: 'pet',
        questionAnswer: '',
        gender: 'male'
      }
    );*/
    this.singUpForm.form.patchValue({
        userData: {
          username: suggestedName

        }
      }
    );
  }

/*onSubmit(form: NgForm){
    console.log(form);
}*/

onSubmit(){
console.log(this.singUpForm);
this.submitted = true;
this.user.username = this.singUpForm.value.userData.username;
  this.user.email = this.singUpForm.value.userData.email;
  this.user.secretQuestion = this.singUpForm.value.secret;
  this.user.answer = this.singUpForm.value.questionAnswer;
  this.user.gender = this.singUpForm.value.gender;

  this.singUpForm.reset();
}
}
