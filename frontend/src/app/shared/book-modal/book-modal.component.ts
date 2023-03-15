import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { BookModalService } from '../../home/services/book-modal.service';
import { Observable, Subject, async } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.scss'],
})
export class BookModalComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private bookModalSrv: BookModalService
  ) {}

  @HostBinding('class.visible') visible = false;

  public visibleForm: boolean = false;
  public bookSignal = new Subject();

  public book$: Observable<any> = this.bookSignal.asObservable();

  ngOnInit(): void {
    this.bookModalSrv.modalState$.subscribe({
      next: ({ state, payload }) => {
        console.log(state);
        this.visible = state != 'close';
        this.bookSignal.next(payload);
      },
    });
  }

  onModalClose(): void {
    this.bookModalSrv.close();
  }

  onCreateReview(): void {
    this.visibleForm = this.visibleForm ? false : true;
  }

  public createReviewForm = this.fb.group({
    comment: ['', [Validators.required]],
    rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
  });

  onSubmit(): void {
    const { comment, rating } = this.createReviewForm.value;
    if (!comment || !rating) return;
    this.performCreateReview(comment, rating);
  }

  public performCreateReview(comment: string, _rating: string) {
    //TODO: get id book
    console.log(this.book$);
    const getUserId: string | null = window.sessionStorage.getItem('id');
    if (!getUserId) return;
    const userId = parseInt(getUserId);
    const rating = parseInt(_rating);
    // this.bookModalSrv
    //   .createReview({ comment, rating, userId, bookId: 1 })
    //   .subscribe({
    //     next: (res) => {
    //       console.warn(res);
    //       return;
    //     },
    //     error: (rej) => {
    //       console.error(rej);
    //       return;
    //     },
    //   });
  }
}
