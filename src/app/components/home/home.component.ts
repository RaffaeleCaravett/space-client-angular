import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
numbers:number[]=[1,2,3,4,5,6,7,8]
numbers1:number[]=[1,2,3]
name:string[]=['S','P','A','C','E',' ','A','G','E','N','C','Y']
images:string[]= ['../../../assets/Images/icons/team.svg','../../../assets/Images/icons/rocket.svg.png',
'../../../assets/Images/icons/fuel-filling.svg','../../../assets/Images/icons/atoms-science.svg']
}
