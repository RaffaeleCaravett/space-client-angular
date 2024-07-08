import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BackgroundService{

  public isAuthenticated:BehaviorSubject<string> = new BehaviorSubject<string>('bg-white');


  constructor(){}

  updateBg(bg:string){
  this.isAuthenticated.next(bg);
  }

  }
