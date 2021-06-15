import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainsComponent } from './trains.component';
import { TestStopPoints } from '../services/test-data';
import { TflApiService, TOWER_HILL_UNDERGROUND_NAPTAN_ID } from '../services/tfl-api.service';

describe('TrainsComponent', () => { 
  let component: TrainsComponent;
  let fixture: ComponentFixture<TrainsComponent>;
  beforeEach(async () => {  
    await TestBed.configureTestingModule({
      declarations: [
        TrainsComponent
      ],
      providers:[TflApiService]     
    }).compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(TrainsComponent);
      component = fixture.componentInstance;
      component.TrainType = 'EastBound';
      component.Trains = TestStopPoints;    
    }) 
  });

  it('should create the trains component', () => {
    const fixture = TestBed.createComponent(TrainsComponent);    
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
