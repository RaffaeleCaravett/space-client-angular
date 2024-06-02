import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth.guard';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {


constructor(private authGuard:AuthGuard,private authService:AuthService,private router:Router){
this.authService.isAuthenticated.subscribe((boolean:boolean)=>{
  this.isLoggedIn=boolean
})
}

isLoggedIn:any

logout(){
  localStorage.clear()
  this.authGuard.authenticateUser(false)
  this.authService.authenticateUser(false)
this.router.navigate([''])
}

}
