import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockProvider } from 'ng-mocks';
import { PhotosService } from 'src/app/services/photos.service';

import { PhotogridComponent } from './photogrid.component';

describe('PhotogridComponent', () => {
    let spectator: Spectator<PhotogridComponent>;

    const createComponent = createComponentFactory({
        component: PhotogridComponent,
        providers: [MockProvider(PhotosService)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('component should be created', () => {
        expect(spectator.component).toBeTruthy();
    });
});
