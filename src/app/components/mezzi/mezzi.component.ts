import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mezzi',
  templateUrl: './mezzi.component.html',
  styleUrls: ['./mezzi.component.scss']
})
export class MezziComponent implements OnInit{

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

}
