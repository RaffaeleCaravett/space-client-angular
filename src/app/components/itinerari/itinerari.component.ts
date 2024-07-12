import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BackgroundService } from 'src/app/shared/services/background-service';
import { ItinerariService } from 'src/app/shared/services/itinerari.service';

@Component({
  selector: 'app-itinerari',
  templateUrl: './itinerari.component.html',
  styleUrls: ['./itinerari.component.scss']
})
export class ItinerariComponent implements OnInit{
background:string =''
pacchetti:any
constructor(private backgroundService:BackgroundService,private itinerariService:ItinerariService,private ngxToast:ToastrService){
  this.backgroundService.bgClass.subscribe((bg:string)=>{
    this.background=bg
  })
}

ngOnInit(): void {
localStorage.setItem('location','itinerari')
this.itinerariService.getAllPaginated().subscribe(
  {
    next:(datas)=>{
 this.pacchetti=datas
 console.log(this.pacchetti)
},
error:(err)=>{
this.ngxToast.error(err.message||"Qualcosa è andato storto nel recupero dei pacchetti.")
},
complete:()=>{

}
})
}

}
