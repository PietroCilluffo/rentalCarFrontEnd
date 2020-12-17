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
  type: string;

  constructor(private userService: UserService, private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.type = 's';
    if (this.type === 'u') {
      this.userConfig = new ShowUserConfig();

      this.configTable = {
        headers: this.userConfig.header,
        order: this.userConfig.orderconfig,
        search: this.userConfig.searchconfig,
        pagination: this.userConfig.pagination,
        actions: this.userConfig.actions,

      };

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

        this.reservationService.getReservations().subscribe(
          response =>
            this.provadati = response
        );
        console.log(this.provadati);

    }
  }
    opButton(op: number){
    console.log(op);
  }

}
