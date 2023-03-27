import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Photo } from 'src/app/models/photo';
import { NavigationService } from 'src/app/services/navigation.service';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photodetails',
  templateUrl: './photodetails.component.html'
})
export class PhotodetailsComponent implements OnInit {
    // TODO: use Signal for number?
    protected currentId: number = 1;
    protected photo$: Observable<Photo> | undefined;
    protected maxNumPhotos$: Observable<number> | undefined;

    constructor(
        private navigationService: NavigationService,
        private route: ActivatedRoute,
        private photosService: PhotosService
    ) {}

    ngOnInit(): void {
        this.maxNumPhotos$ = this.photosService.getMaxNumPhotos();
        // TODO: error handling for wrong parameter
        this.photo$ = this.route.paramMap.pipe(
            switchMap((params) => {
                this.currentId = Number(params.get('id'));
                return this.photosService.getPhoto(this.currentId);
            })
        );
    }

    private fetchPhoto() {
        this.photo$ = this.photosService.getPhoto(this.currentId);
    }

    goBack(): void {
        this.navigationService.goBack();
    }

    goToNextPhoto(): void {
        this.currentId++;
        this.fetchPhoto();
    }

    goToPreviousPhoto(): void {
        this.currentId--;
        this.fetchPhoto();
    }
}
