import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {RESERVATION} from '../../mock-reservation';
import {Reservation} from '../../Reservation';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }
  getReservations(): Observable<Reservation[]> {
    return of(RESERVATION);
  }
}
