import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from '../components/albums/albums.component';
import { PhotodetailsComponent } from '../components/photodetails/photodetails.component';
import { PhotogridComponent } from '../components/photogrid/photogrid.component';

const routes: Routes = [
    { path: '', redirectTo: '/browser', pathMatch: 'full' },
    {
        path: 'browser',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: PhotogridComponent,
                data: {
                    reuse: true,
                },
            },
            {
                path: 'photodetails/:id',
                component: PhotodetailsComponent,
            },
        ],
    },
    { path: 'albums', component: AlbumsComponent },
    { path: '**', redirectTo: '/browser' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
