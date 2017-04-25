import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

// import * as $ from 'jquery';

@Component({
    selector: 'cs-navbar',
    templateUrl: './navbar.template.html'
})

export class Navbar implements OnInit {
    ngOnInit(): void {
        $(document).ready(function(){
            // alert('This is a test!');
        });
    }

}
