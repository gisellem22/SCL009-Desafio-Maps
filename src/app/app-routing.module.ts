import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapComponent } from '../app/map/map.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';


const appRoutes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'home', component: HomeComponent },
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
