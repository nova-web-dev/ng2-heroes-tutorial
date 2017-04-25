/**
 * Created by Carl on 2017-04-25.
 */
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <cs-navbar>Loading navbar...</cs-navbar>
        
        <div class="container">
            <h1>{{title}}</h1>
            <!--<nav>-->
                <button class="btn btn-default" routerLink="/dashboard">Show Dashboard</button>
                <button class="btn btn-default" routerLink="/heroes">Show Heroes</button>
            <!--</nav>-->
            <router-outlet>
                
            </router-outlet>
        </div>
    `
})


export class AppComponent {
    title = 'Tour of Heroes';
}
