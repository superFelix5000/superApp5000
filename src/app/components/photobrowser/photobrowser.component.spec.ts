import { RouterTestingModule } from '@angular/router/testing';
import { PhotobrowserComponent } from './photobrowser.component';
import { Spectator, byTestId, createComponentFactory } from '@ngneat/spectator';
import { Router, Routes } from '@angular/router';
import { MockComponent } from 'ng-mocks';
import { DarkmodebuttonComponent } from '../darkmodebutton/darkmodebutton.component';

describe('PhotobrowserComponent', () => {
    let spectator: Spectator<PhotobrowserComponent>;
    let router: Router;

    const routes: Routes = [
        { path: 'browser', component: MockComponent(PhotobrowserComponent) },
        { path: 'about', component: MockComponent(PhotobrowserComponent) },
    ];

    const createComponent = createComponentFactory({
        component: PhotobrowserComponent,
        declarations: [MockComponent(DarkmodebuttonComponent)],
        imports: [RouterTestingModule.withRoutes(routes)],
    });

    beforeEach(() => {
        spectator = createComponent();
        router = spectator.inject(Router);
    });

    it('component should be created', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should navigate to /photogrid route when clicking photos link', async () => {
        spectator.click(byTestId('photos-link'));
        await spectator.fixture.whenStable();
        expect(router.url).toBe('/browser');
    });

    it('should navigate to /about route when clicking about link', async () => {
        spectator.click(byTestId('about-link'));
        await spectator.fixture.whenStable();
        expect(router.url).toBe('/about');
    });
});
