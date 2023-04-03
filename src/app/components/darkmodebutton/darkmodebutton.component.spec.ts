import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { DarkmodebuttonComponent } from './darkmodebutton.component';

describe('DarkmodebuttonComponent', () => {
    let spectator: Spectator<DarkmodebuttonComponent>;

    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
            matches: false,
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

    it('setMode should be called when initialized', () => {
        // rome-ignore lint: using any for spying on private method
        const setModeSpy = jest.spyOn(spectator.component as any, 'setMode');
        spectator.component.ngOnInit();
        expect(setModeSpy).toHaveBeenCalled();
    });

    it('pressing the button should switch the theme', () => {
        const isDarkTheme = spectator.component['isDarkTheme'];
        spectator.component.switchMode();
        expect(spectator.component['isDarkTheme']).toEqual(!isDarkTheme);
    });

    it('pressing the button should set the theme on the local storage', () => {
        jest.spyOn(window.localStorage['__proto__'], 'setItem');
        spectator.component.switchMode();
        expect(localStorage.setItem).toHaveBeenCalled();
    });

    it('pressing the button should set the theme on the local storage to light if it was before', () => {
        jest.spyOn(window.localStorage['__proto__'], 'setItem');
        jest.spyOn(window.localStorage['__proto__'], 'getItem').mockReturnValue(
            spectator.component['darkTheme']
        );
        spectator.component.switchMode();
        expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'light');
    });
});
