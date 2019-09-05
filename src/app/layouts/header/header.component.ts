import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}

  login(value) {
    // console.log(value);
    const user = { taiKhoan: value.userName, matKhau: value.password };
    const uri = `QuanLyNguoiDung/DangNhap`;
    this.dataService.post(uri, user).subscribe(
      (data: any) => {
        console.log(data);

        if (data === null) {
          alert("Tài khoản không tồn tại.");
        } else {
          alert("Logged in succesfully");
          localStorage.setItem("localUser", JSON.stringify(data));
        }
      },
      err => {
        alert(err.error)
        // console.log(err.error);
      }
    );
  }
}
