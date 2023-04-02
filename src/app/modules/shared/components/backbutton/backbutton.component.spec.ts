import { NavigationService } from 'src/app/services/navigation.service';
import { BackbuttonComponent } from './backbutton.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockService } from 'ng-mocks';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('BackbuttonComponent', () => {
    let spectator: Spectator<BackbuttonComponent>;
    let mockNavigationService = MockService(NavigationService);
    let router: Router;

    mockNavigationService.goBack = jest.fn();

    const createComponent = createComponentFactory({
        component: BackbuttonComponent,
        providers: [
            { provide: NavigationService, useValue: mockNavigationService },
        ],
        imports: [RouterTestingModule],
    });

    beforeEach(() => {
        spectator = createComponent();
        router = spectator.inject(Router);
        router.navigateByUrl = jest.fn();
    });

    it('component should be created', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should call router with navigationUrl when button is clicked and navigationUrl is set', () => {
        const url = '/foo';
        spectator.component.navigationUrl = url;
        const navigateSpy = jest.spyOn(router, 'navigateByUrl');
        spectator.component.buttonClicked();
        expect(navigateSpy).toHaveBeenCalledWith(url);
    });

    it('should call navigationService when button is clicked and navigationUrl is not set', () => {
        spectator.component.buttonClicked();
        expect(mockNavigationService.goBack).toHaveBeenCalled();
    });
});
