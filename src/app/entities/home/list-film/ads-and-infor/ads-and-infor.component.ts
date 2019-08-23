import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/shared/sharing-datas/share-data.service';

@Component({
  selector: 'app-ads-and-infor',
  templateUrl: './ads-and-infor.component.html',
  styleUrls: ['./ads-and-infor.component.scss']
})
export class AdsAndInforComponent implements OnInit {
  FilmList:Array<any>=[];
  FilmNewsList:Array<any>=[
    {tennews:"Smart Hulk’s Avengers: Infinity War Cut Role Revealed",hinhAnh:"./../../../../../assets/images/NewsFilm1.jpg",ngayDang:"April 2, 2019"},
    {tennews:"Everything We Know About Marvel's Fantastic Four Movie",hinhAnh:"./../../../../../assets/images/NewsFilm2.jpg",ngayDang:"April 3, 2019"},
    {tennews:"Star Wars 9 Theory: The Sith Troopers Are Revan's KOTOR Army",hinhAnh:"./../../../../../assets/images/NewsFilm3.jpg",ngayDang:"April 4, 2019"},
    {tennews:"Why Vin Diesel's Dominic Toretto Isn't In Hobbs & Shaw",hinhAnh:"./../../../../../assets/images/NewFilms4.jpg",ngayDang:"April 5, 2019"},

  ];
 

  constructor(private shareData:ShareDataService) { }

  ngOnInit() {
    this.getListFromShareData();
  }
  getListFromShareData(){
    this.shareData.sharelistMovie.subscribe((data)=>{
      this.FilmList=data;
      // console.log(data);
      
    });
  }
}
