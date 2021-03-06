import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { environment } from "./../../../environments/environment";

let urlApi = "";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {
    urlApi = environment.urlApi; // http://movie0706.cybersoft.edu.vn/api/
  }

  get(uri: string): Observable<any> {
    return this.http.get(urlApi + "/" + uri).pipe(
      tap(data => {
        // get successfully
      }),
      catchError(err => {
        // get failed
        return this.handleErr(err);
      })
    );
  }

  post(uri: string, data?: object): Observable<any> {
    return this.http.post(urlApi + "/" + uri, data, httpOptions).pipe(
      tap(() => {
        // get successfully
      }),
      catchError((err: HttpErrorResponse) => {
        // get failed
        // alert(err.error)
        return this.handleErr(err);
      })
    );
  }

  // nhan tham so err return o tren
  handleErr(err) {
    // console.log(err);
    // sw
    return throwError(err);
  }
}
