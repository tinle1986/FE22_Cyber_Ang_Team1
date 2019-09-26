import { Component, OnInit,Input,Output } from '@angular/core';
import { Router} from '@angular/router'
import { EventEmitter } from '@angular/core';
import { ShareDataService } from 'src/app/shared/sharing-datas/share-data.service';

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

  constructor(private sharedata :ShareDataService) { }

  ngOnInit() {
   
    
    
    
  }
  idTabContents(){
    this.eventTabs.emit(this.i);
    this.eventNameCinema.emit(this.cinema.maHeThongRap);
    this.sharedata.sharingInforRapChieu(this.cinema);
  }

}
