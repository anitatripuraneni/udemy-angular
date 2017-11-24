import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private authService: AuthService) { }


  ngOnInit() {
  }


  onLoadServers(){
this.router.navigate(['/servers']); //the absoulte path with starting '/' will be appending this path to root path (localhost:4200), if the path starting with '../' (2 dots and /) from the current path it will step 1 path above and add this path to that path.
    //this.router.navigate(['servers']);  the relative path with starting without no '/' or starting with'./'(single dot and /) will append this path to the current component path.
  }
  //different ways of passing query params : 1st is through html page and 2nd is through component as mentioned below
  onLoadServer(id:number){
    this.router.navigate(['/servers',id,'edit'],{queryParams: {allowEdit: '1'},fragment:'loading'})
  }

  onLogin(){
    this.authService.login();
  }

  onLogout(){
    this.authService.logout();
  }
}
