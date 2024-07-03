import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-mezzi',
  templateUrl: './mezzi.component.html',
  styleUrls: ['./mezzi.component.scss']
})
export class MezziComponent implements OnInit{
windowHeight= this.calculateHeightLess30()
mezzi:any=
[
  {
    colore:"red"
  },
  {
    colore:"green"
  },
  {
    colore:"yellow"
  },
  {
    colore:"light-blue"
  },
  {
    colore:"pink"
  },
  {
    colore:"dark"
  },
]

  ngOnInit(): void {
localStorage.setItem('location','mezzi')
  }


  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.windowHeight=this.calculateHeightLess30()
  }

calculateHeightLess30():number{
  return window.innerHeight-(window.innerHeight*30/100)
}
getBackground(color:string){
  return `url("../../../assets/Images/svg/${color}.png")`
}
}
