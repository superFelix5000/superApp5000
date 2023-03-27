import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingComponent } from './components/paging/paging.component';

@NgModule({
    declarations: [
        PagingComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PagingComponent
    ]
})
export class SharedModule {}
