import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageListFilmService } from 'src/app/common/services/manage-list-film.service';
import { DataserviceService } from 'src/app/common/services/dataservice.service';
import { StarRatingComponent } from 'ng-starrating';
@Component({
  selector: 'app-chitietphim',
  templateUrl: './chitietphim.component.html',
  styleUrls: ['./chitietphim.component.scss']
})
export class ChitietphimComponent implements OnInit {
  iDfilm: any;
  namefilm: any;
  film: any;
  cinema: any = [];
  cinemaplay: any = [];
  inforLC: any = {};
  idTrailer: string = '';
  videoUrl: SafeResourceUrl;
  cinemamainplay: any = [];
  ratenow: number = 5;

  // Xử Lý Ngày Tháng Năm
  indexTabs: any;
  indexTabs2: any;
  cinemaName: string = 'BHDStar';
  lichChieuofFilm: any = [];
  // filmsSameDay: any = [];
  listFilmOfCinema = [];
  group_to_values: any = [];
  groups: any = [];
  groupsofcinemadays: any = [];
  groupshowcinemaday: any = [];
  thongtincumrap: any = [];
  



  constructor(private actiRoute: ActivatedRoute, private mlfs: ManageListFilmService, private dataser: DataserviceService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getParamsUrl();
    this.getDetailMovie();
    this.getInforLichChieuPhim();
    this.getInformationFilm();
  }
  public getSantizeUrl() {
    return this.sanitizer.bypassSecurityTrustUrl(this.idTrailer);
  }

  getParamsUrl() {
    this.actiRoute.queryParams.subscribe((data: any) => {
      this.iDfilm = data.id;
      this.namefilm = data.tenPhim;
    });
  }
  getDetailMovie() {
    this.mlfs.getInforFilm(this.iDfilm).subscribe((data: any) => {
      this.film = data;
      // console.log(data);
    })
  }

  getInforLichChieuPhim() {
    const uri = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${this.iDfilm}`;
    this.dataser.get(uri).subscribe((data: any) => {
      this.inforLC = data;
      console.log(data);
      this.cinemamainplay = data['heThongRapChieu'];
      this.getRapPhim();
      this.idTrailer = "https://www.youtube.com/embed/" + this.getId(data.trailer);
      if (this.sanitizer.bypassSecurityTrustResourceUrl(this.idTrailer)!=null) {
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.idTrailer);
      }
    });
  }

  getRapPhim() {
    const uri = `QuanLyRap/LayThongTinHeThongRap`;
    this.dataser.get(uri).subscribe((data: any) => {
      this.cinema = data;
      this.cinemaplay = this.cinema.filter((item1) => {
        return this.cinemamainplay.find((item2) => item2.maHeThongRap === item1.maHeThongRap)
      });
    });

  }

  getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    var result = '';
    if (match && match[2].length == 11) {
      result = match[2];
      return result;
    } else {
      return 'error';
    }
  }
  getTabs(index) {
    this.indexTabs = index;
  }

  getInformationFilm() {
    const uri = `QuanLyPhim/LayThongTinPhim?MaPhim=${this.iDfilm}`;
    this.dataser.get(uri).subscribe((data: any) => {
      this.lichChieuofFilm = data.lichChieu;
      // const group_to_values=this.lichChieuofFilm.reduce((obj,item)=>{
      //   const date=item.ngayChieuGioChieu.split('T')[0];
      //   obj[date]=obj[date] ||[];
      //   obj[date].push(item);
      //   return obj
      // },{});
      // console.log(group_to_values);
      // this.groups=Object.keys(group_to_values).map(function(key){
      //   return {ngayChieuGioChieu:key,lichChieuofFilm:group_to_values[key]};
      // })
      // console.log(this.groups); 
      this.groups = this.lichChieuofFilm.reduce((obj, item) => {
        const marap = item.thongTinRap.maHeThongRap;
        obj[marap] = obj[marap] || [];
        obj[marap].push(item);
        return obj;
      }, {});
      console.log(this.groups);
    });
  }
  getNameCinemaFromCinema(nameCinema) {
    const group_to_cinema_day = this.groups[nameCinema].reduce((obj, item) => {
      const date = item.ngayChieuGioChieu.split('T')[0];
      obj[date] = obj[date] || [];
      obj[date].push(item);
      return obj
    }, {});
    this.groupsofcinemadays = Object.keys(group_to_cinema_day).map(function (key) {
      return { ngayChieuGioChieu: key, lichChieuofFilm: group_to_cinema_day[key] };
    });
    // console.log(this.groupsofcinemadays);
    // for (const key in group_to_cinema_day) {
    //   if (group_to_cinema_day.hasOwnProperty(key)) {
    //     this.groupsofcinemadays.push(group_to_cinema_day[key]);
    //   }
    // }
    this.cinemaName = nameCinema;
    console.log(this.cinemaName);
    const uri = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${nameCinema}`;
    this.dataser.get(uri).subscribe((data: any) => {
      this.thongtincumrap = data;
    });

  }
  getTabsAndArrayCinema(e) {
    this.indexTabs2 = e.index;
    const newgroup = e.arr.reduce((obj, item) => {
      const maCumRap = item.thongTinRap.maCumRap;
      obj[maCumRap] = obj[maCumRap] || [];
      obj[maCumRap].push(item);
      return obj;
    }, {});
    this.groupshowcinemaday = Object.keys(newgroup).map(function (key) {
      return { maCumRap: key, lichChieuofFilm: newgroup[key] };
    });
  }
  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    this.ratenow = $event.newValue;
    alert(`
      Sao Cũ: ${$event.oldValue} sao, 
      Sao Mới: ${$event.newValue} sao, 
      Bạn đã hoàn thành việc đánh giá. Xin chân thành cảm ơn`);
  }




}
