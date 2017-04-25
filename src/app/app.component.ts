/**
 * Created by Carl on 2017-04-25.
 */
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div id="container">
            <div id="head">
                <h2>
                    LOGO
                </h2>
            </div>            
            <div id="body">
                <router-outlet>

                </router-outlet>
            </div>
            <div id="footer">
                <h1>
                    TODO
                </h1>
            </div>
        </div> 
        
        
    `,
    styleUrls: ['./app.css']
})


export class AppComponent {
    title = 'Tour of Heroes';
}
