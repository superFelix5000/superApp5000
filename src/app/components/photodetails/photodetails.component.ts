import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-photodetails',
  templateUrl: './photodetails.component.html',
  styleUrls: ['./photodetails.component.scss']
})
export class PhotodetailsComponent implements OnInit {
    constructor(
        private navigationService: NavigationService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        // TODO: error handling for wrong parameter
        this.route.paramMap.subscribe((params) =>
            console.log(params.get('id'))
        );
        /* this.heroes$ = this.route.paramMap.pipe(
            switchMap((params) => {
                this.selectedId = Number(params.get('id'));
                return this.service.getHeroes();
            })
        ); */
    }

    goBack(): void {
        this.navigationService.goBack();
    }
}
