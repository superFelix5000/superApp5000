import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotodetailsComponent } from './components/photodetails/photodetails.component';
import { DetailsRoutingModule } from './details-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        PhotodetailsComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        DetailsRoutingModule,
    ],
    exports: [
        PhotodetailsComponent,
    ]
})
export class DetailsModule {}
