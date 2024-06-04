import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos'
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'space';

  constructor(private authService:AuthService,private router:Router){}

  ngOnInit(): void {
Aos.init()

if(localStorage.getItem("accessToken")){
this.authService.verifyToken(localStorage.getItem("accessToken")!).subscribe({
  next:(data)=>{
  if(data){
    localStorage.setItem('user',JSON.stringify(data))
    this.authService.authenticateUser(true)
  }
},
error:()=>{
if(localStorage.getItem('refreshToken')){
  this.authService.verifyRefreshToken(localStorage.getItem('refreshToken')!).subscribe({
    next:(data:any)=>{
    if(data){
      localStorage.setItem('accessToken',data.accessToken)
      this.authService.verifyToken(data.accessToken).subscribe({
        next:(data)=>{
localStorage.setItem('user',JSON.stringify(data))
this.authService.authenticateUser(true)
        }
      })

    }
  },
  error:()=>{
  this.router.navigate([''])
  localStorage.clear()
  },
  complete:()=>{

  }
})

}
},
complete:()=>{}
})
}else {
  if(localStorage.getItem('refreshToken')){
    this.authService.verifyRefreshToken(localStorage.getItem('refreshToken')!).subscribe({
      next:(data:any)=>{
      if(data){
        localStorage.setItem('accessToken',data.accessToken)
        this.authService.verifyToken(data.accessToken).subscribe({
          next:(data)=>{
  localStorage.setItem('user',JSON.stringify(data))
  this.authService.authenticateUser(true)
          }
        })

      }
    },
    error:()=>{
    this.router.navigate([''])
    localStorage.clear()
    },
    complete:()=>{

    }
  })
}

}
  }
}
