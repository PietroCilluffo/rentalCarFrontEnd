import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {addVehicle, VEHICLE, updateVehicle, deleteVehicle, getVehicleById} from '../../mock-vehicle';
import {Vehicle} from '../../Vehicle';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../User';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  url = 'http://localhost:5050/vehicle';
  constructor( private http: HttpClient) { }
  getVehicles(): Observable<any> {
    const getUrl = this.url + '/find';
    return this.http.get(getUrl);
  }

  addVehicle(vehicle: Vehicle): Observable<any> {
    const getUrl = this.url + '/add';
    return this.http.post<any>(getUrl, vehicle);
  }
  updateVehicle(v: Vehicle): Observable<any> {
    const getUrl = this.url + '/update';
    return this.http.put<any>(getUrl, v);
  }
  deleteVehicle(v: Vehicle): Observable<any> {
    const getUrl = this.url + '/delete';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        vehicle: v
      }
    };
    return this.http.delete<any>(getUrl, httpOptions);
  }
  getVehicleById(id): Observable<any>{
    const  getUrl = this.url + '/find/';
    return this.http.get<any>(getUrl + id);
  }
  getVehicleByTarga(targa): Observable<any>{
    const  getUrl = this.url + '/find/targa/';
    return this.http.get<any>(getUrl + targa);
  }
  getUserByModello(modello): Observable<any>{
    const  getUrl = this.url + '/find/modello/';
    return this.http.get<any>(getUrl + modello);
  }
  getUserByEmail(anno): Observable<any>{
    const  getUrl = this.url + '/find/anno/';
    return this.http.get<any>(getUrl + anno);
  }
  deleteVehicleById(id):Observable<any> {
    const getUrl = this.url + '/delete/';
    return this.http.delete<any>(getUrl + id);
  }
}
