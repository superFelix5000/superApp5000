import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotobrowserComponent } from './components/photobrowser/photobrowser.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { PhotoBrowserRouteReuseStrategy } from './routing/photo-browser-route-reuse-strategy';
import { PhotogridModule } from './modules/photogrid/photogrid.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        PhotobrowserComponent,
        AlbumsComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        PhotogridModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(), // ToastrModule added
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
