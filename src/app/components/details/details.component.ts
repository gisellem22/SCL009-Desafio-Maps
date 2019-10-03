import { Component, OnInit } from '@angular/core';
import { DestinationService } from 'src/app/services/destination.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  date: any;
  time: any;
  direction: any;
  constructor(private destinationService: DestinationService) { 
    this.date = destinationService.date;
    this.time = destinationService.time; 
    this.direction = destinationService.direction;
  }

  ngOnInit() {
  }

}
