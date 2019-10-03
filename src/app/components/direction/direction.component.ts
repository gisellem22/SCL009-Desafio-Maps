import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DestinationService } from 'src/app/services/destination.service';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {

  constructor(private destinationService: DestinationService, private router: Router) { }

  ngOnInit() {
  }
  getDetails(direction:string) {
    this.destinationService.getDestination(direction)
    this.router.navigate(['/details']);
  }
}
