import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapComponent } from '../app/map/map.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ProgramComponent } from './components/program/program.component';
import  {InfoComponent } from './components/info/info.component';
import { DirectionComponent } from './components/direction/direction.component';

const appRoutes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'direction', component: DirectionComponent },
  { path: 'details', component: DetailsComponent },

  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: MapComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, scrollPositionRestoration: 'enabled' } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
