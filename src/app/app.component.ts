import { Component, OnDestroy, OnInit } from '@angular/core';
import { TflApiService, TOWER_HILL_UNDERGROUND_NAPTAN_ID } from './services/tfl-api.service';
import * as _ from 'underscore';
import { StopPoints, tflData } from './services/StopPointArrival';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent implements OnInit, OnDestroy { 
  stopPoints: tflData | any;  
  stopPointSubscription!: Subscription;  
  noOfRecords:number=3;
  constructor(private tfl: TflApiService){}

  ngOnInit(){
    this.getStopPoints();
  } 

  getStopPoints(){
    this.stopPointSubscription = this.tfl.getStopPointArrivals(TOWER_HILL_UNDERGROUND_NAPTAN_ID).subscribe(data => { 
      console.log(data);
     this.stopPoints = _.chain(data)
        .sortBy('expectedArrival')
        .groupBy((d:StopPoints) => d.platformName.split('-')[0].trim()) 
        .value();     
    });  
   
  }

  onShowTop(records:string){ 
    this.stopPoints.Eastbound = this.stopPoints.Eastbound.slice(0,parseInt(records));
    this.stopPoints.Westbound = this.stopPoints.Westbound.slice(0, parseInt(records));   
  }  

  ngOnDestroy(){
    if(this.stopPointSubscription){
      this.tfl.stopPolling.unsubscribe();
      this.stopPointSubscription.unsubscribe();   
    }
  }
    
}
