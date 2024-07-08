import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BackgroundService{

  public bgClass:BehaviorSubject<string> = new BehaviorSubject<string>('bg-dark');


  constructor(){}

  updateBg(bg:string){
  this.bgClass.next(bg);
  }

  }
