import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotogridComponent } from './photogrid.component';

describe('PhotogridComponent', () => {
    let component: PhotogridComponent;
    let fixture: ComponentFixture<PhotogridComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PhotogridComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PhotogridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
