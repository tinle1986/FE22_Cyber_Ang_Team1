import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

let urlApi = "";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) {
    urlApi = environment.urlApi;
  }

  get(uri: string): Observable<any> {
    return this.http.get(urlApi + "/" + uri).pipe(
      tap(() => {
        //Thành công
        //Xử lý loading
      }),
      catchError(err => {
        return this.handleErr(err);
      })
    );
  }
  post(uri: string, data?: object): Observable<any> {
    return this.http.post(urlApi + "/" + uri, data, httpOptions).pipe(
      tap(() => { }),
      catchError(err => {
        return this.handleErr(err);
      })
    );
  }
  put(uri: string, data?: object): Observable<any> {
    return this.http.put(urlApi + "/" + uri, data, httpOptions).pipe(
      tap(() => { }),
      catchError(err => {
        return this.handleErr(err);
      })
    );
  }
  delete(uri: string): Observable<any> {
    return this.http.delete(urlApi + "/" + uri).pipe(
      tap(() => { }),
      catchError(err => {
        return this.handleErr(err);
      })
    );
  }
  handleErr(err) {
    if (err.status === 500) {
      //Các bạn viết thêm Noti hiển thị cho người dùng thấy thông báo lỗi
      console.log(err.error);
      return throwError(err.error);
    }

    if (err.status === 401) {
      //Các bạn viết thêm Noti hiển thị cho người dùng thấy thông báo lỗi
      console.log(err.statusText);
      return throwError(err.statusText);
    }

    return throwError(err);
  }
}