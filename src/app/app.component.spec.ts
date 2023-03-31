import { Component } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { PhotobrowserComponent } from './components/photobrowser/photobrowser.component';

@Component({
    selector: 'app-photobrowser',
    template: ''
  })
export class MockPhotobrowserComponent {}

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;
    const createComponent = createComponentFactory({
        component: AppComponent,
        declarations: [MockComponent(PhotobrowserComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('app component should be created', () => {
        expect(spectator.component).toBeTruthy();
    });
});
