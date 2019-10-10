// import { Injectable } from "@angular/core";
// import { catchError, tap } from "rxjs/operators";
// import { throwError, Observable } from "rxjs";
// import {
//   HttpErrorResponse,
//   HttpEvent,
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest
// } from "@angular/common/http";


// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor() { }

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     // Get the auth token from the service.
//     let token = JSON.parse(localStorage.getItem("adminToken"));
//     if (token) {
//       token=token;
//       console.log("TCL: AuthInterceptor -> constructor -> token", token)
//     }
//     else {
//       token = JSON.parse(localStorage.getItem("localUserToken"));
//       console.log("TCL: AuthInterceptor -> constructor -> User", token)
//     }

//     /*
//     * The verbose way:
//     // Clone the request and replace the original headers with
//     // cloned headers, updated with the authorization.
//     const authReq = req.clone({
//       headers: req.headers.set('Authorization', authToken)
//     });
//     */
//     // Clone the request and set the new header in one step.
//     const authReq = req.clone({
//       setHeaders: { Authorization: `Bearer ${token}` }
//     });
//       console.log("TCL: AuthInterceptor -> constructor -> token", token)

//     // send cloned request with header to the next handler.
//     return next.handle(authReq);
//   }
// }

// /*
// Copyright Google LLC. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that
// can be found in the LICENSE file at http://angular.io/license
// */
import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    let token = JSON.parse(localStorage.getItem("adminToken"));
    if (token) {
      token = token;
    }
    else {
      token = JSON.parse(localStorage.getItem("localUserToken"));
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
