import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
    private navigatedRoutes: string[] = [];

    constructor(private router: Router, private location: Location) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.navigatedRoutes.push(event.urlAfterRedirects);
            }
        });
    }

    goBack(): void {
        this.navigatedRoutes.pop();
        if (this.navigatedRoutes.length > 0) {
            this.location.back();
        } else {
            this.router.navigateByUrl('/');
        }
    }
}
