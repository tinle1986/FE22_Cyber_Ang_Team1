import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataserviceService } from 'src/app/common/services/dataservice.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { Observable, throwError } from 'rxjs';
import { DatePipe } from '@angular/common';
import * as $ from 'jquery';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  listUser: any[] = new Array();
  listFilm: any[] = new Array();
  $: any;
  selectedFile: File = null;
  public generalForm: FormGroup;
  formGroup = this.fb.group({
    file: [null]
  })
  fileImg = [];
  changeState: boolean = false;

  constructor(private dataser: DataserviceService, public datepipe: DatePipe, private fb: FormBuilder, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.getListUser();
    this.getListFilm();
    this.datePicker();
  }
  datePicker() {

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
    this.dataser.delete(uri).subscribe((res: any) => {
      if(res.status===200){
        alert('Xóa Thành Công');
      }
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
    const uri = `/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`;
    this.dataser.delete(uri).subscribe((data: any) => {
      console.log(data);
      alert('Delete Film Success')
    });



  }
  submitFilm(phim, imgFilm: any) {

    this.selectedFile = <File>imgFilm[0];
    // Ngày chiếu không hợp lệ, 
    //Ngày chiếu phải có định dạng dd/MM/yyyy !
    let date: any;
    // date = phim.ngayKhoiChieu.toISOString().slice(0,10); 
    date = phim.ngayKhoiChieu;
    date = this.datepipe.transform(date, 'dd/MM/yyyy');
    const Film = {
      maPhim: phim.maPhim,
      tenPhim: phim.tenPhim,
      biDanh: phim.biDanh,
      trailer: phim.trailer,
      hinhAnh: this.fileImg[0].name,
      moTa: phim.moTa,
      maNhom: "GP06",
      ngayKhoiChieu: String(date),
      danhGia: phim.danhGia,
    }
    console.log(Film);
    
    this.dataser.post('QuanLyPhim/ThemPhim', Film).subscribe((res: any) => {
      if(typeof res === 'object'){
        var formData = new FormData();
        formData.append("Files",this.fileImg[0]);
        formData.append("tenPhim",Film.tenPhim);
        if (this.changeState) {
          this.dataser.post('QuanLyPhim/UploadHinhAnhPhim', formData).subscribe((res) => {
            console.log("TCL: AdminComponent -> submitFilm -> res", res)
          })
        }
      }
    })
  }
  onFileChange(event) {
    console.log("TCL: AdminComponent -> onFileChange -> event", event.target.files)
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
        });
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
      this.fileImg.push(file);
    }
    this.changeState = true;
    console.log(this.fileImg[0]);
  }
  
}



