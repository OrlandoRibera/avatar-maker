import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private userSubject = new BehaviorSubject<User>(null);
  private loadingSubject = new Subject<boolean>();

  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  setUser(user: User): void {
    this.userSubject.next(user);
  }

  getLoading(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  setLoading(isLoading: boolean): void {
    this.loadingSubject.next(isLoading);
  }
}
