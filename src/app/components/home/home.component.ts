import { Component, OnInit } from '@angular/core';
import { DestinationService } from 'src/app/services/destination.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(private destinationService: DestinationService, private router: Router) { }

  ngOnInit() {
  }

  uberGo(direction:string) {
    console.log(direction)
    this.destinationService.getDestination(direction);
    this.router.navigate(['/details']);
  }
}
