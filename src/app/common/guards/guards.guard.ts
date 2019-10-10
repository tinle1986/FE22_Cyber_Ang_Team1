import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate() {
    const token = JSON.parse(localStorage.getItem("localUser"));
    if (!token) {
      this.router.navigate(["/admin"]);
      return false;
    }
    return true;
  }

}
