import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { PhotosService } from 'src/app/services/photos.service';

import { PhotodetailsComponent } from './photodetails.component';

describe('PhotodetailsComponent', () => {
    let component: PhotodetailsComponent;
    let fixture: ComponentFixture<PhotodetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PhotodetailsComponent],
            imports: [SharedModule],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        paramMap: of({ get: () => '1' }),
                    },
                },
                MockProvider(PhotosService),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(PhotodetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
