import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {addVehicle, VEHICLE, updateVehicle, deleteVehicle, getVehicleById} from '../../mock-vehicle';
import {Vehicle} from '../../Vehicle';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }
  getVehicles(): Observable<Vehicle[]> {
    return of(VEHICLE);
  }

  addVehicle(VEHICLE, Vehicle): Observable<Vehicle[]> {
    return  of (addVehicle(VEHICLE, Vehicle));
  }

  updateVehicle(v: Vehicle) :Observable<any>{
    return of (updateVehicle(v));
  }
  deleteVehicle(v:Vehicle) :Observable<any>{
    return of(deleteVehicle(v));
  }
  getVehicleById(id:any) : Observable<Vehicle>{
    return of(getVehicleById(id));
  }
}
