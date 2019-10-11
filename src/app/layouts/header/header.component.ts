import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";
import { Router } from '@angular/router';

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

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem("adminToken");
    if (token) {
      this.router.navigate(["admin"]);
    }
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
          if (data.maLoaiNguoiDung == "QuanTri") {
            localStorage.setItem("localAdmin", JSON.stringify(data));
            localStorage.setItem('adminToken', JSON.stringify(data.accessToken));
            this.router.navigate(["admin"]);
          }
          else{
            localStorage.setItem("localUser", JSON.stringify(data));
            localStorage.setItem('localUserToken', JSON.stringify(data.accessToken))
          }
         
        }
      },
      err => {
        alert(err.error);
        // console.log(err.error);
      }
    );
  }
  // if (localStorage.getItem('adminToken')) {
  //   const token = JSON.parse(localStorage.getItem("adminToken"));
  // }
  // else {
  //   const token = JSON.parse(localStorage.getItem("localUserToken"));
  // }


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
  clickLogin() {
    //  $("#dropdownLogin").dropdown("toggle");
    // window.open('lead_data.php?leadid=1','myWin','width=400,height=650')
    $("#loginDp").css({ 'display': 'block' });

  }
}
