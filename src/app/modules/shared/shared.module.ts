import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingComponent } from './components/paging/paging.component';
import { BackbuttonComponent } from './components/backbutton/backbutton.component';

@NgModule({
    declarations: [
        PagingComponent,
        BackbuttonComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PagingComponent,
        BackbuttonComponent
    ]
})
export class SharedModule {}
