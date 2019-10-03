import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
// import { HttpClient } from '@angular/common/http';
// COMPONENTS
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';

import { AppRoutingModule } from './app-routing.module';
import { ProgramComponent } from './components/program/program.component';
import { InfoComponent } from './components/info/info.component';
import { DirectionComponent } from './components/direction/direction.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    DetailsComponent,
    ProgramComponent,
    InfoComponent,
    DirectionComponent,
    ConfirmationComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // HttpClient
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
