import { PhotosService } from './photos.service';
import {
    HttpMethod,
    SpectatorHttp,
    createHttpFactory,
} from '@ngneat/spectator';

describe('PhotosService', () => {
    let spectator: SpectatorHttp<PhotosService>;

    const createHttp = createHttpFactory(PhotosService);

    beforeEach(() => (spectator = createHttp()));

    it('should call getAll with the correct URL', () => {
        spectator.service.getAll().subscribe();
        spectator.expectOne(
            `${spectator.service['apiUrlPhotos']}`,
            HttpMethod.GET
        );
    });

    it('should call getPage with the correct URL and params', () => {
        const pageNr = 5;
        const limit = 20;
        spectator.service.getPage(pageNr, limit).subscribe();
        const req = spectator.expectOne(
            `${spectator.service['apiUrlPhotos']}?_limit=20&_page=5`,
            HttpMethod.GET
        );
        expect(req.request.params.get('_limit')).toEqual(limit.toString());
        expect(req.request.params.get('_page')).toEqual(pageNr.toString());
    });

    it('should call getPhoto with the correct URL and id', () => {
        const id = 1000;
        spectator.service.getPhoto(id).subscribe();
        spectator.expectOne(
            `${spectator.service['apiUrlPhotos']}/${id}`,
            HttpMethod.GET
        );
    });
});
