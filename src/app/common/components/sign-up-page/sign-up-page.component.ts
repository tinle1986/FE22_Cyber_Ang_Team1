import { Component, OnInit, HostListener, ViewChild } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";

@Component({
  selector: "app-sign-up-page",
  templateUrl: "./sign-up-page.component.html",
  styleUrls: ["./sign-up-page.component.scss"]
})
export class SignUpPageComponent implements OnInit {
  @ViewChild("registerForm", { static: false }) registerForm;
  constructor(private dataService: DataService) {}

  ngOnInit() {}

  signUp(value) {
    const user = {
      taiKhoan: value.userName,
      matKhau: value.password,
      email: value.email,
      soDt: value.phoneNumber,
      maNhom: "GP06",
      maLoaiNguoiDung: "KhachHang",
      hoTen: value.fullName
    };
    const uri = "QuanLyNguoiDung/DangKy";
    this.dataService.post(uri, user).subscribe((data: any) => {
      if (
        data === "Email đã tồn tại!" ||
        data === "Nhóm người dùng không hợp lệ!"
      ) {
        alert(data);
      } else {
        alert("Registered successfully!");
      }
    });
  }

  @HostListener("window: beforeunload", ["$event"])
  canDeactivate($event): boolean {
    return this.registerForm.submitted || !this.registerForm.dirty;
  }
}
