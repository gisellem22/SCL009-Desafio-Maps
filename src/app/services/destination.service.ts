import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  date: any;
  public getDateSubject = new Subject<any>();
  public getDateObservable = this.getDateSubject.asObservable();
  time: any;
  public getTimeSubject = new Subject<any>();
  public getTimeObservable = this.getTimeSubject.asObservable();
  direction: any;
  public getDirectionSubject = new Subject<any>();
  public getDirectionObservable = this.getDirectionSubject.asObservable();
  constructor() { }

  getDate(date: any) {
    this.date = date;
    this.getDateSubject.next(date);
  }
  getTime(time: any) {
    this.time = time;
    this.getTimeSubject.next(time);
  }
  getDirection(direction: any) {
    this.direction = direction;
    this.getDirectionSubject.next(direction);
  }
}
