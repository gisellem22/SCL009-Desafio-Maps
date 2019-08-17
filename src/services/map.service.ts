import { Injectable } from '@angular/core';
// Class
import { Init } from '../data_models/init-markers';

@Injectable({
  providedIn: 'root'
})

export class MapService extends Init {
  
  constructor () {
    // this.getMarkers();
    super();
    console.log('Servicio de marcadores iniciando...');

    this.load();
  }
  
  getMarkers(){
    let markers = JSON.parse(localStorage.getItem('markers'));
    console.log('Servicio de marcadores leyendo dataJSON: '+ markers);
  }
}
