import { Component } from '@angular/core';
import { SessionService } from '../../api/session.service';
import { LoginFacadeService } from '../../facade/login-facade.service';
import { LoginRequest } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoading = false;

  constructor(
    private loginFacade: LoginFacadeService,
    private sessionService: SessionService
  ) {
    const user = this.sessionService.getUser();
    if (user) {
      this.sessionService.resetToken();
      this.sessionService.resetUser();
    }
    this.loginFacade.getLoading().subscribe((value: boolean) => {
      this.isLoading = value;
    });
  }

  submit(formValue: LoginRequest, isValid: boolean): void {
    if (!isValid) {
      this.loginFacade.login(formValue);
    }
  }
}
