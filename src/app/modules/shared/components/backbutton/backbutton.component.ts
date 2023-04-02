import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-backbutton',
  templateUrl: './backbutton.component.html',
})
export class BackbuttonComponent {
    @Input() navigationUrl: string;

    constructor(
        private navigationService: NavigationService,
        private router: Router
    ) {}

    buttonClicked() {
        if (this.navigationUrl) {
            this.router.navigateByUrl(this.navigationUrl);
        } else {
            this.navigationService.goBack();
        }
    }
}
