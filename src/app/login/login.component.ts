import { Component, OnInit } from '@angular/core';
import {Login} from "../models/login";
import {LoginService} from "./servicio/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { }

  login: Login = {
    username:'',
    password:''
  };

  loged:boolean = true;


  ngOnInit(): void {
  }

  onLogin(){
    //console.log(this.login);
    this.loginService.onLogin(this.login).subscribe( x =>{
      console.log(x);
      if(x == '0'){
        this.router.navigate(['/user-list']);
      }else{
        this.loged=false;
      }

    });
  }
}
