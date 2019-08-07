import { Component, OnInit } from '@angular/core';
import { ManageListFilmService } from 'src/app/common/services/manage-list-film.service';
import { Subscription } from 'rxjs';
import { ShareDataService } from 'src/app/shared/sharing-datas/share-data.service';
declare var $: any;
@Component({
  selector: 'app-list-film-cs',
  templateUrl: './list-film-cs.component.html',
  styleUrls: ['./list-film-cs.component.scss']
})
export class ListFilmCsComponent implements OnInit {
  p: number = 1;
  listFilm: Array<any> = [];
  row: number = 0;
  film: number = 3;
  unsublist = new Subscription();

  constructor(private mlfsCS: ManageListFilmService, private sharedata: ShareDataService) { }

  ngOnInit() {
    this.getListFilm();
    this.backtotop();



  }
  getListFilm() {
    this.unsublist = this.mlfsCS.getListFilmCS().subscribe((data) => {
      console.log(data);
      this.listFilm = data;
      this.sharedata.sharingDataListMovie(data);
    })
  }
  backtotop() {
    // $(document).ready(function () {
    //   $(window).scroll(function () {
    //     if ($(this).scrollTop() > 100) { //thực hiện lệnh điều kiện Khi lăn chuột xuống dưới hơn 100px
    //       $('#back-to-top').fadeIn(); //Xuất hiện nút
    //     } else {
    //       $('#back-to-top').fadeOut(); //Ngược lại thì ẩn nút
    //     }
    //   });
    //   $('#back-to-top').click(function () {
    //     $("html, body").animate({ scrollTop: 0 }, 600); //Animation giúp hoạt ảnh scroll ngược lên đầu trang sẽ mượt hơn
    //     return false;
    //   });
    // });
  }

}
