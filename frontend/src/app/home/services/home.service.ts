import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import { GET_BOOKS } from '../../common/graphql.queries';
import { ResponseBook } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private _http: HttpClient, private _apollo: Apollo) {}

  getBooks() {
    return this._apollo.watchQuery<any>({
      query: GET_BOOKS,
    });
  }
}
