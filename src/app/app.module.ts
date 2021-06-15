import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TflApiService } from './services/tfl-api.service';
import { SplitPipe } from './pipes/split/split.pipe';
import { HeaderComponent } from './header/header.component';
import { TrainsComponent } from './Trains/trains.component';

@NgModule({
  declarations: [
    AppComponent,
    SplitPipe,     
    HeaderComponent,
    TrainsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TflApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
