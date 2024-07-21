import { Component, Inject, OnInit, Type } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/app/core/environment';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit{
reservationForm!:FormGroup
user:any
package:any
constructor(private dialogRef: MatDialogRef<ReservationComponent>, @Inject(MAT_DIALOG_DATA) public data: any , private toastr:ToastrService, private authService:AuthService) {
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
generatePdf(){

const download = fetch(`${environment.API_URL}/pdf`,{
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${this.authService.token||''}`
  },
  body:
  JSON.stringify(
    {
      user_id:this.user.id,
      pacchetto_id:[this.package.id]
    }
  )
}).then((res)=>{
  if (!res.ok) {
    return res.json().then(error => {
      throw new Error(error.message || error.messageList[0] || 'Abbiamo riscontrato un errore nell\'elaborazione della richiesta.');
    });
  }
  return res.blob();
}).then((res)=>{
const blob = new Blob([res], { type: 'application/pdf' });
const url = window.URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = `Prenotazione per ${this.package.pianetas[0].nome}.pdf`;
document.body.appendChild(a);
a.click();
window.URL.revokeObjectURL(url);
document.body.removeChild(a);
}).catch((error)=>{
  this.toastr.error(error.toString())
})

}
}
