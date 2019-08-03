import { Component, OnInit } from '@angular/core';
import { ManageListFilmService } from 'src/app/common/services/manage-list-film.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-list-film-np',
  templateUrl: './list-film-np.component.html',
  styleUrls: ['./list-film-np.component.scss']
})
export class ListFilmNPComponent implements OnInit {
  listFilm: any = [];
  p:number=1;
  unsubListFilm= new Subscription();

  constructor(private mlfs:ManageListFilmService) { }

  ngOnInit() {
    this.getListMovie();
  }
  getListMovie(){
    this.unsubListFilm=this.mlfs.getListFilm().subscribe((data)=>{
      console.log(data);
      this.listFilm=data;
    });
  }
  ngOnDestroy(){
    this.unsubListFilm.unsubscribe();
    console.log("Hủy òi nha");
  }


}
