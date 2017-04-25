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

    str: string = '';

    constructor(private router: Router) { }

    searchFisher(): void {
        console.log('Text in search box = ' + this.str);

        this.router.navigateByUrl('/fisher/' + this.str).then((url) => console.log('Promise completed for navigation to url'));
    }
}
