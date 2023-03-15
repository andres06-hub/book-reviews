import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookModalComponent } from './book-modal/book-modal.component';
import { CoreModule } from '../core/core.module';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { ModalCreateReviewComponent } from './modal-create-review/modal-create-review.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    InputComponent,
    BookModalComponent,
    ButtonComponent,
    NavComponent,
    CardComponent,
    ModalCreateReviewComponent,
    ReviewComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, CoreModule, RouterModule],
  exports: [
    InputComponent,
    ButtonComponent,
    BookModalComponent,
    NavComponent,
    CardComponent,
    ReviewComponent,
  ],
})
export class SharedModule {}
