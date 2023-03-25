import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-photodetails',
  templateUrl: './photodetails.component.html',
  styleUrls: ['./photodetails.component.scss']
})
export class PhotodetailsComponent {
    constructor(private navigationService: NavigationService) {}

    goBack(): void {
        this.navigationService.goBack();
    }
}
