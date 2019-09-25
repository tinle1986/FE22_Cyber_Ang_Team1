import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datghe',
  templateUrl: './datghe.component.html',
  styleUrls: ['./datghe.component.scss']
})
export class DatgheComponent implements OnInit {
  @Input() informLC: any;
  constructor() { }

  ngOnInit() {
  }

}
