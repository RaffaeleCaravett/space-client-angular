import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

constructor(private authService:AuthService,private router:Router){}


ngOnInit(): void {
    this.section='login'

this.loginForm= new FormGroup({
  email:new FormControl('', [Validators.required]),
  password: new FormControl('',[Validators.required])
})

this.signupForm = new FormGroup({
  email:new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
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
localStorage.setItem('accessToken',success.tokens.accessToken)
localStorage.setItem('refreshToken',success.tokens.refreshToken)
this.loginFormError=""
this.authService.authenticateUser(true)
this.router.navigate(['/itinerari'])

  },
  error:(error:any)=>{
this.loginFormError="Qualcosa è successo nell'invio della richiesta."
if(error&&error.error.message){
  this.loginFormError=error.error.message
}else if(error&&error.error.messageList){
  this.loginFormError=error.error.messageList[0]
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
  this.signupFormError=""
  this.section='login'
    },
    error:(error:any)=>{
  this.signupFormError="Qualcosa è successo nell'invio della richiesta."
  if(error&&error.error.message){
    this.signupFormError=error.error.message
  }else if (error&&error.error.messageList){
    this.signupFormError=error.error.messageList[0]
  }
    },
    complete:()=>{

    }
  }
  )
  }
  }

}
