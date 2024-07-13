import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BackgroundService } from 'src/app/shared/services/background-service';
import { ItinerariService } from 'src/app/shared/services/itinerari.service';
import { PrenotazioniService } from 'src/app/shared/services/prenotazioni.service';

@Component({
  selector: 'app-itinerari',
  templateUrl: './itinerari.component.html',
  styleUrls: ['./itinerari.component.scss']
})
export class ItinerariComponent implements OnInit{
background:string =''
pacchetti:any
idChecked!:number
disponibility:string=''
constructor(private backgroundService:BackgroundService,private itinerariService:ItinerariService,private ngxToast:ToastrService, private prenotazioniService:PrenotazioniService){
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

calculateReservationbAvailable(pacchettoId:number, posti:number){
if(pacchettoId&&pacchettoId!=0){
  this.prenotazioniService.getByPacchettoId(pacchettoId).subscribe({
    next:(data:any)=>{
this.disponibility= "Sono disponibili ancora " + `${posti-data.length}` + " posti per questa destinazione."
this.idChecked=pacchettoId;
},
    error:(err:any)=>{
this.ngxToast.error(err.message||"Qualcosa è andato storto nell'elaborazione della richiesta.")
    },
    complete:()=>{}
  })
}
}

}
