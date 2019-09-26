import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chonghe',
  templateUrl: './chonghe.component.html',
  styleUrls: ['./chonghe.component.scss']
})
export class ChongheComponent implements OnInit {
  @Input() listGhe: any;
  @Input() i: any;
  counterValue: number = 0;
  

  
  constructor() { }

  ngOnInit() {

  }
  @Output() counterChange = new EventEmitter();
  @Output() money = new EventEmitter();
  
  @Input()
  get counter() {
    return this.counterValue;
  }
  
  set counter(val) {
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
  }
  
  decrement() {
    // if(loaiGhe === 'ghe thường') {
    //   this.soluongghethuong--
    // }
    // if(loaiGhe === 'ghế vip'){
    //   this.soluongghevip--
    // }
    // Tương tự với cái tăng dạ để em thử 
                                            
    this.counterValue--;
  }
  
  increment() {
    this.counterValue++;
  }
  moneyticket(){  
    this.money.emit({money:Number(this.listGhe.groupCinema[0].giaVe),soluong:this.counter,loaiGhe:this.listGhe.loaiGhe});
  }

}
