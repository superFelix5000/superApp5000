import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { Photo } from '../models/photo';
import { PhotosResult } from '../models/photosResult';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
    private readonly apiUrl = 'https://jsonplaceholder.typicode.com';
    private readonly apiUrlPhotos = `${this.apiUrl}/photos`;

    constructor(private http: HttpClient) {}

    public getAll(): Observable<Photo[]> {
        return this.http
            .get<Photo[]>(this.apiUrlPhotos)
            .pipe(catchError(this.handleError));
    }

    public getPage(pageNr: number, limit: number): Observable<PhotosResult> {
        return this.http
            .get<Photo[]>(this.apiUrlPhotos, {
                observe: 'response',
                params: { _limit: limit, _page: pageNr },
            })
            .pipe(
                map(
                    (res) =>
                        <PhotosResult>{
                            maxNumPhotos: parseInt(
                                res.headers.get('X-Total-Count') ?? ''
                            ),
                            photos: res.body ?? [],
                        }
                )
            );
    }

    public getMaxNumPhotos(): Observable<number> {
        return this.http
            .get<Photo[]>(this.apiUrlPhotos, {
                observe: 'response',
                params: { _limit: 1, _page: 1 },
            })
            .pipe(
                map((res) => parseInt(res.headers.get('X-Total-Count') ?? ''))
            );
    }

    public getPhoto(id: number): Observable<Photo> {
        return this.http
            .get<Photo>(`${this.apiUrlPhotos}/${id}`)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `,
                error.error
            );
        }
        // Return an observable with a user-facing error message.
        return throwError(
            () => new Error('Something bad happened; please try again later.')
        );
    }
}
