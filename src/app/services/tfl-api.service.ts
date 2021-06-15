import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, timer, Subject } from 'rxjs';
import {switchMap, share, retry, takeUntil } from 'rxjs/Operators';
import { StopPointArrival } from './StopPointArrival';

export const TOWER_HILL_UNDERGROUND_NAPTAN_ID = '940GZZLUTWH';
const API_URI = 'https://api.tfl.gov.uk';
const APP_ID = '99586b081f574174afdaba830038df19';
const APP_KEY = '99586b081f574174afdaba830038df19';

@Injectable()
export class TflApiService implements OnDestroy {      
    allStopPoints$!: Observable<ReadonlyArray<StopPointArrival>>;
    stopPolling = new Subject();
    
    constructor(private httpClient: HttpClient) { }    

    getStopPointArrivals(naptanId: string): Observable<ReadonlyArray<StopPointArrival>> {
        return timer(1,3000).pipe(
            switchMap(() => this.httpClient.get<ReadonlyArray<StopPointArrival>>(`${API_URI}/StopPoint/${naptanId}/Arrivals`)),
            retry(),
            share(),
            takeUntil(this.stopPolling)); 
    }

    ngOnDestroy(){
        this.stopPolling.next();
    }
}
