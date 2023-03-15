import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { LoginInterface, ResponseAuth } from '../interfaces/login.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient, private route: Router) {}

  login(data: LoginInterface) {
    const headers = new HttpHeaders({ "Content-Type": "application/json" })
    this._http.post<ResponseAuth>('http://localhost:3000/api/auth/login',
      data,
      {
        headers
      })
      .subscribe({
        next: (response: ResponseAuth) => {
          const { status, message, data } = response;
          console.log(status, message);
          if (!status) return; // Not login
          if (data){
            window.sessionStorage.setItem('token', data.token);
            this.route.navigate(['/home'])
          }
        },
        error: (reject) => {
          console.warn(reject);
        }
    });
  }
}
