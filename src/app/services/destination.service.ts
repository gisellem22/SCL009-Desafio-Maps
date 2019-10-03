import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  destination: string;
  public getDestinationSubject = new Subject<string>();
  public getDestinationObservable = this.getDestinationSubject.asObservable();

  constructor() { }

  getDestination(direction: string) {
    this.destination = direction;
    this.getDestinationSubject.next(direction);
  }
}
