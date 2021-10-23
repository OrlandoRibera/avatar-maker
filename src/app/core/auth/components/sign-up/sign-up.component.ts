import { Component } from '@angular/core';
import { SessionService } from '../../api/session.service';
import { LoginFacadeService } from '../../facade/login-facade.service';
import { SignUpRequest } from '../../interfaces/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
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

  submit(formValue: SignUpRequest, isValid: boolean): void {
    if (!isValid) {
      this.loginFacade.signUp(formValue);
    }
  }
}
