import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotogridRoutingModule } from './photogrid-routing.module';
import { PhotogridComponent } from './components/photogrid/photogrid.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        PhotogridComponent,
        ThumbnailComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        PhotogridRoutingModule
    ],
    exports: [
        PhotogridComponent,
    ]
})
export class PhotogridModule {}
