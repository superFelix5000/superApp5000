import { Injectable } from '@angular/core';
import { createStore, select, setProp, withProps } from '@ngneat/elf';
import {
    addEntities,
    selectAllEntities,
    withEntities,
} from '@ngneat/elf-entities';
import { selectEntity } from '@ngneat/elf-entities/src/lib/entity.query';
import { switchMap } from 'rxjs';
import { Photo } from '../models/photo';

export interface PhotosProps {
    currentPhotoId: number;
}

const store = createStore(
    { name: 'photos' },
    withEntities<Photo>(),
    withProps<PhotosProps>({ currentPhotoId: 1 })
);

@Injectable({ providedIn: 'root' })
export class PhotosRepository {
    photos$ = store.pipe(selectAllEntities());
    currentPhotoId$ = store.pipe(select((state) => state.currentPhotoId));
    currentPhoto$ = this.currentPhotoId$.pipe(
        switchMap((id) => store.pipe(selectEntity(id)))
    );

    foo = store.pipe(selectEntity(1));

    addPhotos(photos: Photo[]): void {
        store.update(addEntities(photos));
    }

    setCurrentPhotoId(id: number) {
        store.update(setProp('currentPhotoId', id));
    }
}
