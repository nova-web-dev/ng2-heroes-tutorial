/**
 * Created by Carl on 2017-04-21.
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Fisher } from '../../objects/fisher';
import {FisherService} from '../../services/fisher.service';

@Component({
    selector: 'fisher-detail',
    templateUrl: './fishers-detail.component.html'
})

export class FisherDetailComponent {
    fisher: Fisher;

    constructor(
        private fisherService: FisherService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.switchMap((params: Params) => this.fisherService.getFisher(params['id'])).subscribe(fisher => this.fisher = fisher);
    }

    goBack(): void {
        this.location.back();
    }
}
