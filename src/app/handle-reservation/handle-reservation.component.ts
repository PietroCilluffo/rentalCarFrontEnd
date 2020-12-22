import { Component, OnInit } from '@angular/core';
import {User} from '../../User';
import {MyButtonConfig} from '../config/MyButtonConfig';
import {ReservationService} from '../service/reservation.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-handle-reservation',
  templateUrl: './handle-reservation.component.html',
  styleUrls: ['./handle-reservation.component.css']
})
export class HandleReservationComponent implements OnInit {
  reservation: any;
  reservationForm: FormGroup;
  configmodifica: MyButtonConfig = {
    customCssClass : 'btn btn-primary',
    text: 'Aggiorna',
    icon: 'oi oi-cog'
  };
  constructor(private reservationService: ReservationService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reservation = this.route.snapshot.params;
    this.reservationForm = this.fb.group({
      dataInizio: [this.reservation.dataInizio, Validators.required],
      dataFine: [this.reservation.dataFine, Validators.required],


    });
  }
  modifica(){
    let v = new User(this.reservation.id, this.reservationForm.value.dataInizio, this.reservationForm.value.dataFine, this.reservation.targa, this.reservation.idUser);
    this.reservationService.updateReservation(v).subscribe(
      response => console.log('ok')
    );
  }
}
