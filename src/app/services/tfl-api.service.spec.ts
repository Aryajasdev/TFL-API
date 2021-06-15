import { fakeAsync, tick } from "@angular/core/testing";
import { TflApiService, TOWER_HILL_UNDERGROUND_NAPTAN_ID } from "./tfl-api.service";
import { TestStopPoints } from "./test-data";
import { asyncData } from "./async-observable-helpers";

const API_URI = 'https://api.tfl.gov.uk';

describe('TFL API Service', () => {
    let tflService: TflApiService;
    let httpClientSpy: { get: jasmine.Spy };

    beforeEach(async ()=> {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        tflService = new TflApiService(httpClientSpy as any);
    });

    it('should be created', () => {
        expect(tflService).toBeTruthy();
    });
    

    it('Get StepPoint arrivals should return results', fakeAsync(() => {
        let stopPointsData:any;
        httpClientSpy.get.and.returnValues(asyncData(TestStopPoints));
       
        const subs = tflService.getStopPointArrivals(TOWER_HILL_UNDERGROUND_NAPTAN_ID)
        .subscribe(data => {            
            stopPointsData = data;             
        });
        
        tick(3000);        
        expect(stopPointsData).toEqual(TestStopPoints);
        subs.unsubscribe();    
        expect(httpClientSpy.get.calls.count()).toBe(1)
  }));

});

