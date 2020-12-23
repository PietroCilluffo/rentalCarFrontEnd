import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VehicleService} from '../service/vehicle.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Vehicle} from '../../Vehicle';
import {VEHICLE} from '../../mock-vehicle';
import {User} from '../../User';
import {USER} from '../../mock-user';
import {Reservation} from '../../Reservation';
import {RESERVATION} from '../../mock-reservation';
import {UserService} from '../service/user.service';
import {ReservationService} from '../service/reservation.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  tipo: number;
  config: any;
  vehicleForm: FormGroup;
  message: string;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private userService: UserService,
              private reservationService: ReservationService, private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.tipo = Number(this.route.snapshot.paramMap.get('tipo'));

    if (this.tipo === 1){
      this.message = 'Aggiungi Veicolo';
      this.config = {


        campi: ['targa', 'modello', 'casa', 'anno'],
        tipo: 1,
      };
    }
    if (this.tipo === 2){
      this.message = 'Aggiungi Utente';
      this.config = {


        campi: ['nome', 'cognome', 'email', 'password'],
        tipo: 2,
      };
    }
    if (this.tipo === 3){
      this.message = 'Aggiungi Prenotazione';
      this.config = {


        campi: ['dataInizio', 'dataFine'],
        tipo: 3,
      };
    }
  }
  submit(object: any){

    if (this.tipo === 1){

      const vehicle = new Vehicle(8,  object.values['targa'],  object.values['modello'], object.values['casa'], object.values['anno']);
      console.log(VEHICLE, vehicle);
      this.vehicleService.addVehicle(VEHICLE, vehicle);
    }
    if(this.tipo === 2){

      const user = new User(8, object.values['nome'],  object.values['cognome'],  object.values['email'],  object.values['password']);

      this.userService.addUser(USER, user);
    }
    if(this.tipo === 3){

      const reservation = new Reservation(8, object.values['dataInizio'],object.values['dataFine'], object.targa, object.idUser);

      this.reservationService.addReservation(RESERVATION, reservation);
    }
  }
}
