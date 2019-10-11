import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/common/models/movie';
import { Subscription } from 'rxjs';
import { SharingData01Service } from 'src/app/shared/services/sharing-data01.service';
import { StarRatingComponent } from 'ng-starrating';

declare var $: any;

const ratings = {
  hotel_a: 2.8,
  hotel_b: 3.3,
  hotel_c: 1.9,
  hotel_d: 4.3,
  hotel_e: 4.74
};

const starTotal = 5;

@Component({
  selector: 'app-carousel02',
  templateUrl: './carousel02.component.html',
  styleUrls: ['./carousel02.component.scss']
})
export class Carousel02Component implements OnInit {
  movieList: Array<Movie> = []; // khai báo mảng ds phim rỗng, obj là Movie

  slide1 = Array(4).fill({});
  slide2 = Array(4).fill({});
  slide3 = Array(4).fill({});

  slideList: Array<any> = [this.slide1, this.slide2, this.slide3];
  subMovieList = new Subscription(); // biến quản lý theo dõi data

  constructor(private sharingData01Service: SharingData01Service) {}

  ngOnInit() {
    this.getMovieFromStore();
  }

  onRate($event: {
    oldValue: number;
    newValue: number;
    starRating: StarRatingComponent;
  }) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  // lấy dữ liệu ds phim từ store
  getMovieFromStore() {
    // const step = Math.floor(Math.random() * 4) + 1;
    this.subMovieList = this.sharingData01Service.sharingMovieLst.subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.movieList = data;
          this.slideList[0][0] = this.movieList[0];
          this.slideList[0][1] = this.movieList[1];
          this.slideList[0][2] = this.movieList[2];
          this.slideList[0][3] = this.movieList[3];
          this.slideList[1][0] = this.movieList[4];
          this.slideList[1][1] = this.movieList[5];
          this.slideList[1][2] = this.movieList[6];
          this.slideList[1][3] = this.movieList[7];
          this.slideList[2][0] = this.movieList[8];
          this.slideList[2][1] = this.movieList[9];
          this.slideList[2][2] = this.movieList[10];
          this.slideList[2][3] = this.movieList[11];
        }
      }
    );
  }

  // giải phóng biến theo dõi gọi data
  ngOnDestroy() {
    this.subMovieList.unsubscribe();
  }
}
