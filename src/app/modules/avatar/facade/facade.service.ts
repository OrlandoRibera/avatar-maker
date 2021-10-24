import { Injectable } from '@angular/core';
import { AvatarService } from '../services/avatar.service';
import { ToastrService } from 'ngx-toastr';
import {
  GetAvatarResponse,
  GetAvatarResponseData,
} from '../interfaces/avatarRequests';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AvatarOptions } from '../../../../../projects/avatar/src/lib/avatar.enum';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  constructor(
    private avatarService: AvatarService,
    private toastr: ToastrService
  ) {}

  getAll(): Observable<GetAvatarResponseData> {
    return this.avatarService.getAll();
  }

  save(avatar: AvatarOptions): Observable<GetAvatarResponse> {
    return this.avatarService.save(avatar);
  }
}
