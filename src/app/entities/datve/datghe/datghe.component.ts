import { Component, OnInit, Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datghe',
  templateUrl: './datghe.component.html',
  styleUrls: ['./datghe.component.scss']
})
export class DatgheComponent implements OnInit {
  @Input() informLC: any;
  @Input() slgv: any;
  @Input() slgt: any; 
  @Output() status= new EventEmitter();
  mangGheDangChon: any[] = new Array();
  mangGheDangChonPhanLoai: any[] = new Array();
  cssbtnThanhToan: boolean;
  constructor() { }

  ngOnInit() {
    console.log(this.slgt);
    console.log(this.slgv);
  }
  booking(objGhe) {

    var conVip: boolean = false;
    var conNor: boolean = false;
    if (objGhe.trangThaiChon) {
      this.mangGheDangChon.push(objGhe.ghe);
    } else {
      let viTri = this.mangGheDangChon.findIndex(item => {
        return item.SoGhe === objGhe.ghe.SoGhe;
      });
      this.mangGheDangChon.splice(viTri, 1);
    }
    // console.log(this.mangGheDangChon);
    const groupve = this.mangGheDangChon.reduce((obj, item) => {
      const loaive = item.loaiGhe;
      obj[loaive] = obj[loaive] || [];
      obj[loaive].push(item);
      return obj;
    }, {});
    this.mangGheDangChonPhanLoai = Object.keys(groupve).map(function (key) {
      return { loaive: key, nhomve: groupve[key] };
    });
    // console.log(this.mangGheDangChonPhanLoai);
    if (this.slgt * this.slgv == 0) {
      if (this.slgt == 0) {
        if (this.mangGheDangChonPhanLoai[0]) {
          if (this.mangGheDangChonPhanLoai[0].nhomve.length == this.slgv) {
            this.cssbtnThanhToan = true;
          }
          else {
            this.cssbtnThanhToan = false;
          }
        }
      }
      else {
        if (this.mangGheDangChonPhanLoai[0]) {
          if (this.mangGheDangChonPhanLoai[0].nhomve.length == this.slgt) {
            this.cssbtnThanhToan = true;
          }
          else {
            this.cssbtnThanhToan = false;
          }
        }
      }
    }
    else {
     
      if (this.mangGheDangChonPhanLoai[0] && this.mangGheDangChonPhanLoai[0].nhomve.length == this.slgv) {
        conVip = true;
      }
      if (this.mangGheDangChonPhanLoai[1] && this.mangGheDangChonPhanLoai[1].nhomve.length == this.slgt) {
        conNor = true;
      }
      
      this.cssbtnThanhToan = conVip && conNor;
    }
    console.log(this.cssbtnThanhToan);
    this.status.emit(this.cssbtnThanhToan);
  }

}
