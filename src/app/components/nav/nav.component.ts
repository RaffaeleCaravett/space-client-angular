import { Component } from '@angular/core';
import { AuthGuard } from 'src/app/core/auth.guard';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {


constructor(private authGuard:AuthGuard,private authService:AuthService){
this.authService.isAuthenticated.subscribe((boolean:boolean)=>{
  this.isLoggedIn=boolean
})
}

isLoggedIn:any
}
