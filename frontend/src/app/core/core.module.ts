import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrDefaultPipe } from './pipes/or-default.pipe';

@NgModule({
  declarations: [OrDefaultPipe],
  imports: [
    CommonModule
  ],
  exports: [OrDefaultPipe],
})
export class CoreModule { }
