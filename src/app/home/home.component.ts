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
    this.type = 'u'; // solo per questa fase poi sarà inizializzato a seconda di chi logga
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
          icon: 'oi oi-x'

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
          icon: 'oi oi-x'

        },
        ];
        this.reservationService.getReservationsByIdUser(this.idUser).subscribe(
          response =>
            this.provadati = response
        );
       // console.log(this.provadati);

    }
  }
    opButton(op: number){
    if(this.type === 's'){
      switch(op) {
        case 0:
          this.router.navigate([`${'add'}`, {tipo: 2}]);
      }
    }else{
      switch(op) {
        case 0:
          this.router.navigate([`${'add'}`, {tipo: 3}]);
      }
    }
  }
  opSuRiga(object: any) {
    console.log('we', object.opriga, object.object);
    if (this.type === 's') {
      if (object.opriga === 'elimina') {
        this.userService.deleteUser(object.object);
      } else {
        this.router.navigate([`${'handle-user'}`, object.object]); //eventualmente passare solo l'id
      }
    }else{
      if (object.opriga === 'elimina') {
        this.reservationService.deleteReservation(object.object);
      } else {
        this.router.navigate([`${'handle-reservation'}`, object.object]); //eventualmente passare solo l'id
      }
    }
  }
}
