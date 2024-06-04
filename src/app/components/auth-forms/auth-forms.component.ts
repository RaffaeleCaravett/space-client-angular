import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-auth-forms',
  templateUrl: './auth-forms.component.html',
  styleUrls: ['./auth-forms.component.scss']
})
export class AuthFormsComponent  implements OnInit{

section:string=''
loginForm!:FormGroup
signupForm!:FormGroup
loginFormError:string=''
signupFormError:string=''

constructor(private authService:AuthService){}


ngOnInit(): void {
    this.section='login'

this.loginForm= new FormGroup({
  email:new FormControl('', [Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
  password: new FormControl('',[Validators.required,Validators.minLength(6)])
})

this.signupForm = new FormGroup({
  email:new FormControl('', [Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
  password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  nome: new FormControl('',Validators.required),
  cognome: new FormControl('',Validators.required),
  eta: new FormControl('',[Validators.required,Validators.min(18)])
})

}

logIn(){
if(this.loginForm.valid){
this.authService.logIn
(
  {
    email:this.loginForm.controls['email'].value,
    password:this.loginForm.controls['password'].value
  }
).subscribe({
  next:(success:any)=>{
console.log(success)
  },
  error:(error:any)=>{
this.loginFormError="Qualcosa è successo nell'invio della richiesta."
if(error&&error.error.message){
  this.loginFormError=error.error.message
}
  },
  complete:()=>{

  }
}
)
}
}

signUp(){
  if(this.signupForm.valid){
  this.authService.signUp
  (
    {
      email:this.signupForm.controls['email'].value,
      password:this.signupForm.controls['password'].value,
      nome:this.signupForm.controls['nome'].value,
      cognome:this.signupForm.controls['cognome'].value,
      eta:this.signupForm.controls['eta'].value
    }
  ).subscribe({
    next:(success:any)=>{
  console.log(success)
    },
    error:(error:any)=>{
  this.signupFormError="Qualcosa è successo nell'invio della richiesta."
  if(error&&error.error.message){
    this.signupFormError=error.error.message
  }
    },
    complete:()=>{

    }
  }
  )
  }
  }

}
