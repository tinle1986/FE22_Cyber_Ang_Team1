import { Component, OnInit, ViewChild } from "@angular/core";
/* import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { SharingData01Service } from 'src/app/shared/services/sharing-data01.service'; */



@Component({
  selector: "app-carousel01",
  templateUrl: "./carousel01.component.html",
  styleUrls: ["./carousel01.component.scss"]
})
export class Carousel01Component implements OnInit {
  /* movieList: any = [];
  subMovieList = new Subscription(); */
  title = "CarouselNgx";

  @ViewChild("carousel01", { static: false }) carousel01: any;

  slides: Array<Object> = [
    { src: "./assets/img/phim_1.jpg" },
    { src: "./assets/img/phim_2.jpg" },
    { src: "./assets/img/phim_3.jpg" },
    { src: "./assets/img/phim_4.jpg" },
    { src: "./assets/img/phim_5.jpg" },
    { src: "./assets/img/phim_6.jpg" },
    { src: "./assets/img/phim_7.jpg" }
  ];

  options: Object = {
    clicking: true,
    sourceProp: "src",
    visible: 7,
    perspective: 1,
    startSlide: 0,
    border: 3,
    dir: "ltr",
    width: 200,
    height: 300,
    space: 130,
    autoRotationSpeed: 5000000,
    loop: true
  };

  constructor(/* private dataService: DataService,
    private sharingData01Service: SharingData01Service */) {}

  ngOnInit() {
    /* this.getMovieList();
    console.log(this.movieList); */
  }

  /* getMovieList() {
    const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP09";
    this.subMovieList = this.dataService.get(uri).subscribe((data: any) => {
      this.movieList = data;
      this.sharingData01Service.sharingMovieListData(data);
    });
  } */

  slideClicked(index) {
    this.carousel01.slideClicked(index);
  }

  /* ngOnDestroy() {
    this.subMovieList.unsubscribe();
  } */
}
