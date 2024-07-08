import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos'
import { AuthService } from './shared/services/auth.service';
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

if(localStorage.getItem("accessTokenSpaceUser")){
this.authService.verifyToken(localStorage.getItem("accessTokenSpaceUser")!).subscribe({
  next:(data)=>{
  if(data){
    localStorage.setItem('userSpaceUser',JSON.stringify(data))
    this.authService.authenticateUser(true)
    if(localStorage.getItem('location')){
      this.router.navigate(['/'+localStorage.getItem('location')])
    }else{
      this.router.navigate(['/itinerari'])
    }
  }
},
error:()=>{
if(localStorage.getItem('refreshTokenSpaceUser')){
  this.authService.verifyRefreshToken(localStorage.getItem('refreshTokenSpaceUser')!).subscribe({
    next:(data:any)=>{
    if(data){
      localStorage.setItem('accessTokenSpaceUser',data.accessToken)
      this.authService.verifyToken(data.accessToken).subscribe({
        next:(data)=>{
localStorage.setItem('user',JSON.stringify(data))
this.authService.authenticateUser(true)
if(localStorage.getItem('location')){
  this.router.navigate(['/'+localStorage.getItem('location')])
}else{
  this.router.navigate(['/itinerari'])
}
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
  if(localStorage.getItem('refreshTokenSpaceUser')){
    this.authService.verifyRefreshToken(localStorage.getItem('refreshTokenSpaceUser')!).subscribe({
      next:(data:any)=>{
      if(data){
        localStorage.setItem('accessTokenSpaceUser',data.accessToken)
        this.authService.verifyToken(data.accessToken).subscribe({
          next:(data)=>{
  localStorage.setItem('userSpaceUser',JSON.stringify(data))
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
