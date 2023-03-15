import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookModalComponent } from './book-modal/book-modal.component';
import { CoreModule } from "../core/core.module";

@NgModule({
    declarations: [InputComponent, BookModalComponent, ButtonComponent],
    exports: [InputComponent, ButtonComponent, BookModalComponent],
    imports: [CommonModule, ReactiveFormsModule, CoreModule]
})
export class SharedModule {}
