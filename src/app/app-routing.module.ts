import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthFormsComponent } from './components/auth-forms/auth-forms.component';
import { ItinerariComponent } from './components/itinerari/itinerari.component';
import { SpaceCrewComponent } from './components/space-crew/space-crew.component';
import { MezziComponent } from './components/mezzi/mezzi.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AuthGuard } from './core/auth.guard';

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
    component:ItinerariComponent,canActivate:[AuthGuard]
  },
  {
    path:"spaceCrew",
    component:SpaceCrewComponent,canActivate:[AuthGuard]
  },
  {
    path:"mezzi",
    component:MezziComponent,canActivate:[AuthGuard]
  },
  {
    path:"about",
    component:AboutUsComponent
    ,canActivate:[AuthGuard]
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
