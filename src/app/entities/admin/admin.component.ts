import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/common/services/dataservice.service';
import { Observable, throwError  } from 'rxjs';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  listUser: any[] = new Array();
  listFilm: any[] = new Array();

  constructor(private dataser: DataserviceService) { }

  ngOnInit() {
    this.getListUser();
    this.getListFilm();
  }
  getListUser() {
    const uri = 'QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP06';
    this.dataser.get(uri).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.listUser = data;
      }
    });
  }
  deleteUser(taiKhoan) {
    const uri = `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
    this.dataser.delete(uri).subscribe((data:any) => {
      console.log(data);
      alert('Delete User Success')
     
    });

  }
  updateUser(taiKhoan) {

  }
  submitUser(value) {
    const user = {
      hoTen: value.hoTen,
      taiKhoan: value.taiKhoan,
      matKhau: value.matKhau,
      email: value.email,
      soDt: value.soDt,
      maNhom: "GP06",
      maLoaiNguoiDung: value.maLoaiNguoiDung,
    }
    this.dataser
      .post("QuanLyNguoiDung/ThemNguoiDung", user)
      .subscribe((data: any) => {
        console.log(data);
        alert("Add user success");
      });




  }
  getListFilm() {
    const uri = 'QuanLyPhim/LayDanhSachPhim?maNhom=GP06';
    this.dataser.get(uri).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.listFilm = data;
      }
    });
  }
  deleteFilm(maPhim) {

  }

}
