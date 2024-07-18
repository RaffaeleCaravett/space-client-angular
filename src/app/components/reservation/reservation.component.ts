import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit{
reservationForm!:FormGroup
user:any

constructor(private dialogRef: MatDialogRef<ReservationComponent>, @Inject(MAT_DIALOG_DATA) public data: any , private toastr:ToastrService) {
}
ngOnInit(): void {
  console.log(this.data[1])
this.user=JSON.parse(this.data[0])
this.reservationForm= new FormGroup({
  nome: new FormControl(this.user.nome||''),
  cognome: new FormControl(this.user.cognome||''),
  eta: new FormControl(this.user.eta||''),
  email: new FormControl(this.user.email||''),
  nomePianeta: new FormControl(),
  Da: new FormControl(),
  A: new FormControl(),
})
}
}
