import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 19.42847;
  lng = -99.12766;

  constructor() { }

  ngOnInit() {
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
      this.map = new (mapboxgl as typeof mapboxgl).Map({
        container: 'map',
        style: this.style,
        zoom: 1,
        center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new (mapboxgl as typeof mapboxgl).NavigationControl());
  }
}