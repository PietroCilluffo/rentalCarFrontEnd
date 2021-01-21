import { Injectable } from '@angular/core';
import {User} from '../../User';
import {USER, addUser, updateUser, deleteUser, getUserById} from '../../mock-user';

import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:5050/user';
  constructor( private http: HttpClient) { }
  getUsers(): Observable<any> {
    const getUrl = this.url + '/find';
    return this.http.get(getUrl);
  }

  addUser(user: User): Observable<any> {
    console.log(user);
    const getUrl = this.url + '/add';
    return this.http.post<any>(getUrl, user);
  }
  updateUser(user: User): Observable<any> {
    const getUrl = this.url + '/update';
    return this.http.put<any>(getUrl, user);
  }
  deleteUser(u: User): Observable<any> {
    const getUrl = this.url + '/delete';
    console.log("delete service" + u);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        user: u
      }
    };
    return this.http.delete<any>(getUrl, httpOptions);
  }

  deleteUserById(id):Observable<any> {
    const getUrl = this.url + '/delete/';
    return this.http.delete<any>(getUrl + id);
  }
  getUserById(id): Observable<any>{
    const  getUrl = this.url + '/find/';
    return this.http.get<any>(getUrl + id);
  }
  getUserByNome(nome): Observable<any>{
    const  getUrl = this.url + '/find/';
    return this.http.get<any>(getUrl + nome);
  }
  getUserByCognome(cognome): Observable<any>{
    const  getUrl = this.url + '/find/';
    return this.http.get<any>(getUrl + cognome);
  }
  getUserByEmail(email): Observable<any>{
    const  getUrl = this.url + '/find/';
    return this.http.get<any>(getUrl + email);
  }

}
