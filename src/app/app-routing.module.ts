import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthFormsComponent } from './components/auth-forms/auth-forms.component';
import { ItinerariComponent } from './components/itinerari/itinerari.component';
import { SpaceCrewComponent } from './components/space-crew/space-crew.component';
import { MezziComponent } from './components/mezzi/mezzi.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"auth",
    component:AuthFormsComponent
  },
  {
    path:"itinerari",
    component:ItinerariComponent
  },
  {
    path:"spaceCrew",
    component:SpaceCrewComponent
  },
  {
    path:"mezzi",
    component:MezziComponent
  },
  {
    path:"about",
    component:AboutUsComponent
  },
  {
    path:"**",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
