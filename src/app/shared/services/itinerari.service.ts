import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/core/environment";

@Injectable({
  providedIn: 'root'
})
export class ItinerariService{


  api_url:string=environment.API_URL
 itinerari:string ='/pacchetto'
  constructor(private http:HttpClient){}

getAllPaginated(page?:number){
  if(!page){
return this.http.get(this.api_url+this.itinerari+`/paginated?page=0`)
  }else{
    return this.http.get(this.api_url+this.itinerari+`/paginated?page=${page}`)

  }
}

  }
