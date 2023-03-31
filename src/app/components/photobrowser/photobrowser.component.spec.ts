import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { PhotobrowserComponent } from './photobrowser.component';

describe('PhotobrowserComponent', () => {
    let component: PhotobrowserComponent;
    let fixture: ComponentFixture<PhotobrowserComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PhotobrowserComponent],
            imports: [RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(PhotobrowserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
