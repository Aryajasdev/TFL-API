import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let app: HeaderComponent;  
  let fixture: ComponentFixture<HeaderComponent>;
  let el: DebugElement;

  beforeEach(async () => {  
    await TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],     
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(HeaderComponent);      
      app = fixture.componentInstance;  
      app.NoOfTrains = '3';
      el = fixture.debugElement;
    });
  });

  it('should create the app', () => { 
    app.NoOfTrains = '3';   
    expect(app).toBeTruthy();    
  });
});
