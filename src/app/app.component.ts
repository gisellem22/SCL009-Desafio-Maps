import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
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
export class AppComponent implements OnInit, AfterViewInit{
  // @ViewChild('coordinadas') coordinadas: ElementRef;

  // Title app
  title = 'App-Maps';

  // MapBox
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  
  // Position initial Mexico city
  lat = 19.42847;
  lng = -99.12766;

  // class marker and element
  // markers:  Markers[];
  element: any;
  coordinates: any;
  markers: any;


  constructor (private mapService: MapService) {
   let markers = this.mapService.getMarkers();
  } 
    
  ngOnInit() {
    // initializing mapbox with token
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 3,
        center: [this.lng, this.lat]
      });

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    // Add first marker
    // let element = document.createElement('div')
    let marker = new mapboxgl.Marker(this.element)
    .setLngLat({
      lat: 19.42847,
      lng: -99.12766
    })
    .addTo(this.map)

  }
    
  ngAfterViewInit(){

    this.map.on('load', function () {
 
      this.addLayer({
      "id": "points",
      "type": "symbol",
      "source": {
      "type": "geojson",
      "data": {
      "type": "FeatureCollection",
      "features": [{
      "type": "Feature",
      "geometry": {
      "type": "Point",
      "coordinates": [-77.03238901390978, 38.913188059745586]
      },
      "properties": {
      "title": "Mapbox DC",
      "icon": "harbor"
      }
      }, {
      "type": "Feature",
      "geometry": {
      "type": "Point",
      "coordinates": [-122.414, 37.776]
      },
      "properties": {
      "title": "Mapbox SF",
      "icon": "harbor"
      }
      }]
      }
      },
      "layout": {
      "icon-image": "{icon}-15",
      "text-field": "{title}",
      "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      "text-offset": [0, 0.6],
      "text-anchor": "top"
      }
      });
      });

  // this.map.on('load', function () {
    // let layers = this.getStyle().layers;
    //   // Find the index of the first symbol layer in the map style
    //   let firstSymbolId;
    //   for (var i = 0; i < layers.length; i++) {
    //     if (layers[i].type === 'symbol') {
    //       firstSymbolId = layers[i].id;
    //       break;
    //     }
    //   }
    // this.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png',
    //   function(error, image) {
    //     if (error) throw error;
    // this.addImage('cat', image);
    
    // this.addLayer({
    // 'id': 'urban-areas-fill',
    // 'type': 'fill',
    // 'source': {
    // 'type': 'geojson',
    // 'data': 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson'
    // },
    // 'layout': {
    //   "icon-image": "cat",
    // "icon-size": 0.25
    // },
    // 'paint': {
    // 'fill-color': '#f08',
    // 'fill-opacity': 0.4
    // }

    // }, firstSymbolId);
    // });
  // });

 
  
// MapBox
// map: mapboxgl.Map;
// addLayer: mapboxgl.addLayer;
// style = 'mapbox://styles/mapbox/streets-v11';

// initializing mapbox with token
// (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
// this.map = new mapboxgl.Map({
//   container: 'map',
//   style: this.style,
//   zoom: 6,
//   center: [this.lng, this.lat]
// });

// Add map controls
// this.map.addControl(new mapboxgl.NavigationControl());




  // this.map.on('load', function () {  
  //   let layers = this.map.getStyle().layers;
  //   // Find the index of the first symbol layer in the map style
  //   let firstSymbolId;
  //   for (var i = 0; i < layers.length; i++) {
  //     if (layers[i].type === 'symbol') {
  //       firstSymbolId = layers[i].id;
  //       break;
  //     }
  //   }
    
  //   this.map.addLayer({
  //     'id': 'urban-areas-fill',
  //     'type': 'fill',
  //     'source': {
  //     'type': 'geojson',
  //     'data': 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson'
  //   },
  //     'layout': {},
  //     'paint': {
  //     'fill-color': '#f08',
  //     'fill-opacity': 0.4
  //   }
    
  //   }, firstSymbolId);

  // });   
    
    
    
    
    
    
    // let stores_url = "https://raw.githubusercontent.com/digital-generation/generation-take-home-intern/master/src/store_directory.json"
    // console.log(stores_url);
    // fetch(stores_url)
    // .then(
    //   res => res.json()
    //   ).then(
    //     data => {
          // console.log(data);
          // data.forEach(element => {
            // console.log(element.Coordinates);
            

            // let mark = document.createElement('div')
            // this.element.className = 'coordinate'
      //       let coordinates = element.Coordinates;
      //       let lat = coordinates.lat;
      //       let lng = coordinates.lng;

      //       console.log(coordinates.lat);
      //       console.log(coordinates.lng);

      //       let markers = new mapboxgl.Marker(this.coordinates)
      //       .setLngLat({
      //       lat: this.lat,
      //       lng: this.lng
      //       }).addTo(this.map)
      //       console.log(markers);
      //     });
      //   }
      // )


    // this.coordinadas.nativeElement.innerHTML = 'other';

    // Add Others Markers
    
   
      // Add Others Markers
    // this.element = document.createElement('div')
    // this.element.className = 'marker'
    // this.element.addEventListener('Click', ()=> {
    //   window.alert('diste click!!')
    // })

    //      this.map.on('click', function(e) {
    //      var features = this.map.queryRenderedFeatures(e.point, {
    //      markers: ['direction'] 
       
    //      } ); 
    //      if (!features.length) { 
    //      return; 
    //     } 
    //     let feature = features[0];
    //     let popup = new mapboxgl.Popup( { 
    //     offset: [0, -15] } ) 
    //     .setLngLat(feature.geometry.coordinates) 
    //     .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
    //     .addTo(this.map); } );
  }
}
