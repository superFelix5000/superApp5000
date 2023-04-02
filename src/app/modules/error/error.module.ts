import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { SharedModule } from '../shared/shared.module';
import { ErrorRoutingModule } from './error-routing.module';

@NgModule({
  declarations: [ErrorpageComponent],
  imports: [
    CommonModule,
    SharedModule,
    ErrorRoutingModule
  ],
  exports: [ErrorpageComponent]
})
export class ErrorModule {}
