import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/*============================================================================
    Custom Imports
 ============================================================================*/
import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent }  from './app.component';
import { Navbar } from './navbar.component';


@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    declarations: [ AppComponent, HeroDetailComponent, Navbar ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
