import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import { GET_BOOKS } from '../graphql.queries';
import { ResponseBook } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private _http: HttpClient, private _apollo: Apollo) {}

  getBooks() {
    // const token: string | null = window.sessionStorage.getItem('token');
    // if (!token) return;
    // const headers: HttpHeaders = new HttpHeaders({ 'Authorization': token})
    return this._apollo
      .watchQuery<any>({
        query: GET_BOOKS,
      });
  }
}
