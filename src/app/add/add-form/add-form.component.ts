import {Component, Input, OnInit} from '@angular/core';
import {VehicleService} from '../../service/vehicle.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MyButtonConfig} from '../../config/MyButtonConfig';
import {Vehicle} from '../../../Vehicle';
import {VEHICLE} from '../../../mock-vehicle';
import {User} from '../../../User';
import {USER} from '../../../mock-user';
import {UserService} from '../../service/user.service';
import {MyTableConfig} from '../../config/MyTableConfig';
import {ShowVehicleConfig} from '../../config/ShowVehicleConfig';
import {Reservation} from '../../../Reservation';
import {RESERVATION} from '../../../mock-reservation';
import {ReservationService} from '../../service/reservation.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
   @Input() config: any;
   form: FormGroup;
   campi: any[];
   tipo: number;
   idUser: number;
   targa: string;
   vehicles: Vehicle[];
  configTable: MyTableConfig;
  vehicleConfig: ShowVehicleConfig;
   configadd: MyButtonConfig = {
    customCssClass : 'btn btn-primary',
    text: 'aggiungi',
    icon: 'oi oi-plus'
  };
  constructor(private vehicleService: VehicleService, private fb: FormBuilder, private userService: UserService, private reservationService: ReservationService) { }

  ngOnInit(): void {

    this.campi = this.config.campi;
    this.tipo = this.config.tipo;
    if(this.tipo === 1){
      this.form = this.fb.group({
        targa: ['', Validators.required],
        modello: ['', Validators.required],
        casa: ['', Validators.required],
        anno: ['', Validators.required],

      });
    }
    if (this.tipo === 2){
      this.form = this.fb.group({
        nome: ['', Validators.required],
        cognome: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],

      });
    }
    if (this.tipo === 3){
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
        actions: [],

      };
      this.form = this.fb.group({
        targa: ['', Validators.required],
        dataInizio: ['', Validators.required],
        dataFine: ['', Validators.required],


      });
    }
  }
  submit(){
      if (this.tipo === 1){
        const values = this.form.value;
        const vehicle = new Vehicle(8, values.targa, values.modello, values.casa, values.anno);
        console.log(VEHICLE, vehicle);
        this.vehicleService.addVehicle(VEHICLE, vehicle);
      }
      if(this.tipo === 2){
        const values = this.form.value;
        const user = new User(8, values.nome, values.cognome, values.email, values.password);

        this.userService.addUser(USER, user);
      }
      if(this.tipo === 3){
        const values = this.form.value;
        const reservation = new Reservation(8, values.dataInizio, values.dataFine, this.targa, this.idUser);

        this.reservationService.addReservation(RESERVATION, reservation);
      }
  }
}
