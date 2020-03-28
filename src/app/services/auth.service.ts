import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public url: string;

  constructor( private http: HttpClient ) {
    this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
    this.url = 'http://167.172.210.107/';
   }

   checkUser(user): Observable<any> {
    const params = JSON.stringify(user);
    return this.http.post(this.url + 'auth', user )
      .pipe(map(userLogged => {
            sessionStorage.setItem('currentUser', userLogged['token']);
            this.currentUserSubject.next(user);
            return userLogged;
      }));
    }

  logout() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('emailCurrentUser');
    sessionStorage.removeItem('rolCurrentUser');
    this.currentUserSubject.next(null);
    }
}
