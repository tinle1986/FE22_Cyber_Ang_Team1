import { Component, OnInit,Input,Output } from '@angular/core';

import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {
  @Input() cinema:any;
  @Input() i:any;
  @Output() eventTabs= new EventEmitter();
  @Output() eventNameCinema= new EventEmitter();

  constructor() { }

  ngOnInit() {
   
    
  }
  idTabContents(){
    this.eventTabs.emit(this.i);
    this.eventNameCinema.emit(this.cinema.maHeThongRap);
  }

}
