import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

// declare var jquery:any;
declare var $: any;

// import * as $ from 'jquery';

// declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loginStatus = false;
  localUser = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getLocalStore();

    // console.log(this.localUser);
  }

  login(value) {
    // console.log(value);
    const user = { taiKhoan: value.userName, matKhau: value.password };
    const uri = `QuanLyNguoiDung/DangNhap`;
    this.dataService.post(uri, user).subscribe(
      (data: any) => {
        // console.log(data);

        if (data === null) {
          alert('Tài khoản không tồn tại.');
        } else {
          // alert("Logged in succesfully");
          this.loginStatus = true;
          this.localUser = data;
          localStorage.setItem('localUser', JSON.stringify(data));
        }
      },
      err => {
        alert(err.error);
        // console.log(err.error);
      }
    );
  }

  logout() {
    // localStorage.clear();        // 1st way to remove localStorage
    localStorage.removeItem('localUser');       // 2nd way to remove localStorage
    this.loginStatus = false;
  }

  getLocalStore() {
    if (localStorage.getItem('localUser') != null) {
      this.localUser = JSON.parse(localStorage.getItem('localUser'));
      this.loginStatus = true;
      // console.log(this.localUser);
    }
  }

  // clickLogin() {
  //   $("#dropdownLogin").dropdown("toggle");
  // }
}
