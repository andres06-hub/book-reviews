import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  GET_DATA_USER,
  GET_REVIEW_ONE_USER,
} from 'src/app/common/graphql.queries';

@Injectable({
  providedIn: 'root',
})
export class ProfileUserService {
  constructor(private _apollo: Apollo) {}

  getDataUser(userId: number) {
    return this._apollo.watchQuery<any>({
      query: GET_DATA_USER,
      variables: {
        userId: userId,
      },
    });
  }

  getDataReviewOneuser(userId: number) {
    return this._apollo.watchQuery<any>({
      query: GET_REVIEW_ONE_USER,
      variables: {
        userId: userId,
      },
    });
  }
}
