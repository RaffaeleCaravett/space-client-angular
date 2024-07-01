import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mezzi',
  templateUrl: './mezzi.component.html',
  styleUrls: ['./mezzi.component.scss']
})
export class MezziComponent implements OnInit{
  ngOnInit(): void {
localStorage.setItem('location','mezzi')  }

}
