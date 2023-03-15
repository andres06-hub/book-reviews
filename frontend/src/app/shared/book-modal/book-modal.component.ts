import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { BookModalService } from '../../home/services/book-modal.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.scss'],
})
export class BookModalComponent implements OnInit {
  constructor(private bookModalSrv: BookModalService) {}

  @HostBinding('class.visible') visible = false;

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

  onModalClose() {
    this.bookModalSrv.close();
  }
}
