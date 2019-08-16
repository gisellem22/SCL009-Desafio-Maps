import { Injectable } from '@angular/core';
import { Init } from '../init-markers';

@Injectable({
  providedIn: 'root'
})

export class MapService extends Init {
  constructor() {
    super();
    console.log('Servicio de marcadores iniciando...');
    this.load();
  }
  obtenerMarcadores(){
    let markers = JSON.parse(localStorage.getItem('markers'));
  }
}
