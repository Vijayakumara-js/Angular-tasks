import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Login } from '../../models/loginModels'
import { Register } from '../../models/registerModel'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  _baseUrl = 'xx/yy/zz';

  constructor( public http:HttpClient) { }

  register(user: Register): Observable<Register[]> {
    return this.http.post<Register[]>(`${this._baseUrl}User/Register`, user)
    .pipe(catchError(err => throwError(() => new Error(err))))
  }
  
  login(login: Login): Observable<any> {
    return this.http.post<Login[]>(`${this._baseUrl}Authenticate`, login)
    .pipe(catchError(err => throwError(() => new Error(err))))
  }

  getToken() {
    return JSON.parse(localStorage.getItem('currentUser') || '{}').token;

  }

}

