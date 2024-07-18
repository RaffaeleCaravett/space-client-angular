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
this.user=JSON.parse(this.data[0])
this.reservationForm= new FormGroup({
  nome: new FormControl(),
  cognome: new FormControl(),
  eta: new FormControl(),
  email: new FormControl(),
  nomePianeta: new FormControl(),
  Da: new FormControl(),
  A: new FormControl(),
})
}
}
