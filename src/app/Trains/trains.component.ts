import { Component, OnInit, Input } from '@angular/core';
import { StopPoints } from '../services/StopPointArrival';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.scss']
})
export class TrainsComponent implements OnInit {
  @Input("Trains") Trains: StopPoints[] | any;  
  @Input("TrainType") TrainType: string | any;  
  constructor() {    
  }

  ngOnInit(): void {      
  }

}
