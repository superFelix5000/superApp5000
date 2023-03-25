import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Photo } from 'src/app/models/photo';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photogrid',
  templateUrl: './photogrid.component.html',
  styleUrls: ['./photogrid.component.scss']
})
export class PhotogridComponent implements OnInit {
    private readonly pageLimit = 25;
    private currentPage = 1;
    private maxPages = 1; // TODO: build component

    protected photos$: Observable<Photo[]> = of([]);

    constructor(private photosService: PhotosService) {}

    ngOnInit(): void {
        this.photos$ = this.photosService
            .getPage(1, this.pageLimit)
            .pipe(map((res) => res.photos));
    }
}
