import { Injectable } from '@angular/core';
import {User} from '../../User';
import {USER, addUser, updateUser, deleteUser, getUserById} from '../../mock-user';

import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUsers(): Observable<User[]> {
      return of(USER);
  }

  addUser(USER, User): Observable<User[]> {
    return  of (addUser(USER, User));
  }
  updateUser(User): Observable<any> {
    return of (updateUser(User));
  }
  deleteUser(User): Observable<any> {
    return of (deleteUser(User));
  }
  getUserById(id): Observable<User>{
    return of (getUserById(id));
  }
}
