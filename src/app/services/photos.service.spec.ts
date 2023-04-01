import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PhotosService } from './photos.service';
import { MockProvider } from 'ng-mocks';
import { ToastrService } from 'ngx-toastr';

describe('PhotosService', () => {
    let service: PhotosService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [MockProvider(ToastrService)],
        });
        service = TestBed.inject(PhotosService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
