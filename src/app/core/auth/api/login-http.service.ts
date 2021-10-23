import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import {
  LoginRequest,
  LoginResponse,
  SignUpRequest,
  SignUpResponse,
} from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginHttpService {
  private baseUrl = '/auth';
  private headers = {
    headers: {
      Authorization: `bearer ${this.session.getToken()}`,
    },
  };

  constructor(private http: HttpClient, private session: SessionService) {}

  login(userRequest: LoginRequest): Observable<LoginResponse> {
    return this.signIn(userRequest);
  }

  private signIn(userRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${this.baseUrl}/signIn`,
      { username: userRequest.username, password: userRequest.password },
      this.headers
    );
  }

  register(userRequest: SignUpRequest): Observable<SignUpResponse> {
    return this.signUp(userRequest);
  }

  private signUp(userRequest: SignUpRequest): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(
      `${this.baseUrl}/signUp`,
      {
        email: userRequest.email,
        username: userRequest.username,
        password: userRequest.password,
      },
      this.headers
    );
  }
}
