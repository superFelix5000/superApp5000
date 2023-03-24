import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { PhotobrowserComponent } from './photobrowser/photobrowser.component';

const routes: Routes = [
    { path: '', redirectTo: '/photobrowser', pathMatch: 'full' },
    { path: 'photobrowser', component: PhotobrowserComponent },
    { path: 'albums', component: AlbumsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
