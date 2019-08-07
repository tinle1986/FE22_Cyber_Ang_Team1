import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-newsinfor',
  templateUrl: './newsinfor.component.html',
  styleUrls: ['./newsinfor.component.scss']
})
export class NewsinforComponent implements OnInit {
  @Input() news:any; 

  constructor() { }

  ngOnInit() {
  }

}
