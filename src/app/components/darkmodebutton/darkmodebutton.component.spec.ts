import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { DarkmodebuttonComponent } from './darkmodebutton.component';

describe('DarkmodebuttonComponent', () => {
    let spectator: Spectator<DarkmodebuttonComponent>;

    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });

    const createComponent = createComponentFactory({
        component: DarkmodebuttonComponent,
        providers: [
            {
                provide: Window,
                useValue: {
                    matchMedia: '',
                },
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('component should be created', () => {
        expect(spectator.component).toBeTruthy();
    });
});
