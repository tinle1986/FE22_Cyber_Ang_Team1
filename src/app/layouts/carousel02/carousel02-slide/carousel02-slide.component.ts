import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel02-slide',
  templateUrl: './carousel02-slide.component.html',
  styleUrls: ['./carousel02-slide.component.scss']
})
export class Carousel02SlideComponent implements OnInit {

  @Input() slideItem: any;

  constructor() { }

  ngOnInit() {
  }

}
