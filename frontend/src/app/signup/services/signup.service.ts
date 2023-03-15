import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseSignup, SignupInterface } from '../interface/signup.interface';
import { CONSTANTS } from 'src/app/common/constants';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private _http: HttpClient,
    private route: Router,
  ) {}

  register(data: SignupInterface) {
    const headers: HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" })
    this._http.post<ResponseSignup>(`${CONSTANTS.AUTH_URL}/signup`,
      data,
      {
        headers,
      }
    ).subscribe({
      next: (response: ResponseSignup) => {
        const { status, message, data } = response;
        if (!status) {
          console.warn(message);
          alert(message);
          return;
        }
        if (data) {
          console.log(message);
          this.route.navigate(['/login'])
        }
      },
      error: (response) => {
        console.error(response);
      }
    });
  };
}
