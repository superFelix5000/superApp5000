import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotobrowserComponent } from './components/photobrowser/photobrowser.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotogridComponent } from './components/photogrid/photogrid.component';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { PhotoBrowserRouteReuseStrategy } from './routing/photo-browser-route-reuse-strategy';
import { SharedModule } from './modules/shared/shared.module';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';

@NgModule({
    declarations: [
        AppComponent,
        PhotobrowserComponent,
        AlbumsComponent,
        PhotogridComponent,
        ThumbnailComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule
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
