import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../models/user';

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
  constructor(private apiService:ApiService){}

  createUser(){
    
  }
}
