export class Markers {
    Name?:string;
    Address: string;
    Arrastrable: boolean;
    Coordinates: any;
    lat: any;
    lng: any;
    
}

export interface GeoJSON {
    type: 'FeatureCollection',
    features: [{ type: 'Feature',  geometry: { type: 'Point',  coordinates: Coordinates },
      properties: { title: 'Mapbox', description: 'Mexico' }
    }]
}