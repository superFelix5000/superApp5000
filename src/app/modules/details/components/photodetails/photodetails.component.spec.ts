import { ActivatedRoute } from '@angular/router';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { PhotosService } from 'src/app/services/photos.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { PhotodetailsComponent } from './photodetails.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { BackbuttonComponent } from 'src/app/modules/shared/components/backbutton/backbutton.component';

describe('PhotodetailsComponent', () => {
    let spectator: Spectator<PhotodetailsComponent>;

    const createComponent = createComponentFactory({
        component: PhotodetailsComponent,
        providers: [
            {
                provide: ActivatedRoute,
                useValue: {
                    paramMap: of({ get: () => '1' }),
                },
            },
            MockProvider(PhotosService),
            MockProvider(NavigationService),
            MockProvider(BackbuttonComponent),
        ],
        imports: [SharedModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('component should be created', () => {
        expect(spectator.component).toBeTruthy();
    });
});
