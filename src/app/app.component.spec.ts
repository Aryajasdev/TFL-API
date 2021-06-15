import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { of, timer } from 'rxjs';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TestStopPoints } from './services/test-data';
import { TflApiService, TOWER_HILL_UNDERGROUND_NAPTAN_ID} from './services/tfl-api.service';
import { TrainsComponent } from './Trains/trains.component';

describe('AppComponent', () => {  
  let app: AppComponent;  
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  let tflService: TflApiService;  
 
  beforeEach(async () => {  
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        TrainsComponent
      ],
      providers:[TflApiService],
    }).compileComponents()
    .then(()=>{
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;    
      tflService = TestBed.inject(TflApiService);
      app.noOfRecords=3; 
    });
  });

  it('should create the app component', () => {    
    expect(app).toBeTruthy();    
  });  

  it('should call service and splid data into east and west', () => { 
    spyOn(tflService, 'getStopPointArrivals').and.returnValues(timer(1,3000).pipe(tap => of(TestStopPoints)));  
    app.ngOnInit();
    expect(app.stopPoints.Eastbound.length).toBe(4);
    expect(app.stopPoints.Westbound.length).toBe(4);  
    
  }); 
  
  it('should call take top 3 trains from data', () => {
    spyOn(tflService, 'getStopPointArrivals').and.returnValues(timer(1,3000).pipe(tap => of(TestStopPoints)));  
    app.ngOnInit();
    let noofrecords:number = 3;
    app.onShowTop(noofrecords.toString());
    expect(app.stopPoints.Eastbound.length).toBe(noofrecords);
    expect(app.stopPoints.Westbound.length).toBe(noofrecords);   
  }); 
});
