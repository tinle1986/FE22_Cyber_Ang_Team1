import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cinemadays',
  templateUrl: './cinemadays.component.html',
  styleUrls: ['./cinemadays.component.scss']
})
export class CinemadaysComponent implements OnInit {
  @Input() cinemadays:any;
  @Input() i:any;
  @Output() event= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  InforTabContents(){
    this.event.emit({arr:this.cinemadays.lichChieuofFilm,index:this.i});

  }



}
