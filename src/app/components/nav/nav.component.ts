import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth.guard';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BackgroundService } from 'src/app/shared/services/background-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
showHamburger:boolean=false
background:string = ''
constructor(private authGuard:AuthGuard,private authService:AuthService,private router:Router, private backgroundService:BackgroundService){
this.authService.isAuthenticated.subscribe((boolean:boolean)=>{
  this.isLoggedIn=boolean
})
this.backgroundService.bgClass.subscribe((bg:string)=>{
  console.log(bg)
  this.background=bg
})
}

isLoggedIn:any

ngOnInit(){
  if(window.innerWidth <=768){
    this.showHamburger=true;
  }else{
    this.showHamburger=false;
  }
}

logout(){
  localStorage.clear()
  this.authGuard.authenticateUser(false)
  this.authService.authenticateUser(false)
this.router.navigate([''])
}

@HostListener('window:resize', ['$event'])
onResize(event:any) {
  if(event.target.innerWidth <=768){
    this.showHamburger=true;
  }else{
    this.showHamburger=false;
  }
}
}
