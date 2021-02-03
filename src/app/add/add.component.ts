import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
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
import {ReservationDto} from '../dto/ReservationDto';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @ViewChild('alert', { static: true }) alert: ElementRef;
  tipo: number;
  config: any;
  vehicleForm: FormGroup;
  resDto: ReservationDto;
  idVehicle: any;
  message: string;
  alertMessage: string;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private userService: UserService,
              private reservationService: ReservationService, private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.tipo = Number(this.route.snapshot.paramMap.get('tipo'));
    this.alertMessage = null;
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


        campi: ['nome', 'cognome', 'email', 'password', 'tipo'],
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
  submit(object: any): any{

    if (this.tipo === 1){

      const vehicle = new Vehicle(8,  object.values.targa,  object.values.modello, object.values.casa, object.values.anno);
      console.log(VEHICLE, vehicle);
      this.vehicleService.addVehicle( vehicle).subscribe(
        response2 => {
          this.alertMessage = response2.message;
        }
      );
    }
    if (this.tipo === 2){

      const user = new User(0, object.values.nome,  object.values.cognome,  object.values.email,  object.values.password, object.values.tipo);

      this.userService.addUser(user).subscribe(
        response2 => {
          this.alertMessage = response2.message;
        }
      );
    }
    if (this.tipo === 3){
      const user = new User(object.idUser, '', '', '', '','');
      const vehicle = new Vehicle(0, '', '', '', '');
      const resDtos = new ReservationDto(user, vehicle);    // solo in questa maniera mi permetteva di creare un dto
      this.vehicleService.getVehicleByTarga(object.targa).subscribe(
       response => {
         this.idVehicle = response[0].id;

         resDtos.id = 0;
         resDtos.dataInizio = object.values.dataInizio;
         resDtos.dataFine = object.values.dataFine;
         resDtos.approvazione = false;
         resDtos.user.id = Number(object.idUser);
         resDtos.vehicle.id = Number(this.idVehicle);

         this.reservationService.addReservation(resDtos).subscribe(
           response2 => {
             this.alertMessage = response2.message;
           }
         );
       }
     );

    //


    }
  }

  closeAlert() {
    this.alertMessage = null;
    this.alert.nativeElement.classList.remove('show');
  }
}
