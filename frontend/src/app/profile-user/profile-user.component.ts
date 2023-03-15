import { Component, OnInit } from '@angular/core';
import { Review } from '../common/data.interface';
import { ProfileUserService } from './services/profile-user.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss'],
})
export class ProfileUserComponent implements OnInit {
  constructor(private userProdileSrv: ProfileUserService) {}

  public id = 0;
  public username = '';
  public email = '';
  public reviews: Review[] = [
    {
      id: 'example',
      comment: 'example',
      rating: 1,
      createAt: 'example',
    },
  ];

  ngOnInit(): void {
    const _userId: string | null = window.sessionStorage.getItem('id');
    if (!_userId) return;
    const userId = parseInt(_userId);
    this.userProdileSrv.getDataUser(userId).valueChanges.subscribe({
      next: (res) => {
        const { id, username, email } = res.data.user;
        this.id = id;
        this.username = username;
        this.email = email;
      },
      error: (res) => {
        console.error(res);
      },
    });
    this.userProdileSrv.getDataReviewOneuser(userId).valueChanges.subscribe({
      next: (res) => {
        this.reviews = res.data.reviewsOneUser;
        return;
      },
      error: (rej) => {
        console.error(rej);
      },
    });
  }
}
