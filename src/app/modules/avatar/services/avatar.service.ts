import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../../core/auth/api/session.service';
import { AvatarOptions } from '../../../../../projects/avatar/src/lib/avatar.enum';
import {
  GetAvatarResponse,
  GetAvatarResponseData,
} from '../interfaces/avatarRequests';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  private baseUrl = '/avatar';
  private headers = {
    headers: {
      Authorization: `bearer ${this.session.getToken()}`,
    },
  };
  constructor(private http: HttpClient, private session: SessionService) {}

  getAll(): Observable<GetAvatarResponseData> {
    return this.http.get<GetAvatarResponseData>(
      `${this.baseUrl}`,
      this.headers
    );
  }

  save(avatar: AvatarOptions): Observable<GetAvatarResponse> {
    return this.http.post<GetAvatarResponse>(
      `${this.baseUrl}/save`,
      avatar,
      this.headers
    );
  }
}
