import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncateTextPipe } from './truncate/truncate-text.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TruncateTextPipe
  ],
  declarations: [
    TruncateTextPipe
  ]
})
export class PipeModule { }