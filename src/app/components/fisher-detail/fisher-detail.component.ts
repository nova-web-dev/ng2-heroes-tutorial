/**
 * Created by Carl on 2017-04-21.
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Fisher } from '../../objects/fisher';
import {FisherService} from '../../services/fisher.service';

@Component({
    selector: 'fisher-detail',
    templateUrl: './fishers-detail.component.html',
    styleUrls: ['./fisher-detail.css']
})



export class FisherDetailComponent {
    fisher: Fisher;

    lat: number;
    lng: number;

    lorem =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    constructor(
        private fisherService: FisherService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,


    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.fisherService.getFisher(params['id']))
            .subscribe(fisher => this.setValues(fisher), () => this.router.navigateByUrl("/home"));
    }

    setValues(fisher: Fisher) {
        console.log(fisher);

        this.fisher = fisher;

        this.lat = fisher.community_lat;
        this.lng = fisher.community_lon;

    }

    goBack(): void {
        this.location.back();
    }


}
