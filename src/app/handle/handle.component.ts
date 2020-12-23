import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../User';
import {UserService} from '../service/user.service';
import {ReservationService} from '../service/reservation.service';
import {Vehicle} from '../../Vehicle';
import {VEHICLE} from '../../mock-vehicle';
import {USER} from '../../mock-user';
import {Reservation} from '../../Reservation';
import {RESERVATION} from '../../mock-reservation';
import {VehicleService} from '../service/vehicle.service';

@Component({
  selector: 'app-handle',
  templateUrl: './handle.component.html',
  styleUrls: ['./handle.component.css']
})
export class HandleComponent implements OnInit {
  tipo: number;
  config: any;
  user: any;
  vehicle: any;
  reservation:any;
  message: string;
  constructor(private route: ActivatedRoute, private reservationService: ReservationService,
  private userService: UserService, private vehicleService: VehicleService, ) { }

  ngOnInit(): void {
    this.tipo = Number(this.route.snapshot.paramMap.get('tipo'));

    if (this.tipo === 1){
      this.vehicle = this.route.snapshot.paramMap.get('vehicle');
      this.message = 'Gestisci Veicolo';
      this.config = {
        object: this.vehicle,

        campi: ['targa', 'modello', 'casa', 'anno'],
        tipo: 1,
      };
    }
    if (this.tipo === 2){
     // let idUser = this.route.snapshot.paramMap.get('idUser');

      this.user = this.route.snapshot.paramMap.get('user');
      this.message = 'Gestisci Utente';
      this.config = {

        object: this.user,
        campi: ['nome', 'cognome', 'email', 'password'],
        tipo: 2,
      };
    }
    if (this.tipo === 3){
      this.reservation = this.route.snapshot.paramMap.get('reservation');
      this.message = 'Gestisci Prenotazione';
      this.config = {

        object: this.reservation,
        campi: ['dataInizio', 'dataFine'],
        tipo: 3,
      };
    }
  }
  aggiorna(object: any){
    if (this.tipo === 1){

      const vehicle = new Vehicle(8,  object.values['targa'],  object.values['modello'], object.values['casa'], object.values['anno']);
      console.log(VEHICLE, vehicle);
      this.vehicleService.updateVehicle( vehicle);
    }
    if(this.tipo === 2){

      const user = new User(8, object.values['nome'],  object.values['cognome'],  object.values['email'],  object.values['password']);

      this.userService.updateUser(user);
    }
    if(this.tipo === 3){

      const reservation = new Reservation(8, object.values['dataInizio'],object.values['dataFine'], object.targa, object.idUser);

      this.reservationService.updateReservation(reservation);
    }
  }
  }



