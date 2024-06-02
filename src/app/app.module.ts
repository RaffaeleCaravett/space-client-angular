import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthFormsComponent } from './components/auth-forms/auth-forms.component';
import { ItinerariComponent } from './components/itinerari/itinerari.component';
import { SpaceCrewComponent } from './components/space-crew/space-crew.component';
import { MezziComponent } from './components/mezzi/mezzi.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    AuthFormsComponent,
    ItinerariComponent,
    SpaceCrewComponent,
    MezziComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
