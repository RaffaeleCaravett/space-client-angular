import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-forms',
  templateUrl: './auth-forms.component.html',
  styleUrls: ['./auth-forms.component.scss']
})
export class AuthFormsComponent  implements OnInit{

section:string=''

constructor(){}


ngOnInit(): void {
    this.section='login'
}
}
