import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapComponent } from '../app/map/map.component';



const appRoutes: Routes = [
  { path: 'map', component: MapComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: MapComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
