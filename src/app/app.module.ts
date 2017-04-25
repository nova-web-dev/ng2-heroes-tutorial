import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/*============================================================================
    Custom Imports
 ============================================================================*/
import { AppComponent }  from './app.component';
import { Navbar } from './components/navbar/navbar.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroService } from './services/hero.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        Navbar,
        HeroesComponent,
        DashboardComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap:    [
        AppComponent
    ]
})



export class AppModule { }
