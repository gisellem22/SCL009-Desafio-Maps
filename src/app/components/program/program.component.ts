import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DestinationService } from 'src/app/services/destination.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  initialDate: any;
  initialTime: any;

  fromDate(event: any) {
    this.initialDate = event.target.value;
  }
  fromTime(event: any) {
    this.initialTime = event.target.value;
  }
  constructor(private destinationService: DestinationService, private router: Router) { }

  ngOnInit() {
  }
  getDirection() {
    this.destinationService.getDate(this.initialDate);
    this.destinationService.getTime(this.initialTime);
    this.router.navigate(['/direction']);
  }
}
