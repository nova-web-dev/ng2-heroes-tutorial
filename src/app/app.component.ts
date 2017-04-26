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
                <h1 class="web-header">Abalobi Hook2Cook</h1>
            </div>            
            <div id="body">
                <router-outlet>

                </router-outlet>
            </div>
            <div id="footer">
                <h1>
                    
                </h1>
            </div>
        </div>        
    `,
    styleUrls: ['./app.css']
})


export class AppComponent {

}
