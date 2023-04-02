import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, NEVER, Observable } from 'rxjs';
import { Photo } from 'src/app/models/photo';
import { NavigationService } from 'src/app/services/navigation.service';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photodetails',
  templateUrl: './photodetails.component.html'
})
export class PhotodetailsComponent implements OnInit {
    protected currentId: number = 1;
    protected photo: Photo | undefined;
    protected maxNumPhotos$: Observable<number> | undefined;
    protected loadingImage = false;

    constructor(
        private navigationService: NavigationService,
        private route: ActivatedRoute,
        private photosService: PhotosService
    ) {}

    ngOnInit(): void {
        this.maxNumPhotos$ = this.photosService.getMaxNumPhotos();
        this.route.paramMap.subscribe((params) => {
            const id = Number(params.get('id'));
            this.currentId = !isNaN(id) ? id : this.currentId;
            this.fetchPhoto(id);
        });
    }

    private handleError = (error: HttpErrorResponse) => {
        return NEVER;
    };

    private fetchPhoto(id: number): void {
        this.loadingImage = true;
        this.photosService
            .getPhoto(id)
            .pipe(catchError(this.handleError))
            .subscribe((photo) => {
                this.photo = photo;
            });
    }

    private setTitle() {
        var slashIndex = window.location.pathname.lastIndexOf('/');
        var urlWithoutNumber = window.location.pathname.substring(
            0,
            slashIndex + 1
        );
        window.history.replaceState(
            {},
            '',
            `${urlWithoutNumber}${this.currentId}`
        );
    }

    goBack(): void {
        this.navigationService.goBack();
    }

    goToNextPhoto(): void {
        this.fetchPhoto(++this.currentId);
        this.setTitle();
    }

    goToPreviousPhoto(): void {
        this.fetchPhoto(--this.currentId);
        this.setTitle();
    }

    loaded(): void {
        this.loadingImage = false;
    }
}
