import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../core/auth/api/session.service';
import { User } from '../../../core/auth/interfaces/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: User;

  constructor(private sessionService: SessionService) {
    this.user = this.sessionService.getUser();
  }

  ngOnInit(): void {}
}
