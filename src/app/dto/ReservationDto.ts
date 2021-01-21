import {User} from '../../User';
import {Vehicle} from '../../Vehicle';

export class ReservationDto{
  id: number;
  dataInizio: string;
  dataFine: string;
  targa: string;

  user: User;
  vehicle: Vehicle;
  approvazione: boolean;
  constructor(u: User, v:Vehicle) {
    this.user = u;
    this.vehicle = v;
  }

  /*constructor(id:number ,dataInizio:string,dataFine:string,approvazione:boolean,idUser:number,idVehicle:number){
    this.id = id;
    this.dataInizio = dataInizio;
    this.dataFine = dataFine;

    this.approvazione = approvazione;
    this.user.id = idUser;
    this.vehicle.id = idVehicle;

  }*/

}
