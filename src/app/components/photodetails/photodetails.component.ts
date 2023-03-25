import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { Photo } from 'src/app/models/photo';
import { NavigationService } from 'src/app/services/navigation.service';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photodetails',
  templateUrl: './photodetails.component.html',
  styleUrls: ['./photodetails.component.scss']
})
export class PhotodetailsComponent implements OnInit {
    protected photo$: Observable<Photo> | undefined;

    constructor(
        private navigationService: NavigationService,
        private route: ActivatedRoute,
        private photosService: PhotosService
    ) {}

    ngOnInit(): void {
        // TODO: error handling for wrong parameter
        this.photo$ = this.route.paramMap.pipe(
            switchMap((params) => {
                const selectedId = Number(params.get('id'));
                return this.photosService.getPhoto(selectedId);
            })
        );
    }

    goBack(): void {
        this.navigationService.goBack();
    }
}
