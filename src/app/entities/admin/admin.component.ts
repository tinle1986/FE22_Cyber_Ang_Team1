import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/common/services/dataservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  listUser:any[]=new Array();
  listFilm:any[]=new Array();

  constructor( private dataser: DataserviceService) { }

  ngOnInit() {
    this.getListUser();
    this.getListFilm();
  }
  getListUser(){
    const uri ='QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP06';
    this.dataser.get(uri).subscribe((data:any)=>{
      if(data){
        console.log(data);
        this.listUser=data;
      }
    });
  }
  deleteUser(taiKhoan){
    const uri=`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
    this.dataser.delete(uri).subscribe();
        
  }
  updateUser(taiKhoan){

  }
  getListFilm(){
    const uri ='QuanLyPhim/LayDanhSachPhim?maNhom=GP06';
    this.dataser.get(uri).subscribe((data:any)=>{
      if(data){
        console.log(data);
        this.listFilm=data;
      }
    });
  }
  deleteFilm(maPhim){

  }

}
