import { byTestId, createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockComponent, MockService } from 'ng-mocks';
import { PhotosService } from 'src/app/services/photos.service';
import { PhotogridComponent } from './photogrid.component';
import { of } from 'rxjs';
import { PagingComponent } from 'src/app/modules/shared/components/paging/paging.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('PhotogridComponent', () => {
    let spectator: Spectator<PhotogridComponent>;
    let mockPhotosService = MockService(PhotosService);

    const createComponent = createComponentFactory({
        component: PhotogridComponent,
        providers: [
            {
                provide: PhotosService,
                useValue: mockPhotosService,
            },
            MockComponent(PagingComponent),
        ],
        imports: [SharedModule],
    });

    beforeEach(() => {
        spectator = createComponent();
        mockPhotosService.getPage = jest.fn();
    });

    it('component should be created', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should call photos service on init', () => {
        const photoServiceSpy = jest.spyOn(mockPhotosService, 'getPage');
        spectator.component.ngOnInit();
        expect(photoServiceSpy).toHaveBeenCalled();
    });

    it('should not show the buttons if there is only one page of pictures', async () => {
        mockPhotosService.getPage = jest.fn((pageNr: number, limit: number) =>
            of({ maxNumPhotos: 25, photos: [] })
        );
        spectator.component.ngOnInit();
        await spectator.fixture.whenStable();
        spectator.fixture.detectChanges();
        expect(spectator.query(byTestId('pagination'))).toBeNull();
    });

    it('should show the buttons if there is more than one page of pictures', async () => {
        mockPhotosService.getPage = jest.fn((pageNr: number, limit: number) =>
            of({ maxNumPhotos: 30, photos: [] })
        );
        spectator.component.ngOnInit();
        await spectator.fixture.whenStable();
        spectator.fixture.detectChanges();
        expect(spectator.query(byTestId('pagination'))).not.toBeNull();
    });
});
