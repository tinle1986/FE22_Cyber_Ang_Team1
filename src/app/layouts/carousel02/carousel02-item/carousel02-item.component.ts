import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel02-item',
  templateUrl: './carousel02-item.component.html',
  styleUrls: ['./carousel02-item.component.scss']
})
export class Carousel02ItemComponent implements OnInit {

  @Input() movieItem: any;

  constructor() { }

  ngOnInit() {
    // console.log(this.movieItem);
  }

}
