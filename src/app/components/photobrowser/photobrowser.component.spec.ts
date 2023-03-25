import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotobrowserComponent } from './photobrowser.component';

describe('PhotobrowserComponent', () => {
    let component: PhotobrowserComponent;
    let fixture: ComponentFixture<PhotobrowserComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PhotobrowserComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PhotobrowserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
