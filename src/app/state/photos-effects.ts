import { Injectable } from '@angular/core';
import { createAction, createEffect, ofType, props } from '@ngneat/effects';
import { map, tap, withLatestFrom } from 'rxjs';
import { PhotosService } from '../services/photos.service';
import { PhotosRepository } from './photos.repository';

export const loadPhoto = createAction(
    '[Photos] Load Photo',
    props<{ id: number }>()
);

@Injectable({ providedIn: 'root' })
export class PhotosEffects {
    constructor(
        private photosService: PhotosService,
        private photosRepo: PhotosRepository
    ) {}

    loadTodos$ = createEffect(
        (actions) =>
            actions.pipe(
                ofType(loadPhoto),
                tap((action) => this.photosRepo.setCurrentPhotoId(action.id)),
                withLatestFrom(this.photosRepo.currentPhoto$),
                map(([action, photo]) => {
                    if (!photo) {
                        this.photosService
                            .getPhoto(action.id)
                            .pipe(
                                tap((photo) =>
                                    this.photosRepo.addPhotos([photo])
                                )
                            );
                    }
                })
            ),
        { dispatch: false }
    );
}
