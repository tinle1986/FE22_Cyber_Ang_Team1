import { Component, OnInit, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { DataService } from "src/app/shared/services/data.service";
import { SharingData01Service } from "src/app/shared/services/sharing-data01.service";
import { Movie } from "src/app/common/models/movie";

@Component({
  selector: "app-carousel01",
  templateUrl: "./carousel01.component.html",
  styleUrls: ["./carousel01.component.scss"]
})
export class Carousel01Component implements OnInit {
  movieList: Array<Movie> = [];
  imgList: any = [];
  subMovieList = new Subscription();

  title = "CarouselNgx";

  @ViewChild("carousel01", { static: false }) carousel01: any;

  slides: Array<object> = [
    // { src: "./assets/img/phim_1.jpg" },
    // { src: "http://movie0706.cybersoft.edu.vn/hinhanh/ted2.jpg"},
    // { src: "http://movie0706.cybersoft.edu.vn/hinhanh/ted2.jpg"},
    // { src: "http://movie0706.cybersoft.edu.vn/hinhanh/ted2.jpg"},
    // { src: "http://movie0706.cybersoft.edu.vn/hinhanh/ted2.jpg"},
    // { src: "http://movie0706.cybersoft.edu.vn/hinhanh/ted2.jpg"},
    // { src: "http://movie0706.cybersoft.edu.vn/hinhanh/ted2.jpg"},
    // { src: "http://movie0706.cybersoft.edu.vn/hinhanh/ted2.jpg"},
    { src: "" },
    { src: "" },
    { src: "" },
    { src: "" },
    { src: "" },
    { src: "" },
    { src: "" }
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

  constructor(
    private dataService: DataService,
    private sharingData01Service: SharingData01Service
  ) {}

  ngOnInit() {
    this.getMovieList();
  }

  getMovieList() {
    const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP08";
    this.subMovieList = this.dataService.get(uri).subscribe((data: any) => {
      this.movieList = data;
      this.sharingData01Service.sharingMovieListData(data);
      for (let item of this.movieList) {
        this.imgList.push(item.hinhAnh.toString());
      }
        this.slides[0] = { src: this.imgList[0] };
        this.slides[1] = { src: this.imgList[1] };
        this.slides[2] = { src: this.imgList[2] };
        this.slides[3] = { src: this.imgList[3] };
        this.slides[4] = { src: this.imgList[4] };
        this.slides[5] = { src: this.imgList[5] };
        this.slides[6] = { src: this.imgList[6] };
        console.log(this.slides);
      console.log(this.movieList);
      console.log(this.imgList);
      
    });
  }

  slideClicked(index) {
    this.carousel01.slideClicked(index);
  }

  ngOnDestroy() {
    this.subMovieList.unsubscribe();
  }
}
