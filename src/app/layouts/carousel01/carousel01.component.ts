import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { SharingData01Service } from 'src/app/shared/services/sharing-data01.service';
import { Movie } from 'src/app/common/models/movie';
// declare var $: any;

@Component({
  selector: 'app-carousel01',
  templateUrl: './carousel01.component.html',
  styleUrls: ['./carousel01.component.scss']
})
export class Carousel01Component implements OnInit {
  movieList: Array<Movie> = [];
  subMovieList = new Subscription();

  title = 'CarouselNgx';

  @ViewChild('carousel01', { static: false }) carousel01: any;

  slides = Array(7).fill({});

  // tslint:disable-next-line: ban-types
  options: Object = {
    clicking: true,
    sourceProp: 'src',
    visible: 7,
    perspective: 1,
    startSlide: 0,
    border: 3,
    dir: 'ltr',
    width: 200,
    height: 300,
    space: 130,
    autoRotationSpeed: 200000,
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
    const uri = 'QuanLyPhim/LayDanhSachPhim?maNhom=GP09';
    this.subMovieList = this.dataService.get(uri).subscribe((data: any) => {
      if (data !== null) {
        const step = Math.floor(Math.random() * 7) + 1;
        this.movieList = data;
        this.sharingData01Service.sharingMovieListData(data);

        this.slides = this.slides.map((item, index) => {
          item = this.movieList[index + step];
          return item;
        });
        // console.log(this.slides);
      }
    });
  }

  slideClicked(index) {
    this.carousel01.slideClicked(index);
  }


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.subMovieList.unsubscribe();
  }
}
