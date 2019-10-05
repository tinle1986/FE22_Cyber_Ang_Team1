import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from 'src/app/common/services/dataservice.service';
import { ShareDataService } from 'src/app/shared/sharing-datas/share-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-datve',
  templateUrl: './datve.component.html',
  styleUrls: ['./datve.component.scss']
})
export class DatveComponent implements OnInit {
  // coinwallet: string[] = ['01. CHỌN LOẠI VÉ','02. CHỌN GHẾ & THANH TOÁN','03. KẾT QUẢ ĐẶT VÉ'];
  // selectedwallet = this.coinwallet[0];

  iDfilm: any;
  maLC: number;
  nameFilm: any;
  idRap: any;

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

  status: boolean = false;

  lichChieuofFilm: any;
  groupFind: any;

  groupCinema: any[] = new Array();
  thongTinFLC: any;
  formatGheArray: any[] = new Array();
  ghePost: any;







  constructor(private actiRoute: ActivatedRoute, private dataser: DataserviceService, private sharedatafilm: ShareDataService, private router: Router) { }
  handler: any = null;


  ngOnInit() {

    // this.getInforFilmfromdatashare();
    this.getParamsUrl();
    this.inforCinema();
    // this.showCinema();
    // this.getInforFilmfromdatashare();
    this.getInforFilm();
    this.getInformationFilm();
    this.getLichChieu();
    this.loadStripe();
  }

  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
  }
  pay(amount) {
    const user = localStorage.getItem('localUser');
    if (user) {
      var handler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
        locale: 'auto',
        token: function (token: any) {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
          console.log(token);
          alert('Token Created!!');
          localStorage.setItem("stripe", JSON.stringify(token));
        }
      });
      handler.open({
        name: 'Thanh Toán Online',
        description: `Vé Thường:${this.slgt} - Vé Vip:${this.slgv}`,
        amount: Math.ceil(amount / 235),
      });
      setTimeout(() => {
        const tokencheck = localStorage.getItem('stripe');
        if (tokencheck) {
          this.dataser.post('QuanLyDatVe/DatVe', this.ghePost)
            .subscribe((data: any) => {
              console.log(data);
              alert('Book Ticket Success')
            })
        }
      }, 10000);

    }
    else {
      this.router.navigateByUrl('');
      alert('Please! Login For Book Ticket');
    }
  }
  getInformationFilm() {
    const uri = `QuanLyPhim/LayThongTinPhim?MaPhim=${this.iDfilm}`;
    this.dataser.get(uri).subscribe((data: any) => {
      if (data) {
        this.lichChieuofFilm = data.lichChieu;
      }
      var groups = this.lichChieuofFilm.reduce((obj, item) => {
        const marap = item.thongTinRap.maHeThongRap;
        obj[marap] = obj[marap] || [];
        obj[marap].push(item);
        return obj;
      }, {});
      this.groupCinema = Object.keys(groups).map(function (key) {
        return { Cinema: key, DSLCP: groups[key] };
      });
      for (let i = 0; i < this.groupCinema.length; i++) {
        if (this.groupCinema[i].Cinema == this.idRap) {
          this.groupFind = this.groupCinema[i].DSLCP;
        }
      }
      for (let item of this.groupFind) {
        if (item.maLichChieu == this.maLC) {
          this.thongTinFLC = item;
          console.log(this.thongTinFLC);
        }
      }
    });
  }
  inforCinema() {
    const uri = `QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${this.idRap}`;
    this.dataser.get(uri).subscribe((data: any) => {
      if (data != null) {
        console.log(data);
        this.cinema = data;
      }
    });
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
      console.log(data);
      if (data) {
        this.inforFilmandCinema = data;
      }
    });
  }
  getParamsUrl() {
    this.actiRoute.queryParams.subscribe((data: any) => {
      this.iDfilm = data.id;
      this.maLC = data.maLichChieu;
      this.nameFilm = data.tenPhim;
      this.idRap = data.rapChieu;
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
  // booking(objGhe) {
  //   var conVip: boolean = false;
  //   var conNor: boolean = false;
  //   if (objGhe.trangThaiChon) {
  //     this.mangGheDangChon.push(objGhe.ghe);
  //   } else {
  //     let viTri = this.mangGheDangChon.findIndex(item => {
  //       return item.SoGhe === objGhe.ghe.SoGhe;
  //     });
  //     this.mangGheDangChon.splice(viTri, 1);
  //   }
  //   // console.log(this.mangGheDangChon);
  //   const groupve = this.mangGheDangChon.reduce((obj, item) => {
  //     const loaive = item.loaiGhe;
  //     obj[loaive] = obj[loaive] || [];
  //     obj[loaive].push(item);
  //     return obj;
  //   }, {});
  //   this.mangGheDangChonPhanLoai = Object.keys(groupve).map(function (key) {
  //     return { loaive: key, nhomve: groupve[key] };
  //   });
  //   // console.log(this.mangGheDangChonPhanLoai);
  //   if (this.mangGheDangChonPhanLoai[0] && this.mangGheDangChonPhanLoai[0].nhomve.length == this.slgv) {
  //     conVip = true;
  //   }
  //   if (this.mangGheDangChonPhanLoai[1] && this.mangGheDangChonPhanLoai[1].nhomve.length == this.slgt) {
  //     conNor = true;
  //   }
  //   this.cssbtnThanhToan = conVip && conNor;
  //   console.log(this.cssbtnThanhToan);
  // }
  removeActive() {
    $(".btn1").removeClass("active");

  }
  getStatus(status) {
    this.status = status;
  }
  getObjghe(ArrayObjghe) {
    this.formatGheArray = [];
    if (ArrayObjghe) {
      for (let i = 0; i < ArrayObjghe.length; i++) {
        let maGhe = { maGhe: ArrayObjghe[i].maGhe };
        let giaVe = { giaVe: ArrayObjghe[i].giaVe };
        let obj = Object.assign({}, maGhe, giaVe);
        this.formatGheArray.push(obj);
      }
      if (localStorage.getItem("localUser") != null) {
        var LocalUser = JSON.parse(localStorage.getItem("localUser"));
      }
      const datVe = {
        maLichChieu: Number(this.maLC),
        danhSachVe: this.formatGheArray,
        taiKhoanNguoiDung: LocalUser.taiKhoan,
      }
      this.ghePost = datVe;
      console.log(this.ghePost);
    }


  }

}
