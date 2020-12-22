import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../service/vehicle.service';
import {ReservationService} from '../service/reservation.service';
import {MyTableConfig} from '../config/MyTableConfig';
import {ShowVehicleConfig} from '../config/ShowVehicleConfig';
import {MyButtonConfig} from '../config/MyButtonConfig';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Reservation} from '../../Reservation';
import {RESERVATION} from '../../mock-reservation';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
  reservationForm: FormGroup;
  targa: string;
  vehicles: any[];
  configTable: MyTableConfig;
  vehicleConfig: ShowVehicleConfig;
  idUser: number; // da configurare quando si avrà una sessione
  configadd: MyButtonConfig = {
    customCssClass : 'btn btn-primary',
    text: 'aggiungi',
    icon: 'oi oi-plus'
  };
  constructor(private vehicleService: VehicleService, private reservationService: ReservationService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.idUser = 1;
    this.vehicleService.getVehicles().subscribe(
      result => {
        this.vehicles = result;
        console.log(this.vehicles);
      }
    );
    this.vehicleConfig = new ShowVehicleConfig();

    this.configTable = {
      headers: this.vehicleConfig.header,
      order: this.vehicleConfig.orderconfig,
      search: this.vehicleConfig.searchconfig,
      pagination: this.vehicleConfig.pagination,
      actions: this.vehicleConfig.actions,

    };
    this.reservationForm = this.fb.group({
      targa: ['', Validators.required],
      dataInizio: ['', Validators.required],
      dataFine: ['', Validators.required],


    });
  }
  submit(): void {

    const values = this.reservationForm.value;
    const reservation = new Reservation(8, values.dataInizio, values.dataFine, this.targa,this.idUser);

    this.reservationService.addReservation(RESERVATION, reservation);
  }
}
