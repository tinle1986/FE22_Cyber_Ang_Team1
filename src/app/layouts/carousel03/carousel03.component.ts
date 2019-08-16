import { Component, OnInit, ViewChild } from "@angular/core";
import { SlickCarouselComponent } from "ngx-slick-carousel";

// declare var $: any;

@Component({
  selector: "app-carousel03",
  templateUrl: "./carousel03.component.html",
  styleUrls: ["./carousel03.component.scss"]
})
export class Carousel03Component implements OnInit {
  @ViewChild("slickModal", { static: false })
  slickModal: SlickCarouselComponent;
  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];
  slideConfig = {
    centerMode: true,
    // autoplay: true,
    centerPadding: "60px",
    slidesToShow: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]

    // dots: true,
    // infinite: true,
    // speed: 300,
    // slidesToShow: 1,
    // adaptiveHeight: true

    // slidesToShow: 4,
    // slidesToScroll: 1,
    // infinite: true
    // nextArrow: "<div class='nav-btn next-slide'></div>",
    // prevArrow: "<div class='nav-btn prev-slide'></div>",
    // dots: true,
    // infinite: false
  };

  // next() {
  //   this.slickModal.slickNext();
  // }

  // prev() {
  //   this.slickModal.slickPrev();
  // }

  // addSlide() {
  //   this.slides.push({ img: "http://placehold.it/350x150/777777" });
  // }

  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

  slickInit(e) {
    console.log("slick initialized");
  }

  breakpoint(e) {
    console.log("breakpoint");
  }

  // afterChange(e) {
  //   console.log("afterChange");
  // }

  // beforeChange(e) {
  //   console.log("beforeChange");
  // }

  constructor() {}

  ngOnInit() {}
}
