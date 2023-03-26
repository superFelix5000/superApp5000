import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { PhotobrowserComponent } from './components/photobrowser/photobrowser.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotodetailsComponent } from './components/photodetails/photodetails.component';
import { PhotogridComponent } from './components/photogrid/photogrid.component';
import { HttpClientModule } from '@angular/common/http';
import { PagingComponent } from './components/paging/paging.component';
import { RouteReuseStrategy } from '@angular/router';
import { PhotoBrowserRouteReuseStrategy } from './routing/custom-route-reuse-strategy';

@NgModule({
  declarations: [
    AppComponent,
    PhotobrowserComponent,
    AlbumsComponent,
    PhotodetailsComponent,
    PhotogridComponent,
    PagingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
        provide: RouteReuseStrategy,
        useClass: PhotoBrowserRouteReuseStrategy,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
