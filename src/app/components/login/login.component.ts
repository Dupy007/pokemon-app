import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user:User={
    id:"",
    name:"",
    email:"",
    password:""
  };
  constructor(private authService:AuthService){}

  login(){
    if(this.user.email != "" && this.user.password != ""){
      this.authService.SignIn(this.user.email,this.user.password);
    }
    
  }
}
