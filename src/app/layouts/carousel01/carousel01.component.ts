import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-carousel01",
  templateUrl: "./carousel01.component.html",
  styleUrls: ["./carousel01.component.scss"]
})
export class Carousel01Component implements OnInit {
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

  constructor() {}

  ngOnInit() {}

  slideClicked(index) {
    this.carousel01.slideClicked(index);
  }
}
