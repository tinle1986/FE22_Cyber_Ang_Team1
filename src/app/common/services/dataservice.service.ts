import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
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
      tap(
        () => {
          // SUCCESS
        },
        catchError(err => {
          // DEFEAT
          return this.handleErr(err);
        })
      )
    );

  }
  post(uri: string, data?: object): Observable<any> {
    return this.http.post(urlApi + "/" + uri, data, httpOptions).pipe(
      tap(
        () => {
          // SUCCESS
        },
        catchError(err => {
          // DEFEAT
          return this.handleErr(err);
        })
      )

    );
  }
  delete(uri: string): Observable<any> {
    return this.http.delete(urlApi + "/" + uri,httpOptions).pipe(
      tap(
        () => {
          // SUCCESS
        }),
      catchError(err => {
        // DEFEAT
        return this.handleErr(err);
      })
    );

  }
  handleErr(err: any) {
    return err;
  }
}
