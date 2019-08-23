import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageListFilmService } from 'src/app/common/services/manage-list-film.service';
import { DataserviceService } from 'src/app/common/services/dataservice.service';
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

  // Xử Lý Ngày Tháng Năm
  indexTabs: any;
  cinemaName: string = '';
  lichChieuofFilm: any = [];
  // filmsSameDay: any = [];
  listFilmOfCinema = [];
  group_to_values:any=[];
  groups:any= [];




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
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.idTrailer);
    });
  }

  getRapPhim() {
    const uri = `QuanLyRap/LayThongTinHeThongRap`;
    this.dataser.get(uri).subscribe((data: any) => {
      this.cinema = data;
      this.cinemaplay = this.cinema.filter((item1) => {
        return this.cinemamainplay.find((item2) => item2.maHeThongRap === item1.maHeThongRap)
      });
      // console.log(this.cinemaplay);
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
  getNameCinemaFromCinema(nameCinema) {
    this.cinemaName = nameCinema;
    console.log(nameCinema);
  }
  getInformationFilm() {
    const uri = `QuanLyPhim/LayThongTinPhim?MaPhim=${this.iDfilm}`;
    this.dataser.get(uri).subscribe((data: any) => {
      this.lichChieuofFilm = data.lichChieu;
      // for (let i = 0; i < this.lichChieuofFilm.length - 1; i++) {
      //   for (let j = i + 1; j < this.lichChieuofFilm.length; j++) {
      //     if (this.lichChieuofFilm[i].ngayChieuGioChieu > this.lichChieuofFilm[j].ngayChieuGioChieu) {
      //       let a = this.lichChieuofFilm[i];
      //       this.lichChieuofFilm[i] = this.lichChieuofFilm[j];
      //       this.lichChieuofFilm[j] = a;
      //     }
      //   }
      // }
      console.log(this.lichChieuofFilm);
      const group_to_values=this.lichChieuofFilm.reduce((obj,item)=>{
        const date=item.ngayChieuGioChieu.split('T')[0];
        obj[date]=obj[date] ||[];
        obj[date].push(item);
        return obj
      },{});
      console.log(group_to_values);
      
      this.groups=Object.keys(group_to_values).map(function(key){
        return {ngayChieuGioChieu:key,lichChieuofFilm:group_to_values[key]};
      })
      console.log(this.groups); 
      
      const group_to_cinema=this.lichChieuofFilm.filter((item)=>{
        

      });
    });
  }
  getArrayCinemaToName(a: any = [],nameCinema){
    return a.filter((item)=>{
      return item.thongTinRap.maHeThongRap===nameCinema;
    });
  }
  

}
