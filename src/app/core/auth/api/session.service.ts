import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private sessionStorage = sessionStorage;

  setToken(token: string): void {
    this.sessionStorage.setItem('token', token);
  }

  getToken(): string {
    return this.sessionStorage.getItem('token');
  }

  resetToken(): void {
    this.sessionStorage.removeItem('token');
  }

  setUser(user: User): void {
    this.sessionStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(this.sessionStorage.getItem('user'));
  }

  resetUser(): void {
    this.sessionStorage.removeItem('user');
  }

  getUserId(): string {
    return this.getUser().id;
  }

  getUserEmail(): string {
    return this.getUser().email;
  }

  getUserUsername(): string {
    return this.getUser().username;
  }
}
