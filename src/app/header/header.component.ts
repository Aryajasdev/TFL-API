import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() OnRefresh = new EventEmitter();
  @Input("No-Of-Trains") NoOfTrains: string | any;
  constructor() { }

  ngOnInit(): void {
  }

  Refresh(value:string){
    this.OnRefresh.emit(value);
  }

}
