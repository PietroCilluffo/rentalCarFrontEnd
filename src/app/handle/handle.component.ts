import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
import {ReservationDto} from '../dto/ReservationDto';

@Component({
  selector: 'app-handle',
  templateUrl: './handle.component.html',
  styleUrls: ['./handle.component.css']
})
export class HandleComponent implements OnInit {
  @ViewChild('alert', { static: true }) alert: ElementRef;
  tipo: number;
  config: any;
  user: User;
  vehicle: Vehicle;
  reservation: Reservation;
  item: any;
  alertMessage : string;
  idVehicle: any;
  message: string;
  id: any;
  constructor(private route: ActivatedRoute, private reservationService: ReservationService,
  private userService: UserService, private vehicleService: VehicleService, ) { }

  ngOnInit(): void {
    this.tipo = Number(this.route.snapshot.paramMap.get('tipo'));
  this.alertMessage = null;
    if (this.tipo === 1){
      this.id = this.route.snapshot.paramMap.get('id');
    /* this.vehicleService.getVehicleById(this.id).subscribe(
       result => this.vehicle = result
     );*/
      console.log('risultato del filtro', this.vehicle);

      this.message = 'Gestisci Veicolo';
      this.config = {
        object: this.id,

        campi: ['targa', 'modello', 'casa', 'anno'],
        tipo: 1,
      };
    }
    if (this.tipo === 2){
     // let idUser = this.route.snapshot.paramMap.get('idUser');

      this.id = this.route.snapshot.paramMap.get('id');
      console.log('dentro handle', this.id);
    /*  this.userService.getUserById(this.id).subscribe(
        result => this.user = result
      );
     */
      this.message = 'Gestisci Utente';
      this.config = {

        object: this.id,
        campi: ['nome', 'cognome', 'email', 'password'],
        tipo: 2,
      };
    }
    if (this.tipo === 3){
      this.id = this.route.snapshot.paramMap.get('id');

      this.message = 'Gestisci Prenotazione';
      this.config = {

        object: this.id,
        campi: ['dataInizio', 'dataFine', 'targa', 'approvazione'],
        tipo: 3,
      };

    }
  }
  aggiorna(object: any){
    if (this.tipo === 1){

      const vehicle = new Vehicle(object.values['id'],  object.values['targa'],  object.values['modello'], object.values['casa'], object.values['anno']);
      console.log(VEHICLE, vehicle);
      this.vehicleService.updateVehicle( vehicle).subscribe(
        response2 => {
          this.alertMessage = response2.message;
        }
      );
    }
    if(this.tipo === 2){

      const user = new User(object.values['id'], object.values['nome'],  object.values['cognome'],  object.values['email'],  object.values['password']);

      this.userService.updateUser(user).subscribe(
        response2 => {
          this.alertMessage = response2.message;
        }
      );
    }
    if(this.tipo === 3){
      const user = new User(object.idUser,'','','','');
      const vehicle = new Vehicle(0,'','','','');
      const resDtos = new ReservationDto(user, vehicle);
    //  const reservation = new Reservation(object.values['id'], object.values['dataInizio'],object.values['dataFine'], object.values['targa'], object.values['idUser'], object.values['approvazione']);


      this.vehicleService.getVehicleByTarga(object.values['targa']).subscribe(
        response => {
          this.idVehicle = response[0].id;

      resDtos.id = object.values['id'];
      resDtos.dataInizio = object.values['dataInizio'];
      resDtos.dataFine = object.values['dataFine'];
      resDtos.approvazione = object.values['approvazione'];
      resDtos.user.id = Number(object.values['idUser']);
      resDtos.vehicle.id = Number(this.idVehicle);
          console.log("targa"+ resDtos.user.id);
      this.reservationService.updateReservation(resDtos).subscribe(
        response2 => {
          this.alertMessage = response2.message;

        }
      );
        }
      );
    }
  }
  closeAlert() {
    this.alertMessage = null;
    this.alert.nativeElement.classList.remove('show');
  }
  }



