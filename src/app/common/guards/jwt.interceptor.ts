import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    var token = JSON.parse(localStorage.getItem("adminToken"));
    if (token) {
      return;
    }
    else{
      token= JSON.parse(localStorage.getItem("localUserToken"));
    }

    /*
    * The verbose way:
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    */
    // Clone the request and set the new header in one step.
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
