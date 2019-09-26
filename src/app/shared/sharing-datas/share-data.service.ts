import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private listMovie = new BehaviorSubject([] as any);
  sharelistMovie = this.listMovie.asObservable();

  private inforMovie = new BehaviorSubject({} as Object);
  shareinforMovie = this.inforMovie.asObservable();

  private inforRapChieu = new BehaviorSubject({} as Object);
  shareRapChieu = this.inforRapChieu.asObservable();




  constructor() { }
  sharingDataListMovie(listMovie: any) {
    this.listMovie.next(listMovie);

  }
  sharingInforMovie(Movie: any) {
    this.inforMovie.next(Movie);
  }
  sharingInforRapChieu(Cinema: any) {
    this.inforRapChieu.next(Cinema);
  }



}
