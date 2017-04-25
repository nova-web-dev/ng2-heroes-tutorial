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

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FisherService } from './services/fisher.service';

import { HomeComponent } from './components/home/home.component';
import { FisherDetailComponent } from './components/fisher-detail/fisher-detail.component';



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
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'fisher/:id',
                component: FisherDetailComponent
            }
        ]),
        HttpModule,
        // InMemoryWebApiModule.forRoot(FisherService)
    ],
    declarations: [
        AppComponent,
        FisherDetailComponent,
        Navbar,
        HomeComponent
    ],
    providers: [
        FisherService
    ],
    bootstrap:    [ AppComponent ]
})



export class AppModule { }
