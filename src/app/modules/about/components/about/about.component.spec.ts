import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { AboutComponent } from './about.component';
import { MockProvider } from 'ng-mocks';
import { BackbuttonComponent } from 'src/app/modules/shared/components/backbutton/backbutton.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('AboutComponent', () => {
    let spectator: Spectator<AboutComponent>;

    const createComponent = createComponentFactory({
        component: AboutComponent,
        providers: [
            MockProvider(AboutComponent),
            MockProvider(BackbuttonComponent),
        ],
        imports: [SharedModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('component should be created', () => {
        expect(spectator.component).toBeTruthy();
    });
});
