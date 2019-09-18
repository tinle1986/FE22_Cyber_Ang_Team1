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
  moneynormal: number = 0;
  moneyvip: number = 0;

  mangGheDangChon: any[] = new Array();
  mangGheDangChonPhanLoai: any[] = new Array();

  cssbtnThanhToan: boolean = false;





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
      // console.log(data);

    });
  }
  getInforFilmfromdatashare() {
    this.sharedatafilm.shareinforMovie.subscribe((data: any) => {
      // console.log(data);
      this.inforFilmandCinema = data;
    });
  }
  getParamsUrl() {
    this.actiRoute.queryParams.subscribe((data: any) => {
      this.iDfilm = data.id;
      this.maLC = data.maLichChieu;
      this.nameFilm = data.tenPhim;
      // console.log(this.maLC, this.nameFilm);
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
      // console.log(this.groupsGhe);
    });
  }
  showCinema() {
    this.sharedatafilm.shareRapChieu.subscribe((data: any) => {
      this.cinema = data;
      // console.log(data);
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
    if (this.mangGheDangChonPhanLoai[0] && this.mangGheDangChonPhanLoai[0].nhomve.length == this.slgv) {
      conVip = true;
    }
    if (this.mangGheDangChonPhanLoai[1] && this.mangGheDangChonPhanLoai[1].nhomve.length == this.slgt) {
      conNor = true;
    }
    this.cssbtnThanhToan = conVip && conNor;
    console.log(this.cssbtnThanhToan);
  }
}
