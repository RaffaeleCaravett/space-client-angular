import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/core/environment";

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService{


  api_url:string=environment.API_URL
 prenotazioni:string ='/prenotazioni'
  constructor(private http:HttpClient){}

getByPacchettoId(id:number){
    return this.http.get(this.api_url+this.prenotazioni+`/pacchetto/${id}`)
  }
  postPrenotazione(prenotazione:{}){
    return this.http.post(this.api_url+this.prenotazioni, prenotazione)
  }
  }
