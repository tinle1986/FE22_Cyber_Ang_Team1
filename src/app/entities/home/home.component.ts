import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { SharingData01Service } from 'src/app/shared/services/sharing-data01.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieList: any = [];
  subMovieList = new Subscription();
  constructor(private dataService: DataService,
    private sharingData01Service: SharingData01Service) { }

  ngOnInit() {
    this.getMovieList();
  }

  getMovieList() {
    const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP09";
    this.subMovieList = this.dataService.get(uri).subscribe((data: any) => {
      this.movieList = data;
      this.sharingData01Service.sharingMovieListData(data);
      console.log(this.movieList);
    });
  }

  ngOnDestroy() {
    this.subMovieList.unsubscribe();
  }

}
