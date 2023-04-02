import { BackbuttonComponent } from 'src/app/modules/shared/components/backbutton/backbutton.component';
import { ErrorpageComponent } from './errorpage.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockProvider } from 'ng-mocks';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('ErrorpageComponent', () => {
    let spectator: Spectator<ErrorpageComponent>;

    const createComponent = createComponentFactory({
        component: ErrorpageComponent,
        providers: [MockProvider(BackbuttonComponent)],
        imports: [SharedModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('component should be created', () => {
        expect(spectator.component).toBeTruthy();
    });
});
