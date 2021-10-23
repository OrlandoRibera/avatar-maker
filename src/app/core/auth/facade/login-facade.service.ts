import { Injectable } from '@angular/core';
import { LoginHttpService } from '../api/login-http.service';
import { SessionService } from '../api/session.service';
import { Router } from '@angular/router';
import { User, LoginRequest, SignUpRequest } from '../interfaces/user';
import { AuthStateService } from '../state/auth-state.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class LoginFacadeService {
  constructor(
    private loginApi: LoginHttpService,
    private sessionService: SessionService,
    private state: AuthStateService,
    private router: Router,
    private toastr: ToastrService
  ) {
    const user: User = this.sessionService.getUser();
    if (user && user !== null) {
      this.state.setUser(user);
    }
  }

  async login(
    formValue: LoginRequest,
    msg: string = 'Inicio exitoso'
  ): Promise<void> {
    try {
      this.state.setLoading(true);
      const user = await this.loginApi.login(formValue).toPromise();
      this.sessionService.setToken(user.data.token);
      this.sessionService.setUser(user.data.user);
      this.state.setLoading(false);
      this.toastr.clear();
      this.toastr.success(msg);
      this.router.navigate(['']);
    } catch (error) {
      this.state.setLoading(false);
      if (error.error.message) {
        this.toastr.error(error.error.message);
      } else {
        this.toastr.error(`${error.name} - ${error.statusText}`);
      }
    }
  }

  async signUp(formValue: SignUpRequest): Promise<void> {
    try {
      this.state.setLoading(true);
      await this.loginApi.register(formValue).toPromise();
      this.state.setLoading(false);
      await this.login(formValue, 'Registro exitoso');
    } catch (error) {
      this.state.setLoading(false);
      if (error.error.message) {
        this.toastr.error(error.error.message);
      } else {
        this.toastr.error(`${error.name} - ${error.statusText}`);
      }
    }
  }

  getLoading(): Observable<boolean> {
    return this.state.getLoading();
  }

  get userName(): string {
    let name = '';
    this.state.getUser().subscribe((user: User): void => {
      name = user.username;
    });
    return name;
  }
}
