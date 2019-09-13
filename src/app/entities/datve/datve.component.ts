import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from 'src/app/common/services/dataservice.service';
import { ShareDataService } from 'src/app/shared/sharing-datas/share-data.service';

@Component({
  selector: 'app-datve',
  templateUrl: './datve.component.html',
  styleUrls: ['./datve.component.scss']
})
export class DatveComponent implements OnInit {
  iDfilm: any;
  maLC: any;
  nameFilm: any;

  informLC: any;
  inforFilm: any;
  inforFilmandCinema: any;
  cinema: any = {};
  photo: any;

  groupsGhe: any[];

  counterValue = 0;
  money: number = 0;
  slgt: number = 0;
  slgv: number = 0;
  moneynormal: number=0;
  moneyvip:number=0;


  constructor(private actiRoute: ActivatedRoute, private dataser: DataserviceService, private sharedatafilm: ShareDataService) { }


  ngOnInit() {
    this.showCinema(); 
    this.getInforFilmfromdatashare();
    this.getParamsUrl();
    this.getInforFilm();
    this.getLichChieu();
   
  }
 
 
  getInforFilm() {
    const uri = `QuanLyPhim/LayDanhSachPhim?maNhom=GP06&tenPhim=${this.nameFilm}`;
    this.dataser.get(uri).subscribe((data: any) => {
      this.inforFilm = data;
      this.photo = this.inforFilm[0].hinhAnh;
      console.log(data);

    });
  }
  getInforFilmfromdatashare() {
    this.sharedatafilm.shareinforMovie.subscribe((data: any) => {
      console.log(data);
      this.inforFilmandCinema = data;
    });
  }
  getParamsUrl() {
    this.actiRoute.queryParams.subscribe((data: any) => {
      this.iDfilm = data.id;
      this.maLC = data.maLichChieu;
      this.nameFilm = data.tenPhim;
      console.log(this.maLC, this.nameFilm);
    });
  }
  getLichChieu() {
    const uri = `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${this.maLC}`;
    this.dataser.get(uri).subscribe((data: any) => {
      this.informLC = data;
      console.log(data);
      const group = data.danhSachGhe.reduce((obj, item) => {
        const loaiGhe = item.loaiGhe;
        obj[loaiGhe] = obj[loaiGhe] || [];
        obj[loaiGhe].push(item);
        return obj;
      }, {});
      this.groupsGhe = Object.keys(group).map(function (key) {
        return { loaiGhe: key, groupCinema: group[key] };
      });
      console.log(this.groupsGhe);
    });
  }
  showCinema() {
    this.sharedatafilm.shareRapChieu.subscribe((data: any) => {
      this.cinema = data;
      console.log(data);
    })
  }
  getMoney(e) {
    if (e.loaiGhe == 'Thuong') {
      this.slgt = e.soluong;
      this.moneynormal = e.money;

    }
    else {
      this.slgv = e.soluong;
      this.moneyvip = e.money;
    }
    // this.money=this.slgt*this.moneynormal+this.slgv*this.moneyvip;
  }
  booking(item){
    console.log(item);
    
  }
  
}
