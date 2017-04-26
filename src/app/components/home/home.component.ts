/**
 * Created by Carl on 2017-04-25.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.css']
})

export class HomeComponent {

    catchId: string = '';

    constructor(private router: Router) { }

    searchFisher(): void {
        console.log('Text in search box = ' + this.catchId);

        this.router.navigateByUrl('/fisher/' + this.catchId).then((url) => console.log('Promise completed for navigation to url'));
    }
}
