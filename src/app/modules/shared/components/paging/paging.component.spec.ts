import { PagingComponent } from './paging.component';
import { Spectator, byTestId, createComponentFactory } from '@ngneat/spectator';

describe('PagingComponent', () => {
    let spectator: Spectator<PagingComponent>;

    const createComponent = createComponentFactory({
        component: PagingComponent,
    });

    beforeEach(() => (spectator = createComponent()));

    it('component should be created', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('in default state both buttons should be disabled', () => {
        expect(spectator.query(byTestId('previousPageButton'))).toBeDisabled();
        expect(spectator.query(byTestId('nextPageButton'))).toBeDisabled();
    });

    it('previous page button should be disabled when current page <= 1', () => {
        spectator.component.currentPage = 0;
        spectator.fixture.detectChanges();
        expect(spectator.query(byTestId('previousPageButton'))).toBeDisabled();
        spectator.component.currentPage = -1;
        spectator.fixture.detectChanges();
        expect(spectator.query(byTestId('previousPageButton'))).toBeDisabled();
    });

    it('both buttons should be enabled when currentPage > 1 and maxNumpages <= currentPage', () => {
        spectator.component.currentPage = 2;
        spectator.component.maxNumPages = 3;
        spectator.fixture.detectChanges();
        expect(
            spectator.query(byTestId('previousPageButton'))
        ).not.toBeDisabled();
        expect(spectator.query(byTestId('nextPageButton'))).not.toBeDisabled();
    });

    it('next page button should be disabled when currentPage >= maxNumPages', () => {
        spectator.component.currentPage = 2;
        spectator.component.maxNumPages = 2;
        spectator.fixture.detectChanges();
        expect(spectator.query(byTestId('nextPageButton'))).toBeDisabled();
        spectator.component.currentPage = 3;
        spectator.fixture.detectChanges();
        expect(spectator.query(byTestId('nextPageButton'))).toBeDisabled();
    });
});
