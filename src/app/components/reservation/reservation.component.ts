import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit{
reservationForm!:FormGroup

ngOnInit(): void {
  throw new Error('Method not implemented.');
}
}
