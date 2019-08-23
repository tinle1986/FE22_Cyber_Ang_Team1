import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ManageListFilmService {

  constructor(private http:HttpClient) { }
  handleErr(err){
    console.log(err);
    return err;
  }
  getListFilm():Observable<any>{
    const url="http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP06";
    return this.http.get(url).pipe(
      tap(
        (data:any)=>{
          // SUCCESS
        },
        catchError(err=>{
          // DEFEAT
          return this.handleErr(err);
        })   
      )
    );
  }
  getListFilmCS():Observable<any>{
    const url="http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09";
    return this.http.get(url).pipe(
      tap(
        (data:any)=>{

        },
        catchError(err=>{
          return this.handleErr(err);
        })
      )
    );
  }
  getInforFilm(idfilm):Observable<any>{
    const url=`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idfilm}`;
    return this.http.get(url).pipe(
      tap(
        (data:any)=>{

        },
        catchError(err=>{
          return this.handleErr(err);
        })
      )
    );

  }
}
