import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
// import { HttpClient } from '@angular/common/http';
// COMPONENTS
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    DetailsComponent
   
  ],
  imports: [
    BrowserModule,
    // HttpClient
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
