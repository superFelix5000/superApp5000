import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { ThumbnailComponent } from './thumbnail.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ThumbnailComponent', () => {
    let spectator: Spectator<ThumbnailComponent>;
    const createComponent = createComponentFactory({
        component: ThumbnailComponent,
        imports: [RouterTestingModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('component should be created', () => {
        expect(spectator.component).toBeTruthy();
    });
});
