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
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }
  getReservations(): Observable<Reservation[]> {
    return of(RESERVATION);
  }
  getReservationsByIdUser(idUser:number): Observable<Reservation[]> {
    return of(getReservationByIdUser(RESERVATION,idUser));
  }
  addReservation(RESERVATION, Reservation): Observable<Reservation[]> {
    return  of (addReservation(RESERVATION, Reservation));
  }
  approva(Reservation): any{

    return of (approva(Reservation));
  }
  updateReservation(Reservation): any
  {
     return of(updateReservation(Reservation));
  }
  deleteReservation(Reservation): any{
    return of(deleteReservation(Reservation))
  }
  getReservationById(id): Observable<Reservation>{
    return of(getReservationById(id));
  }
}
