import { Component, Input } from '@angular/core';
import { Review } from 'src/app/common/data.interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  @Input() review: Review = {
    id: '',
    comment: '',
    rating: 1,
    createAt: '',
  };
}
