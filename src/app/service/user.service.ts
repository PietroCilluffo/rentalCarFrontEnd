import { Injectable } from '@angular/core';
import {User} from '../../User';
import {USER} from '../../mock-user';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUsers(): Observable<User[]> {
      return of(USER);
  }
}
