import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../../facade/facade.service';
import { GetAvatarResponse } from '../../interfaces/avatarRequests';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../../../../core/auth/api/session.service';
import { AvatarOptions } from '../../../../../../projects/avatar/src/lib/avatar.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  avatars: GetAvatarResponse[] = [];

  constructor(
    private avatarFacade: FacadeService,
    private toastr: ToastrService,
    private router: Router,
    private sessionService: SessionService
  ) {
    this.avatarFacade.getAll().subscribe((response) => {
      console.log(response);
      this.avatars = response.data.reverse();
    });
  }
  ngOnInit(): void {}

  getUserId(): string {
    return this.sessionService.getUser().id;
  }

  copiarAvatar(options: AvatarOptions): void {
    this.router.navigate(['/create'], {
      queryParams: {
        avatarStyle: options.style,
        top: options.top,
        accessories: options.accessories,
        hairColor: options.hairColor,
        hatColor: options.hatColor,
        facialHair: options.facialHair,
        facialHairColor: options.facialHairColor,
        clothes: options.clothes,
        clothColor: options.clothColor,
        eyes: options.eyes,
        eyebrow: options.eyebrow,
        mouth: options.mouth,
        skin: options.skin,
        face: options.face,
        graphic: options.graphic,
      },
    });
  }
}
