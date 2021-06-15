import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  requestLogin(loginEmail: string, loginPassword: string)
  {
    return this.http.post('http://127.0.0.1:3000/users/login', {"email": loginEmail, "password": loginPassword}, 
    { headers: new HttpHeaders({ 'Content-Type':  'application/json' }) })
    .pipe(tap(data => {
      return data;
    }));
  }

  requestRegister(registerEmail: string, registerPassword: string)
  {
    return this.http.post<any>('http://localhost:3000/users/register', {email: registerEmail, password: registerPassword},
    { headers: new HttpHeaders({ 'Content-Type':  'application/json' }) })
    .pipe(tap(data => {
      return data;
    }));
  }

  requestUserInfo()
  {
    return this.http.get<any>('http://localhost:3000/users/userInfo')
    .pipe(
      tap(data => {
        return data;
      }))
  }

  requestUserInfoChange(newName: string, newSurname: string)
  {
    return this.http.put<boolean>('http://localhost:3000/users/userInfo', {name: newName, surname: newSurname},
    { headers: new HttpHeaders({ 'Content-Type':  'application/json' }) })
    .pipe(tap(data => {
      return data;
    }))
  }

  requestPasswordVerification(password: string)
  {
    return this.http.get<boolean>('http://localhost:3000/users/password-verification', {params: {password: password}})
    .pipe(tap(data => {
      return data;
    }))
  }

  requestPasswordChange(password: string)
  {
    return this.http.put<boolean>('http://localhost:3000/users/password-change', {password: password},
    { headers: new HttpHeaders({ 'Content-Type':  'application/json' }) })
    .pipe(tap(data => {
      return data;
    }))
  }

  requestAccountDelete()
  {
    return this.http.delete<boolean>('http://localhost:3000/users/delete')
    .pipe(tap(data => {
      return data;
    }))
    this.logout();
  }

  setSession(authResult: any) {
    console.log("Setting up storage");
    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }           

  logout() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("expires_at");
  }
}
