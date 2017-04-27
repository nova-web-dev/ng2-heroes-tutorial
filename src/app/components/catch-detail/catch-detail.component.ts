/**
 * Created by Carl on 2017-04-21.
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Catch } from '../../objects/catch';
import {CatchService} from '../../services/catch.service';

@Component({
    selector: 'fisher-detail',
    templateUrl: './catch-detail.component.html',
    styleUrls: ['./catch-detail.css']
})

export class CatchDetailComponent {
    fisher: Catch = null;

    lat: number;
    lng: number;

    searchedCatchId: string = '';
    catchId: string = '';

    // Will be true when /fisher is accessed without ID. Just used so that spinner is not shown then
    noFisher: boolean = true;

    // When true the fisher with catchID could not be found
    showError: boolean = false;

    lorem =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    constructor(
        private fisherService: CatchService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            if (!params['id']) {
                console.log('ID param not present');
            } else {
                this.noFisher = false;
                this.catchId = params['id'];
                this.fisherService.getCatch(this.catchId).then(fisher => this.setValues(fisher), () => this.showError = true);
            }
        });
    }

    searchFisher(): void {
        console.log('Text in search box = ' + this.searchedCatchId);
        this.catchId = this.searchedCatchId;

        this.showError = false;
        this.fisher = null;

        // Use this to navigate to new page url for page update
        this.router.navigateByUrl('catch/tag/' + this.catchId);

        // Enable this to just update the page as is
        // this.fisherService.getCatch(this.catchId).then(fisher => this.setValues(fisher), () => this.showError = true);
    }

    setValues(fisher: Catch) {
        console.log(fisher);

        this.fisher = fisher;

        this.lat = fisher.community_lat;
        this.lng = fisher.community_lon;
    }

    getCatchId(): string {
        return this.catchId;
    }

    goBack(): void {
        this.location.back();
    }
}
