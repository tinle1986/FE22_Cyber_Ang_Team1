import { Component, OnInit,Input,Output} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  @Input() film:any;
  @Output() Trailer= new EventEmitter();
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log(this.film);
  }
  myTrailer(){
    this.Trailer.emit(this.film.trailer);
  }

}
