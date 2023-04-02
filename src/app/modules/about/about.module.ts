import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    SharedModule,
    AboutRoutingModule
  ],
  exports: [AboutComponent]
})
export class AboutModule {}
