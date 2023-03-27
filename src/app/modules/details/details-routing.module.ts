import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotodetailsComponent } from './components/photodetails/photodetails.component';

const routes: Routes = [
    {
        path: '',
        component: PhotodetailsComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DetailsRoutingModule {}
