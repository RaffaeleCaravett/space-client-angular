import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-forms',
  templateUrl: './auth-forms.component.html',
  styleUrls: ['./auth-forms.component.scss']
})
export class AuthFormsComponent  implements OnInit{

section:string=''
loginForm!:FormGroup
signupForm!:FormGroup

constructor(){}


ngOnInit(): void {
    this.section='login'

this.loginForm= new FormGroup({
  email:new FormControl('', [Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
  password: new FormControl('',Validators.required)
})

}

logIn(){
  console.log(this.loginForm)
}
}
