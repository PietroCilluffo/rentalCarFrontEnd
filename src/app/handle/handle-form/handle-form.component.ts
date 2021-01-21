import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShowVehicleConfig} from '../../config/ShowVehicleConfig';
import {Vehicle} from '../../../Vehicle';
import {MyTableConfig} from '../../config/MyTableConfig';
import {MyButtonConfig} from '../../config/MyButtonConfig';
import {ShowReservationConfig} from '../../config/ShowReservationConfig';
import {ReservationService} from '../../service/reservation.service';
import {Reservation} from '../../../Reservation';
import {UserService} from '../../service/user.service';
import {VehicleService} from '../../service/vehicle.service';

@Component({
  selector: 'app-handle-form',
  templateUrl: './handle-form.component.html',
  styleUrls: ['./handle-form.component.css']
})
export class HandleFormComponent implements OnInit {
  @Input() config: any;
  @Output() modifica = new EventEmitter<any>();

  values: any[];
  form: FormGroup;
  campi: any[];
  tipo: number;
  idUser: number;
  object:any;

  user:any;
  reservation:any;
  vehicle:any;
  targa: string;
  reservationConfig: ShowReservationConfig;
  provadati: any[];
  configTable: MyTableConfig;
  operazioni: MyButtonConfig[];
  vehicles: Vehicle[];
  temp:any[];
  temp2:Reservation[] = [];
  vehicleConfig: ShowVehicleConfig;
  configmodifica: MyButtonConfig ;
  item: any;
  constructor(private fb: FormBuilder, private reservationService: ReservationService, private userService: UserService,
              private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.idUser = null;
    this.targa = null;
    this.campi = this.config.campi;

    this.configmodifica = {
      customCssClass : 'btn btn-primary',
      text: 'Aggiorna',
      icon: 'oi oi-cog'
    };
    this.tipo = this.config.tipo;
    this.object = this.config.object[0];

    if (this.tipo === 1){
      this.vehicleService.getVehicleById(this.config.object).subscribe(
        response => {
          this.vehicle = response;
          this.form = this.fb.group({
            targa: [this.vehicle.targa, Validators.required],
            modello: [this.vehicle.modello, Validators.required],
            casa: [this.vehicle.casa, Validators.required],
            anno: [this.vehicle.anno, Validators.required],
            id: [this.vehicle.id, Validators.required],

          });
        }

      );



    }
    if (this.tipo === 2){
      this.userService.getUserById(this.config.object).subscribe(
        response => {
          this.user = response;
          this.form = this.fb.group({
            nome: [this.user.nome, Validators.required],
            cognome: [this.user.cognome, Validators.required],
            email: [this.user.email, Validators.required],
            password: [this.user.password, Validators.required],
            id: [this.user.id, Validators.required],

          }

          );

          this.reservationService.getReservationsByIdUser(this.user.id).subscribe(
            response2 => {
              this.temp = response2;
              console.log('risposta get ' + this.temp);
              this.temp.forEach(item => {
                const v = new Reservation(Number(item.id), item.dataInizio,item.dataFine,item.vehicle.targa, Number(item.user.id),item.approvazione);
                console.log(v);
                this.temp2.push(v);


              });


              this.provadati = this.temp2;
            }
          );
        }

      );

      console.log('dentro login-form', this.object);

      this.reservationConfig = new ShowReservationConfig();
      this.configTable = {
        headers: this.reservationConfig.header,
        order: this.reservationConfig.orderconfig,
        search: this.reservationConfig.searchconfig,
        pagination: this.reservationConfig.pagination,
        actions: [],

      };
      this.operazioni = [{
        customCssClass : 'btn btn-success',
        text: 'approva',
        icon: 'oi oi-thumb-up'

      },

      ];



    }
    if (this.tipo === 3){
      this.reservationService.getReservationById(Number(this.config.object)).subscribe(
        response => {
          this.item = response;
          console.log("dentro handle form" + this.item.dataInizio);
          const v = new Reservation(Number(this.item.id), this.item.dataInizio,this.item.dataFine,this.item.vehicle.targa, Number(this.item.user.id),this.item.approvazione);

          this.reservation = v;

          this.form = this.fb.group({
            targa: [this.reservation.targa, Validators.required],
            dataInizio: [this.reservation.dataInizio, Validators.required],
            dataFine: [this.reservation.dataFine, Validators.required],
            approvato: [this.reservation.approvazione, Validators.required],
            idUser: [this.reservation.idUser, Validators.required],
            id: [this.reservation.id, Validators.required],

          });
        }
      );


    }
  }
  opSuRiga(object: any){
    console.log('we', object.text, object.obj);
    object.obj.approvazione = true;
    if(object.text === 'approva'){
      this.reservationService.approva(object.obj);
    }else{

    }
  }
  Modifica(){

    this.values = this.form.value;
    console.log(this.form.value);
    this.modifica.emit({values: this.values});
  }


}
