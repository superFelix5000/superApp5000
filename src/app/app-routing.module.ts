import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/browser', pathMatch: 'full' },
    {
        path: 'browser',
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () =>
                    import('./modules/photogrid/photogrid.module').then(
                        (m) => m.PhotogridModule
                    ),
            },
            {
                path: 'photodetails/:id',
                loadChildren: () =>
                    import('./modules/details/details.module').then(
                        (m) => m.DetailsModule
                    ),
            },
        ],
    },
    { path: 'albums', component: AlbumsComponent },
    { path: '**', redirectTo: '/browser' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
