import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {
  @Input() ghe: any;
  @Output() eventDatGhe = new EventEmitter();
  constructor() { }
  trangThaiChon: boolean = false;

  ngOnInit() {

  }
  datGhe() {
    this.trangThaiChon = !this.trangThaiChon;
    const objGhe = {
      trangThaiChon: this.trangThaiChon,
      ghe: this.ghe
    };
    this.eventDatGhe.emit(objGhe);
  }

}
