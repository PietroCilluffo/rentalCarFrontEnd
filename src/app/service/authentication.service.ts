import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {Router} from '@angular/router';
export class JwtResponse{
  constructor(public token: string, ){

  }

}
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  url = 'http://localhost:5050/authenticate';
  constructor(private http: HttpClient, private userService: UserService,private route: Router) { }
  authenticate(username, password): Observable<any>{
    return this.http.post<any>(this.url, { username, password } ).pipe(
      map(
        userData => {
          console.log('username' + username);
          sessionStorage.setItem('username', username);
          const tokenStr = 'Bearer ' + userData.token;
          console.log('this' + tokenStr);
          sessionStorage.setItem('token', tokenStr);
          this.userService.getUserByEmail(username).subscribe(
            response => {
              const tipo = response.tipo;
              sessionStorage.setItem('tipo',tipo);
              sessionStorage.setItem('id', response.id);
              console.log('tipo utente',tipo);

              this.route.navigate([`${'home'}`]);
            }
          );

          return userData;
        }
      )
    );

  }
  logout(){
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('token');
    this.route.navigate([`${'login'}`]);

  }
}
