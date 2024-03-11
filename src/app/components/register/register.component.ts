import { Component } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user:User={
    id:"",
    name:"",
    email:"",
    password:""
  };
  constructor(private authService:AuthService){}

  createUser(){
    if(this.user.email != "" && this.user.password != ""){
      this.authService.SignUp(this.user.email,this.user.password);
    }
    
  }
}
