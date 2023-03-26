import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent {
    @Input() currentPage: number = 1;
    @Input() maxNumPages: number = 1;
    @Output() onNextClicked = new EventEmitter<void>();
    @Output() onPreviousClicked = new EventEmitter<void>();

    goToNextPage() {
        this.onNextClicked.emit();
    }

    goToPreviousPage() {
        this.onPreviousClicked.emit();
    }
}
