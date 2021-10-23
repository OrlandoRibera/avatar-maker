import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SessionService } from './api/session.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private sessionService: SessionService,
    private toastr: ToastrService
  ) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = this.sessionService.getToken();
    if (token) {
      return true;
    }

    // this.toastr.error('Sesión expirada, por favor ingrese nuevamente');
    this.router.navigate(['/login']);
    return true;
  }
}
