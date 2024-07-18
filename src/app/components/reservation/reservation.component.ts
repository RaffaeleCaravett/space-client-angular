import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
package:any
constructor(private dialogRef: MatDialogRef<ReservationComponent>, @Inject(MAT_DIALOG_DATA) public data: any , private toastr:ToastrService) {
}
ngOnInit(): void {
this.user=JSON.parse(this.data[0])
this.package=this.data[1]
this.reservationForm= new FormGroup({
  nome: new FormControl(this.user.nome||'',Validators.required),
  cognome: new FormControl(this.user.cognome||'',Validators.required),
  eta: new FormControl(this.user.eta||'',Validators.required),
  email: new FormControl(this.user.email||'',Validators.required),
  nomePianeta: new FormControl(this.package.pianetas[0].nome||'',Validators.required),
  Da: new FormControl(this.package.da||'',Validators.required),
  A: new FormControl(this.package.a||'',Validators.required),
})
}
}
