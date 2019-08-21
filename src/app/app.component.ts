import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../environments/environment';
// MapBox
import * as mapboxgl from 'mapbox-gl';
// Service
import { MapService } from './../services/map.service';
import { Button } from 'protractor';
import { markersPoints } from 'src/data_models/init-markers';
// Class
// import { Markers } from '../data_models/marker-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MapService]
  
})
export class AppComponent implements OnInit, AfterViewInit{
  // @ViewChild('coordinadas') coordinadas: ElementRef;

  // Title app
  title = 'App-Maps';

  // MapBox
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  
  // Position initial MexicoCity
  lat = 19.42847;
  lng = -99.12766;

  // class marker, element and others
  list: any;  //list data.
  marker: any; //store
  element: any;
  item:any;
  coordinates: any;
  arr: any; //array with lat and lng  
  markers: any;
  

  constructor (private mapService: MapService) { 
  } 
  
  // Call Observable with Subscribe
  getMarkers(): void {
    this.mapService.getData()
      .subscribe(markersPoints => this.list = markersPoints);
  }

  ngOnInit() {
    // Initializing mapbox with token
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 3,
        center: [this.lng, this.lat]
      });

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    // Add first marker in MexiciCity
    let marker = new mapboxgl.Marker(this.element)
    .setLngLat({
      lat: 19.42847,
      lng: -99.12766
    })
    .addTo(this.map)

  }  
    
  ngAfterViewInit(){
    //Call service to print markers
    let list = this.mapService.getData();
    console.log("LISTA:", list);

    list.forEach(element => {
      let item = element;
      console.log("ELEMENT:", element);

      item.forEach(e => {
        let coordinates = e.Coordinates;  
        let arr:[number, number] = [coordinates.lng, coordinates.lat]
        // console.log(arr);
        let name = e.Name;
        // let address = e.Address;

        // Option for Markers in map
        let marker = new mapboxgl.Marker({
          draggable: true  
        })
        .setLngLat(arr) 
        .addTo(this.map);
        console.log(arr);
        
        // let monument = arr;
        // let map = new mapboxgl.Map({
        // container: 'map',
        // style: 'mapbox://styles/mapbox/light-v10',
        // center: monument,
        // zoom: 15
        // });
         
        // // create the popup
        // let popup = new mapboxgl.Popup({ offset: 25 })
        // .setText('Construction on the Washington Monument began in 1848.');
         
        // // create DOM element for the marker
        // let el = document.createElement('div');
        // el.id = 'marker';
         
        // // create the marker
        // new mapboxgl.Marker(el)
        // .setLngLat(monument)
        // .setPopup(popup) // sets a popup on this marker
        // .addTo(map);
      });
      });
  }
}
    