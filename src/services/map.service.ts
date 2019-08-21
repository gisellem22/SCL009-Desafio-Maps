import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// Class
import { Markers } from 'src/data_models/marker-model';
// Data
import { markersPoints } from '../data_models/init-markers';

@Injectable({
  providedIn: 'root'
})

export class MapService {
  
  constructor () {
    // this.getMarkers();
    // super();
    // console.log('Servicio de marcadores iniciando...');

    // this.load();
  }
  
  // getMarkers(){
  //   let markers = JSON.parse(localStorage.getItem('markers'));
  //   console.log('Servicio de marcadores leyendo JSON: '+ JSON.stringify(markers));
  // }

 // Function with Observable
 getData(): Observable<any> {
  return of(markersPoints);
}

// Function with Observable
// getMarkers(): Observable<any> {
//   let markers = JSON.parse(localStorage.getItem('markers'));
//   return of(markers);
// }

}
