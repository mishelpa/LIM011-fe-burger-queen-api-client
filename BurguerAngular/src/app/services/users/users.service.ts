import { User } from '../../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url: string;
  private userEdit = new BehaviorSubject(User);
  public currentUserEdit = this.userEdit.asObservable();


  constructor( public http: HttpClient ) {
    this.url = 'http://localhost:3000/';
  }

  changeUserEdit(user) {
    this.userEdit.next(user);
  }

  postUser(user): Observable<any> {
  const params = JSON.stringify(user);
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  return this.http.post(this.url + 'users', params, {headers});
  }

  getListUsers(): Observable<any> {
    return this.http.get(this.url + 'users');
  }

  getUserByEmail(email: string) {
    return this.http.get(this.url + 'users' + '/' + email);
  }

  deleteUser(userEmail: any) {
    return this.http.delete(this.url + 'users' + '/' + userEmail);
  }

  updateUser(user: any) {
    return this.http.put(this.url + 'users' + '/' + user.email, user);
  }
}
