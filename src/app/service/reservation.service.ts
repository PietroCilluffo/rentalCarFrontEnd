import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  RESERVATION,
  addReservation,
  getReservationByIdUser,
  approva,
  updateReservation,
  deleteReservation,
  getReservationById
} from '../../mock-reservation';
import {Reservation} from '../../Reservation';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ReservationDto} from '../dto/ReservationDto';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  url = 'http://localhost:5050/reservation';
  constructor( private http: HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    const  getUrl = this.url + '/find';
    return this.http.get<any>(getUrl);
  }
  getReservationsByIdUser(idUser): Observable<any> {
    const  getUrl = this.url + '/find/idUser/';
    return this.http.get<any>(getUrl + idUser);
  }
  addReservation(reservation: ReservationDto): Observable<any> {
    const getUrl = this.url + '/add';
    return this.http.post<any>(getUrl, reservation);
  }
  approva(r: ReservationDto): any{

    const getUrl = this.url + '/update';
    return this.http.put<any>(getUrl, r);
  }
  updateReservation(r: ReservationDto): any
  {
    const getUrl = this.url + '/update';
    return this.http.put<any>(getUrl, r);
  }
  deleteReservation(r: Reservation): any{
    const getUrl = this.url + '/delete';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        reservation: r
      }
    };
    return this.http.delete<any>(getUrl, httpOptions);
  }
  deleteReservationById(id):Observable<any> {
    const getUrl = this.url + '/delete/';
    return this.http.delete<any>(getUrl + id);
  }
  getReservationById(id): Observable<any>{
    const  getUrl = this.url + '/find/';
    return this.http.get<any>(getUrl + id);
  }
}
