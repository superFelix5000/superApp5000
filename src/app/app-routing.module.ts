import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    {
        path: 'about',
        loadChildren: () =>
            import('./modules/about/about.module').then((m) => m.AboutModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('./modules/error/error.module').then((m) => m.ErrorModule),
    },
    { path: '**', redirectTo: '/browser' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
