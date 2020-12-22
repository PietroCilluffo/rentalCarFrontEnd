import { Component, OnInit } from '@angular/core';
import {MyTableConfig} from '../config/MyTableConfig';
import {ShowVehicleConfig} from '../config/ShowVehicleConfig';
import {ShowUserConfig} from '../config/ShowUserConfig';
import {VehicleService} from '../service/vehicle.service';
import {Router} from '@angular/router';
import {MyButtonConfig} from '../config/MyButtonConfig';
import {Vehicle} from '../../Vehicle';

declare var $: any;
@Component({
  selector: 'app-parco-auto',
  templateUrl: './parco-auto.component.html',
  styleUrls: ['./parco-auto.component.css'],

})
export class ParcoAutoComponent implements OnInit {
  provadati: any[];
  configTable: MyTableConfig;
  vehicleConfig: ShowVehicleConfig;
  operazioni: MyButtonConfig[];
  type: string;

  constructor(private vehicleService: VehicleService, private router: Router) { }

  ngOnInit(): void {
    this.vehicleConfig = new ShowVehicleConfig();
    this.type = 'u'; //quando ci sarà un login si potrà configurare passandolo nell'url con lo snapshot

    if(this.type === 's'){   //sse sono un admin posso gestire i veicoli
      this.configTable = {
        headers: this.vehicleConfig.header,
        order: this.vehicleConfig.orderconfig,
        search: this.vehicleConfig.searchconfig,
        pagination: this.vehicleConfig.pagination,
        actions: this.vehicleConfig.actions,

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
    }else{
      this.configTable = {
        headers: this.vehicleConfig.header,
        order: this.vehicleConfig.orderconfig,
        search: this.vehicleConfig.searchconfig,
        pagination: this.vehicleConfig.pagination,
        actions: [],

      };
    }
    this.vehicleService.getVehicles().subscribe(
      response =>
        this.provadati = response
    );
  }
  goToPage(pageName: string): void{
    this.router.navigate([`${pageName}`]);

  }
  opButton(op: number){
    console.log(op);
    switch (op) {
      case 0 : {
          this.goToPage('add-vehicle');
      }
    }
  }
  opSuRiga(object: any){
    console.log('we',object.opriga,object.object);
    if(object.opriga === 'elimina'){
      this.vehicleService.deleteVehicle(object.object).subscribe(

      );

    }
    if (object.opriga === 'modifica'){

       this.router.navigate([`${'handle-vehicle'}`,object.object]);
    }
  }

}
