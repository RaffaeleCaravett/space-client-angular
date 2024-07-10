import { Component, OnInit } from '@angular/core';
import { BackgroundService } from 'src/app/shared/services/background-service';
import { ItinerariService } from 'src/app/shared/services/itinerari.service';

@Component({
  selector: 'app-itinerari',
  templateUrl: './itinerari.component.html',
  styleUrls: ['./itinerari.component.scss']
})
export class ItinerariComponent implements OnInit{
background:string =''

constructor(private backgroundService:BackgroundService,private itinerariService:ItinerariService){
  this.backgroundService.bgClass.subscribe((bg:string)=>{
    this.background=bg
  })
}

ngOnInit(): void {
localStorage.setItem('location','itinerari')
this.itinerariService.getAllPaginated().subscribe((datas)=>{
  console.log(datas)
})
}

}
