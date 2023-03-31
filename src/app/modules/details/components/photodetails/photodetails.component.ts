import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
        // TODO: error handling for wrong parameter
        this.route.paramMap.subscribe((params) => {
            this.currentId = Number(params.get('id'));
            this.fetchPhoto(this.currentId);
        });
    }

    private fetchPhoto(id: number): void {
        this.loadingImage = true;
        this.photosService
            .getPhoto(id)
            .subscribe((photo) => (this.photo = photo));
    }

    goBack(): void {
        this.navigationService.goBack();
    }

    goToNextPhoto(): void {
        this.fetchPhoto(this.currentId++);
    }

    goToPreviousPhoto(): void {
        this.fetchPhoto(this.currentId--);
    }

    loaded(): void {
        this.loadingImage = false;
    }
}
