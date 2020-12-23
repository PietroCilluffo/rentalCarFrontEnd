import { Component, OnInit } from '@angular/core';
import {MyOrder} from '../config/MyOrder';
import {MyPagination} from '../config/MyPagination';
import {MySearch} from '../config/MySearch';
import {MyTableActionEnum} from '../config/MyTableActionEnum';
import {MyTableConfig} from '../config/MyTableConfig';
import {UserService} from '../service/user.service';
import {ShowUserConfig} from '../config/ShowUserConfig';
import {ReservationService} from '../service/reservation.service';
import {ShowReservationConfig} from '../config/ShowReservationConfig';
import {MyButtonConfig} from '../config/MyButtonConfig';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userConfig: ShowUserConfig;
  reservationConfig: ShowReservationConfig;
  provadati: any[];
  configTable: MyTableConfig;
  operazioni: MyButtonConfig[];
  type: string;
  idUser:number;
  constructor(private userService: UserService, private reservationService: ReservationService, private router: Router) { }

  ngOnInit(): void {
    this.idUser = 1;  // solo per questa fase poi sarà inizializzato a seconda di chi logga
    this.type = 's'; // solo per questa fase poi sarà inizializzato a seconda di chi logga
    if (this.type === 's') {
      this.userConfig = new ShowUserConfig();

      this.configTable = {
        headers: this.userConfig.header,
        order: this.userConfig.orderconfig,
        search: this.userConfig.searchconfig,
        pagination: this.userConfig.pagination,
        actions: this.userConfig.actions,

      };
      this.operazioni = [{
        customCssClass : 'btn btn-warning',
        text: 'modifica',
        icon: 'oi oi-cog'

      },
        {
          customCssClass : 'btn btn-danger',
          text: 'elimina',
          icon: 'oi oi-x',
          ref: '#gestEl',

        },
      ];
      this.userService.getUsers().subscribe(
        response =>
          this.provadati = response
      );
    } else {

        this.reservationConfig = new ShowReservationConfig();

        this.configTable = {
          headers: this.reservationConfig.header,
          order: this.reservationConfig.orderconfig,
          search: this.reservationConfig.searchconfig,
          pagination: this.reservationConfig.pagination,
          actions: this.reservationConfig.actions,

        };
        this.operazioni = [{
          customCssClass : 'btn btn-warning',
          text: 'modifica',
          icon: 'oi oi-cog'

        },
        {
          customCssClass : 'btn btn-danger',
          text: 'elimina',
          icon: 'oi oi-x',
            ref: '#gestEl',

        },
        ];
        this.reservationService.getReservationsByIdUser(this.idUser).subscribe(
          response =>
            this.provadati = response
        );
       // console.log(this.provadati);

    }
  }
    opButton(op: string){
    if(this.type === 's'){
      switch(op) {
        case 'AGGIUNGI':
          this.router.navigate([`${'add'}`, {tipo: 2}]);
          //sarà poi definito un' elimina tutti
      }
    }else{
      switch(op) {
        case 'AGGIUNGI':
          this.router.navigate([`${'add'}`, {tipo: 3}]);
      }
    }
  }
  opSuRiga(object: any) {

    if (this.type === 's') {
      if (object.text === 'elimina') {
        this.userService.deleteUser(object.obj);
      } else {

        console.log('we', object.text, object.obj);
        this.router.navigate(['handle', JSON.stringify(object.obj),{tipo: 2}]); //eventualmente passare solo l'id
      }
    }else{
      if (object.text === 'elimina') {
        this.reservationService.deleteReservation(object.obj);
      } else {
        this.router.navigate([`${'handle'}`, {reservation: object.obj}, {tipo: 3}]); //eventualmente passare solo l'id
      }
    }
  }
}
