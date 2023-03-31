import { Component, Input } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html'
})
export class ThumbnailComponent {
    @Input() photo: Photo | undefined;
}
