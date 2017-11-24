import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
numberObsSubscription: Subscription;
customObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    //code to use built in obsevable functions  by using observable package
    const myNumbers = Observable.interval(1000)
      .map(
        (data: number)=>{
          return data*2;
        }
    );
    this.numberObsSubscription =myNumbers.subscribe(
      (number: number)=>{
        console.log(number);
      }
    );

    //code to create our own custom observable
    const myObservable = Observable.create(
      (observer: Observer<string>)=>{
        setTimeout(
          ()=>{
            observer.next('first package');
          },2000);
        setTimeout(
          ()=>{
            observer.next('second package');
          },4000);
        setTimeout(
          ()=>{
           // observer.error('This does not work');
            observer.complete();//This complete method defines that our observable execution is completed.if we have any code after this method in our observable it will not be executed.
          },5000);
      });
    this.customObsSubscription =myObservable.subscribe(
      (data: string)=>{console.log(data);},
      (error: string)=>{console.log(error);},
      ()=>{console.log('completed');}
    );

  }
ngOnDestroy(){
this.numberObsSubscription.unsubscribe();
this.customObsSubscription.unsubscribe();
}
}
