import { MapService } from './../../services/map.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [MapService]
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';

  // Position initial
  lat = 19.42847;
  lng = -99.12766;

  // class marker
   Name?:string;
   Address: string;
   Coordinates: number;
   Arrastrable: boolean;

  // Markers
  // markers= type:any;
  // markers: marker[];

  // constructor(private mapService:MapService){
  //   this.markers = this.mapService.obtenerMarcadores();
  //  } 

   ngOnInit() {
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
      this.map = new (mapboxgl as typeof mapboxgl).Map({
        container: 'map',
        style: this.style,
        zoom: 10,
        center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new (mapboxgl as typeof mapboxgl).NavigationControl());

    // Marker
    // let element = document.createElement('div')
    // element.className = 'marker'
    // element.addEventListener('click', ()=>{
    //   window.alert('diste click!!')
    // })

    // let marker = new mapboxgl.Marker(element)
    // .setLngLat({
    //   lat: 19.42847,
    //   lng: -99.12766
    // })

    // .addTo(this.map)
  }
}
