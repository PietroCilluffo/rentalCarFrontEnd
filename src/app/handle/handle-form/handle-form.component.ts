import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShowVehicleConfig} from '../../config/ShowVehicleConfig';
import {Vehicle} from '../../../Vehicle';
import {MyTableConfig} from '../../config/MyTableConfig';
import {MyButtonConfig} from '../../config/MyButtonConfig';
import {ShowReservationConfig} from '../../config/ShowReservationConfig';
import {ReservationService} from '../../service/reservation.service';

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

  vehicleConfig: ShowVehicleConfig;
  configadd: MyButtonConfig = {
    customCssClass : 'btn btn-primary',
    text: 'Aggiorna',
    icon: 'oi oi-cog'
  };
  constructor(private fb: FormBuilder, private reservationService: ReservationService) {
  }

  ngOnInit(): void {
    this.idUser = null;
    this.targa = null;
    this.campi = this.config.campi;
    this.tipo = this.config.tipo;
    this.object = this.config.object;
    if(this.tipo === 1){
      this.vehicle = this.config.object;
      this.form = this.fb.group({
        targa: ['', Validators.required],
        modello: ['', Validators.required],
        casa: ['', Validators.required],
        anno: ['', Validators.required],

      });
    }
    if (this.tipo === 2){
      this.user = this.config.user;
      this.form = this.fb.group({
        nome: ['', Validators.required],
        cognome: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],

      });
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

      this.reservationService.getReservationsByIdUser(this.config.user.id).subscribe(
        response =>
          this.provadati = response
      );
    }
    if (this.tipo === 3){
      this.idUser = 1;
      this.reservation = this.config.reservation;
      this.form = this.fb.group({
        targa: ['', Validators.required],
        dataInizio: ['', Validators.required],
        dataFine: ['', Validators.required],


      });
    }
  }
  opSuRiga(object: any){
    console.log('we', object.text, object.obj);
    if(object.text === 'approva'){
      this.reservationService.approva(object.obj);
    }else{

    }
  }
  Modifica(object: any){
    this.values = this.form.value;
    this.modifica.emit({values: this.values});
  }
}
