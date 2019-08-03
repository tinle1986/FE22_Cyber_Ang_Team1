import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  @Input() film:any;
  star:number=0;
  starArr:Array<any>=[];
  
  
  constructor() { }

  ngOnInit() {
    this.star=this.film.danhGia;
    for (let i = 0; i < this.star; i++) {
      this.starArr.push("a");
    }
  }

}
