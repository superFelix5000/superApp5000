import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotogridComponent } from './components/photogrid/photogrid.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: PhotogridComponent,
        data: {
            reuse: true,
        },
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotogridRoutingModule {}
