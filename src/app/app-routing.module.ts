import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PreloadAllModules } from '@angular/router';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';

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
    { path: 'about', component: AboutComponent },
    { path: 'error', component: ErrorpageComponent },
    { path: '**', redirectTo: '/browser' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
