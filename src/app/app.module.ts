import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/*============================================================================
    Custom Imports
 ============================================================================*/
import { AppComponent }  from './app.component';
import { Navbar } from './components/navbar/navbar.component';

import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { CatchService } from './services/catch.service';

import { HomeComponent } from './components/home/home.component';
import { CatchDetailComponent } from './components/catch-detail/catch-detail.component';


@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'home',
                component: HomeComponent
            },
            {
                // Default path
                path: '',
                redirectTo: 'catch/tag/',
                pathMatch: 'full'
            },
            {
                path: 'catch/tag/',
                component: CatchDetailComponent
            },
            {
                path: 'catch/tag/:id',
                component: CatchDetailComponent
            }
        ]),
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAcz8IeL7WdlcyARuUr44RTXc9vZphRkqI'
        })
    ],
    declarations: [
        AppComponent,
        CatchDetailComponent,
        Navbar,
        HomeComponent
    ],
    providers: [
        CatchService
    ],
    bootstrap: [ AppComponent ]
})



export class AppModule { }
