import { Component, OnInit } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { PhotosResult } from 'src/app/models/photosResult';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photogrid',
  templateUrl: './photogrid.component.html',
  styleUrls: ['./photogrid.component.scss']
})
export class PhotogridComponent implements OnInit {
    private readonly pageLimit = 25;
    protected currentPage = 1;
    protected photosResult$: Observable<PhotosResult> | undefined;
    protected maxPages$: Observable<number> | undefined;
    protected showButtons$: Observable<boolean> | undefined;

    constructor(private photosService: PhotosService) {}

    ngOnInit(): void {
        this.getCurrentPage();
        this.maxPages$ = this.photosResult$?.pipe(
            map((res) => Math.max(res.maxNumPhotos / this.pageLimit))
        );
        this.showButtons$ = this.maxPages$?.pipe(
            map((maxPageNumber) => maxPageNumber > 1)
        );
    }

    getCurrentPage() {
        this.photosResult$ = this.photosService.getPage(
            this.currentPage,
            this.pageLimit
        );
    }

    goToNextPage() {
        this.currentPage++;
        this.getCurrentPage();
    }

    goToPrevPage() {
        this.currentPage--;
        this.getCurrentPage();
    }
}
