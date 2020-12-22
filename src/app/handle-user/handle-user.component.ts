import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Vehicle} from '../../Vehicle';
import {User} from '../../User';
import {UserService} from '../service/user.service';
import {ShowReservationConfig} from '../config/ShowReservationConfig';
import {MyTableConfig} from '../config/MyTableConfig';
import {MyButtonConfig} from '../config/MyButtonConfig';
import {ReservationService} from '../service/reservation.service';

@Component({
  selector: 'app-handle-user',
  templateUrl: './handle-user.component.html',
  styleUrls: ['./handle-user.component.css']
})
export class HandleUserComponent implements OnInit {
   userForm: FormGroup;
   user:any;
  reservationConfig: ShowReservationConfig;
  provadati: any[];
  configTable: MyTableConfig;
  operazioni: MyButtonConfig[];
  configmodifica: MyButtonConfig = {
    customCssClass : 'btn btn-primary',
    text: 'Aggiorna',
    icon: 'oi oi-cog'
  };
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private userService: UserService, private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.user = this.route.snapshot.params;
    this.userForm = this.fb.group({
      nome: [this.user.nome, Validators.required],
      cognome: [this.user.cognome, Validators.required],
      email: [this.user.email, Validators.required],
      password: [this.user.password, Validators.required],

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

    this.reservationService.getReservationsByIdUser(this.user.id).subscribe(
      response =>
        this.provadati = response
    );
  }
  modifica(){
    let v = new User(this.user.id, this.userForm.value.nome, this.userForm.value.cognome, this.userForm.value.email, this.userForm.value.password);
    this.userService.updateUser(v).subscribe(
      response => console.log('ok')
    );
  }
  opSuRiga(object: any){
    console.log('we',object.opriga,object.object);
    if(object.opriga === 'approva'){
      this.reservationService.approva(object.object);
    }else{

    }
  }
}
