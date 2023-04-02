import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotobrowserComponent } from './components/photobrowser/photobrowser.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { PhotoBrowserRouteReuseStrategy } from './routing/photo-browser-route-reuse-strategy';
import { PhotogridModule } from './modules/photogrid/photogrid.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        PhotobrowserComponent,
        AboutComponent,
        ErrorpageComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        PhotogridModule,
        SharedModule,
        BrowserAnimationsModule, // required animations module
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
