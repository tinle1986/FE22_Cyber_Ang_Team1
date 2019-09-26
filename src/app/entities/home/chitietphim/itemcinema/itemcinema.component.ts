import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { ShareDataService } from 'src/app/shared/sharing-datas/share-data.service';
@Component({
  selector: 'app-itemcinema',
  templateUrl: './itemcinema.component.html',
  styleUrls: ['./itemcinema.component.scss']
})
export class ItemcinemaComponent implements OnInit {
  @Input() itemcinema: any;
  @Input() hethongrap: any
  @Input() cinema:any;
  CumRap: any = {};
  constructor(private router: Router, private sharedata: ShareDataService) { }
  mangchuan: any = [];

  ngOnInit() {
    console.log(this.cinema);

    this.getGioChieuChuan();
    this.getCumRap();
  }
  getCumRap() {
    this.CumRap = this.hethongrap.filter((item) => {
      return this.itemcinema.maCumRap === item.maCumRap
    });
  }
  getGioChieuChuan() {
    const today = new Date();
    // var time = today.getHours() + ":" + today.getMinutes();
    var time = today.valueOf();
    console.log(time);


    console.log(new Date(new Date().toDateString() + ' ' + '10:55'));

    console.log(this.itemcinema.lichChieuofFilm);
    for (let i = 0; i < this.itemcinema.lichChieuofFilm.length; i++) {
      let timecinema = this.itemcinema.lichChieuofFilm[i].ngayChieuGioChieu.split('T')[1];
      let time1 = new Date(new Date().toDateString() + ' ' + timecinema);
      let timenow = time1.valueOf();
      // console.log(timenow);
      if (timenow >= time) {
        this.mangchuan.push(this.itemcinema.lichChieuofFilm[i]);
      }
      // console.log(this.mangchuan);
    }
  }
  tConvert2412(time) {
    var ts = time;
    var H = +ts.substr(0, 2);
    var h: any = (H % 12) || 12;
    h = (h < 10) ? ("0" + h) : h;  // leading 0 at the left for 1 digit hours
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts.substr(2, 3) + ampm;
    return ts;
  }
  tConvert1224(time12h) {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}`;
  }
  datve(item) {
    console.log(item);
    this.sharedata.sharingInforMovie(item);
    this.router.navigate(["/book-ticket"], { queryParams: { id: item.maPhim, maLichChieu: item.maLichChieu, tenPhim: item.tenPhim,rapChieu:this.cinema} });
  }
}
