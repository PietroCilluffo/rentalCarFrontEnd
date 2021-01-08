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
  user: User;
  vehicle: Vehicle;
  reservation: Reservation;
  message: string;
  id: any;
  constructor(private route: ActivatedRoute, private reservationService: ReservationService,
  private userService: UserService, private vehicleService: VehicleService, ) { }

  ngOnInit(): void {
    this.tipo = Number(this.route.snapshot.paramMap.get('tipo'));

    if (this.tipo === 1){
      this.id = this.route.snapshot.paramMap.get('id');
     this.vehicleService.getVehicleById(this.id).subscribe(
       result => this.vehicle = result
     );
      console.log('risultato del filtro', this.vehicle);

      this.message = 'Gestisci Veicolo';
      this.config = {
        object: this.vehicle,

        campi: ['targa', 'modello', 'casa', 'anno'],
        tipo: 1,
      };
    }
    if (this.tipo === 2){
     // let idUser = this.route.snapshot.paramMap.get('idUser');

      this.id = this.route.snapshot.paramMap.get('id');
      console.log('dentro handle', this.id);
      this.userService.getUserById(this.id).subscribe(
        result => this.user = result
      );

      this.message = 'Gestisci Utente';
      this.config = {

        object: this.user,
        campi: ['nome', 'cognome', 'email', 'password'],
        tipo: 2,
      };
    }
    if (this.tipo === 3){
      this.id = this.route.snapshot.paramMap.get('id');
      this.reservationService.getReservationById(this.id).subscribe(
        result => this.reservation = result
      );
      this.message = 'Gestisci Prenotazione';
      this.config = {

        object: this.reservation,
        campi: ['dataInizio', 'dataFine', 'targa', 'approvato'],
        tipo: 3,
      };
    }
  }
  aggiorna(object: any){
    if (this.tipo === 1){

      const vehicle = new Vehicle(object.values['id'],  object.values['targa'],  object.values['modello'], object.values['casa'], object.values['anno']);
      console.log(VEHICLE, vehicle);
      this.vehicleService.updateVehicle( vehicle);
    }
    if(this.tipo === 2){

      const user = new User(object.values['id'], object.values['nome'],  object.values['cognome'],  object.values['email'],  object.values['password']);

      this.userService.updateUser(user);
    }
    if(this.tipo === 3){

      const reservation = new Reservation(object.values['id'], object.values['dataInizio'],object.values['dataFine'], object.values['targa'], object.values['idUser']);

      this.reservationService.updateReservation(reservation);
    }
  }
  }



