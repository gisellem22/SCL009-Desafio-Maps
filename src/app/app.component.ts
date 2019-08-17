import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { environment } from '../environments/environment';
// MapBox
import * as mapboxgl from 'mapbox-gl';
// Service
import { MapService } from './../services/map.service';
// Class
// import { Markers } from '../data_models/marker-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MapService]
  
})
export class AppComponent implements OnInit {
  // Title app
  title = 'App-Maps';

  // MapBox
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  
  // Position initial Mexico city
  lat = 19.42847;
  lng = -99.12766;

  // class marker and element
  // marker:  Markers[];
  element: any;
  

  // constructor (private mapService: MapService) {
  //  let markers = this.mapService.getMarkers();
  // } 
    
  ngOnInit() {

    // initializing mapbox with token
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 10,
        center: [this.lng, this.lat]
      });

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    // Add first marker
    let marker = new mapboxgl.Marker(this.element)
    .setLngLat({
      
      lat: 19.42847,
      lng: -99.12766
    })
    .addTo(this.map)  

    // Add Others Markers
    // this.element = document.createElement('div')
    // this.element.className = 'marker'
    // this.element.addEventListener('markerClick', ()=> {
    //   window.alert('diste click!!')
    // })

    // this.map.on('click', function(e) {
    //   var features = this.map.queryRenderedFeatures(e.point, {
    //     markers: ['layer-name-here'] 
       
    //    } ); 
    //    if (!features.length) { 
    //      return; 
    //     } 
    //   var feature = features[0];
    //   var popup = new (mapboxgl as typeof mapboxgl).Popup( { 
    //     offset: [0, -15] } ) 
    //     .setLngLat(feature.geometry.coordinates) 
    //     .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
    //     .addTo(this.map); } );

  }  
}
