import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SharingData01Service {
  private movieLst = new BehaviorSubject([] as any);
  sharingMovieLst = this.movieLst.asObservable();

  private movieDetail = new BehaviorSubject([] as Object);
  sharingMovieDetail = this.movieDetail.asObservable();

  constructor() {}

  sharingMovieListData(movieList: any) {
    this.movieLst.next(movieList);
  }

  sharingMovieDetailData(movie: any) {
    this.movieDetail.next(movie);
  }
}
